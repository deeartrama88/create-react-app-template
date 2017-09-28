import React from 'react';

const SlideItem = (props) => {
    return (
        <div className="slideItem">
            <h3>{ props.item.name }</h3>
        </div>
    )
};

export default SlideItem;