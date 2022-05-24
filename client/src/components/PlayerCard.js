import React, {useEffect, useState} from 'react';
import "./Box.css";
import { Carousel, Table } from "react-bootstrap";
import {useParams} from 'react-router-dom';

function PlayerCard() {
    useEffect( () => {
        fetchItems();
    }, []);
    const { player_id } = useParams();

    
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://young-hamlet-38216.herokuapp.com/http://mlb-data.us-e2.cloudhub.io/api/player/'+player_id);
        const items = await data.json();
        setItems(items);
    };

    const renderCard = (card, index) => {
        
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Photo</td>
                        <td><img
                            src={card.picture}
                            width={60}
                            alt='Player'
                            />
                    </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{card.firstName} {card.lastName}</td>
                    </tr>

                    <tr>
                        <td>Position</td>
                        <td>{card.primaryPosition}</td>
                    </tr>

                    <tr>
                        <td>Bats</td>
                        <td>{card.batSide}</td>
                    </tr>

                    <tr>
                        <td>Throws</td>
                        <td>{card.throwSide}</td>
                    </tr>

                    <tr>
                        <td>Number</td>
                        <td>{card.number}</td>
                    </tr>

                    <tr>
                        <td>Birth City</td>
                        <td>{card.birthCity}, {card.birthStateProvince}, {card.birthCountry} </td>
                    </tr>
                    
                </tbody>
                </Table>
          );
    }

    var list = [items]
    return <div className="grid">{(list).map(renderCard)}</div>;
 
    
}

export default PlayerCard;