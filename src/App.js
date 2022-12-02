import React from "react";
import './App.css';
import {BrowserRouter,  Routes,  Route} from "react-router-dom";
import Layout from './Vidly/Layout.js';
import Registration from './Registration/registration.js';
import Authorization from './Authorization/Authorization.js';
import MainPage from './Body/mainPage/MainPage.js';
import TheBest from './Body/TheBest/TheBest.js';
import NewContent from './Body/NewContent/newContent.js';
import NotFound from './Body/notFound/notFound.js';
import Account from './Body/Account/Account.js';
import Video from "./Body/Account/AccountPages/Video.js";
import Subscr from "./Body/Account/AccountPages/Subscr.js";
import History from "./Body/Account/AccountPages/History.js";
import PlayList from "./Body/Account/AccountPages/PlayList.js";
function App() {
  return (
  

    <div className="App"> 
       
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>} />
                <Route path="BestContent" element={<TheBest/>} />
                <Route path="NewContent" element={<NewContent/>} />
              </Route>
                <Route path="/Account" element={<Account/>}>
                  <Route index element={<Video/>} />
                  <Route path="Subsribes" element={<Subscr/>}/>
                  <Route path="PlayList" element = {<PlayList/>}/>
                  <Route path="History" element={<History/>} />
                </Route>
                
                
              <Route path="registration/" element={<Registration/>} />
              <Route path="authorization/" element={<Authorization/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        
        
          
    </div>
  );
}

export default App;
