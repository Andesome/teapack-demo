import React from 'react'

import styles from './Hello.less';

const Hello = ({word = 'world8'}) => <h1 className={styles.title}> hello {word} again</h1>;

export default Hello;