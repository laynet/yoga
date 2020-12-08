import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import CreateNewAsana from './components/CreateNewAsana';
import { AsanasContextProvider } from './context/AsanasContext';
import AsanaDetail from './routes/AsanaDetail';
import AsanaUpdate from './routes/AsanaUpdate';
import Home from './routes/Home';


const App = () => {
    return(
    <AsanasContextProvider>
    <div className="container">
        
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/asanas/:id/update" component={AsanaUpdate}/>
            <Route exact path="/asanas/:id" component={AsanaDetail}/>
            <Route exact path="/create" component={CreateNewAsana} />
            </Switch>
        </Router>
    </div>
    </AsanasContextProvider>
    )
}

export default App;