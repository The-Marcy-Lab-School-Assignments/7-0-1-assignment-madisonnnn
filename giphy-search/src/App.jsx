import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState, useEffect } from 'react';
import  API_KEY  from './config';

/** FEEDBACK: Great job! */

function App() {
  const [gifs, setGifs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [url, setUrl] = useState(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&offset=0&rating=g&bundle=messaging_non_clips`)

  

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(url);
      if (error) setErrorMessage(error.message);
      if (data) setGifs(data.data);
    }
    doFetch();
  }, []);

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
    <GifSearch/>
      <div className="ui container">
        <GifContainer gifs={gifs} />
      </div>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}

export default App;
