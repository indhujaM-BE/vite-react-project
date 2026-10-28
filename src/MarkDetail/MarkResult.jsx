export default function MarkResult(props){
    const mark=Number(props.mark);
    const grade=
      props.mark ===""? "":
      mark>=90?"A+":
      mark>=75?"A":
      mark>=60?"B":
      mark>=40?"C":"F";
      const status=props.mark===""?"":mark>=40?"Pass":"Fail";
      if(props.mark===""){
        return null;
      }
    return(
        <>
        <div className="mt-2">
            <p className="mb-1">
                Grade:<strong>{grade}</strong>
            </p>
            <p className="mb-1">
            status:{" "}
                <strong className={status==="Pass"?"text-success":"text-danger"}>{status}</strong>
                </p>
        </div>
        </>
    );
}