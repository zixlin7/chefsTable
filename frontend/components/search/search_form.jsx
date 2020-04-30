import React from "react";


const handleChange = (field, updateSearch) => e => {
    return(updateSearch(field, e.currentTarget.value))
}

const SearchForm = props => {
    
        return(
            <div>
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