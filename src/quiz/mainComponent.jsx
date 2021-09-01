import React, { Component } from "react";
import QuestionsSheet from "./questionsSheet";
import Result from "./result";
import rat from "./images/rat.jpg"
import camel from "./images/camel.jpg"
import frog from "./images/frog.jpg"
import cat from "./images/cat.jpg"
import dog from "./images/dog.jpg"
import bear from "./images/bear.jpg"
import sneak from "./images/sneak.jpg"
import cow from "./images/cow.jpg";
import tiger from "./images/tiger.jpg";
import crocodial from "./images/crocodial.jpg";
import crow from "./images/crow.jpg"
import horse from "./images/horse.jpg";
import penwin from "./images/penwin.jpg";
import got from "./images/got.jpg";
import pecock from "./images/pecock.jpg";
import owl from "./images/owl.jpg";
import monkey from "./images/monkey.jpg";
import memna from "./images/memna.jpg";
import fish from "./images/fish.jpg";
import elephant from "./images/elephant.jpg";
class MainComponent extends Component{
    state = {
        view : 1,
        data :[
            {id:1,A:"rat",B:"tiger",C:"lion",Ans:"rat"},
            {id:2,A:"sneak",B:"camel",C:"lion",Ans:"camel"},
            {id:3,A:"frog",B:"tiger",C:"lion",Ans:"frog"},
            {id:4,A:"sneak",B:"cat",C:"lion",Ans:"cat"},
            {id:5,A:"dog",B:"tiger",C:"lion",Ans:"dog"},
            {id:6,A:"sneak",B:"bear",C:"lion",Ans:"bear"},
            {id:7,A:"sneak",B:"tiger",C:"dog",Ans:"sneak"},
            {id:8,A:"cow",B:"tiger",C:"lion",Ans:"cow"},
            {id:9,A:"sneak",B:"elephant",C:"tiger",Ans:"tiger"},
            {id:10,A:"sneak",B:"tiger",C:"crocodial",Ans:"crocodial"},
            {id:11,A:"sneak",B:"crow",C:"lion",Ans:"crow"},
            {id:12,A:"horse",B:"tiger",C:"lion",Ans:"horse"},
            {id:13,A:"sneak",B:"tiger",C:"penwin",Ans:"penwin"},
            {id:14,A:"got",B:"tiger",C:"lion",Ans:"got"},
            {id:15,A:"sneak",B:"tiger",C:"pecock",Ans:"pecock"},
            {id:16,A:"sneak",B:"owl",C:"lion",Ans:"owl"},
            {id:17,A:"sneak",B:"tiger",C:"monkey",Ans:"monkey"},
            {id:18,A:"memna",B:"tiger",C:"lion",Ans:"memna"},
            {id:19,A:"sneak",B:"fish",C:"lion",Ans:"fish"},
            {id:20,A:"sneak",B:"tiger",C:"elephant",Ans:"elephant"},
        ],
        pic :[rat,camel,frog,cat,dog,bear,sneak,cow,tiger,crocodial,crow,horse,penwin,got,pecock,owl,monkey,memna,fish,elephant],
        name :"",
        nextCount : 0,
        startIndex : 0,
        errorCount :0,
    }

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = {...this.state};
        s1.name = input.value
        this.setState(s1);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let s1 = {...this.state};
        if(s1.name) s1.view =2;
        else alert("Enter Name For Participating in the Quiz");
        this.setState(s1);
    }
    handleNext = (option,ans) => {
        if(option === ans){
            let s1 = {...this.state};
            if(s1.nextCount < 4){
                s1.nextCount = s1.nextCount + 1;
                s1.startIndex = this.getRndInteger(0,19)
            }
            else{
                s1.view = 3;
            }
            this.setState(s1);
        }
        else{
            let s1 = {...this.state};
            s1.errorCount = s1.errorCount + 1;
            this.setState(s1);
        }    
    }
    handleRetry = () => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.name = "";
        s1.nextCount=0;
        s1.startIndex=0;
        s1.errorCount=0;
        this.setState(s1);
    }
    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    render (){
        let { view, data, pic, startIndex, errorCount, nextCount } = this.state;
        let { name } = this.state;
        // if(nextCount === 0){
        //     startIndex = this.getRndInteger(0,19)
        // }
        return(
            <div className="container">
                {view === 1 ?
                    <React.Fragment>
                        <h2 className="text-center mt-2">Welcome to Quiz</h2>
                        <div className="row mt-4">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <div className="form-group">
                                    <h6 className="text-center">Player Name</h6>
                                    <input
                                    text="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    placeholder="Enter Player name"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-5"></div>
                            <div className="col-2 text-center">
                                <button className="btn btn-primary mt-4" onClick={this.handleSubmit}>Enter</button>
                            </div>
                            <div className="col-5"></div>
                        </div>
                    </React.Fragment>
                    :
                    view === 2 ?
                    <QuestionsSheet 
                        data={data[startIndex]}
                        pic={pic[startIndex]}
                        onNext={this.handleNext}
                    />
                    :
                    view === 3 ?
                    <Result 
                        name={name}
                        errorCount={errorCount}
                        onRetry={this.handleRetry}
                    />
                    :
                    ""
                }
            </div>
        )
    }
}
export default MainComponent;