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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.value]: !this.state[e.target.value]})
    }

    handleSubmit(e){
        e.preventDefault();
        const cuisineFilter = [];
        const priceFilter = [];
        for (let key in this.state) {
            if(this.state[key]){
              if(key.length === 1){
                priceFilter.push(key)
              } else {
                cuisineFilter.push(key)
              }
                
            }
        }

        this.props.updateFilter(cuisineFilter, priceFilter) 
    }

    reset(e){
      e.preventDefault;
      this.setState(_defaultState)
      this.props.resetFilter();
    }
    

    render(){
        
        return (
          <div className="filters-box">
            <form className="filter-form" onSubmit={this.handleSubmit}>
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
              <button id="filter-button" type="submit">
                Apply
              </button>
            </form>
              <button id="filter-button" onClick={this.reset}>
                Reset
              </button>
          </div>
        );
    }
}

export default Filters;