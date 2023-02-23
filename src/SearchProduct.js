import React,{useState} from 'react'
import Header from "./Header"
import { Table } from 'react-bootstrap'
function SearchProduct(){   
    const [data,setData] = useState([]) 
    async function searchProduct(key){
        if(key.length>1){
            let result =await fetch("http://localhost:8000/api/search/"+key);
            result =await result.json();
            setData(result)
        }
    }
    console.warn(data)

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1 className="text-center">Search Product</h1>
            <br />
            <input type="text" onChange={(e)=>searchProduct(e.target.value)} className='form-control' placeholder="Search" />
            <br />
            {
            data.length>0  ?
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><img style={{width:140}} src={"http://localhost:8000/"+item.file_path} /></td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    </tr>)
                }
    </tbody>
</Table>
:
<h2>Keep Smile!</h2>
}
        </div>
        </div>
    );
}

export default SearchProduct