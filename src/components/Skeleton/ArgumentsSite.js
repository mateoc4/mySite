import React from "react";
import "./ArgumentsSite.scss";

import * as firebase from 'firebase'




export default class ArgumentsSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: "none",
            show2: "none",
            show4: "none",
            show5: "none",
            counter1: 0,
        };
    }


    handleClick = (index) => {

    };

    render() {
        return (
            <div className="container">
                <div className="above">
                    <h1>Czy obywatele powinni miec pełny dostęp do broni </h1>
                </div>
                <div className="box">
                    <div className="pros">
                        <div className="headerTexts">
                            <div className="adder">
                                <h1 onClick={() => this.hangClick("show1")}>Argumenty Za</h1>

                                <button onClick={() => this.props.toggleVisible()}>
                                    Dodaj
                                </button>
                            </div>

                            <ul className="list" style={{ display: this.state.show1 }}>
                                {this.props.proArg.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item.value}

                                            <button
                                                onClick={(e) => {
                                                    e.target.nextElementSibling.innerText++;
                                                    firebase.database().ref('/proArg/' + item.id).set({
                                                        value: item.value,
                                                        votes: item.votes + 1
                                                    })
                                                }
                                                }>

                                                +
                                            </button>
                                            <p className="licznik">{item.votes}</p>

                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="headerTexts">
                            <h1 onClick={() => this.hangClick("show2")}>
                                Obalone Argumenty za (Mity)
                            </h1>
                            <ul style={{ display: this.state.show2 }}>
                                <li>svss</li>
                                <li>svss</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cons">
                        <div className="headerTexts">
                            <h1 onClick={() => this.hangClick("show4")}>Argumenty Przeciw</h1>

                            <button onClick={() => this.props.toggleVisible2()}>
                                Dodaj
                            </button>

                            <ul className="list" style={{ display: this.state.show4 }}>
                                {this.props.consArg.map((item, index) => {
                                    return (
                                        <li key={index}>

                                            {item.value}
                                            <button
                                                onClick={(e) => console.log('kupa')}>
                                                +
                                            </button>
                                            <p className="licznik">{item.votes}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="headerTexts">
                            <h1 onClick={() => this.hangClick("show5")}>
                                Obalone Argumenty przeciw (Mity)
                            </h1>
                            <ul style={{ display: this.state.show5 }}>
                                <li>svss</li>
                                <li>svss</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    hangClick = name => {
        this.setState({
            [name]: this.state[name] === "block" ? "none" : "block"
        });
    };

}
//////////////


/*
import React from "react";

export default class ArgumentsSite extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show1:"none",
            show2:"none",
            show3:"none",
            show4:"none",
            show5:"none",
            show6:"none",
        }
    }
    wycialem stad tam bebechy bo nie byly podtrzebne\

                                <h1>Argumenty Za</h1>
                                <ul style={{display:this.state.show1}}>
                                    <li>svss</li>
                                    <li>svss</li>
                                </ul>
                            </div>

                            <div onClick={this.handleClick2} style={headerTexts}>
                                <h1>Obalone Argumenty za (Mity)</h1>
                                <ul style={{display:this.state.show2}}>
                                    <li>svss</li>
                                    <li>svss</li>
                                </ul>
                            </div>

                            <div onClick={this.handleClick3} style={headerTexts}>

                                <h1>Argumenty Przeciw</h1>
                                <ul style={{display:this.state.show3}}>
                                    <li>svss</li>
                                    <li>svss</li>
                                </ul>
                            </div>


                        </div>
                        <div style={{backgroundColor:"pink",width: "47%", height:"600px"}} className = "cons">
                            <div onClick={this.handleClick4} style={headerTexts}>

                                <h1>Argumenty Za</h1>
                                <ul style={{display:this.state.show4}}>
                                    <li>svss</li>
                                    <li>svss</li>
                                </ul>
                            </div>

                            <div onClick={this.handleClick5} style={headerTexts}>

                                <h1>Obalone Argumenty za (Mity)</h1>
                                <ul style={{display:this.state.show5}}>
                                    <li>svss</li>
                                    <li>svss</li>
                                </ul>
                            </div>

                            <div onClick={this.handleClick6} style={headerTexts}>

                                <h1>Argumenty Przeciw</h1>
                                <ul style={{display:this.state.show6}}>
                                    <li>svss</li>
                                    <li>svss</li>
                                </ul>


    handleClick = () => {
        this.setState({
            show1: this.state.show1 ==="block" ? "none":"block" })
    }
    handleClick2 = () => {
        this.setState({
            show2: this.state.show2 ==="block" ? "none":"block" })
    }
    handleClick3 = () => {
        this.setState({
            show3: this.state.show3 ==="block" ? "none":"block" })
    }

    handleClick4 = () => {
        this.setState({
            show4: this.state.show4 ==="block" ? "none":"block" })
    }

    handleClick5 = () => {
        this.setState({
            show5: this.state.show5 ==="block" ? "none":"block" })
    }
    handleClick6 = () => {
        this.setState({
            show6: this.state.show6 ==="block" ? "none":"block" })
    }

}

 */