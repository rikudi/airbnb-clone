import React from "react";

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return(
        <>
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../imgs/${props.img}`} alt="card-image" className="card--img" />
                <div className="card--info">
                    <i class="fa fa-star card-item"></i>
                    <p className="rating--txt card-item">{props.reviewCount}</p>
                    <p className="country--txt card-item">{props.location}</p>
                </div>
                
                <p className="card--title">{props.title}</p>
                <p className="card--price"><strong>From {props.price}$</strong>/ person</p>
            </div>
        </>
    )
}