import React from "react";

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('%c user profile', 'color: red');
        this.props.fetchUser(this.props.user.id)
    }

    render(){
        const { reservations, restaurants } = this.props;
        if (!this.props.reservations.length) return null;
        // const style = {
        //     backgroundImage: `url(${restaurants[reservation.restaurant_id].photoURL})`,
        
        // }; 
        
        const userProfile = Object.values(reservations).map((reservation) => {
            const imgStyle = {
                backgroundImage: `url(${restaurants[reservation.restaurant_id].photoURL})`,
                height: '150px',
                width: '180px',
                backgroundSize: 'cover',
                flex: '0 0 180px',
                marginRight: '25px'
            }
            return (
                // <p>reservation.user_id</p>
                <div>
                    <li key={reservation.id}>{restaurants[reservation.restaurant_id].name}</li>
                    <div className="reservation-img" style={imgStyle}></div>
                </div>
        )});
        return(
            <div>
                {userProfile}
            </div>
        )
    }
}

export default UserProfile;