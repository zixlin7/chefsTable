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
       
        return(
            <div>
                hello
                {Object.values(reservations).map(reservation => (
                    // <p>reservation.user_id</p>
                    <div>
                        <li>{restaurants[reservation.restaurant_id].name}</li>
                        {/* <img src=/> */}
                    </div>
                ))}
            </div>
        )
    }
}

export default UserProfile;