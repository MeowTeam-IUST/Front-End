import React from 'react'
import progress from '../../assets/progress.png'
import line from '../../assets/line.png'
import styles from './progressBar.module.scss'
export default function ProgressBar({state, setState}) {
  return (
    <div className={styles.progressbar}>
        <img width={70} src={progress} alt="" />
        <img width={70} src={line} alt="" />
        <img width={70} src={progress} alt="" />
        <img width={70} src={line} alt="" />
        <img width={70} src={progress} alt="" />
        
    </div>
  )
}
