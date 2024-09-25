import { useState,useEffect } from "react"
import GifContainer from "./GifContainer"
import API_KEY from "../config"
import {handleFetch} from "../utils"

function GifSearch() {
    const [url, setUrl] = useState(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&offset=0&rating=g&bundle=messaging_non_clips`)
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState('')

  
    const handleSubmit = async (e) => {
        e.preventDefault()
        setUrl(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`) 
            const [data, error] = await handleFetch(url);
            if (error) setErrorMessage(error.message);
            if (data) setGifs(data.data); 
    }

    const handleSearch = (e) => setQuery(e.target.value)

    return (
        <form on onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={query} onChange={handleSearch}/>
            <button type="submit" className="btn btn-success">Search</button>
            <GifContainer gifs={gifs} />
        </form>
    )

}

export default GifSearch
