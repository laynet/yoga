import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import AsanaFinder from '../apis/AsanaFinder'
import { AsanasContext } from '../context/AsanasContext'


const AsanaList = (props) => {
    const {asanas, setAsanas} = useContext(AsanasContext)
   
    let history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await AsanaFinder.get("/")
                setAsanas(response.data.data.asanas)
            }catch(err){
               
            }
        }
        fetchData()
      
    },[])

  

    // const handleUpdate = async (e, id) => {
    //     e.stopPropagation()
    //     history.push(`/asanas/${id}/update`)
    // }

    // const handleDelete = async (e, id) => {
    //     e.stopPropagation()
    //     try{
    //        const response = await AsanaFinder.delete(`/${id}`)
    //        setAsanas(asanas.filter(asana => {
    //            return asana.id !== id
    //        }))
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    const handleAsanaSelect = (id) => {
        history.push(`/asanas/${id}`)
    }

    function handleAdd() {
        history.push("/create");
      }

   

    return (
      
        
       <div>
           <div className="row justify-content-center">
             <button type="button" onClick={handleAdd} className="btn btn-primary btn-lg">
          Add Asana
        </button>
        </div>
        <div className="list-group">
          
           <table className="table table-hover table-dark">
               <thead className="text-center">Asanas</thead>
            <thead>
               <tr className="bg-primary">
                   <th scope="col">english </th>
                   <th scope="col">sanskrit</th>
                   {/* <th scope="col">edit</th>
                   <th scope="col">delete</th> */}
               </tr>
            </thead>
           
           <tbody>
               {asanas && asanas.map((asana) => {
    
                   return(
                       
                 
                   
                  <tr onClick={() => handleAsanaSelect(asana.id)} key={asana.id}>
                      <td>{asana.english_name}</td>
                      <td>{asana.sanskrit_name}</td>
                      {/* <td><button onClick={(e) => handleUpdate(e, asana.id)}  className="btn btn-warning">edit</button></td> */}
                      {/* <td><button onClick={(e) => handleDelete(e, asana.id)} className="btn btn-danger">delete</button></td> */}
                  </tr> 
                 
                   )
                  
               })}
               {/* <tr>
                   <td>warrior 1</td>
                   <td>virabadrasana I</td>
                   <td><button className="btn btn-warning">update</button></td>
                   <td><button className="btn btn-danger">delete</button></td>
               </tr>
               <tr>
                   <td>warrior 1</td>
                   <td>virabadrasana I</td>
                   <td><button className="btn btn-warning">update</button></td>
                   <td><button className="btn btn-danger">delete</button></td>
               </tr> */}
           </tbody>
           </table> 
        </div>
        </div>
    )
}

export default AsanaList
