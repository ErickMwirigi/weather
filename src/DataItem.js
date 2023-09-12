import React from "react";

function DataItem({ prop , city }){


return(
        <tr>
            <td>{city}</td>
            <td>{prop.valid_date}</td>
            <td>{prop.weather.description}</td>
            <td>{prop.temp}</td>
            <td>{prop.precip}</td>
        </tr>
)
}

export default DataItem