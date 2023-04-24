import React from "react";

import { useNavigate } from "react-router-dom";
function Services()
{
    let navigate = useNavigate();
   
    return <div>
        <h1>hi good morning</h1>
        <h2>hi da</h2>
        <button onClick={()=>navigate('Form')}>signup</button>
    </div>
}
export default Services