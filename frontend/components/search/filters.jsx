import React from 'react';
import { FaRegMoneyBillAlt, FaUtensils } from 'react-icons/fa';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const filterState = this.props.filter;
    filterState[e.target.value] = !filterState[e.target.value];
    this.props.updateFilter(filterState);
  }

  render() {
    return (
      <div className="filters-box">
        <form className="filter-form">
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
              checked={this.props.filter['Modern French'] ? 'checked' : ''}
            />
            <label className="label">French</label>
            <br />

            <input
              type="checkbox"
              value="Japanese"
              onChange={this.handleChange}
              checked={this.props.filter['Japanese'] ? 'checked' : ''}
            />
            <label className="label">Japanese</label>
            <br />

            <input
              type="checkbox"
              value="Mexican"
              onChange={this.handleChange}
              checked={this.props.filter['Mexican'] ? 'checked' : ''}
            />
            <label className="label">Mexican</label>
            <br />

            <input
              type="checkbox"
              value="Wine bar"
              onChange={this.handleChange}
              checked={this.props.filter['Wine bar'] ? 'checked' : ''}
            />
            <label className="label">Wine bar</label>
            <br />

            <input
              type="checkbox"
              value="New American"
              onChange={this.handleChange}
              checked={this.props.filter['New American'] ? 'checked' : ''}
            />
            <label className="label">New American</label>
            <br />

            <input
              type="checkbox"
              value="Contemporary"
              onChange={this.handleChange}
              checked={this.props.filter['Contemporary'] ? 'checked' : ''}
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
            <input
              type="checkbox"
              value="1"
              onChange={this.handleChange}
              checked={this.props.filter['1'] ? 'checked' : ''}
            />
            <label className="label">$</label>
            <br />
            <input
              type="checkbox"
              value="2"
              onChange={this.handleChange}
              checked={this.props.filter['2'] ? 'checked' : ''}
            />
            <label className="label">$$</label>
            <br />
            <input
              type="checkbox"
              value="3"
              onChange={this.handleChange}
              checked={this.props.filter['3'] ? 'checked' : ''}
            />
            <label className="label">$$$</label>
            <br />
            <input
              type="checkbox"
              value="4"
              onChange={this.handleChange}
              checked={this.props.filter['4'] ? 'checked' : ''}
            />
            <label className="label">$$$$</label>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default Filters;
