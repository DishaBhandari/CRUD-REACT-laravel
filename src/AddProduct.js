import React,{useState} from 'react'
import Header from "./Header"
function AddProduct()
{
    const[name, setName]=useState("");
    const[price, setPrice]=useState("");
    const[desc, setDesc]=useState("");
    const[file, setFile]=useState("");

    async function addProduct(){
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('desc',desc);
        let result = await fetch("http://localhost:8000/api/addProduct",{
            method: 'POST',
            body : formData
        });
        result=await result.json();
        if(result.success){
            alert(result.success)
        } else{
            alert(result.error)
        }
    }

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1 className="text-center">Add Product</h1>
            <br/>
            <input type="text" value={name} placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} className="form-control"/>
            <br />
            <input type="text" value={price} placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)} className="form-control"/>
            <br />
            <input type="text" value={desc}  placeholder="Enter Product Description" onChange={(e)=>setDesc(e.target.value)} className="form-control"/>
            <br />
            <input type="file" placeholder="Enter Product Image" onChange={(e)=>setFile(e.target.files[0])} className="form-control"/>
            <br />
            <button onClick={addProduct} className="btn btn-primary mx-auto">Add</button>
            </div>
        </div>
    )
}

export default AddProduct 