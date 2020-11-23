import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import AsanaFinder from '../apis/AsanaFinder'
import { AsanasContext } from '../context/AsanasContext'

const AsanaCard= () => {
    let history = useHistory()
    const {id} = useParams()
    const {selectedAsana, setSelectedAsana} = useContext(AsanasContext)

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

    
    return (
        <div>
     
           
        
        {/* {selectedAsana && selectedAsana.english_name} */}

    <h1>{selectedAsana.english_name} / {selectedAsana.sanskrit_name}</h1>  
    <p>{selectedAsana.notes}</p>
    <button type="submit" 
    //TODO need to figure out how to route this to the updateAsana component
    onClick={handleEdit} 
    className="btn btn-primary">Edit</button>
       
    </div> 
    
    )
}

export default AsanaCard
