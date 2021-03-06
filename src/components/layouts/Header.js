import React from "react";
import CartPage from "./CartPage";
export default class Header extends CartPage{

    render() {
        function openCart(){
            document.getElementById(CartPage.absolute).style = "display: block;";
            document.getElementById(this.cart_page).style = "transform: translateX(0);";
            document.body.style = "overflow: hidden;";
        }
        return (
            <div>
                <header>
                    <div class="menu-bar-container">
                        {/* nav bar desktop */}
                        <nav class="navegation-bar">
                            <ul class="navegation-bar-list">
                                <a href="">Home</a>
                                <a href="">Catalog</a>
                            </ul>
                        </nav>
                        {/* <!-- nav bar mobile --> */}
                        <div class="navegation-mobile">
                            <i class="fas fa-bars"></i>
                        </div>
                        {/* <!-- logo --> */}
                        <div class="menu-bar-logo">PlayShop</div>
                        {/* <!-- icons --> */}
                        <nav class="icons-bar">
                            <a href=""><i class="fas fa-search"></i></a>
                            <a href=""><i class="fas fa-user"></i></a>
                            <a onClick={() => openCart()}><i class="fas fa-shopping-cart"></i></a>
                            {/* <!--  <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"/> --> */}
                        </nav>
                    </div>
                </header>
            </div>
        )
    }


}