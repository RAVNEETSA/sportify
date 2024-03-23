import React from 'react'
import style from './CSS/Spotify.module.css'
import Playlist from './Playlist'

export default function Popular() {
  return (
    <>
   <Container className='mt-4'>
    <Row>
   {item.map((value, index) => (
                <Col>
                <Card key={index} style={{  height:'5rem',borderColor: "#121212" }}>
                    <Card.Img className={style.Arijit} variant="top"src={value.png} />
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
  
    
    
    
    
    
    
    
    
    
    
    
    
  