import React, { useState } from "react";
import logo2 from '../Footer/LogoFoot.svg';
import '../Footer/Footer.css';
import RegImg from './Clint.svg';
import './registration.css';
 export default function Registration(){
    // Валидация "Имя"
    const [login, setLogin] = useState("");
    const [loginErr, setLoginErr]=useState("");
    // Валидация "фамилия"
    const [lastName, setLastName] =useState("");
    const [LastNameErr, setLastNameErr]=useState("");
    //Валидация почтовый адрес
    const [email, setEmail]=useState("");
    const [emailErr, setEmailErr]=useState("");
    //валидация пароля
    const [passWord, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("")
    //проверка пароля
    const [checkPass, setCheckPass] = ("");
    const [checkPassErr, setCheckPassErr] = ("");


    // Проверка полей на правильность набора
    //Имя
    const loginHandler=(e)=>{
        setLogin(e.target.value);
        if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
            setLoginErr("Имя не может быть меньше 3 и больше 10");           
        }else{
            setLoginErr("");
        }        
    }
    //Фамиля
    const LastNameHandler=(e)=>{
        setLastName(e.target.value);
        if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
            setLastNameErr("Фамилия не может быть меньше 3 и больше 10");           
        }else{
            setLastNameErr("");
        }   
    }

    //почта
    const EmailHandler=(e)=>{
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLocaleLowerCase()) && e.target.value !==""){
            setEmailErr("Некорректный email");
        }else{
            setEmailErr('');
        }
    }
    //пароль
    const PassHandler=(e)=>{
        setPassword(e.target.value); 
        if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
            setPasswordErr("Пароль не может быть меньше 3 и больше 10");
        }
        else{
            setPasswordErr("");
        }

    }

    const checkPassHandler =(e)=>{
        setCheckPass(e.terget.value);
        let pass = document.getElementById("password");
        if(checkPass !== pass){
            setCheckPassErr("Пароли не совпадают");
        }else{
            setCheckPassErr("");
        }
        
    }




    const hendlerSubmit=(e)=>{
        e.preventDefault();

    }
    

    
    return(
        <>
            <header className="row">         
                <div className="col  bg-dark " style={{height:'30px'}}></div>
            </header> 

            <div className="container ">
                <div className="row ">
                    <div className="col-xl-6 col-xxl-6 col-sm-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center p-5 " style={{bakgroundColor:"rgba(250, 250, 250, 1)"}}>
                        <div className="row pl-4 px-xxl-5 px-xl-4 px-lg-3 px-md-0 px-sm-0">
                            <div className="col ">
                                <h1 className="mb-4 fontstyle" style={{color:"rgba(161, 68, 59, 1)"}}>Регистрация</h1>
                                <form onSubmit={hendlerSubmit} class="row needs-validation" novalidate>
                                    <div className="col-6">
                                        <input 
                                               value={login} 
                                               onChange={e=>loginHandler(e)} 
                                               name="login" 
                                               id="login" 
                                               placeholder="Имя"
                                               type="text"
                                               className="form-control form-control-sm"style={{ fontFamily:'Open_sans'}}  required></input>
                                    </div>
                                    <div className="col-6">
                                        <input
                                            value={lastName} 
                                            onChange={e=>LastNameHandler(e)}
                                            name="lastName"
                                            id="lastName"
                                            type="text" 
                                            placeholder="Фамилия" 
                                            className="form-control form-control-sm"   style={{ fontFamily:'Open_sans'}}  required></input>   
                                    </div>
                                     <div className="col-12 mt-4 mb-4">
                                        <input 
                                            value ={email}
                                            onChange={e=>EmailHandler(e)}
                                            name="email"
                                            id="email"
                                            type="text" 
                                            placeholder="Адрес электронной почты" 
                                            className="form-control form-control-sm" style={{ fontFamily:'Open_sans'}}  required></input>
                                    </div>
                                    <div className="col-6">
                                        <input
                                            value={passWord}
                                            onChange={e=>PassHandler(e)} 
                                            id = "password"
                                            name = "password"
                                            placeholder ="Пароль"
                                            type ="password"
                                            className="form-control form-control-sm"    style={{ fontFamily:'Open_sans'}}  required></input>
                                    </div>
                                    <div className="col-6">
                                        <input
                                            value={checkPass}
                                            onChange={e=>checkPassHandler(e)}
                                            id ="checkPass"
                                            name="checkPass"
                                            type="text" 
                                            placeholder="Подтверждение"
                                            className="form-control form-control-sm" style={{ fontFamily:'Open_sans'}}  required></input>   
                                    </div>
                                    <div class="col-12 mt-4">
                                        <button type="submit" className=" btn btn-sm btn_reg"  style={{ fontFamily:'Open_sans'}}>Зарегистрироваться</button>
                                    </div>
                                    <nav className="nav">
                                        <a className="nav-link active linkstyle" aria-current="page" href="/Authorization" style={{ fontFamily:'Open_sans'}}>Вход</a>
                                    </nav>                                    
                                </form> 
                                <div className="col-12 bg-danger text-light">{loginErr}{LastNameErr}{emailErr}{passwordErr}{checkPassErr}</div>                                         
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-sm-12 col-lg-12 col-md-12 p-0">
                        <img src={RegImg}  className="img-fluid" alt="/"></img>
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