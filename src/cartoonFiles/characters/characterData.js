import React from "react";
import {SelectedFilters} from "./SelectedFilters";
import {Characters} from "./characters";

class CharacterDataContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            error: "",
            filterSelected: false
        }
        this.requestData = this.requestData.bind(this);
        this.sortByChange = this.sortByChange.bind(this);
    }
    componentDidMount(){
        this.requestData();
    }
    requestData(){
        const {filteredValues} = this.props;
        let requestParam = "?";
        if(filteredValues.gender.length > 0){
            this.setState({filterSelected : true});
            requestParam+="&&gender=" + filteredValues.gender.join(",");
        } 
        if(filteredValues.origin.length > 0){
            this.setState({filterSelected : true});
            requestParam+= "&&origin=" + filteredValues.origin.join(",");
        } 
        if(filteredValues.species.length > 0){
            this.setState({filterSelected : true});
            requestParam+= "&&species=" + filteredValues.species.join(",");
        }
        fetch("https://rickandmortyapi.com/api/character/"+requestParam)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    data : result
                },()=>{
                    if(result.results){
                        this.sortAcc();
                    } 
                })
            },
            (error) => {
                this.setState({data : {} , error : error})
                }
            )
    }
    sortByChange(e){
          if(e.target.value === "acc"){
            this.sortAcc();
          }else{
            this.sortDsc();
          }
    }
    sortAcc(){
        const {data} = this.state;
        const sortDataAcc = data.results.sort(function (a, b) {
            return a.id - b.id;
          });
        data.results = sortDataAcc;
        this.setState({data});
    }
    sortDsc(){
        const {data} = this.state;
        const sortDataDsc = data.results.sort(function (a, b) {
            return b.id - a.id;
          });
        data.results = sortDataDsc;
        this.setState({data});
    }
    render(){
        const {data ,filterSelected} = this.state;
        return(
            <div className="cartoonContainer">
                {filterSelected ? 
                    <SelectedFilters {...this.props} />
                    : <div> No Filter Selected </div>
                }
                <div className="sortingDiv pull-right">
                    <label htmlFor = "sorting">Sort By ID : </label>
                    <select id="sorting" onChange={(e)=> this.sortByChange(e)}>
                        <option value="acc">Accending</option>
                        <option value="dsc">Decending</option>
                    </select>
                </div>
                <div className="clearfix"></div>
                {data.results && data.results.length > 0 ?
                    <Characters data = {data}/> :
                    <div>No Data Found</div>
                }
            </div>
        )
    }
}

export const CharacterData = CharacterDataContainer;