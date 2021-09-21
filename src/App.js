
import React from "react";
import axios from "axios";


function App(){
// states to store initial values and change whenever needed

  const [data , setData] = React.useState([])
  const [ fullName , setName] = React.useState("")
  const [ email , setEmail] = React.useState("")
  const [ website , setWebsite] = React.useState("")
  const [ phone , setPhone] = React.useState("")
  const [id , setId] = React.useState("")

// get data initially
  React.useEffect(()=>{
    async function getData(){
      const response1 = await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(response1.data)
    }
    getData()
  },[])

// delete data
  async function deleteId(id){ 
      await axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
      // console.log(response2)
      let datas = [...data]
      let newData = datas.filter((items)=> items.id !== id)
      setData(newData)
  }

  // create new data
  async function createData(){
    const response3 = await axios.post("https://jsonplaceholder.typicode.com/users",{
      name : fullName,
      email : email,
      website : website,
      phone : phone
    })
    let newData = [...data , response3.data]
    setData(newData)
    resetData()
  }

  // edit the present data
  async function editData(){
    const response4 = await axios.put("https://jsonplaceholder.typicode.com/users/" + id ,{
      name : fullName,
      email : email,
      website : website,
      phone : phone
    })
    let prevData = [...data]
    let index = prevData.findIndex((item)=>item.id ===response4.data.id)
    prevData[index] = response4.data
    setData(prevData)
    resetData()
  }


// called after submitting the form
  function handleSubmit(event){
    event.preventDefault();
    if(id !== ""){
      editData()
    }else{
      createData()
    }
  }

  // sets the states value to values of contact that we need to update
  function update(details){
    setName(details.name)
    setEmail(details.email)
    setId(details.id)
    setWebsite(details.website)
    setPhone(details.phone)
  }

// reset the form to blank
  function resetData(){
    setName("")
    setEmail("")
    setId("")
    setWebsite("")
    setPhone("")
  }


  return(
    <>
    <div className="banner">
      <p className="title">Add Contacts</p>
    </div>

    {/* form */}
    <div className="formdiv">
      <form onSubmit={handleSubmit}>
       
        <input  type = "text" value = {fullName} name="fullName" placeholder = "Enter your name"
        onChange={(event)=>{setName(event.target.value)}} required style = {{marginRight:"40px"}}>
        </input>

        <input type = "email" value ={email} name ="email" placeholder = "Enter your email"
        onChange={(event)=>{setEmail(event.target.value)}} required>
        </input><br/>
        <br/>
        
        <input  type = "text" value = {website} name ="website" placeholder = "Enter your website"
         onChange={(event)=>{setWebsite(event.target.value)}} required style = {{marginRight:"40px"}}>
         </input>

        <input type = "text" value ={phone} name ="phone" placeholder = "Enter your phone"
        onChange={(event)=>{setPhone(event.target.value)}} required></input><br/>
        <br/>

        <button  className="btn btn-success btns" type="submit">Submit</button>
      </form>
    </div>
    
    {/* data displayed in table */}
    <table className="table table-hover">
      <tbody>
        {data.map((items)=>{
          return(
            <tr key = {items.id}>
              <td className="details">
                <p><span> Name : </span>{items.name}</p>
                <p><span> Email Id :</span> {items.email}</p>
                <p><span> Website : </span> {items.website}</p>
                <p><span> Phone : </span> {items.phone}</p>
                <button type="button" className="btn btn-primary btns" onClick={()=>{update(items)}}>EDIT</button>
                <button type="button" className="btn btn-danger" onClick={()=>{deleteId(items.id)}}>DELETE</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default App;
