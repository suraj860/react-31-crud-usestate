
// FETCHING THREE APIS IN THIS COMPONENTS
// 1. FETCHING A PARTICULAR POST
// 2. FETCHING USER WITH RESPECT TO THE POST
// 3. FETCHING COMMENT WITH RESPESCT TO POST

import axios from 'axios';
import React  from 'react';
import './post.css';

function Post(props){

    // stores posts info
    const[info , setInfo] = React.useState({})
    // stores comment
    const[comment , setComment] = React.useState([])
    // store user info
    const[user , setUser] = React.useState({})
   
    // fetching posts data and comments with respect to the post

  
    React.useEffect(()=>{
        async function fetchData(){
            try{
                let response1 = await axios.get( "https://jsonplaceholder.typicode.com/posts/" + props.match.params.id);
                let response2 = await axios.get( "https://jsonplaceholder.typicode.com/posts/" + props.match.params.id + "/comments")
                // get info
                setInfo(response1.data)
                // get comment
                setComment(response2.data)
                // get user
                fetchUser(response1.data.userId); 
            }catch(error){
                console.log(error)
            }     
        }
        fetchData(); 
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    

    //  fetch user data with respect to the repective post
    async function fetchUser(id){
        try{      
            let response = await axios.get( "https://jsonplaceholder.typicode.com/users/" + id)
           
            setUser(response.data)
        }catch(error){
            console.log(error)
        }     
    }

    return(
        <>
        <div className="prodiv">
            <img className="picture" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="vc"/>
        </div>

        {/* user information div */}
        <div className="container cnt">
            <div className="row">
               <div className="col-lg-4 col-sm-12 ">
                 <p><span>Name : </span>{user.name }</p>    
                 <p><span>City : </span>{user.address ? user.address.city : null}</p> 
               </div>
               <div  className="col-lg-4 col-sm-12 ">
                 <p><span>Company Name : </span>{user.company ? user.company.name : null}</p>
                 <p><span> Email Id : </span>{user.email }</p>
               </div>
               <div  className="col-lg-4 col-sm-12 ">
                 <p><span>Website : </span>{user.website }</p> 
                 <p><span>Phone : </span>{user.phone }</p>
               </div>  
            </div>     
        </div>
        <hr/>

        {/* post UI */}
        <div className="blogInfo">
            <p className="postTitle">Title : {info.title}</p>
            <img className ="blogimg" src="https://user-images.githubusercontent.com/8397274/88047382-29b8b280-cb6f-11ea-9efb-2af2b10f3e0c.png" alt="z"/> 
            <p className="postBody">{info.body}</p> 
        </div>
        <hr/>

        {/* mapping over the comment data and displaying into the UI */}
        <div className="commentDiv">
            <p><span>Comments:</span></p>
            <table className="table table-hover">
                <tbody>
                    {comment.map((comment)=>{
                        return(
                         <tr key ={comment.id}>
                            <td>
                                <p>Name : {comment.name}</p>
                                <p>Email Id : {comment.email}</p>
                                <p>Comment : {comment.body}</p>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
  
}

export default Post;