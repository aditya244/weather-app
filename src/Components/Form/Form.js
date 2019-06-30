import React from 'react';
import '../../App.css';

const Form = (props) => {
        return(
            <div className="Form" onSubmit={props.weather}>
                <p className="heading"><strong>Form Component </strong> </p>
                <form >
                    <input type ="text" name="city" className= "input_style" placeholder="City..."></input>
                    <input type="text" name="country" className= "input_style" placeholder="Country..."></input>
                    <p>
                        <button className= "button_style">Get Weather Conditions</button>
                    </p>
                </form>
            </div>
        )
    };

export default Form;