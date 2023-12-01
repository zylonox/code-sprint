import React, { useEffect,useState } from 'react'
import Layout from '../components/Layout/Layout'
import Card from './../components/Layout/Card';


const Homepage = () => {
  const[laptop,setLaptop]=useState([])

  

  async function fetchLaptopList () {
    const laptopList = await fetch("http://localhost:8080/api/laptop/getAllLaptops").then(response => response.json())
    console.log(laptopList)
    setLaptop(laptopList)

    
  }
  
  useEffect(() => {
    fetchLaptopList()
  },[])

  

  return (
    <Layout>
      <div className='container'>
        <div className='row m-3'>
        {
          
          laptop.length!==0
          ? laptop.map((product)=>{
            return (
              
              <div className='col-12 col-md-6 col-lg-3'>
                <Card productName={product.productName} 
                category={product.category}  
                price={product.price}
                img={product.image}
                ram={product.ram}
                storage={product.storage} />
              </div>
              
            )

          }):<div>no data</div>


        }
        </div>
          
      </div>
      
      
    </Layout>
  )
}

export default Homepage