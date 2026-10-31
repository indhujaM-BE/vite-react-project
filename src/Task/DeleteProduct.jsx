export default function DeleteProduct(props) {

    function handleDelete() {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (confirmDelete) {
            props.onDelete(props.product.id);
        }
    }

    return (
        <button
            className="btn btn-danger btn-sm ms-2"
            onClick={handleDelete}
        >
            Delete
        </button>
    );
}