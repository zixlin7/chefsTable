import React from "react";
import SearchForm from "../search/search_form";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";
import ReservationForm from "./reservation_form";

class EditReservationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {load: false}
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        this.setState({load: true});
    }

    render(){
        
        return(
        <div>
            {!this.state.load
            ?(<div>
                <div className="edit-search">
                    <SearchForm updateSearch={this.props.updateSearch}/>
                </div>
                <RestaurantsIndexItem restaurant={this.props.restaurant}
                        search={this.props.search}
                        updateSearch={this.props.updateSearch}
                        requestRestaurant={this.props.requestRestaurant}
                        reservation={this.props.reservation} 
                        toggleState={this.toggleState}/>
             </div>)
            :
                <ReservationForm user={this.props.user}
                            restaurant={this.props.restaurant}
                        search={this.props.search}
                        reservation={this.props.reservation}
                        updateReservation={this.props.updateReservation}
                        match={this.props.match}
                        />
            }
        </div>)
    }
}

export default EditReservationForm;