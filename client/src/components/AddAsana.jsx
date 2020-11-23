import React, { useContext, useState } from 'react'
import AsanaFinder from "../apis/AsanaFinder"
import { AsanasContext } from '../context/AsanasContext'


function AddAsana() {
    const {addAsanas} = useContext(AsanasContext)
    const [englishName, setEnglishName] = useState("")
    const [sanskritName, setSanskritName] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            // back end expects underscore in name, from end expects camelcase
            const response = await AsanaFinder.post("/", {
                english_name: englishName,
                sanskrit_name: sanskritName
            })
           
            addAsanas(response.data.data.asanas)
            
            
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div className="mb-4">
            <h1>need to turn this into a search bar i guess</h1>
          <form action="">
              <div className="form-row">
                  <div className="col">
                      <input value={englishName} onChange={e => setEnglishName(e.target.value)} type="text" className="form-control" placeholder="english name"/>
                  </div>
                  <div className="col">
                      <input value={sanskritName} onChange={e => setSanskritName(e.target.value)} type="text" className="form-control" placeholder="sanskrit name"/>
                  </div>
              
                  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add Asana</button>
              </div>
              </form>  
        </div>
    )
}

export default AddAsana
