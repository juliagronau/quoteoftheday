import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Joke = ({name}) => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const [joke, setJoke] = useState('');

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setJoke(res.data)
            console.log(res.data)
            })
            .catch(err => alert('Oops, something went wrong'));
        }, [name]);
        

    return (
      <section>
        <h4>Hier ist {name}s Witz:</h4>
        <h5 key={joke.id}>
            {joke.value}
        </h5> 
      </section>    
    )
}

export default Joke;
