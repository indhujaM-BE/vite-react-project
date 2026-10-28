export default function Result(props){
    return(
        <div className="card p-3 mb-3">
            <h4>Student Name:{props.name}</h4>
            <p>Age:{props.age}</p>
        </div>
    );
}