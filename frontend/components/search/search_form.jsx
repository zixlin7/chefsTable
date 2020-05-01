import React from "react";
import getDate from "../../util/date_util";



const handleChange = (field, updateSearch) => e => {
    return(updateSearch(field, e.currentTarget.value))
}


// const getDate = () =>{
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();

//     today = mm + '/' + dd + '/' + yyyy;
//     return today;
// }

const getTimeSlots = ( ) => {
    let openTime = 15
    let closeTime = 23
    const timeSlots = [];
    while (openTime < closeTime) {
        openTime++;
        timeSlots.push(openTime);
    }
    const full = timeSlots.map(time => {
        return time < 10 ? `0${time}:00` : `${time}:00`
    })

    const half = timeSlots.map((time) => {
        return time < 10 ? `0${time}:30` : `${time}:30`;
    });

    return [...full, ...half].sort();
}

const getParty = () => {
    const arr = [];
    for(let i = 1; i<=10; i++){
        arr.push(i)
    }
    return arr;
}


const SearchForm = props => {
    
        return(

            <div>
                <select id="party"
                    onChange={handleChange("party", props.updateSearch)}
                    defaultValue="2">
                    {getParty().map((num, i)=>(
                        <option key={i} value={num} > {num} people </option>
                    ))}
                </select>

                <input defaultValue={getDate()}type="date" id="date"
                    onChange={handleChange("date", props.updateSearch)}/>

                <select id="time" defaultValue="16:00"
                    onChange={handleChange("time", props.updateSearch)}>
                    {getTimeSlots().map(
                        (time,i) => (
                            <option key={i}value={time} > {time} </option>
                        )
                    )}
                </select>


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