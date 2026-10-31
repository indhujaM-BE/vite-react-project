import { useState } from "react";
export default function AddProduct(props) {
    const [formdata, setFormData] = useState({
        title: " ",
        price: " ",
        category: " ",
        rating: " "
    });
    function handleChange(e) {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = {
            id: props.nextId,
            title: formdata.title,
            price: Number(formdata.price),
            category: formdata.category,
            rating: {
                rate: Number(formdata.rating),
                count: 0,
            },
        };
        props.onAdd(newProduct);
        setFormData({
            title: " ",
            price: " ",
            category: " ",
            rating: " "
        });

    }

    return (
        <>
            <div className="card p-4 mt-4 mb-4">
                <h4 className="text-center mb-3">Add New Product</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="enter product title"
                            value={formdata.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="enter product price"
                            value={formdata.price}
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
                            placeholder="enter product Category"
                            value={formdata.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Rating</label>
                        <input
                            type="text"
                            name="rating"
                            className="form-control"
                            placeholder="enter product Rating"
                            value={formdata.rating}
                            onChange={handleChange}
                            min="0"
                            max="5"
                            step="0.1"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </>
    );
}