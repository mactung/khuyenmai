import React from 'react';
import Header from './components/Header';
import Discount from './Pages/Discount';
import Voucher from './Pages/Voucher';
import Home from './Pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
function App() {
    return (
        <div className="App" style={{backgroundColor: '#f3f3f3f3', textAlign:'center'}}>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/discount">
                        <Discount/>
                    </Route>
                    <Route path="/voucher">
                        <Voucher></Voucher>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            
            </Router>
            
        </div>
    );
}

export default App;
