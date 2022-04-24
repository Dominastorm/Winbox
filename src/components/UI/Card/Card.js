import styles from './Card.module.css';
import React from 'react'

const Card = (props) => {
  return <div className={`${styles.card} ${props.className}`} style={props.style}>{props.children}</div>;
};

export default Card;
