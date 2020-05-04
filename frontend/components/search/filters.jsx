import React from "react";
import RestaurantsIndex from "./restaurant_index";

class Filters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            American: false,
            French: false,
            Japanese: false,
            Mexican: false,
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
        // const cuisineFilter = [];
        // const priceFilter = [];
        // for(let key in this.state){
        //     if(this.state[key]){
        //        if (key.length > 1) {
        //         cuisineFilter.push(key)
        //        } else {
        //            priceFilter.push(key)
        //        }
        //     }
        // }
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
                    <div>
                        <p>Cuisine</p>
                        <label>American
                            <input type="checkbox" value="American"
                            onChange={this.handleChange}/>
                        </label>
                        <label>French
                            <input type="checkbox" value="French" 
                            onChange={this.handleChange}/>
                        </label>
                        <label>Japanese
                            <input type="checkbox" value="Japanese" 
                            onChange={this.handleChange}/>
                        </label>
                        <label>Mexican
                            <input type="checkbox" value="Mexican" 
                            onChange={this.handleChange}/>
                        </label>
                        
                    </div>

                    <div>
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
                    <button type="submit">Apply</button>
                </form>

               
            </div>
        )
    }
}

export default Filters;