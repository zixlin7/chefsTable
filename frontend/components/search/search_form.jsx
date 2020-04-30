import React from "react";
import produceTimeSlots from "../../util/time_slots_util";


const handleChange = (field, updateSearch) => e => {
    return(updateSearch(field, e.currentTarget.value))
}


const getDate = () =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}


const SearchForm = props => {
    
        return(

            <div>

                <input defaultValue={getDate()}type="date" id="date"
                    onChange={handleChange("date", props.updateSearch)}/>
                <select id="country" 
                onChange={handleChange("country", props.updateSearch)}
                defaultValue="US">
                    <option value="US">US</option>
                    <option value="Mexico">Mexico</option>
                </select>
            </div>
        )
    
}

export default SearchForm;