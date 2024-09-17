import React from "react";
import {useNavigate} from "react-router-dom";
const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <h1>Oops!</h1>
      <h2>404</h2>
      <p>Page Not Found</p>
      <button className="not-found-btn" onClick={()=>navigate("/")}>Back to Home</button>
    </div>
  );
};

export default PageNotFound;
