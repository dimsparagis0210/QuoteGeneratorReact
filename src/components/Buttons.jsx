import styles from './Buttons.module.css';
import {useState, useCallback, useEffect } from 'react';

export const Buttons = (props) => {
    const apiQuotes = [];
    let loadedQuote = {};
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const loadQuote = useCallback( async() => {
        try {
            // Fetching data
            if (!isDataLoaded) {
                const response = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json");
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const data = await response.json();
                for (const q in data) {
                    apiQuotes.push({
                        text: data[q].text,
                        author: data[q].author,
                        tag: data[q].tag
                    })
                }
                setIsDataLoaded(true);
            }
            loadedQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
                // Check if author field is empty
                if (!loadedQuote.author) {
                    loadedQuote.text = 'Unknown';
                }
                // Check the quote length for styling
                if (loadedQuote.text.length > 50) {
                    loadedQuote.className = 'long-quote';
                } else {
                    loadedQuote.className = 'quote-text';
                }
            props.onNewQuote(loadedQuote);

        } catch (error) {
            throw new Error(error.message);
        }
    }, []);

    useEffect(() => {
        if(isDataLoaded) {
            loadQuote();
        }
    }, [isDataLoaded]);

    return (
        <div className={styles['button-container']}>
            <button className={styles.twitter} title="Tweet this!">
                <i className="fab fa-twitter"></i>
            </button>
            <button title="Add a new quote!" onClick={loadQuote}>New quote</button>
        </div>
    );
}