import "./Dictionary.css";
import React, { useState } from "react";

export default function Dictionary(){
let [keyword, setKeyword] = useState("");

function search(event){
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
}

function handleKeywordChange(event){
setKeyword(event.target.value);
}

    return (<div className="Dictionary">
       <form onSubmit={search}>
           <input 
           type="search" 
           autoFocus={true}
           onChange={handleKeywordChange}/>
       </form>
    </div>)
}