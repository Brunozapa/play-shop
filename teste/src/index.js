import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainSlider from './components/layouts/SingleSlider';
import Cart from './components/layouts/CartPage'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('products_container')
// );

/* ReactDOM.render(
  <MainSlider />,
  document.getElementById('carousel_container')
); */

/* ReactDOM.render(
  <Cart />,
  document.getElementById('cart_page')
);
 */