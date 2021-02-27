import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Joke from './Joke';

const Randomadvice = ({name}) => {
   const [advice, setAdvice] = useState('');
   const [loading, setIsLoading] = useState(true);
   const queryUrl = 'https://api.adviceslip.com/advice';
   console.log(name);
   const [clicked, setClicked] = useState(false);

    useEffect(() => {
        axios.get(queryUrl)
            .then(res => {
                setAdvice(res.data.slip)
                setIsLoading(false)
                console.log(res.data.slip)
            })
            .catch(err => alert('Oops, something went wrong'));
        }, [name]);



    return (
        <main>
            <h3>Hi {name}! Schön, dich zu sehen!</h3>
            <h4>Hier ist dein Zitat des Tages:</h4>
            <h5 key={advice.id}>"{advice.advice}"</h5> 
            <button onClick={() => setClicked(true)}>Cool! Jetzt zeig mir meinen Witz des Tages</button>
            {clicked === true && <Joke name={name}/>}
        </main>
    )
}

export default Randomadvice
