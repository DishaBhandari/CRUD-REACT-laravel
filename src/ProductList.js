import Header from "./Header"
import React, {useState, useEffect} from "react";
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function ProductList()
{
    const [data, setData] = useState([]);
    useEffect(  ()=>{
        getData();
    },[])     
    console.warn("Data", data);

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/delete/"+id,{
            method : 'DELETE'
        });
        getData()
        result = await result.json();
        console.warn(result)       
        if(result.result){
            alert(result.result)
        } 
    }

    async function getData(){
        let result = await fetch('http://localhost:8000/api/list');
        result = await result.json();
        setData(result);
    }
   
    return(
        <div>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Product List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Operations</th>
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
                        <td><span onClick={()=>{deleteOperation(item.id)}} className="delete">Delete</span>
                        <Link to={"update/"+item.id} ><span className="update">Update</span></Link></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
        </div>
    )
}

export default ProductList;
