import React, { Component } from "react";
import "./App.scss";
import * as firebase from "firebase";

import Form from "../Form/Form";
import ArgumentsSite from "../Skeleton/ArgumentsSite";

class App extends Component {
    state = {
        proArg: [],
        consArg: [],
        proMyth: [],
        consMyth: [],
        formVisible: false,
        formVisible2: false,
        value: "",
        value2: ""
    };

    componentDidMount() {
        firebase
            .database()
            .ref("/proArg")
            .on("child_added", resp => {
                const data = resp.val();
                data.id = resp.key
                this.setState({
                    proArg: [...this.state.proArg, data]
                });
            });

        firebase
            .database()
            .ref("/consArg")
            .on("child_added", resp => {
                const data = resp.val();
                this.setState({
                    consArg: [...this.state.consArg, data]
                });
            });
        firebase
            .database()
            .ref("/proMyth")
            .on("child_added", resp => {
                const data = resp.val();
                this.setState({
                    proMyth: [...this.state.proMyth, data]
                });
            });
        firebase
            .database()
            .ref("/consMyth")
            .on("child_added", resp => {
                const data = resp.val();
                this.setState({
                    consMyth: [...this.state.consMyth, data]
                });
            });
    }

    handleClick = ev => {
        ev.preventDefault();
        const obj = {
            value: this.state.value,
            votes: 0
        };
        firebase
            .database()
            .ref("/proArg")
            .push(obj);
        this.setState({
            value: ""
        });
    };

    handleClickk = ev => {
        ev.preventDefault();
        const obj = {
            value: this.state.value
        };
        firebase
            .database()
            .ref("/consArg")
            .push(obj);
        this.setState({
            value2: ""
        });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
            value2: e.target.value2
        });
    };

    toggleVisible = () => {
        this.setState({
            formVisible: !this.state.formVisible
        });
    };

    toggleVisible2 = () => {
        this.setState({
            formVisible2: !this.state.formVisible2
        });
    };



    render() {
        return (
            <>
                <ArgumentsSite
                    proArg={this.state.proArg}
                    consArg={this.state.consArg}
                    proMyth={this.state.proMyth}
                    consMyth={this.state.consMyth}
                    toggleVisible={this.toggleVisible}
                    toggleVisible2={this.toggleVisible2}
                />

                    <div className="argAdder">
                        {this.state.formVisible && (
                        <div className="App">
                            <Form
                                hl={this.handleClick}
                                hc={this.handleChange}
                                val={this.state.value}
                            />
                        </div>
                        )}
                        {this.state.formVisible2 && (
                        <div className="App">
                            <Form
                                hl={this.handleClickk}
                                hc={this.handleChange}
                                val={this.state.value2}
                            />
                        </div>
                        )}
                    </div>

            </>
        );
    }
}
export default App;