import React, { Component }from 'react';
import { Link } from "react-router-dom";
const NotFound = () => {
   return(
  <div className="not-found"> 
    <h2>Sorry</h2>
    <p>This Page can not be found</p>
    <Link to ="/">Back To The HomePage...</Link>
  </div>
   );
};
export default NotFound;