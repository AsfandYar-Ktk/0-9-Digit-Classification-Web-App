import React from "react";
import "../App.css";

const Menu = ({clearCanvas, predict}) => {
    return (
        <div className="Menu">
            <button onClick={clearCanvas} style={{paddingRight:"15px",paddingLeft:"15px", paddingTop:"5px",paddingBottom:"5px", backgroundColor:"black", borderRadius:"5px", borderColor:"white", color:"white"}}>Clear</button>
            <button onClick={predict} style={{paddingRight:"15px",paddingLeft:"15px", paddingTop:"5px",paddingBottom:"5px", backgroundColor:"black", borderRadius:"5px", borderColor:"white", color:"white"}}>predict</button>

        </div>
    );
};

export default Menu;