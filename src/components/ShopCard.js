import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { useState,useEffect} from 'react'
import Shop from './Shop';
import { Link } from 'react-router-dom';
function ShopCard() {
    // console.log(data);
//     const [product,setproduct]=useState('')
//  function Catogory(data){
// setproduct(data)

    // setproduct(data)


// console.log(data);
//  }
//  <ViewAllProduct result={product}/>


    
  return (
    <div className='p-5 '>

     <Container>
                
         <Row className='align-center'>
            {
            <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
                 <Card className='boxshadow' style={{ width: '18rem',marginLeft:"50px" }}>
                      <Card.Img variant="top" src="https://i.postimg.cc/d3qF33D5/image.png" />
                      <Card.Body>
                      <br/>
                        <Card.Title>Women's clothing</Card.Title>
                        <br/>
                      <Link to={'/ViewAllProduct'} > 
                      <Button 
                    variant="primary">VIEW MORE ITEM</Button>
                      </Link>
                     </Card.Body>
                    </Card>
            </Col>
            
        
            
        }
        {
            <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
            <Card  className='boxshadow' style={{ width: '18rem',marginLeft:"450px" }}>
                 <Card.Img variant="top" src="https://i.postimg.cc/qMvLXr3S/image.png" />
                 <Card.Body>
                 <br/>
                   <Card.Title>Men's clothing</Card.Title>
                   <br/>
                   
                   <Link to={'/Men'}><Button variant="primary">VIEW MORE ITEM</Button></Link>
                 </Card.Body>
               </Card>
        </Col>
        }
        </Row>
     </Container>
<Container>
        
    <Row>
    {
        <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
        <Card  className='boxshadow' style={{ width: '18rem',marginLeft:"50px"}}>
             <Card.Img variant="top" src="https://i.postimg.cc/J0GQ8cMm/image.png" />
             <Card.Body>
             <br/>
               <Card.Title>Jewelery</Card.Title>
               <br/>
              <Link to={'/Wmn'}> <Button variant="primary">VIEW MORE ITEM</Button></Link>
             </Card.Body>
           </Card>
    </Col>
    }
    {
        <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
        <Card  className='boxshadow' style={{ width: '18rem',marginLeft:"450px" }}>
             <Card.Img variant="top" src="https://i.postimg.cc/KYGBFrDV/image.png" />
             <Card.Body>
             <br/>
             <br/>
             <br/>
               <Card.Title>Electronics</Card.Title>
               <br/>
               <Link to={'/Electro'}><Button variant="primary">VIEW MORE ITEM</Button></Link>
             </Card.Body>
           </Card>
    </Col>
    }
    </Row>
     
</Container>




    </div>
  )
}

export default ShopCard