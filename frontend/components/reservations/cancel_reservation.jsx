import React from "react"

class CancelReservation extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.deleteReservation(this.props.reservation.id)
    }
    render(){
        return(
            < div className = "cancel" >
                <h1>{this.props.user.firstname}, your reservation has been canceled.</h1>
            </div >
        )
    }
}

export default CancelReservation;