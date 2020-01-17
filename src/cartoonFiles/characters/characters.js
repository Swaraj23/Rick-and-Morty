import React from "react";
import "./character.css";
// class CharaterPage extends React.Component{
const CharaterPage = ({data}) => {
    const characterComp = (data.results).map((item,index) =>(
        <div key={index} className="col-sm-6 col-md-3 singleCharDetails">
            <div className="imageDetails">
                <img src={item.image} alt={item.name} />
                <div className="identify">
                    <h3>{item.name}</h3>
                    <div>
                        id: <span>{item.id}</span> Created <span>{item.created}</span>
                    </div>
                </div>
            </div>
            <div className="moreDetails">
                <div>
                    <div className="keyName">Status</div>
                    <div className="keyValue">{item.status}</div>
                </div>
                <div>
                    <div className="keyName">Species</div>
                    <div className="keyValue">{item.species}</div>
                </div>
                <div>
                    <div className="keyName">Gender</div>
                    <div className="keyValue">{item.gender}</div>
                </div>
                <div>
                    <div className="keyName">Origin</div>
                    <div className="keyValue">{item.origin.name}</div>
                </div>
                <div>
                    <div className="keyName">Last Location</div>
                    <div className="keyValue">{item.location.name}</div>
                </div>
            </div>
        </div>
    ))
    return(
        <div className = "charGrp">
            {characterComp}
        </div>
    )
   
}

export const Characters = CharaterPage;