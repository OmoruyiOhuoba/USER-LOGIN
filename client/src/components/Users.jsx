import React, {useState, useEffect} from "react";
import axios from "axios";
import DataTable from "./DataTable";


function Users(){
const [usersCollection, setUsersCollection] = useState([""])

useEffect(() => {
    axios.get("http://localhost:4000/users")
    .then(res => {
        setUsersCollection(res.data);
    }).catch(error => {
        console.log(error);
    })
});

return (
    <div className="wrapper-users">
        <div className="container">
            <table className="table table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {usersCollection.map((data, index) => {
                       return (<DataTable 
                        text = {data} 
                        key={index}
                        />); 
                    })}
                </tbody>
            </table>
        </div>
    </div>
)
}

export default Users