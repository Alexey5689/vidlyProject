import React from "react";
import './Header.css';
import logo from './logo.svg';
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className="row">         
              <div className="col  bg-dark " style={{height:'30px'}}>
                <div className="container " style={{height:'100%', padding:'0'}}>
                    <div className="row justify-content-lg-end  justify-content-sm-end justify-content-end" style={{height:'100%', padding:'0'}}>
                        <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6  col-6   " style={{height:'100%'}}>
                          <div className="row" style={{height:'100%'}}>
                              <div className="col-12 bg-danger;"style={{padding:'0'}}>                 
                                <div id="wrap">
                                   <form action="/" autocomplete="on">
                                    <input className="srch_inp" id="search" name="search" type="text" placeholder="What're we looking for ?"></input>
                                    <input id="search_submit" value="" type="submit"></input>
                                  </form>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="col col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 " style={{paddingLeft:'0', paddingTop:"2px"}}> 
                            <button className="img_Head_Entrance" style={{paddingLeft:'0'}}>
                                <Link to="/Account"><div className="image"></div><div>Мой аккаунт</div></Link>
                            </button>
                        </div>  
                    </div>
                </div>     
              </div>
            </header> 
            <div className="container p-0 ">
              <div className="col-xxl-6 col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <nav className="navbar">
                  <div className=" col-6">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="img-fluid" alt="/"/>                      
                    </a>
                  </div>
                  <div className=" col-2  border-3 border-dark border-end ">
                    {/* <a className="nav-link active colorHead" href="/Main">
                      Главная
                    </a> */}
                    <Link to="/" className="nav-link active colorHead" >
                      Главная
                    </Link>
                  </div>
                  <div className=" col-2   border-3 border-dark border-end ">
                    {/* <a className="nav-link active colorHead" href="/NewContent">
                      Новое
                    </a> */}
                    <Link to="/NewContent" className="nav-link active colorHead" >
                      Новое
                    </Link>
                  </div>
                  <div className="col-2  ">
                    {/* <a className="nav-link active colorHead" href="/BestContent">
                      Лучшее
                    </a> */}
                    <Link to="/BestContent" className="nav-link active colorHead" >
                      Лучшее
                    </Link>
                  </div>
                </nav>
              </div>             
            </div>           
        </>
    );
}

