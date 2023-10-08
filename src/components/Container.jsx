import styles from './Container.module.css';
import React, { useState, useEffect } from 'react';
import {Quote} from './Quote.jsx';
import {Buttons} from './Buttons.jsx';

export const Container = () => {
    const [quote, setQuote] = useState({
        text: "What you are is what you have been. What you'll be is what you do now",
        author: "Buddha",
        tag: "general"
    });
    useEffect(() => {
        console.log(quote);
    }, [quote]);
    const pickQuote = (data) => {
        setQuote({
            text: data.text,
            author: data.author,
            tag: data.tag
        });
    }
    return (
        <div className={styles['quote-container']}>
            <Quote text={quote.text} author={quote.author}/>
            <Buttons onNewQuote={pickQuote}/>
        </div>
    );
};