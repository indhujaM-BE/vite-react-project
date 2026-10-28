import {useState} from "react"
import {postApiCall} from "../Service/Serivce"
export default function FormwithAPI(){
    const[formData,setFormData]=useState({})
    const[apiSuccess,setApisuccess]=useState(false)

    const handleChange=(e)=>{
        const fieldName=e.target.name
        const fieldValue=e.target.value

        setFormData({...formData,[fieldName]: fieldValue})
    }
    const handleSubmit=async(e) => {
        e.preventDefault()
        try{
            const payload={
                id:0,
                title:formData['product-name'],
                price:formData['product-price'],
                description:formData['product-description'],
                image:formData['product-image'],
                category:formData['product-category']
            }
            const response=await postApiCall(payload)
            console.log("response:",response)
            alert("Successfully!!")
        }
        catch(error){
            console.log("error:",error)
            alert("Failed!!")
        }
    }
    return(
        <>
          <div className="container m-3">
            <div className="h2 text-center text-info">PRODUCT LIST</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">PRODUCT NAME</label>
                    <input
                      type="text"
                      name="product-name"
                      className="form-control"
                      onChange={handleChange}
                      required
                      />
                </div>
                <div className="mb-3">
                    <label className="form-label">CATEGORY</label>
                    <input
                      type="text"
                      name="product-category"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">PRICE</label>
                    <input
                    type="number"
                    name="product-price"
                    className="form-control"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">DESCRIPTION</label>
                    <input
                      type="text"
                      name="product-description"
                      className="form-control"
                      onChange={handleChange}
                      required
                      />
                </div>
                <div className="mb-3">
                    <label>Product Image</label>
                    <input
                    type="url"
                    name="product-image"
                    className="form-control"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>
          </div>
        
        </>
    )
}