import React from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <div>
            <div className="item">
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="items-prices-new">
                        <p>{props.new_price}</p>
                    </div>
                    <div className="items-prices-old">
                        <p>{props.old_price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
