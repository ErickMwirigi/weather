import React from "react";

function Weekly({ weatherInfo }){
console.log(weatherInfo.data.filter(dat => dat.datetime === "2023-09-12"))
return(
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Temperature</th>
                    <th>Precipitation</th>
                </tr>
            </tbody>
        </table>
    </div>
)
}

export default Weekly