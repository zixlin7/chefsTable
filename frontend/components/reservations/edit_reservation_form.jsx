import React from "react";
import SearchForm from "../search/search_form";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";

class EditReservationForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        debugger
        return(
        <div>
                hello
            <SearchForm updateSearch={this.props.updateSearch}/>
            <RestaurantsIndexItem restaurant={this.props.restaurant}
                    search={this.props.search}
                    updateSearch={this.props.updateSearch}
                    requestRestaurant={this.props.requestRestaurant}
                    reservation={this.props.reservation} />
        </div>)
    }
}

export default EditReservationForm;