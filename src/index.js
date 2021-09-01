import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import MainComponent from './laptop/leftPannelForm';
//import HelloWorld from "./components/helloworld";
//import MyCompo from "./components/myComp";
//import MyCompo1 from "./components/myComp1";
//import MyCompo2 from "./components/myComp2";
//import MyCompo3 from "./components/myComp3";
//import MyCompo4 from "./components/myComp4";
//import MyCompo5 from "./components/myComp5";
//import MyCompo6 from "./components/myComp6";
//import MyCompo7 from "./components/jsset7";
//import CountingMachine from "./components/countingMachine";
//import PhotoPage from "./components/photoPage";
//import VisitorSystem from "./components/visitorSystem";
//import PlayerSystem from "./components/playerSystem";
//import NavBarMainComponent from "./components/navbarMainComponent";
//import LibrarySystem from "./components/librarySystem";
//import Store from "./components/store";
//import MessaginApp from "./components/messagingApp";
//import MainApp1 from "./formComponents/mainApp1";
//import MainComponentApp2 from "./formComponents/mainComponentApp2";
//import HomeScreen from "./studentApp/homeScreen";
//import Product from "./formComponents/mainProductApp";
//import MainComponent from "./ticToe/mainComponent";
//import MainComponentL from "./formComponents/mainFormComponent";
//import Board from "./ticToe/board";
//import SimpleForm from "./formComponents/validateForm";
//import Board from "./pictureGame/board";
//import MainComponent from "./assignmentSet1/mainComponent";
//import MainComponent from "./assignment2/mainComponent";
//import MainComponent from "./assignment3/mainComponent";
//import MainComponent from "./JXCompany/mainComponent";
//import MainComponent from "./jobSystem/mainComponent";
//import MainComponent from "./M1-AN-A8/secA/mainComponent";
//import MainComponent from "./M1-AN-A8/secB/mainComponent";
//import MainComponent from "./M1-AN-A8/secC/mainComponent";
//import Mas from "./M1-AN-A7/secB/mas";
//import MainComponent from "./Mobiles/mainComponent";
//import Students from "./components/students";
import MainComponent from "./quiz/mainComponent";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
