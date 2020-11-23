import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import AsanaFinder from '../apis/AsanaFinder'
import { AsanasContext } from '../context/AsanasContext'

export const UpdateAsana = (props) => {
    const {id} = useParams()
    let history = useHistory();
    const {asanas} = useContext(AsanasContext)
    const [englishName, setEnglishName] = useState("")
    const [sanskritName, setSanskritName] = useState("")
    const [notes, setNotes] = useState("")
    
//LEFT OFF with !!!!!!!! parts not working, 

useEffect(() => {
    const fetchData = async() => {
        const response = await AsanaFinder.get(`/${id}`)
        console.log("RESPONSE DATA ",response.data.data)
        // ASANAS OR ASANA??
        setEnglishName(response.data.data.asana.english_name)
        setSanskritName(response.data.data.asana.sanskrit_name)
        setNotes(response.data.data.asana.notes)
    }
    fetchData()
}, [])

const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedAsana = await AsanaFinder.put(`/${id}`, {
        english_name: englishName,
        sanskrit_name: sanskritName,
        notes
    })
    
    history.push("/")
}
  
    return (
        <div>
           
           <form action="">
               <div className="form-group">
                   <label htmlFor="englishName">English Name</label>
                   <input value={englishName} onChange={(e) => setEnglishName(e.target.value)} id="englishName" className="form-control" type="text"/>
               </div>
               <div className="form-group">
                   <label htmlFor="sanskritName">Sanskrit Name</label>
                   <input value={sanskritName} onChange={(e) => setSanskritName(e.target.value)} id="sanskritName" className="form-control" type="text"/>
               </div>
                 {/* TODO - need to add this stuff to the db and to the detail page
                  <div className="col">
                      <select className="custom-select my-1 mr-sm-2">
                          <option disabled>mastery</option>
                          <option value="1">mastered</option>
                          <option value="2">intermediate</option>
                          <option value="3">novice</option>
                      </select>
                  </div> */}
               <div className="form-group">
                   <label htmlFor="notes">Notes</label>
                   <textarea value={notes} onChange={(e) => setNotes(e.target.value)} id="notes" className="form-control" type="text" rows="15"/>
               </div>
               <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
           </form>

        </div>
    )
}
