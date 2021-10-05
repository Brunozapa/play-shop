import React from "react";
import MainSlider from './SingleSlider';
import ClassicsPage from "./ClassicsPage";
import ProductSlider from "./ProductSlider";

export default main =>  {
    return(

    <div>
        <MainSlider />
        <ProductSlider />
        <ClassicsPage />
    </div>
    )
}