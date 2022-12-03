import React from "react";
import bodyImg1 from './Гайдай21920.svg';
import bodyImg2 from './Данелия1920x 1.svg';
import bodyImg3 from './12стульев1920x 1.svg';
import bodyImg4 from './царь1920x 1.svg';
import bodyImg5 from './осенний марафон1920x 1.svg';
import bodyImg6 from './кин дзадза1920x 1.svg';
import { Link } from "react-router-dom";
import './mainPage.css';


export default function MainPage(){
    return(
        <>                       
                <div className="container ">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center p-0 " style={{fontFamily:'Roboto', color:'rgba(161, 68, 59, 1)', fontSize:'1.1rem', fontWeight:'600'}}>
                            <div className="row m-0">
                                <div className="col col-12 d-lg-block d-none text-end">
                                    Снимать комедию для меня - это вредная привычка. Вроде курения. 
                                    Курильщик, который собирается бросить курить, тоже говорит себе - это последняя сигарета, 
                                    но рука сама тянется взять новую. Особенно если вокруг курят.
                                </div>
                                <div className=" col-sm-12 mt-sm-3 mb-sm-3 mt-lg-5  justify-content-sm-center">
                                    <Link to="/Registration"><button type="button" className=" btn btn_reg">Регистрация</button></Link>
                                </div>
                            </div>
                           
                        </div>
                        <div className=" col col-md-9 col-sm-12 p-0   ">            
                            <img src={bodyImg1}  className="img-fluid" alt="/"/>
                        </div>
                    </div>
                    <div className="row mt-5 mb-4"> 
                       
                        <div className="col-6">
                            <figure className="figure">
                                <img src={bodyImg3} className="figure-img img-fluid" alt="/"/>
                                <figcaption className="figure-caption text-center" style={{fontFamily:'Roboto', color:'rgba(161, 68, 59, 1)', fontSize:'1rem'}}>Лёд тронулся, господа присяжные заседатели!</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 "> 
                            <figure className="figure">
                                <img src={bodyImg4} className="figure-img img-fluid" alt="/"/>
                                <figcaption className="figure-caption text-center" style={{fontFamily:'Roboto', color:'rgba(161, 68, 59, 1)', fontSize:'1rem'}}>Эх, Марфуша, нам ли быть в печали?</figcaption>
                            </figure>                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-9 col-sm-12 p-0">
                            <img src={bodyImg2}  class="img-fluid" alt="/"/>
                        </div>
                        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center p-0" style={{fontFamily:'Roboto', color:'rgba(161, 68, 59, 1)', fontSize:'1.1rem', fontWeight:'600'}}>
                            <div className="row m-0">
                                <div className="col-12 d-lg-block d-none text-start ">
                                    Я никогда не снимал комедии. 
                                    На моих фильмах написано «комедия», 
                                    потому, что под комедию давали больше пленки.
                                </div>
                                <div className="col-sm-12 mt-sm-3 mb-sm-3 mt-lg-5  justify-content-sm-center">                                    
                                    <Link to="/Authorization"><button type="button" className=" btn  btn_reg">Авторизация</button></Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row mt-5 mb-4">
                        <div className="col-6">
                            <figure className="figure">
                                <img src={bodyImg5} className="figure-img img-fluid" alt="/"/>
                                <figcaption className="figure-caption text-center" style={{fontFamily:'Roboto', color:'rgba(161, 68, 59, 1)', fontSize:'1rem'}}>Хорошо сидим!</figcaption>
                            </figure>
                        </div>
                        <div className="col-6 ">
                            <figure className="figure">
                                <img src={bodyImg6} className="figure-img img-fluid" alt="/"/>
                                <figcaption className="figure-caption text-center" style={{fontFamily:'Roboto', color:'rgba(161, 68, 59, 1)', fontSize:'1rem'}}>Сказано — пацакам в клетке выступать, значит, надо в клетке. Чё выпендриваетесь?</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>                          
        </>
    );

}