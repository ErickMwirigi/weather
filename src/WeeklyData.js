import React from "react";

function Weekly({ propData }){

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
                {deteDef}
            </tbody>
        </table>
    </div>
)
}

export default Weekly