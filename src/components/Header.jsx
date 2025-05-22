import React, { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className="header">
          <div className="header__layer"></div>
          <div className="header__container">
            <nav className="header__nav">
              <div className="header__logo">
                <img src="/images/logo.svg" alt="logo" className=""/>
              </div>

              <div className={`lists ${isOpen ? "lists__show-menu" : ""}`}>
                <ul className="lists__links">
                  <li><a href="#" className="lists__link">Product</a></li>
                  <li><a href="#" className="lists__link">Features</a></li>
                  <li><a href="#" className="lists__link">Pricing</a></li>
                  <li className="lists__separator"></li>
                  <li><a href="#" className="lists__link lists__login">Login</a></li>
                </ul>
              </div>

            {isOpen && (
              <div className="lists__close-menu" onClick={() => setIsOpen(false)}>
                <img src="/images/icon-close.svg" alt="hamburger" />
              </div>
            )}
              
            {!isOpen && (
              <div className="lists__hamburger-menu" onClick={() => setIsOpen(true)}>
                <img src="/images/icon-hamburger.svg" alt="hamburger" />
              </div>
            )}

            </nav>
          </div>
        </header>
    )
}

export default Header; 
