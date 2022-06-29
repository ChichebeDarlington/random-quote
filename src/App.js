import {useEffect, useRef, useState} from "react";
import './index.css'
import { FaDev,FaTwitter } from "react-icons/fa";

function App() {
    const url =   'https://type.fit/api/quotes';
    const url2 = "https://api.adviceslip.com/advice"
    const [quote, setQuote]= useState('')
    const colorRef = useRef(null)
    const color = ['yello',"grey","magenta", "red","indigo", 'purple']

    const fetchRandomQuote =  async ()=>{
             // fetch(url)
             //    .then(response => response.json())
             //    .then(data =>{
             //        console.log(data)
             //        let randomQuote = Math.floor(Math.random() * data.length)
             //        setQuote(data[randomQuote])
             //    })
const response = await fetch(url)
        const data = await response.json()
        let randomQuote = Math.floor(Math.random() * data.length)
        setQuote(data[randomQuote])

    }

    useEffect(()=>{
fetchRandomQuote()
    },[])

    useEffect(()=>{
        const randomColor = Math.floor(Math.random() * color.length)
        colorRef.current.style.color = color[randomColor]
    })

    return (
    <div className="container">
        <h1>Chichebe@web<FaDev className="fadev"/> </h1>
        <h2>Inspire Yourself with some random quotes</h2>
    <p ref={colorRef}>{quote.text}</p>
    <h2>Author: {quote.author}</h2>
<div className="btn-container">
    <button onClick={fetchRandomQuote}>nyem some random quote</button>
    <a href={`https://twitter.com/intent/tweet?text=${quote.text}`}
    target="blank"
       rel="noopener noreferrer"
       className="tweet-btn"
    ><span>tweet</span> <FaTwitter/></a>
</div>
    </div>
  );
}

export default App;
