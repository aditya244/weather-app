import React, { Component } from 'react';

class Weather extends Component{
    render() {
        return(
            <div className="Weather">
                <p className="heading"> <strong>Weather Details</strong> </p>
                {
                    this.props.count && this.props.city && <p className="text"> Location: <span>   
                        {this.props.city}, {this.props.count}
                    </span></p>
                }
                {
                    this.props.temp && <p className="text">Tempreture : {this.props.temp}</p>
                }
                {
                    this.props.humid && <p className="text">Humidity : {this.props.humid}</p> 
                }
                {
                    this.props.des &&  <p className="text">Conditions : {this.props.des}</p>
                }
                {
                    this.props.error && <p className="text">{this.props.error}</p>
                }

                <p>{this.props.errorMessage}</p>
            </div>
        )
    };
};

export default Weather;