import React from "react";
import {filterList} from "../../constants"
const SelectedFiltersContainer = ({filteredValues,filterChange}) => {
    return(
        <div>
            <h3>Selected Filters</h3>
            {filterList.map((item) =>(
                filteredValues[item].map((filteredItem,index)=>(
                    <div key={index} className="selectedFilters">{filteredItem}
                       <span className="remove" onClick = {()=>filterChange(item,filteredItem)}><i class="fa fa-times"></i></span>
                    </div>
                ))
            ))}
        </div>
    )
}

export const SelectedFilters = SelectedFiltersContainer;