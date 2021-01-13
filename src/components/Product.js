import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

class Product extends Component {
    render() {
        let products = [
            {
                id : 1,
                name : "iphone X",
                slug : "iphone",
                price : 35000000
            },
            {
                id : 2,
                name : "Samsung",
                slug : "samsung",
                price : 40000000
            },
            {
                id : 3,
                name : "Oppo",
                slug : "oppo",
                price : 60000000
            },
            {
                id : 4,
                name : "Motorola",
                slug : "motorola",
                price : 80000000
            }
        ];
        let { match } = this.props;
        let url = match.url;
        console.log(match)

        let listItems = products.map((item) => {
            return (
                <NavLink to={`${url}/${item.name}`} key={item.id}   >
                    <li className="list-group-item" >{item.name}</li>
                </NavLink>
            );
        })
        
        return (
            <div className="container">
                <h1>Category of product</h1>
                
                <div className="row">
                    <ul className="list-group">
                       {listItems} 
                    </ul>
                </div>
                <div className="row">
                    <Route path={`${url}/:a`} component={ProductDetail} />
                </div>
            </div>
        );
    }
}


export default Product;