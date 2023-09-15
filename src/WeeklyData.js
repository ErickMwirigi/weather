import React from "react";
import DataItem from "./DataItem";

function Weekly({ weatherInfo }){

const { city_name , data } = weatherInfo

const chart = data.map(data => <DataItem key={data.valid_date} city={city_name} prop={data}/>)

return(
    <div>
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