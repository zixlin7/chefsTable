import React from "react";
import RestaurantsIndex from "./restaurant_index";
import {
  FaRegMoneyBillAlt,
  FaUtensils,
} from "react-icons/fa";

const _defaultState = {
  "Wine bar": false,
  "Japanese": false,
  "Mexican": false,
  "Modern French": false,
  "New American": false,
  "Contemporary": false,
  1: false,
  2: false,
  3: false,
  4: false
}
class Filters extends React.Component{
    constructor(props){
        super(props)
        this.state = _defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(e){
        const filters = {...this.state}
        filters[e.target.value] = !filters[e.target.value]
        this.props.updateFilter(filters)
        this.setState({[e.target.value]: !this.state[e.target.value]})
        // const cuisineFilter = [];
        // const priceFilter = [];
        
    }


    reset(){
      this.setState(_defaultState)
      this.props.resetFilter();
    }
    

    render(){
        
        return (
          <div className="filters-box">
            <form className="filter-form" >
              <div className="cuisine">
                <div className="subtitle">
                  <span className="icon">
                    <FaUtensils />
                  </span>
                  <p>Cuisine</p>
                </div>
                <input
                  type="checkbox"
                  value="Modern French"
                  onChange={this.handleChange}
                  checked={this.state["Modern French"] ? "checked" : ""}
                />
                <label className="label">French</label>
                <br />

                <input
                  type="checkbox"
                  value="Japanese"
                  onChange={this.handleChange}
                  checked={this.state["Japanese"] ? "checked" : ""}
                />
                <label className="label">Japanese</label>
                <br />

                <input
                  type="checkbox"
                  value="Mexican"
                  onChange={this.handleChange}
                  checked={this.state["Mexican"] ? "checked" : ""}
                />
                <label className="label">Mexican</label>
                <br />

                <input
                  type="checkbox"
                  value="Wine bar"
                  onChange={this.handleChange}
                  checked={this.state["Wine bar"] ? "checked" : ""}
                />
                <label className="label">Wine bar</label>
                <br />

                <input
                  type="checkbox"
                  value="New American"
                  onChange={this.handleChange}
                  checked={this.state["New American"] ? "checked" : ""}
                />
                <label className="label">New American</label>
                <br />

                <input
                  type="checkbox"
                  value="Contemporary"
                  onChange={this.handleChange}
                  checked={this.state["Contemporary"] ? "checked" : ""}
                />
                <label className="label">Contemporary</label>
              </div>

              <div className="price">
                <div className="subtitle">
                  <span className="icon">
                    <FaRegMoneyBillAlt />
                  </span>
                  <p>Price Range</p>
                </div>
                <input type="checkbox" value="1" onChange={this.handleChange} 
                  checked={this.state["1"] ? "checked" : ""}/>
                <label className="label">$</label>
                <br />
                <input type="checkbox" value="2" onChange={this.handleChange} 
                  checked={this.state["2"] ? "checked" : ""}/>
                <label className="label">$$</label>
                <br />
                <input type="checkbox" value="3" onChange={this.handleChange}
                  checked={this.state["3"] ? "checked" : ""} />
                <label className="label">$$$</label>
                <br />
                <input type="checkbox" value="4" onChange={this.handleChange} 
                  checked={this.state["4"] ? "checked" : ""}/>
                <label className="label">$$$$</label>
                <br />
              </div>
              
            </form>
             
          </div>
        );
    }
}

export default Filters;