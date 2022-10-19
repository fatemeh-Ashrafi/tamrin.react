// import './Post.css'
import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addPost ,deletePost ,updateDiscriptionPost } from './Features/Users';


function Post() {

    const dispatch = useDispatch();
    const postList = useSelector((state) => state.posts.value);

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [discriptionUpdate,setDiscriptionUpdate] = useState("")


  return (
    <div className='App'>
        <div className='addUser'>

        <div className="mb-3 w-25 ">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input 
            type="text" 
            className="form-control " 
            id="exampleFormControlInput1" 
            placeholder="title..."
            onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="mb-3 w-25 ">
            <label for="exampleFormControlTextarea1" className="form-label">
                Discription</label>
            <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            placeholder='Discription post' 
            rows="3"
            type="text" 
            onChange={(e)=>{setDescription(e.target.value)}}>
            </textarea>
        </div>
        <div className="col-12 p-0">
             <button 
             type="submit" 
             className="btn btn-primary "
            onClick={()=>
            {dispatch(addPost({id:postList[postList.length - 1].id +1 ,
            title ,
            description}))}}>
            Add User</button>
        </div>
        </div>
        
        <div className='displayUsers '>
            {postList.map((user)=>{
                return(
                    <div>
                      
                        Title:<h3>{user.title}</h3>
                        Discription: <h3>{user.discription}</h3>

                        <div class="input-group input-group-sm mb-3 w-25">
                        <span 
                        class="input-group-text" 
                        id="inputGroup-sizing-sm">new discription</span>
                        <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        onChange={(e)=>{setDiscriptionUpdate(e.target.value)}}/>
                        </div>

                        
                        <button type="button" className="btn btn-danger btn-block m-2 p-1 "
                         onClick={()=>{dispatch(deletePost({id:user.id}))}}>
                            delete
                        </button>
                        
                        <button type="button" className="btn btn-warning btn-block m-2 p-1"
                         onClick={()=> {dispatch(updateDiscriptionPost({id:user.id , discription:discriptionUpdate }))}}>
                            update
                        </button>
                       
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Post
