import React, { Component } from "react";
import http from "./httpService.js";
class Result extends Component {
    state = {
        
    }
    async postData(url, obj) {
        let response = await http.post(url,obj);
        console.log(response);
        alert("Your Data Saved in Data Base");
        this.props.onRetry();
    }

    retry = (obj) => {
        this.postData("/quiz",obj);  
    }
    addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    render () {
        let { name, errorCount } = this.props;
        let d = new Date();
        let date = this.addZero(d.getDate());
        var n = this.addZero(d.getHours());
        var o = this.addZero(d.getMinutes());
        var p = this.addZero(d.getSeconds());
        let time = n+":"+o+":"+p;
        let quizJson = { name:name,time:time,date:date,errorCount:errorCount};
        return (
            <div className="container text-center">
                <h5>Your Name : {name}</h5>
                <h5>Your Wrong Score : {errorCount}</h5>
                <h6>Date : {date}</h6>
                <h6>Time : {time}</h6>         
                <button className="btn btn-primary mt-2" onClick={() => this.retry(quizJson)}>Retry</button> <br />
                       
            </div>
        )
    }
}
export default Result;