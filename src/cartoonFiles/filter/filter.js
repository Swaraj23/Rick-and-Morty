import React from "react";
import {FilterList} from "./filterList";
import * as Constants from "../../constants";
import "./filter.css";

class FilterContainer extends React.Component{
    render(){
        return(
            <div className="filterContainer">
                {Constants.filterList.map((item,index) => (
                    <FilterList 
                        {...this.props}
                        key={index}
                        legend = {item}
                        data = {Constants.filterData[item]}
                    />
                ))}
            </div>
        )
    }
}

export const Filter = FilterContainer;