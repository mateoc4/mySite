import React from "react";
import "./Form.scss";

class Form extends React.Component {

    render() {
        return (
            <form onClick={this.props.x}>

                    <input
                        value={this.props.val}
                        onChange={this.props.hc}
                        placeholder={"dodaj argument maxymalna ilosc znaków to 140 "}
                        maxLength="140"
                    />


                    <button className="formBtn" onClick={this.props.hl}>Wyślij</button>

            </form>
        );
    }
}

export default Form;