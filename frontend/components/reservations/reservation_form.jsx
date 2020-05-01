import React from "react";

class ReservationForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.reservation
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){

    }

    formatDate(){
        const date = new Date(this.state.date);
        return date.toDateString();
    }
    
    combineDateTime(){
        const str = `${this.props.search.date}T${this.props.search.time}:00`;
        const date = new Date(str)
        const day = date.getUTCDate();
        const month = date.getUTCMonth();
        const year = date.getUTCFullYear();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const UTCTime = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;
        return UTCTime;

    }

    handleClick(e){
        e.preventDefault();
        const time = this.combineDateTime()
        this.props.action({reservation: {
            user_id: this.state.user_id,
            restaurant_id: this.state.restaurant_id,
            number_of_party: this.state.number_of_party,
            time
        }});
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
                    <button onClick={this.handleClick}>Complete Reservation</button>
                </div>
            </div>
        )
    }
}

export default ReservationForm