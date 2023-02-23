import Header from "./Header"
import {withRouter} from 'react-router-dom'
import {useEffect,useState} from 'react'
function EditProduct(props)
{   
    // console.warn("props",props.match.params.id)
    const [data,setData] = useState([])
    const[name, setName]=useState("");
    const[price, setPrice]=useState("");
    const[desc, setDesc]=useState("");
    const[file, setFile]=useState("");

    useEffect(  ()=>{
        async function fetchData() {
        let result = await fetch("http://localhost:8000/api/product/"+props.match.params.id);
        result = await result.json();
        console.warn(data)
        setData(result) 
        setName(result.name)
        setPrice(result.price)
        setDesc(result.description)
        setFile(result.file_path)
        
        }
        fetchData();
    },[])

    async   function editProduct(id){
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('desc',desc);
        let result = await fetch("http://localhost:8000/api/updateProduct/"+data.id+"?_method=PUT",{
            method: 'POST',
            body : formData
        });
        alert("Data has been updated")
    }

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Update Product</h1>
                <input type="text" defaultValue={data.name} placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} /> <br /><br />
                <input type="text" defaultValue={data.price} placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)}   /> <br /><br />
                <input type="text" defaultValue={data.description} placeholder="Enter Product Description" onChange={(e)=>setDesc(e.target.value)}  /> <br /><br />
                <input type="file" defaultValue={data.file_path} placeholder="Enter Product Image" onChange={(e)=>setFile(e.target.files[0])} /><br /><br />
                <img style={{width:50}} src={"http://localhost:8000/"+data.file_path} />
                <button class="btn btn-primary ml-5" onClick={()=>editProduct()}>Update</button>
            </div>
        </div>
    )
}

export default withRouter(EditProduct)