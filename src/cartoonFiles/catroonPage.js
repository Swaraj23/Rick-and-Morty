import React from "react";
import {Filter} from "./filter/filter";
import {CharacterData} from "./characters/characterData";

export class CartoonPageContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            filteredValues : {
                "species": [],
                "gender": [],
                "origin": []
            }
        }
        this.filterChange = this.filterChange.bind(this);
    }
    
    filterChange(type,data){
        const{filteredValues} = this.state;
        let dataForm = filteredValues;
        const dataIndex = dataForm[type].indexOf(data);
        if(dataIndex === -1){
            dataForm[type].push(data);
        }else{
            dataForm[type].splice(dataIndex,1);
        }
        this.setState({
            filteredValues
        })
    }
    render(){
        const{filteredValues} = this.state;
        return(
            <div className = "row">
                <div className="col-md-2 col-sm-12">
                    <Filter 
                        key={JSON.stringify(filteredValues)}
                        filteredValues = {filteredValues}
                        filterChange = {this.filterChange}
                    />
                </div>
                <div className="col-md-10 col-sm-12">
                    <CharacterData 
                        key={JSON.stringify(filteredValues)}
                        filteredValues = {filteredValues}
                        filterChange = {this.filterChange}
                    />
                </div>
            </div>

        )
    }
}

export const CartonPage = CartoonPageContainer