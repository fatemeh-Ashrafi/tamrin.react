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

            <input type="text" placeholder='title...'
            onChange={(e)=>{setTitle(e.target.value)}} />

            <input type="text" placeholder='discription...' 
            onChange={(e)=>{setDescription(e.target.value)}} />

            <button onClick={()=>
                {dispatch(addPost({id:postList[postList.length - 1].id +1 ,
                title ,
                description
                }))}}>
                Add User
            </button>
        </div>
        <div className='displayUsers'>
            {postList.map((user)=>{
                return(
                    <div>
                        Title:<h3>{user.title}</h3>
                        Discription: <h3>{user.discription}</h3>
                        
                        <input type="text" placeholder=' new discription...' 
                        onChange={(e)=>{setDiscriptionUpdate(e.target.value)}} 
                        />

                        <button onClick={()=>{dispatch(deletePost({id:user.id}))}}>
                            delete
                        </button>
                        
                        <button onClick={()=>
                            {dispatch(updateDiscriptionPost({id:user.id , discription:discriptionUpdate }))}}>
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
