import React from 'react';
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <ContentLoader 
        className={'pizza-block'}
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <circle cx="118" cy="135" r="118" /> 
        <rect x="0" y="265" rx="4" ry="4" width="280" height="25" /> 
        <rect x="-1" y="300" rx="6" ry="6" width="278" height="84" /> 
        <rect x="3" y="399" rx="0" ry="0" width="93" height="34" /> 
        <rect x="133" y="393" rx="20" ry="20" width="142" height="44" />
        </ContentLoader>
    ) 
}

export default PizzaLoadingBlock;