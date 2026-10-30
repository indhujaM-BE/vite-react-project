import {useState} from 'react'
import products from "../assets/dummy-json/product.json";
export default function ProductList(){
    return(
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>RATING</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.rating.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}