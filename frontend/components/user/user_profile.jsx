import React from "react";
import {Link} from "react-router-dom";
import {
    FaRegClock,
    FaRegCalendarAlt,
    FaUsers,
    FaEnvelope
} from "react-icons/fa";

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id)
    }

    render(){
        if (!Object.values(this.props.reservations).length) return null;
        if (!Object.values(this.props.restaurants).length) return null;
        const { reservations, restaurants } = this.props;
        // const style = {
        //     backgroundImage: `url(${restaurants[reservation.restaurant_id].photoURL})`,
        
        // }; 
        
        const resProfile = Object.values(reservations).map((reservation) => {
            const imgStyle = {
                backgroundImage: `url(${restaurants[reservation.restaurant_id].photoURL})`,
                height: '150px',
                width: '180px',
                backgroundSize: 'cover',
                flex: '0 0 180px',
                marginRight: '25px'
            }
            const dateString = new Date(reservation.time).toDateString();
            let minutes = new Date(reservation.time).getMinutes()
            minutes = minutes < 10 ? `${minutes}0` : minutes
            const timeString = `${new Date(reservation.time).getHours()}:${minutes}`
        
            return (
                // <p>reservation.user_id</p>
            <div className="reservation-form">
                <div key={reservation.id} className="reserved-res" className="info">
                    <div className="res-img" style={imgStyle}></div>
                    <div className="res-detail">
                        <h1>{restaurants[reservation.restaurant_id].name}</h1>
                        <div>
                            <p><FaRegCalendarAlt className="res-icon" />  {dateString}</p>
                            <p><FaRegClock className="res-icon" />  {timeString}</p>
                            <p><FaUsers className="res-icon" />  party of {reservation.number_of_party}</p> 
                        </div>
                        <div className="modify" id="profile">
                            <Link to={`/restaurants/${reservation.restaurant_id}/reservations/edit`}>modify reservation</Link>
                            <Link to={`/restaurants/${reservation.restaurant_id}/reservations/cancel`}>cancel reservation</Link>
                        </div>
                    </div>
                </div>
            </div>
    
        )});
        return(
            <div className="profile-container">
                <div className="profile-box">
                    <h1>{`${this.props.user.firstname} ${this.props.user.lastname}, your upcoming reservations: ` }</h1>
                    {resProfile}


                </div>
            </div>
        )   
    }
}

export default UserProfile;