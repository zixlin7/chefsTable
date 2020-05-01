import React from "react";

class ReservationForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.reservation
    }

    componentDidMount(){

    }

    formatDate(){
        const date = new Date(this.state.date);
        return date.toDateString();
    }
    


    render(){
        const user = this.props.user
        
        return(
            <div>
                <h2>You're almost done!</h2>
                <div className="info">
                    <h1>{this.props.restaurantName}</h1>
                    <div>
                        <p>{this.formatDate()}</p>
                        <p>{this.state.time}</p>
                        <p>{this.state.party}</p>  
                    </div>
                    <div>
                        <p>{user.firstname}</p>
                        <p>{user.lastname}</p>
                        <p>{user.email}</p>
                        
                    </div>

                    <div>
                        <input type="text" placeholder="Enter a occasion"/>
                        <input type="text" placeholder="Add a special request"/>
                    </div>
                    <button>Complete Reservation</button>
                </div>
            </div>
        )
    }
}

export default ReservationForm