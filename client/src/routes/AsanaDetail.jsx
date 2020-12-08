import React, { useContext, useEffect } from 'react';
import AsanaCard from '../components/AsanaCard';
import { useHistory, useParams } from 'react-router-dom';
import AsanaFinder from '../apis/AsanaFinder';
import { AsanasContext } from '../context/AsanasContext';


const AsanaDetail = () => {
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
    const handleDelete = async () => {
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
    return (
        <div>
            {selectedAsana ? 
            <AsanaCard asana={selectedAsana} onEdit={handleEdit} onDelete={handleDelete} /> : null } 
        </div>
    )
}

export default AsanaDetail





