import React, { useState , useRef} from "react";
import logo2 from '../Footer/LogoFoot.svg';
import '../Footer/Footer.css';
import RegImg from './Clint.svg';
import './registration.css';
import {Link} from 'react-router-dom';


const hostUrl = 'api/video';
function Form (){
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
    const [checkPass, setCheckPass] = useState("");
    const [checkPassErr, setCheckPassErr] = useState("");


     // Проверка полей на правильность набора
    //Имя
    const LoginHandler=(e)=>{
        setLogin(e.target.value);
        //console.log(login);
        if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
            setLoginErr("Имя не может быть меньше 3 и больше 10");           
        }else{
            setLoginErr("");
        }        
    }
    //Фамиля
    const LastNameHandler=(e)=>{
        setLastName(e.target.value);
        //console.log(lastName);
        if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
            setLastNameErr("Фамилия не может быть меньше 3 и больше 10");           
        }else{
            setLastNameErr("");
        }   
    }

    //почта
    const EmailHandler=(e)=>{
        setEmail(e.target.value);
        //console.log(email);
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
        //console.log(passWord);
        if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
            setPasswordErr("Пароль не может быть меньше 3 и больше 10");
        }
        else{
            setPasswordErr("");
        }

    }
    //подстверждение пароля
    const CheckPassHandler=(e)=>{
        setCheckPass(e.target.value);
        let check = document.getElementById("password").value;
        let pass = document.getElementById("checkPass").value;
        if(check !== pass){
            setCheckPassErr("Пароли не совпадают");
        }else{
            setCheckPassErr("");
        } 

    }
    

    const userNameRef = useRef();
    const userLastNameRef = useRef();
    const userEmailRef = useRef();
    const userPassRef = useRef();

    const hendlerSubmit=(e)=>{
        // e.preventDefault();
        
       let log = userNameRef.current.value;
       let lastName = userLastNameRef.current.value;
       const userInfo={
        name: log,
        lastName: lastName,
       }

       fetch(hostUrl,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo),
        });
       
        
    }





    return(
        <>
            <form onSubmit={hendlerSubmit} class="row needs-validation" novalidate>
                <div className="col-6">
                    <input 
                        value={login} 
                        onChange={e=>LoginHandler(e)} 
                        name="login" 
                        id="login" 
                        placeholder="Имя"
                        type="text"
                        ref={userNameRef}
                        className="form-control form-control-sm"style={{ fontFamily:'Open_sans'}}  required>
                    </input>
                    <div className="col-12  text-danger">{loginErr}</div>                                               
                </div>
                <div className="col-6">
                    <input
                        value={lastName} 
                        onChange={e=>LastNameHandler(e)}
                        ref={userLastNameRef}
                        name="lastName"
                        id="lastName"
                        type="text" 
                        placeholder="Фамилия" 
                        className="form-control form-control-sm"   style={{ fontFamily:'Open_sans'}}  required>
                    </input> 
                    <div className="col-12  text-danger">{LastNameErr}</div>    
                </div>
                <div className="col-12 mt-4 mb-4">
                    <input 
                        value ={email}
                        onChange={e=>EmailHandler(e)}
                        ref={userEmailRef}
                        name="email"
                        id="email"
                        type="text" 
                        placeholder="Адрес электронной почты" 
                        className="form-control form-control-sm" style={{ fontFamily:'Open_sans'}}  required>
                    </input>
                    <div className="col-12  text-danger">{emailErr}</div>  
                </div>
                <div className="col-6">
                    <input
                        value={passWord}
                        onChange={e=>PassHandler(e)}
                        ref={userPassRef} 
                        id = "password"
                        name = "password"
                        placeholder ="Пароль"
                        type ="password"
                        className="form-control form-control-sm"    style={{ fontFamily:'Open_sans'}}  required>
                    </input>
                    <div className="col-12  text-danger">{passwordErr}</div>  
                </div>
                <div className="col-6">
                    
                    <input
                        value={checkPass}
                        onChange={e=>CheckPassHandler(e)}
                        id ="checkPass"
                        name="checkPass"
                        type="text" 
                        placeholder="Подтверждение"
                        className="form-control form-control-sm" style={{ fontFamily:'Open_sans'}}  required>
                    </input> 
                    <div className="col-12  text-danger">{checkPassErr}</div>  
                </div>
                <div class="col-12 mt-4">
                    <button  
                                                                
                        type="submit" 
                        className=" btn btn-sm btn_reg"  
                        style={{ fontFamily:'Open_sans'}}>Зарегистрироваться
                    </button>
                    <nav className="nav">
                        <Link className="nav-link active linkstyle" aria-current="page" to="/authorization" style={{ fontFamily:'Open_sans'}}>Вход</Link>
                    </nav>   
                </div>                
            </form>
            
        </>
    );
}

 export default function Registration(){     
    return(
        <>
            <header className="row">         
                <div className="col  bg-dark " style={{height:'30px'}}></div>
            </header> 

            <div className="container ">
                <div className="row ">
                    <div className="col-xl-6 col-xxl-6 col-sm-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center p-5 " style={{bakgroundColor:"rgba(250, 250, 250, 1)"}}>
                        <div className="row pl-4 px-xxl-5 px-xl-4 px-lg-3 px-md-0 px-sm-0">
                            <div className="col">
                                <h1 className="mb-4 fontstyle" style={{color:"rgba(161, 68, 59, 1)"}}>Регистрация</h1>
                                <Form/>
                                                                         
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