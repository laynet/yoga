import React, {useState, createContext} from 'react';

export const AsanasContext = createContext();

export const AsanasContextProvider = props => {
    const [asanas, setAsanas] = useState([])
    const [selectedAsana, setSelectedAsana] = useState(null)

    const addAsanas = (asana) => {
        setAsanas([...asanas, asana])
    }
    return(
        <AsanasContext.Provider value = {{asanas, setAsanas, addAsanas, selectedAsana, setSelectedAsana}}>
            {props.children}
        </AsanasContext.Provider>
    )
}

