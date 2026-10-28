const BASEURL="https://fakestoreapi.com/"
export const postApiCall=async(payload)=>{
    try{
        const url=BASEURL+"/products"
        const option={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }
        const response=await fetch(url,option)
        const responseData=await response.json()
        return responseData
    }
    catch(error){
        console.log("error==>",error)
    }
}