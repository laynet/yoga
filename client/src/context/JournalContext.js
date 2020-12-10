import React, {useState, createContext} from 'react';

export const JournalContext = createContext();

export const JournalContextProvider = props => {
    const [journals, setJournals] = useState([])
    const [selectedJournal, setSelectedJournal] = useState()

    const addJournals = (journal) => {
        setJournals([...journals, journal])
    }
    return(
        <JournalContext.Provider value = {{journals, setJournals, addJournals, selectedJournal, setSelectedJournal}}>
            {props.children}
        </JournalContext.Provider>
    )
}

