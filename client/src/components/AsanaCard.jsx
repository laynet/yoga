import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import AsanaFinder from '../apis/AsanaFinder'
import { AsanasContext } from '../context/AsanasContext'

const AsanaCard= () => {
    let history = useHistory()
    const {id} = useParams()
    const {selectedAsana, setSelectedAsana} = useContext(AsanasContext)
    const {asanas, setAsanas} = useContext(AsanasContext)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await AsanaFinder.get(`/${id}`)
                setSelectedAsana(response.data.data.asana)
            }catch(err){
                console.log(err)
            }
           
        }
        fetchData()
    }, [])

    function handleEdit(){
        history.push(`/asanas/${id}/update`)
    }
    const handleDelete = async (e) => {
        e.stopPropagation()
        try{
           const response = await AsanaFinder.delete(`/${id}`)
           setAsanas(asanas.filter(asana => {
               return asana.id !== id
           }))
        }catch(err){
            console.log(err)
        }
        history.push("/")
    }

    
    return selectedAsana ? (
        <div>
        {selectedAsana.english_name}

        <h1>{selectedAsana.english_name} / {selectedAsana.sanskrit_name}</h1>  
        <p>{selectedAsana.notes}</p>
        <button type="submit" onClick={handleEdit} className="btn btn-primary">Edit</button>
        <button onClick={(e) => handleDelete(e)} className="btn btn-danger">delete</button>
       
    </div> 
    
    ) : null;
}

export default AsanaCard
