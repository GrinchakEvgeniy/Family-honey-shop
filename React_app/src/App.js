import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./Home/Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/*<Route path='/roster' component={Roster}/>*/}
                    {/*<Route path='/schedule' component={Schedule}/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;