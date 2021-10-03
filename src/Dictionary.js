import "./Dictionary.css";
import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary(){
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);
let [photos, setPhotos] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

function search(event){
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f917000010000011785ab024c7849d885f115172ba101f3";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};

    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);

}

function handleKeywordChange(event){
setKeyword(event.target.value);
}

    return (
    <div className="Dictionary">
        <section>
       <form onSubmit={search}>
           <input 
           type="search" 
           autoFocus={false}
           onChange={handleKeywordChange}/>
       </form>
       </section>
       <Results results={results}/>
       <Photos photos={photos}/>
    </div>
    )
};