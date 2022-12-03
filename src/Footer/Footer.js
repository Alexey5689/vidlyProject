import React from "react";
import './Footer.css';
import logo2 from './LogoFoot.svg';
export default function Footer(){
    return(
        <>  
            <footer>
                <div className="row">
                    <div className="col colorFoot">
                        <div className="container " >  
                            <div className="row align-items-center  pt-3 pb-3" >
                                <div className="col col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
                                    <a href="/"><img src={logo2}  className="img-fluid" alt="/" /></a>
                                </div>
                                <div className="col col-xl-3 col-md-6 col-md-6 col-sm-7 col-lg-4 col-xl-3 col-xxl-4 font d-flex justify-content-start ">Вдохновение за мгновение<span style={{color:'black'}}>...</span></div>
                                <div className="col col-sm-12 col-md-12 col-lg-5 col-xl-6 pr-5 mt-sm-3 mt-md-3 mt-lg-0  d-flex justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-center">
                                    <a href="https://vk.com" className="margin "><div className="img vk"></div></a>
                                    <a href="https://ok.ru/" className="margin "><div className="img ok"></div></a>
                                    <a href="https://web.telegram.org/" className="margin "><div className="img tel"></div></a>
                                    <a href="https://www.snapchat.com/en-GB" className="margin "><div className="img snap"></div></a>
                                    <a href="https://www.youtube.com/" className="margin "><div className="img you"></div></a>
                                </div>
                                
                            </div>       
                        </div>
                    </div>
                </div>
                <div className="row">         
                    <div className="col " style={{height:'30px', backgroundColor:'rgba(161, 68, 59, 1)'}}></div>
                </div>
            </footer>
             
        </>
    );
}