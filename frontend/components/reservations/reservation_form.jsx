import React from "react";
import { Link } from "react-router-dom";

class ReservationForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.reservation 
            ? { 
                reservationId: this.props.reservation.id,
                success: false
            } 
            : {
                reservationId: null,
                success: false
            }
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
        const reservation = this.state.reservationId 
            ? {
        
                user_id: this.props.user.id,
                restaurant_id: this.props.match.params.id,
                number_of_party: this.props.search.party,
                time,
                id: this.state.reservationId 
            } : {
                reservation: {
                    user_id: this.props.user.id,
                    restaurant_id: this.props.match.params.id,
                    number_of_party: this.props.search.party,
                    time,
                }
            }
    
        this.state.reservationId
        ? this.props.updateReservation(reservation)
            .then(this.setState({success: true}))
        : this.props.createReservation(reservation)
            .then(this.setState({ success: true }))
    }

    render(){
        
        const user = this.props.user
        const imgStyle = {
            backgroundImage: `url(${this.props.restaurant.photoURL})`,
            height: '150px',
            width: '180px',
            backgroundSize: 'cover',
            flex: '0 0 180px',
            marginRight: '25px'
        }; 
        
        return(
            <div className="reservation-form">
                {(this.state.success) 
                ? (<div className="comfirm">
                    <p>Get excited! Your reservation is confirmed. </p>
                    </div> )
                    : <h2>You're almost done!</h2>}
                
                <div className="info">
                    <div className="res-img" style={imgStyle}></div>
                    <div className="res-detail">
                        <h1>{this.props.restaurant.name}</h1>
                        <div>
                            <p>{this.formatDate()}</p>
                            <p>{this.props.search.time}</p>
                            <p>party of {this.props.search.party}</p> 
                        </div>
                    </div>
                </div>

                <div> 
                    {(this.state.success)
                        ? (<div className="modify">
                            <Link to={`edit`}>Modify reservation</Link>
                            {/* <button onClick={this.handleCancel}>cancel reservation</button> */}
                            {/* <Link to={`cancel`}>Cancel reservation</Link> */}
                        </div>)
                        : <div className="user">
                            <div>
                                <span>{user.firstname}</span>
                                <span>{user.lastname}</span>
                            </div>
                            <br/>
                            <p>{user.email}</p>

                        </div>} 
                </div>

                <div className="input">
                    <input type="text" placeholder="Enter an occasion:"/>
                    <input type="text" placeholder="Add a special request:"/>
                 </div>
                    {(this.state.success)
                        ? (null)
                        : <button id="reservation-button" onClick={this.handleClick}>Complete Reservation</button>} 
            </div>
        )
    }

}


export default ReservationForm