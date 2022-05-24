import React, {useEffect, useState} from 'react';
import "./Box.css";
import { Card, Form, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';


function TCard() {
    useEffect( () => {
        fetchItems();
    }, []);

    var [items, setItems] = useState([]);
    const [nl,setNl] = useState(true);
    const [al,setAl] = useState(true);
    const [east,setE] = useState(true);
    const [west,setW] = useState(true);
    const [central,setC] = useState(true);
    const [filter,setFilter] = useState(2);

    const fetchItems = async () => {
        const data = await fetch('https://young-hamlet-38216.herokuapp.com/http://mlb-data.us-e2.cloudhub.io/api/teams');
        const items = await data.json();
        setItems(items);
    };

    const renderCard = (card, index) => {
        return (
           <Link to={`/Players/${card.id}`}>
            <Card key={index} className="box">
              <Card.Img className="img" variant="top" src={card.logo} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          );
    }

    items = (nl === true) ? items : items.filter(item => !(item.division.includes("National")))
    items = (al === true) ? items : items.filter(item => !(item.division.includes("American")))

    items = (east === true) ? items : items.filter(item => !(item.division.includes("East")))
    items = (west === true) ? items : items.filter(item => !(item.division.includes("West")))
    items = (central === true) ? items : items.filter(item => !(item.division.includes("Central")))
    items = items.sort((a,b)=> ((a.division.split(' ')[filter]) > (b.division.split(' ')[filter])) ? 1 : -1)

    console.log(filter);
    return <div className="grid">
          
          <Card className="box">
              <Card.Body>
                <Card.Title>
                <Dropdown >
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setFilter(2)}>Division</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setFilter(0)}>League</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="AL"
                    value="true"
                    defaultChecked="true"
                    onChange={()=>setAl(!al)} 
                  />
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="NL"
                    value="true"
                    defaultChecked="true"
                    onChange={()=>setNl(!nl)} 
                  />
                </Form>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="East"
                    value="true"
                    defaultChecked="true"
                    onChange={()=>setE(!east)} 
                  />
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="West"
                    value="true"
                    defaultChecked="true"
                    onChange={()=>setW(!west)} 
                  />
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Central"
                    value="true"
                    defaultChecked="true"
                    onChange={()=>setC(!central)}
                  />
                </Form>
                </Card.Title>
              </Card.Body>
            </Card>

            
      {items.map(renderCard)}

      </div>;
 
    
}

export default TCard;