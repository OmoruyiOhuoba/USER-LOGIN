import React from "react";

function DataTable(props){
    return (
        <tr>
            <td>
                {props.text._id}
            </td>
            <td>
                {props.text.name}
            </td>
            <td>
                {props.text.email}
            </td>
        </tr>
    );

}

export default DataTable;