import React, { Fragment } from 'react';
import {  Button} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Data} from './Data';
import {useNavigate} from 'react-router-dom'


function Post() {

    const navigate = useNavigate()

    const handelDelete = (id) =>{
        let index = Data.map((e)=>{
            return e.id
        }).indexOf(id);

        Data.splice(index,1);
        navigate('/')
    }

console.log("Loggg")
  return (
    <Fragment>
        <div style={{margin:"10rem"}}>
            <table striped bordered hover size ="sm">
                <thead>
                     <tr>
                        <th>Post Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Data && Data.length > 0 ?
                        Data.map((item, idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button onClick={()=> alert(item.id)}>Edit</Button>
                                        <Button onClick={()=> handelDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        // : "no data"
                    }
                </tbody>
            </table>
        </div>
      
    </Fragment>
  )
}

export default Post;
