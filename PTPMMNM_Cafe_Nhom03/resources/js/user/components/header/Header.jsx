import React from "react";
import "./Header.scss";
import "../../../../css/bootstrap.min.css";
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
const Header = () => {

    const [showLogin, setShowLogin] = React.useState(true);
    const [showShop, setShowShop] = React.useState(false);
    const [showAccount, setShowAccount] = React.useState(false);
    const [countcart, setCountCart] = React.useState("");
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                if (localStorage['cart']) {
                    let giohang = JSON.parse(localStorage.getItem('cart'));
                    setCountCart(giohang.length);
                }
                else {
                    setCountCart("0");
                }
                if (localStorage['auth_token'])
                    setShowLogin(false);
                else
                    setShowLogin(true);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();
    }, []);
    return (
        <nav className="navbar navbar-expand-lg ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/home">Mizuuu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/home" className="nav-link">Trang ch???</a></li>
                        <li className="nav-item dropdown">
                            <div onClick={() => setShowShop(!showShop)} className="nav-link dropdown-toggle" style={{ cursor: "pointer" }} >C???a h??ng</div>
                            {showShop ?
                                <div className="showShopMenu" style={{ position: "absolute" }} >
                                    <a className="dropdown-item" href="/shop">C???a h??ng</a>
                                    <a className="dropdown-item" href="/cart">Gi??? h??ng</a>
                                    <a className="dropdown-item" href="/checkout">Th??? t???c thanh to??n</a>
                                </div>
                                : null}
                            {/* <div className="dropdown-menu" >
                                <a className="dropdown-item" href="shop.html">Shop</a>
                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                <a className="dropdown-item" href="cart.html">Cart</a>
                                <a className="dropdown-item" href="checkout.html">Checkout</a> */}
                            {/* {show ?
                                    <>

                                        <a className="dropdown-item" href="shop.html">Shop</a>
                                        <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                        <a className="dropdown-item" href="cart.html">Cart</a>
                                        <a className="dropdown-item" href="checkout.html">Checkout</a>
                                    </>
                                    : null} */}

                            {/* </div> */}

                        </li>
                        <li className="nav-item"><a href="/about" className="nav-link">Th??ng tin</a></li>
                        {/* <li className="nav-item"><a href="contact.html" className="nav-link">Li??n l???c</a></li> */}
                        <li className="nav-item cta cta-colored"><a href="/cart" className="nav-link"><ShoppingCartOutlinedIcon style={{ fontSize: "18px" }} />[{countcart}]</a></li>
                        
                        {showLogin ?
                            <li className="nav-item cta cta-colored"><a href="/login" className="nav-link"><AssignmentIndOutlinedIcon style={{ fontSize: "18px", marginRight: '5px' }} />????ng nh???p</a></li>
                            :
                            <>
                                <li className="nav-item cta cta-colored"><div onClick={() => setShowAccount(!showAccount)} className="nav-link dropdown-toggle" style={{ cursor: "pointer" }} ><AssignmentIndOutlinedIcon style={{ fontSize: "18px", marginRight: '5px' }} />T??i kho???n</div></li>
                                {showAccount ?
                                    <div className="showAccount" style={{ position: "absolute" }} >
                                        <a className="dropdown-item" href="/user">Th??ng tin c?? nh??n</a>
                                        <a className="dropdown-item" href="/history">L???ch s???</a>
                                        <a className="dropdown-item" href="/changepass">?????i m???t kh???u</a>
                                        <a className="dropdown-item" href="/login">????ng xu???t </a>
                                    </div>
                                    : null}
                            </>                            
                        }

                        {/* N??y l?? sau khi ????ng nh???p m???i hi???n */}
                        
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header
