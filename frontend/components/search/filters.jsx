import React from "react";
import RestaurantsIndex from "./restaurant_index";

class Filters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "Wine bar": false,
            Japanese: false,
            Mexican: false,
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
        const filter = []
        for (let key in this.state) {
            if(this.state[key]){
                filter.push(key)
            }
        }

        this.props.updateSearch("moreFilter", filter)
        
    }
    

    render(){
        
        return(
            <div className="filters-box">
                <form className="filter-form" onSubmit={this.handleSubmit}> 
                    <div className="cuisine">
                        <p>Cuisine</p>
                        <label>New American
                            <input type="checkbox" value="New American"
                            onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>French
                            <input type="checkbox" value="Modern French" 
                            onChange={this.handleChange}/>
                        </label>
                        <br />

                        <label>Japanese
                            <input type="checkbox" value="Japanese" 
                            onChange={this.handleChange}/>
                        </label>
                        <br />

                        <label>Mexican
                            <input type="checkbox" value="Mexican" 
                            onChange={this.handleChange}/>
                        </label>
                        <br />

                        <label>Wine bar
                            <input type="checkbox" value="Wine bar"
                                onChange={this.handleChange} />
                        </label>
                        <br />

                        <label>Contemporary
                            <input type="checkbox" value="Contemporary"
                                onChange={this.handleChange} />
                        </label>
                        
                    </div>

                    <div className="price">
                        <p>Price Range</p>
                        <label>$
                            <input type="checkbox" value="1" 
                            onChange={this.handleChange}/>
                        </label>
                        <label>$$
                            <input type="checkbox" value="2" 
                            onChange={this.handleChange}/>
                        </label>
                        <label>$$$
                            <input type="checkbox" value="3" 
                                onChange={this.handleChange}/>
                        </label>
                        <label>$$$$
                            <input type="checkbox" value="4" 
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                    <button id="filter-button" type="submit">Apply</button>
                </form>

               
            </div>
        )
    }
}

export default Filters;