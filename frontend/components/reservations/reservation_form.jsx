import React from "react";
import { Link } from "react-router-dom";

class ReservationForm extends React.Component{

    constructor(props){
        super(props);
        
        this.state = this.props.reservation ? { reservationId: this.props.reservation.id} : {reservationId: null}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){

    }

    formatDate(){
        const date = new Date(this.props.search.date);
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
        const reservation = {
            reservation: {
                user_id: this.props.user.id,
                restaurant_id: this.props.match.params.id,
                number_of_party: this.props.search.party,
                time
            }
        }
    
        this.state.reservationId
        ? this.props.updateReservation(reservation)
        : this.props.createReservation(reservation)
            .then(this.setState({ 
                reservationId: Object.values(this.props.reservations)[(Object.values(this.props.reservations).length - 1)].id
            }))
    }

    render(){
        
        const user = this.props.user
        
        return(
            <div>
                {(this.state.reservationId) 
                ? (<div>
                    <p>Get excited! Your reservation is confirmed. </p>
                    </div> )
                    : <h2>You're almost done!</h2>}
                
                <div className="info">
                    <h1>{this.props.restaurantName}</h1>
                    <div>
                        <p>{this.formatDate()}</p>
                        <p>{this.props.search.time}</p>
                        <p>party of {this.props.search.party}</p> 
                        {(this.state.reservationId)
                            ? (<div>
                                <Link to={`edit`}>Modify reservation</Link>
                                {/* <button onClick={this.handleCancel}>cancel reservation</button> */}
                                {/* <Link to={`cancel`}>Cancel reservation</Link> */}
                            </div>)
                            : <div>
                                <p>{user.firstname}</p>
                                <p>{user.lastname}</p>
                                <p>{user.email}</p>

                            </div>} 
                    </div>

                    <div>
                        <input type="text" placeholder="Enter a occasion"/>
                        <input type="text" placeholder="Add a special request"/>
                    </div>
                    {(this.state.reservationId)
                        ? (null)
                        : <button onClick={this.handleClick}>Complete Reservation</button>} 
                </div>
            </div>
        )
    }

}


export default ReservationForm