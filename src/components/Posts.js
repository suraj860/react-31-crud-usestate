
// import React from "react";
import axios from "axios"
import React from "react"
import {Link} from 'react-router-dom';
import './posts.css'



function  Posts (){
// Various states to store the changes using useState

    const[posts , setPosts] = React.useState([]);
    const[user , setUser] = React.useState([]);
    const[title , setTitle] =  React.useState("");
    const[body , setBody] =  React.useState("");
    const[were , setWere] = React.useState("");
    const[id , setId] =React.useState("");
    const[bollen, setBollen] = React.useState(false);

  
// fetches data for posts and users whenever page reloads 
React.useEffect(()=>{

    async function fetchData(){
        try{
            let response1 = await axios.get("https://jsonplaceholder.typicode.com/posts");
            let response2 = await axios.get( "https://jsonplaceholder.typicode.com/users")
            setPosts(response1.data)
            setUser(response2.data)
           
        }catch(error){
            console.log(error)
        }
    }
    fetchData();


},[])

// async function to delete the respective id post
async function deleteData(id){
    console.log(id)
    try{
        let response = await axios.delete("https://jsonplaceholder.typicode.com/posts/"+ id);
        console.log(response)
        let data = [...posts]
        let newData = data.filter((items)=> items.id !== id)
        setPosts(newData)
       
    }catch(error){
        console.log(error)
    }
}

// async function to add post
async function addPost (){
    try{
        let postData = await axios.post("https://jsonplaceholder.typicode.com/posts",{
        title: title,
        body: body,
        userId: were
        })
        setBollen(false)
        const news = [...posts , postData.data]
        setPosts(news)
        // console.log(postData)     
    }catch(error){
        console.log(error)
    } 
}

// async function to edit the data respective to particular id
async function editData(){
    try{
        let putData = await axios.put("https://jsonplaceholder.typicode.com/posts/"+ id,{
        title: title,
        body: body,
        userId: were,
        id:id
        })
       
        let prevData = [...posts]
        let index = prevData.findIndex((item)=>item.id===putData.data.id)
        prevData[index] = putData.data
       setPosts(prevData)
       resetData()
    // get the new page
       setBollen(false)
       
        // console.log(postData)     
    }catch(error){
        console.log(error)
    } 
}

// used to handle changes from form
let handleChange=({target:{name , value}})=>{
    switch (name) {
     case "title":{
             setTitle(value)
             break;
         }case "body":{
             setBody(value)
             break;
         }default:{
             return "sorry"
         }
     }       
           
 }

//  to edit the present post fill the inputs with thw data
function updateData(item){
    setTitle(item.title)
    setId(item.id)
    setBody(item.body)
    setBollen(true)
    setWere(item.id)
}

// reset the data after submiting the data
function resetData(){
    setTitle ("")
    setBody("")
    setWere("")
    setId("")
}

// function to perform submit
let handleSubmit = (event)=>{
event.preventDefault();
if(id===""){
    addPost();
}else{
    editData();
}
// reset the data
resetData();
}


   return(
    <> 
    {/* to display the posts data */}
       { bollen===false ?
       <>
        <div className="heading">
            <h2 className ="titles">All Posts</h2>
       </div>
       <button type="button" className="btn btn-outline-info addBtn" onClick = {()=>{setBollen(true)}}>Add Your Post</button>
       <table className="table table-hover">
           <tbody>{
           posts.map((item)=>{     
            return(
               
            <tr key={item.id} >
                <td>
                <p>Title : {item.title}</p> 
                <p>Content : {item.body}</p>      
                <button type="button" className="btn btn-success btn-1"><Link className="link" to= {`/posts/${item.id}`}>View</Link></button>
                <button type="button" className="btn btn-info btn-2" onClick={()=>{updateData(item)}}>Edit</button>
                <button type="button" className="btn btn-danger btn-2" onClick={()=>{deleteData(item.id)}}>Delete</button>
                </td>
            </tr>
                
            )
           })}
           </tbody>
        </table></>
       : <>
        <div className="heading">
            <h2 className ="titles">Add Your Post</h2>
        </div>
        {/* display form when the bollen state changes */}
        <div className="formDiv">
            <form onSubmit ={handleSubmit}>
                <select onChange={(event)=>{setWere(event.target.value)}} style ={{border:"none" ,padding:"10px"}}>
                {
                    user.map((users)=>{
                        return(
                        <option key={users.id} value={users.id}>{users.name}</option>
                        )
                    })
                }
                </select><br/>
               
                <input type="text" name="title" value = {title} className="titlebox"
                onChange={handleChange} placeholder="Enter Title" required></input><br/>
               
                <textarea rows ="5" cols="30" name="body" value = {body} className="commentbox"
                onChange={handleChange}  placeholder="Enter body" required></textarea><br/>

                <button type="submit" className="btn btn-success btn-1">submit</button>
                <button type="button" className="btn btn-danger btn-2" onClick={()=>{setBollen(false)}}>Cancel</button>
            </form>
        </div>
      
       </>}
    </>
   )
}

export default Posts;