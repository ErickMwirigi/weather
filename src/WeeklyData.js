import React from "react";
import DataItem from "./DataItem";

function Weekly({ weatherInfo }){

    const { city_name , country_code , data } = weatherInfo

// console.log(weatherInfo.data.filter(dat => dat.datetime === "2023-09-12"))

const chart = data.map(data => <DataItem key={data.valid_date} city={city_name} prop={data}/>)

return(
    <div>
        <div className="selectBtns">
        <select className={"selectBtn"}>
            <option value={"Weekly"}>Weekly Data</option>
            <option value={"Daily"}>Daily Data</option>
        </select>
        <select className={"selectBtn"}>
            <option value={"farmer"}>Farmer</option>
            <option value={"traveller"}>Traveller</option>
        </select>
        </div>
        <div className="tcontainer">
            <table className="weekly">
                <tbody>
                    <tr className="theaders">
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
    </div>
)
}

export default Weekly