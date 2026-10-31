import { useState } from "react";
import productsData from "../assets/dummy-json/product.json";
import AddProduct from "./AddProduct";

export default function ProductList() {

    const [products, setProducts] = useState(productsData);
    const [showForm, setShowForm] = useState(false);

    function handleAdd(newProduct) {
        setProducts([...products, newProduct]);
        setShowForm(false);
    }

    const nextId = Math.max(...products.map(p => p.id), 0) + 1;

    return (
        <div>
            <div className="text-end mb-3">
                <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Close Form" : "Add Product"}
                </button>
            </div>
            {showForm && (
                <AddProduct
                    onAdd={handleAdd}
                    nextId={nextId}
                />
            )}
            <div className="table-responsive mt-4">
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
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.rating.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}