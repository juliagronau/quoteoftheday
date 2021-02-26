import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Randomadvice = ({name}) => {
   const [advice, setAdvice] = useState('');
   const [loading, setIsLoading] = useState(true);
   const queryUrl = 'https://api.adviceslip.com/advice';
   console.log(name);

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
            <h1>Hi {name}! Schön, dich zu sehen!</h1>
            <h2>Hier ist dein Zitat des Tages:</h2>
            <h3 key={advice.id}>"{advice.advice}"</h3> 
        </main>
    )
}

export default Randomadvice
