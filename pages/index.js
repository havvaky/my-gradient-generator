
import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
import BrushIcon from '@material-ui/icons/Brush';
import copy from "copy-to-clipboard";



export default function Home() {

  const [color1, setColor1] = useState("#04cdca");
  const [color2, setColor2] = useState("#d763f8");


  const handleRandomColor = () => {
    let randomColor1 = Math.random().toString(16).slice(2, 8);
    let randomColor2 = Math.random().toString(16).slice(2, 8);
    // setting input boxes to random colors generated
    setColor1(`#${randomColor1}`);
    setColor2(`#${randomColor2}`);
  }

  const handleCopyClipboard = () => {
    copy(`background: linear-gradient(to right, ${color1}, ${color2})`);
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}
              style={{ background: `linear-gradient(to right, ${color1}, ${color2})`, transition: 'all 1s' }}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>CSS Gradient Color Generator</h1>
            <div className={styles.colorContainer}>
              <div className={styles.color} style={{ background: `${color1}` }}>
                <div className={styles.colorLabel}><code>{color1}</code></div>
                <input
                  type="color"
                  id="color1"
                  className={styles.colorPicker}
                  value={color1}
                  onChange={e => setColor1(e.target.value)}/>
                <div className={styles.brush}><BrushIcon/></div>
              </div>
              <div className={styles.color} style={{ background: `${color2}` }}>
                <div className={styles.colorLabel}><code>{color2}</code></div>
                <input
                  type="color"
                  id="color2"
                  className={styles.colorPicker}
                  value={color1}
                  onChange={e => setColor2(e.target.value)}/>
                <div className={styles.brush}><BrushIcon/></div>
              </div>
            </div>
            <button className={styles.randomColorButton} onClick={handleRandomColor}>Generate Random Color</button>
            <p className={styles.codeText}><code>{`background: linear-gradient(to right, ${color1}, ${color2})`}</code></p>
            <button className={styles.copyButton} onClick={handleCopyClipboard}>Copy to Clipboard</button>
          </div>
        </main>
      </div>
    </>
  )
}
