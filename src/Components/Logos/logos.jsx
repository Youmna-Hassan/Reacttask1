import React from "react";
import logo1 from '../../../src/images/images.png'
import logo2 from '../../../src/images/sloan-logo-og.png'
import logo3 from '../../../src/images/rheem-1.svg'



export default function Logos(){



    return<>
    <div className=" container logos-container d-flex justify-content-around">
    <img className="logopic"src={logo1} alt="jo"></img>
    
    <img className="logopic"src={logo2} alt="sloan"></img>
    <img className="logo3"src={logo3} alt="rheem"></img>
    <img className="logopic"src={logo2} alt="ne"></img>
    
    </div>
    </>
}