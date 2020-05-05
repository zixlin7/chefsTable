import React from "react";
import getDate from "../../util/date_util";
import {
  FaUser,
  FaAngleDown,
  FaRegClock,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";




const handleChange = (field, updateSearch) => e => {
    return(updateSearch(field, e.currentTarget.value))
}



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
  debugger
    
        return (
          <div className="select-container">
            <div className="select">
              <span id="icon">
                <FaUser />
              </span>
              <select
                id="party"
                onChange={handleChange("party", props.updateSearch)}
                defaultValue={props.search.party}
              >
                {getParty().map((num, i) => (
                  <option key={i} value={num}>
                    {num} people{" "}
                  </option>
                ))}
              </select>
              <span id="arrow">
                <FaAngleDown />
              </span>
            </div>
            <div className="select">
              <span id="icon">
                <FaRegCalendarAlt />
              </span>
              <input
                defaultValue={props.search.date}
                type="date"
                id="date"
                onChange={handleChange("date", props.updateSearch)}
              />
            </div>
            <div className="select">
              <span id="icon">
                <FaRegClock />
              </span>
              <select
                id="time"
                defaultValue={props.search.time}
                onChange={handleChange("time", props.updateSearch)}
              >
                {getTimeSlots().map((time, i) => (
                  <option key={i} value={time}>
                    {" "}
                    {time}{" "}
                  </option>
                ))}
              </select>
              <span id="arrow">
                <FaAngleDown />
              </span>
            </div>

            <div className="select">
              <span id="icon">
                <FaMapMarkerAlt />
              </span>
              <select
                id="city"
                onChange={handleChange("city", props.updateSearch)}
                defaultValue="US"
              >
                <option value="Chicago">Chicago</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="New York">New York</option>
                <option value="">Other</option>
              </select>
              <span id="arrow">
                <FaAngleDown />
              </span>
            </div>
          </div>
        );
    
}

export default SearchForm;