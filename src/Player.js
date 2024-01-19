import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Player = ({ name, team, nationality, jerseyNumber, age,image, imageUrl }) => {
  return (
    <>
    {/* card template to be filled with players informations*/ }
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ backgroundColor:'transparent',backgroundImage: "url('https://pbs.twimg.com/media/FXrax5-UUAEDJiA.png')",backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',justifyContent:'space-around',color: '#806C00',border:'0' ,width: '18rem',height:'500px' ,marginRight:'15px',marginLeft:'22px'}}>
            <Card.Img variant="top" src={imageUrl} alt={name} style={{width:'180px',marginTop:'80px',marginLeft:'55px'}}/>
            <Card.Body>
                <Card.Title style={{textAlign:'center',borderBottom: '1px solid #806C00',fontWeight:'700',fontFamily:'Oswald',fontSize:'23px'}}>{name}</Card.Title>
                <Card.Text style={{marginLeft:'25px'}}>
                <label style={{fontWeight:'500'}}>Nationality:</label> 
                <Card.Img variant="top" src={image} alt={name} style={{width:'25px', marginLeft:'8px',borderRadius:'0',marginBottom:'3px'}}/><br />
                <label style={{fontWeight:'500'}}>Team:</label> {team} <br />
                <label style={{fontWeight:'500'}}>Jersey Number:</label> {jerseyNumber}<br />
                <label style={{fontWeight:'500'}}>Age:</label> {age}<br />
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
    </>
  );
};

export default Player;
