import React from "react";

class FilterListContainer extends React.Component{
    constructor(props){
        super(props);
        this.filterClick = this.filterClick.bind(this)
    }
    filterClick(e){
        const {filterChange , legend} = this.props;
        filterChange(legend,e.target.value);
    }
    render(){
        const {legend,data,filteredValues} = this.props;
        return(
            <fieldset>
                <legend>{legend}</legend>
                {data.map((item,index) => (
                    <div key= {legend+index} >
                        <input type="checkbox" 
                            id={item.name} 
                            name={item.name} 
                            value= {item.name} 
                            onClick = {(e)=> this.filterClick(e)}
                            defaultChecked = {filteredValues[legend].indexOf(item.name) === -1 ? false : true }
                        />
                        <label htmlFor={item.name}>{item.label}</label>
                    </div>
                ))}
                
            </fieldset>
        )
    }
}
export const FilterList = FilterListContainer;