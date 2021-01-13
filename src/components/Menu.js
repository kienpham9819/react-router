import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

const listMenu = [
    {
        label : 'Home',
        to : '/',
        exact : true
    },
    {
        label : 'About',
        to : '/about',
        exact : false
    },
    {
        label : 'Contact',
        to : '/contact',
        exact : false
    },
    {
        label : 'Product',
        to : '/product',
        exact : false
    }
];
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
    showMenu = (listMenu) => {
        let result = null;
        if(listMenu.length > 0) {
            result = listMenu.map((menu, index) => {
                return <CustomLink 
                    key={index}
                    label={menu.label} 
                    to={menu.to} 
                    activeOnlyWhenExact={menu.exact} />
            });
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(listMenu)}
                </ul>
            </nav>
        );
    }
}


export default Menu;
