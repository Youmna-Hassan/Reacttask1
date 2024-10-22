import React from "react";

export default function Connect(){




    return<>
    <section className=" home py-5 container">
        <div className="row" >
            <div className="col-md-9">
                <h2 className="title"> Connect,Innovate & Transform</h2>
                <p className="content"> connect to your devices,innovate with precision, 
                    <br/>and tranform your technology
                    with our advanced<br/> solutions and electric components
                </p>
                <button className="btn btn-primary"> Sign Up for free</button>
               
            </div>

            <div className="col-md-3">

                <div className="transform">
                    <div className=" mx-3 d-flex justify-content-between icons">
                       
                        <span>
                        <i class="fa-solid fa-window-minimize"></i>
                        </span>
                        
                       <span>

                        <i class=" mx-2 fa-solid fa-gear"></i>
                        <i class="fa-regular fa-window-maximize"></i>
                        </span>
                    
                    </div>
                    <div className="d-flex justify-content-center" > 
                        <h6> Next Transform</h6> 
                    </div>

                    <div className="lgcircle">
                        <div className="smcircle"></div>
                    
                      <h3 className="number text-center"> 74 </h3>
                     <br/>
                      <div className=" d-flex justify-content-around plus-minus">
                    <i class="fa-solid fa-plus"></i>
                 <i class="fa-solid fa-minus"></i>

                        </div>
                       
                    </div>
                    
                    <div className=" info d-flex justify-content-between">
                        <p> info 1</p>
                        <p> info 2</p>
                    </div>
                    <div className="rate d-flex justify-content-between">
                        <p> 24%</p>
                        <p> 44%</p>
                    </div>

                    <div className="items d-flex justify-content-around">
                    <i class="fa-regular fa-file"></i>
                    <i class="fa-solid fa-paperclip"></i>
                    <i class="fa-regular fa-file"></i>
                    <i class="fa-solid fa-paperclip"></i>

                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    
    </>
}