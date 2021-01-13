import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

const CustomLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={
            ({match}) => {
                let active = match ? 'active abc' : '';
                return (
                    <li className={`ortherClass ${active}`}>
                        <Link to={to} className="my-link">
                            {label}
                        </Link>
                    </li>
                );
            }
        } />
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <CustomLink label="Home" to="/" activeOnlyWhenExact={true}  />
                    <CustomLink label="About" to="/about" activeOnlyWhenExact={false}  />
                    <CustomLink label="Contact" to="/contact" activeOnlyWhenExact={false}  />
                </ul>
            </nav>
        );
    }
}


export default Menu;
