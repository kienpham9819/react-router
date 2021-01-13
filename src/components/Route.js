import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Product from './Product';
 
const routes = [
    {
        path : '/',
        exact  : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact  : false,
        main : () => <About />
    },
    {
        path : '/contact',
        exact  : false,
        main : () => <Contact />
    },
    {
        path : '/product',
        exact  : false,
        main : ({match}) => <Product match={match}/>
    },
    {
        path : '',
        exact  : false,
        main : () => <NotFound />
    }
];


export default routes;