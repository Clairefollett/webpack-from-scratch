import React, { PropTypes } from 'react';
import styles from './Mermaid.scss';

const Mermaid = ({description}) => (
  <div> className={styles.mermaid}>
    This is Erte's art-deco painting of a <span> {description} </span>
  </div>
);

Mermaid.PropTypes = {
    description: PropTypes.string 
};

export default Mermaid;