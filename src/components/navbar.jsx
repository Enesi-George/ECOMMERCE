import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { ShoppingCart} from "phosphor-react";
import logo from "../assets/logo.png"

export const Navbar =()=>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
             <h2>Shoppyteria</h2>
            </div>
            <div className="links">                
                <Link to="/">Shop</Link>
                <Link to="/cart"> 
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    )
}