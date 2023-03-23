import React from 'react'
import { useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


function Wmn() {
    const [allShop,setAllShop]=useState([])
  // function to api call for datas inside json file

const shopdata=async ()=>{
  await fetch('https://fakestoreapi.com/products').then(data=>{data.json().then(result=>{
  setAllShop(result)    
  

  })
  //  console.log(allShop);
})
}
  // console.log(allShop);

useEffect(()=>{
  shopdata()
},[])
  return (
    <div className=" w-100  bg-light d-flex p-5" style={{ flexWrap: "wrap", flexDirection: "row" ,justifyContent:"space-evenly"}}>
        {
        allShop.map(item=>{
          // console.log(item)
          if (item.category=="jewelery") {
            return(
             <div className='p-5 container bg-light border border-0' style={{ width:"40%",minWidth:"250px"}}>
              
                  
                    <Card  className='boxshadow' style={{ width: '18rem',height:"430px",margin:"5px auto"}}>
            <Card.Img style={{height:"200px"}} variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              
              <Card.Text>
              Price: {item.price}
              </Card.Text>
            <Link to={`/ViewItem/${item.id}`}>  <Button variant="primary">view</Button></Link>
            </Card.Body>
          </Card>
          
             </div>
              // <img src={item.image} style={{height:"200px",width:"300px"}}></img>
            )
        
            
          }
        })
      }

    </div>
  )
}

export default Wmn