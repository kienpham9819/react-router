import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import routes from './components/Route';

class App extends Component {
    showContent = (routes) => {
        let result = "";
        if(routes.length > 0) {
            result = routes.map((route) => {
                return (
                    <Route path={route.path} exact={route.exact} component={route.main} />
                );
            });
        }
        
        return result;  
    }

    render() {
        return (
            <Router>
                <div className="App">
                {/* Menu */}
                    <Menu />
                {/* Content */}
                <Switch>
                    {this.showContent(routes)}
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;
