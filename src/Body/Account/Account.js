import logo2 from '../../Footer/LogoFoot.svg';
import React from "react";
import {Link} from "react-router-dom";
import UserImg from './Group 31.svg';
import './account.css';
import '../../Header/Header.css';
import '../../Footer/Footer.css';
import { Outlet } from "react-router-dom";



export default function Account(){
    return(
        <>
            <header className="row">         
              <div className="col  bg-dark " style={{height:'30px'}}>
                <div className="container" style={{height:'100%', padding:'0'}}>
                    <div className="row justify-content-lg-end  justify-content-sm-center" style={{height:'100%', padding:'0'}}>
                        <div className="col col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-7" style={{height:'100%'}}>
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
                        <div className="col col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-4 " style={{paddingLeft:'0', paddingTop:"2px"}}> 
                            <button className="img_Head_Entrance" style={{paddingLeft:'0'}}>
                                <a href="Account/"><div className="image"></div><div>Мой аккаунт</div></a>
                            </button>
                        </div>  
                    </div>
                </div>     
              </div>
            </header> 
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row mt-3  align-items-center'>
                            <div className='col col-xxl-1 col-xl-2 col-lg-2  col-sm-3 col-md-3  d-flex justify-content-end  p-0'> 
                                <img src={UserImg}  className="float-center " alt="/"/>  
                            </div>
                            <div className='col col-xxl-5  col-xl-5 col-lg-5 col-md-9 col-sm-9 d-flex'>
                                <p className='text-start me-3'>UserName</p>
                                <p className='text-start'>UserLastName</p>
                            </div>
                             <div className='col col-xxl-6  col-xl-5 col-lg-5  col-md-12 col-sm-12  d-flex justify-content-center px-5'>
                                <button className='btn bg-primary text-white'>Загрузить</button>
                            </div>
                        </div>
                    </div> 
                    <div className='row justify-content-center mt-5'>
                        <div className='col-6'>
                            <div className='row '>                                
                                <nav className="navbar navbar-expand-lg">
                                   <div className='container-fluid'>
                                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="">
                                            <span  className="navbar-toggler-icon"></span> 
                                        </button>
                                        <div  className="collapse navbar-collapse" id="navbarText">
                                            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li  className="nav-item ">                                        
                                                    <Link to="" className='nav-link active'>Видио</Link>                                                                                             
                                                </li>
                                                <li  className="nav-item ">                                                   
                                                    <Link to="Subsribes" className='nav-link active' >Подписки</Link>                                                    
                                                </li>
                                                <li  className="nav-item ">                                                  
                                                    <Link to="PlayList" className='nav-link active'>Плайлист</Link>                                                                                              
                                                </li>
                                                <li  className="nav-item ">                                                   
                                                    <Link to="History" className='nav-link active'>История</Link>                                                                                                 
                                                </li>
                                            </ul>
                                            <div id="wrap">
                                                <form action="/" autocomplete="on" >
                                                    <input className="srch_inp2" id="search" name="search" type="text" placeholder=""></input> 
                                                    <input id="search_submit2" value="" type="submit"></input>                                               
                                                </form>
                                            </div>
                                            
                                        </div>
                                   </div>                                                                                                                                   
                                </nav>                                
                            </div>                            
                        </div>                       
                    </div>                   
                </div>
            </div>



            <Outlet/>


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