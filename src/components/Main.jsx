import React from "react";

function Main() {
    return (
        <main className="main">
          <div className="main__container">

            <div className="main__wrapper">
              <div className="main__content">
                <p className="main__subtitle"><span>New</span> Monograph Dashboard</p>
                <h1 className="main__title">Powerful insights into your team</h1>
                <p className="main__text">Project planning and time tracking <br/>for agile teams</p>
              </div>
              
              <div className="main__buttons">
                <button className="main__button">Schedule a demo</button>
                <p className="main__preview">to see a preview</p>
              </div>
            </div>

            <img src="/images/illustration-devices.svg" alt="illustration mobile and computer" className="main__image"/>
          </div>
        </main>
    )
}

 
export default Main;