import React from "react";
import logo2 from '../Footer/LogoFoot.svg';
import AuthorImg from '../Authorization/AuthorImg.svg';
import './authorization.css';
import {Link} from 'react-router-dom';
export default function Authorization(){
    return(
        <>
            <header className="row">         
                <div className="col  bg-dark " style={{height:'30px'}}></div>
            </header> 

            <div className="container ">
                <div className="row ">
                    <div className="col col-xxl-6 col-xl-6 col-sm-12 col-lg-12 col-md-12 p-0 ">
                        <img src={AuthorImg}  className="img-fluid" alt="/"></img>
                    </div>
                    <div className="col col-xxl-6 col-xl-6 col-sm-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center p-5 " style={{bakgroundColor:"rgba(250, 250, 250, 1)"}}>                        
                        <div className="row pl-4 px-xxl-5 px-xl-4 px-lg-3 px-md-0 px-sm-0">                            
                            <div className="col">
                                <h1 className="mb-0 fontstyle" style={{color:"rgba(161, 68, 59, 1)"}}>Авторизация</h1>
                                <form class="row needs-validation d-flex justify-content-center" novalidate>
                                    <div className="col-8 mt-4 mb-4">
                                        <input className="form-control form-control-sm  " type="text" placeholder="Адрес электронной почты"  style={{ fontFamily:'Open_sans'}}  required></input>
                                    </div>
                                    <div className="col-8  mb-4">
                                        <input className="form-control form-control-sm" type="text" placeholder="Пароль"  style={{ fontFamily:'Open_sans'}}  required></input>
                                    </div>
                                    <div className="col-12 ">
                                        <button type="submit" className=" btn btn-sm btn_reg"  style={{ fontFamily:'Open_sans'}}>Войти</button>
                                    </div>
                                    <nav className="nav">
                                        <Link className="nav-link active linkstyle" aria-current="page" to="/Registration" style={{ fontFamily:'Open_sans'}}>Рeгистрация</Link>
                                    </nav>                                    
                                </form>                                          
                            </div>
                        </div>                       
                    </div>
                    
                </div>

            </div>

            <footer>
                <div className="row">
                    <div className="col colorFoot">
                        <div className="container" >  
                            <div className="row align-items-center justify-content-center pt-3 pb-3 " >
                                <div className="col-6 d-flex justify-content-end">
                                    <a href="/"><img src={logo2} alt="/" /></a>
                                </div>
                                <div className="col-6 font d-flex justify-content-start ">Вдохновение за мгновение<span style={{color:'black'}}>...</span>.</div>
                                    
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