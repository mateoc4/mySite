import React from "react";
import "./pies.scss";

export default class Appp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    buttonClick () {
        this.setState({open: !this.state.open});
    }

    render () {
        const bodyText = "Hello World";
        const buttonName = "Click";

        return (
            <Button
                buttonClick={this.buttonClick}
                open={this.state.open}
                bodyText={bodyText}
                buttonName={buttonName}
            />
        );
    }
}

class Modal extends React.Component {

    render () {
        return (
            <div
                className={this.props.open
                    ? "inner-modal inner-modal-open"
                    : "inner-modal"}
            >
                <Content
                    open={this.props.open}
                    bodyText={this.props.bodyText}
                    buttonClick={this.props.buttonClick}
                />
            </div>
        );
    }
}

class Content extends React.Component {
    render () {
        return (
            <div
                className={this.props.open
                    ? "content-wrapper content-open"
                    : "content-wrapper"}
            >
                <i className="fa fa-times-circle"
                   onClick={this.props.buttonClick}
                ></i>
                <p className="modal-content">
                    {this.props.bodyText}
                </p>
            </div>
        );
    }
}

class Button extends React.Component {    render () {
        return (
            <div>
                <button
                    className="button"
                    onClick={this.props.buttonClick}
                    open={this.props.open}
                > {this.props.buttonName}
                </button>
                <Modal
                    open={this.props.open}
                    buttonClick={this.props.buttonClick}
                    bodyText={this.props.bodyText}
                />
            </div>
        );
    }
}

