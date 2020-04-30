import React from "react";

class ReservationForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.reservation
    }

    componentDidMount(){

    }


    render(){
        debugger
        return(
            <div>
                <h2>You're almost done!</h2>
                <div className="info">
                    <h1>{this.props.restaurantName}</h1>
                </div>
            </div>
        )
    }
}

export default ReservationForm