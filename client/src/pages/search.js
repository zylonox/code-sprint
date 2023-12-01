import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/Search'
import Card from '../components/Layout/Card'



const Search = () => {
    const [values,setValues] = useSearch()
  return (
    <Layout title={"search results"}>
        <div className='container'>
            <div className='text-center'>
                <h1>Search Results</h1>
                <h6>{values?.results.lenght < 1 ? "no products formed" : `Found ${values?.results.length}`}</h6>
                <div className='row m-3'>
        {
          
          values.results.length!==0
          ? values.results.map((product)=>{
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

        </div>


    </Layout>
  )
}

export default Search
