import React, { Component } from "react";
import locations from "./locations";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class RegExp extends Component {
  state = {
    query: "",
    allLocations: {}
    
  };
  componentWillMount() {
    this.setState({ allLocations: locations });
  }

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  render() {
    const { allLocations, query } = this.state;
    let showingLocations;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingLocations = allLocations.filter(location =>
        match.test(location.name)
      );
    } else {
      showingLocations = allLocations;
    }
    showingLocations.sort(sortBy("name"));

    return (
      <div>
        <input
          className="  Search-locations"
          type="text"
          placeholder="Search-locations"
          value={this.state.query}
          onChange={e => {
            this.state.UpdateQuery(e.target.value);
          
          }}
          style={{ width: "250px", height: "25px" }}
        />

        <div className="location-list container">
          <ol className="location-list">
            {this.state.allLocations.map(location => (
              <button
                className="location-list-item"
                key={location.name}
                location={location}
              >
                {location.name}
              </button>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default RegExp;
