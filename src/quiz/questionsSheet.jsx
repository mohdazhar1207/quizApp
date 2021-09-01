import React, { Component } from "react";
class QuestionsSheet extends Component {
    state = {
    }

    handleClick = (option,ans) => {
        //console.log(option,ans)
        this.props.onNext(option,ans);    
    }

    render () {
        let { data, pic } = this.props;
        return (
            <div className="container text-center">
                <img src={pic} ></img> <br />
                
                    <React.Fragment>
                    <button className="btn btn-primary mt-2" onClick={() => this.handleClick(data.A,data.Ans)}>{data.A}</button> <br />
                    <button className="btn btn-primary mt-2" onClick={() => this.handleClick(data.B,data.Ans)}>{data.B}</button> <br />
                    <button className="btn btn-primary mt-2" onClick={() => this.handleClick(data.C,data.Ans)}>{data.C}</button> <br />
                    </React.Fragment>   
            </div>
        )
    }
}
export default QuestionsSheet;