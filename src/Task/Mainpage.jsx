
import { useState } from "react";
import ProductList from "./ProductList";
export default function Mainpage(){
    return(
        <>
           <div className="container mt-4">
            <h2 className="text-center mb-4">PRODUCT LIST</h2>
            <ProductList/>
           </div>
        </>
    )
}

