import React from 'react'
import { useSearch } from '../context/Search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
    const [values,setValues] = useSearch()
    const navigate=useNavigate()
    const handleSumbit = async(e)=>{
        e.preventDefault()
        console.log("test")
        try {
            const {data} = await axios({method: "get", url :`http://localhost:8080/api/laptop/search/${values.keyword}`})
            setValues({...values,results: data});
            navigate("/search");
        } catch (error) {
          console.log(error)
            
        }

    }
  return (
    <div>
        <form className="d-flex" role="search" onSubmit={handleSumbit}>
  <input 
  className="form-control me-2" 
  type="search" 
  placeholder="Search" 
  aria-label="Search" 
  value={values.keyword}
  onChange={(e)=>setValues({...values,keyword: e.target.value})}
  />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>

      
    </div>
  )
}

export default SearchInput
