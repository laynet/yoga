import React from 'react'
import AddAsana from '../components/AddAsana'
import AsanaList from '../components/AsanaList'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            {/* <AddAsana /> */}
            <AsanaList/>
        </div>
    )
}

export default Home
