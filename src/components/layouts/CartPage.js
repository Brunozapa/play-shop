import { render } from "@testing-library/react";
import React from "react";
import { items } from '../games';

const closeCart = () => {
  console.log(document.getElementById('absolute'))
  document.getElementById('absolute').style = "display: none;"
}

export default cartPage => {
  const teste = 'caioHideki';
  return (
    <div>
      <div class="caio" id="absolute"></div>
      <div class="cart-page" id="cart_page">
        <div className="cart-container">

          <div className="cart-header">
            <i className="fas fa-times"></i>
            <p>{teste}</p>
          </div>

          {items.map(item => {

            if (item.quantity > 0)

              return (
                <>
                  <div className="cart-items" >

                    <img src={item.image} className="item-img" />
                    <div className="item-infos">
                      <p>{item.name}</p>
                      <p className="price">${item.price}</p>
                      <select id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <i onClick={() => closeCart()} className="fas fa-times"></i>
                  </div>
                  <div class="cart-footer">
                    <div class="final-price-box">
                      <span class="final-price-box-total">Total:</span>
                      <span class="final-price-box-price">2</span>
                    </div>
                    <button class="btn-black">Place Order</button>
                  </div>
                </>
              )
          })}
        </div>
      </div>
    </div>
  )

}
