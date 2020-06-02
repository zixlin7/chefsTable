import React from "react";
import RestaurantsIndex from "./restaurant_index";
import {
  FaRegMoneyBillAlt,
  FaUtensils,
} from "react-icons/fa";

class Filters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "Wine bar": false,
            "Japanese": false,
            "Mexican": false,
            "Modern French": false,
            "New American": false,
            "Contemporary" : false,
            1: false,
            2: false,
            3: false,
            4: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        debugger
        this.props.updateFilter(cuisineFilter, priceFilter)
        
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
                />
                <label className="label">French</label>
                <br />

                <input
                  type="checkbox"
                  value="Japanese"
                  onChange={this.handleChange}
                />
                <label className="label">Japanese</label>
                <br />

                <input
                  type="checkbox"
                  value="Mexican"
                  onChange={this.handleChange}
                />
                <label className="label">Mexican</label>
                <br />

                <input
                  type="checkbox"
                  value="Wine bar"
                  onChange={this.handleChange}
                />
                <label className="label">Wine bar</label>
                <br />

                <input
                  type="checkbox"
                  value="New American"
                  onChange={this.handleChange}
                />
                <label className="label">New American</label>
                <br />

                <input
                  type="checkbox"
                  value="Contemporary"
                  onChange={this.handleChange}
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
                <input type="checkbox" value="1" onChange={this.handleChange} />
                <label className="label">$</label>
                <br />
                <input type="checkbox" value="2" onChange={this.handleChange} />
                <label className="label">$$</label>
                <br />
                <input type="checkbox" value="3" onChange={this.handleChange} />
                <label className="label">$$$</label>
                <br />
                <input type="checkbox" value="4" onChange={this.handleChange} />
                <label className="label">$$$$</label>
                <br />
              </div>
              <button id="filter-button" type="submit">
                Apply
              </button>
            </form>
          </div>
        );
    }
}

export default Filters;