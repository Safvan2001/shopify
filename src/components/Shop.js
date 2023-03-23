import React from 'react'
import { useState,useEffect} from 'react'
import ShopCard from './ShopCard'
import ViewItem from './ViewItem'

function Shop() {
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
   
    <div>
                <ShopCard/>
{
    // allShop.map(item=>(
    //      <ViewItem data={item}/>
    //   ))

    }
    </div>
  )
}

export default Shop