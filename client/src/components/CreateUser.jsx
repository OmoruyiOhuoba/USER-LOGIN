import React, {useState} from "react";
import axios from "axios";


function CreateUser(){

    const [ userObject, setUserObject] = useState({
        name: "",
        email: ""
    });

    function handleChange(event){
       
        const { name, value } = event.target;
        
        setUserObject((prevValue) => {
            return {
                ...prevValue, [name]: value
            }
        })
         
          console.log(userObject);
    }

   

    function submit(event){
        event.preventDefault();
    axios.post("http://localhost:4000/users/create", userObject)
    .then((res) => {
         console.log(res.data);
    }).catch((error) =>{
         console.log(error)
    });
    
    setUserObject({
        name: "",
        email: ""
    });
    
    }



return(
    <div>
        <form action="" className="form-signin" >
            <h1>Create User</h1>
           <div>
           <input  placeholder="Full Name" name="name"  className="form-control" onChange={handleChange}/>
           </div>
           <br/>
           <div>
           <input  placeholder="e-mail" name="email"  className="form-control" onChange = {handleChange}/>

           </div>
           <br/>
           
            <button   className= "btn btn-lg btn-dark btn-block" onClick = {submit}>Submit </button>
        </form>
    </div>


)

}

export default CreateUser;
