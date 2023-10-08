import React, { Fragment, useState } from 'react';
import styles from './Quote.module.css';

export const Quote = (props) => {

    return(
        <Fragment>
            <div className={styles['quote-text']}>
                <i className="fas fa-quote-left"></i>
                <span>{props.text}</span>
            </div>
            <div className={styles['quote-author']}>
                <span>{props.author}</span>
            </div>
        </Fragment>
    );
}