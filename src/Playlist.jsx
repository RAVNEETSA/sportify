import React from 'react'
import { Card, Col, Container, Row} from 'react-bootstrap'

import style from './CSS/Spotify.module.css'
import Header from './Header'
import Popular from './Popular'
export default function Playlist({item}) {
  return (
    <>
    
    <Header/>
   
    <Container className='mt-4'>
    <Row>
   {item.map((value, index) => (
                <Col>
                <Card key={index} style={{  height:'5rem',borderColor: "#121212" }}>
                    <Card.Img className={style.img} variant="top"src={value.img} />
                                     <Card.Body>
                         <Card.Text style={{color:'white'}}>
                            <h6>{value.name}</h6>
                            <p className={style.p}>{value.desc}
                             </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </Col>
                ))} 
            </Row>
</Container>





      </>
  )
}
      