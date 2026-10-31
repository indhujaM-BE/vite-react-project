
import { useState } from "react";
import DeleteProduct from "./DeleteProduct";

export default function EditProduct(props) {

    const [formData, setFormData] = useState({
        title: props.product.title,
        price: props.product.price,
        category: props.product.category,
        rating: props.product.rating.rate
    });

    // Handle Input Change
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // Save Updated Product
    function handleSubmit(e) {
        e.preventDefault();

        const updateProduct = {
            id: props.product.id,
            title: formData.title,
            price: Number(formData.price),
            category: formData.category,
            rating: {
                rate: Number(formData.rating),
                count: props.product.rating.count
            }
        };

        props.onUpdate(updateProduct);
    }

    return (
        <div className="card p-4 mt-4">

            <h4 className="text-center mb-4">Edit Product</h4>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        className="form-control"
                        value={formData.rating}
                        onChange={handleChange}
                        min="0"
                        max="5"
                        step="0.1"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success me-2"
                >
                    Save
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={props.onCancel}
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}
