
import styles from '../styles/Home.module.scss';
import React, { useEffect, useState } from 'react';
import BrushIcon from '@material-ui/icons/Brush';


export default function Home() {

  const [color1, setColor1] = useState("#04cdca");
  const [color2, setColor2] = useState("#d763f8");

  const handleColor1 = e => {
    setColor1(e.target.value);
  }

  const handleColor2 = e => {
    setColor2(e.target.value);
  }

  const handleRandomColor = () => {
    let randomColor1 = Math.random().toString(16).slice(2, 8);
    let randomColor2 = Math.random().toString(16).slice(2, 8);
    // setting input boxes to random colors generated
    setColor1(`#${randomColor1}`);
    setColor2(`#${randomColor2}`);
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}
              style={{ background: `linear-gradient(to right, ${color1}, ${color2})`, transition: 'all 1s' }}>
          <div className={styles.wrapper}>
            <h1>CSS Gradient Color Generator</h1>
            <div className={styles.colorContainer}>
              <div className={styles.color} style={{ background: `${color1}` }}>
                <div className={styles.colorLabel}><code>{color1}</code></div>
                <input
                  type="color"
                  id="color1"
                  className={styles.colorPicker}
                  value={color1}
                  onChange={handleColor1}/>
                <div className={styles.brush}><BrushIcon/></div>
              </div>
              <div className={styles.color} style={{ background: `${color2}` }}>
                <div className={styles.colorLabel}><code>{color2}</code></div>
                <input
                  type="color"
                  id="color2"
                  className={styles.colorPicker}
                  value={color1}
                  onChange={handleColor2}/>
                <div className={styles.brush}><BrushIcon/></div>
              </div>
            </div>
            <button className={styles.randomColorButton} onClick={handleRandomColor}>Generate Random Color</button>
            <p className={styles.code}><code>{`background: linear-gradient(to right, ${color1}, ${color2})`}</code></p>
          </div>
        </main>
      </div>
    </>
  )
}
