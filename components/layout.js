import styles from './layout.module.css'
import React from 'react';


export default function Layout(props) {
  return <div className={styles.container}>{props.children}</div>
}
