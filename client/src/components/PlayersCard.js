import React, {useEffect, useState} from 'react';
import "./Box.css";
import { Card } from "react-bootstrap";
import {Link, useParams} from 'react-router-dom';

function PlayersCard() {
    useEffect( () => {
        fetchItems();
    }, []);
    const { team_id } = useParams();

    console.log(team_id);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://young-hamlet-38216.herokuapp.com/http://mlb-data.us-e2.cloudhub.io/api/teams/'+team_id+'/players');
        const items = await data.json();
        setItems(items);
    };

    const renderCard = (card, index) => {
      console.log(items);
        return (
          <Link to={`/Player/${card.id}`}>

            <Card style={{ width: "18rem" }} key={index} className="box">
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
              </Card.Body>
            </Card>
            </Link>

          );
    }

    return <div className="grid">{items.map(renderCard)}</div>;
 
    
}

export default PlayersCard;