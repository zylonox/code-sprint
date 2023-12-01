import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/Search'


const Search = () => {
    const [values,setValues] = useSearch()
  return (
    <Layout title={"search results"}>
        <div className='container'>
            <div className='text-center'>
                <h1>Search Results</h1>
                <h6>{values?.result.lenght < 1 ? "no products formed" : `Found ${values?.results.length}`}</h6>

            </div>

        </div>


    </Layout>
  )
}

export default Search
