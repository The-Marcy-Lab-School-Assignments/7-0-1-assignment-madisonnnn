function GifContainer({ gifs }) {
    return (
        <ul>
            {gifs.map((gif) => {
                return <li key={gif.id}>
                    <img src={gif.images.original.url}/>
                </li>
            })}
        </ul>
    )
}

export default GifContainer
