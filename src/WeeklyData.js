import React from "react";
import DataItem from "./DataItem";

function Weekly({ weatherInfo }){

    const { city_name , country_code , data } = weatherInfo

// console.log(weatherInfo.data.filter(dat => dat.datetime === "2023-09-12"))

const chart = data.map(data => <DataItem key={data.valid_date} city={city_name} prop={data}/>)

return(
    <div>
        <div className="selectBtns">
        <select id={"selectBtn"}>
            <option value={"Weekly"}>Weekly Data</option>
            <option value={"Daily"}>Daily Data</option>
        </select>
        <select id={"selectBtn"}>
            <option value={"farmer"}>Farmer</option>
            <option value={"traveller"}>Traveller</option>
        </select>
        </div>
        <table>
            <tbody>
                <tr>
                    <th>City</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Temperature</th>
                    <th>Precipitation</th>
                </tr>
                {chart}
            </tbody>
        </table>
    </div>
)
}

export default Weekly