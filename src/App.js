import React from 'react';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import CartPage from './components/layouts/CartPage';

export default props =>{

    return(
        <div>
            <Header />
            <CartPage />
            <Main />
        </div>
    )
}