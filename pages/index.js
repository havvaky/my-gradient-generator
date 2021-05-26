import React, {useState} from 'react';
import Layout from '../components/layout';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from '../styles/Home.module.css';
import Head from 'next/head';


export default function Home() {
  const [borderValue, setBorderValue] = useState(30);
  const [width, setWidth] = useState(450);
  const [height, setHeight] = useState(450);
  const [hue, setHueChange] = useState(288);
  const [saturation, setSaturationChange] = useState(35);
  const [lightness, setLightnessChange] = useState(80);
  const [opacity, setOpacityChange] = useState(0.7);
  const [offsetX, setOffsetX] = useState(30);
  const [offsetY, setOffsetY] = useState(30);
  const [blur, setBlur] = useState(45);
  const [spread, setSpread] =useState(0);
  const [checked, setChecked] = useState(false);

  function handleHeight(e) {
    setHeight(e.target.value);
  }

  function handleChange(e) {
    setBorderValue(e.target.value);
  }

  function handleWidth(e) {
    setWidth(e.target.value);
  }

  function handleHueChange(e) {
    setHueChange(e.target.value);
  }

  function handleSaturationChange(e) {
    setSaturationChange(e.target.value);
  }

  function handleLightnessChange(e) {
    setLightnessChange(e.target.value);
  }

  function handleOpacityChange(e) {
    setOpacityChange(Number(e.target.value) / 100);
  }

  function handleOffsetX(e) {
    setOffsetX(e.target.value);
  }

  function handleOffsetY(e) {
    setOffsetY(e.target.value);
  }

  function handleBlur(e) {
    setBlur(e.target.value);
  }

  function handleSpread(e) {
    console.log(e.target.value);
    setSpread(e.target.value);
  }

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <>
      <Layout home>
        <Head><title>Neumorphic Box Shadows</title></Head>
        <div className={styles.wrapper} style={{ backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`}}>
          <div className={styles.pageTitle}><h1>Neumorphic Box Shadows</h1></div>
          <div className={styles.boxWrap}>
            <div className={styles.displayBox}>
              <div
                style={{
                  borderRadius: `${borderValue}%`,
                  width: `${width}px`,
                  height: `${height}px`,
                  backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`,
                  boxShadow:  checked ? `inset ${offsetX}px ${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness+10}%),
            -${offsetX}px -${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness-5}%)` : `${offsetX}px ${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness+10}%),
            -${offsetX}px -${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness-5}%)`
                }}/>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.inputInnerBox}>
                <label htmlFor="height">
                  <p>
                    <code>Height: {height}px;</code>
                  </p>
                </label>
                <input
                  type="range"
                  id="height"
                  name="height"
                  min="10"
                  max="700"
                  defaultValue={height}
                  onChange={handleHeight}
                />
                <label htmlFor="width">
                  <p>
                    <code>Width: {width}px;</code>
                  </p>
                </label>
                <input
                  type="range"
                  id="width"
                  name="width"
                  min="10"
                  max="700"
                  defaultValue={width}
                  onChange={handleWidth}
                />
                <p>
                  <code>border radius: {`${borderValue}% ${borderValue}%`};</code>
                </p>
                <label htmlFor="border-radius">Border Radius (between 0 and 50):</label>
                <input
                  type="range"
                  id="border-radius"
                  name="border-radius"
                  min="0"
                  max="50"
                  defaultValue={borderValue}
                  onChange={handleChange}
                />
                <p>
                  <code>hsla({hue}, {saturation}%, {lightness}%, {opacity});</code>
                </p>
                <label htmlFor="hue">Hue: </label>
                <input
                  type="range"
                  id="hue"
                  name="hue"
                  min="0"
                  max="360"
                  onChange={handleHueChange}
                  defaultValue={hue}
                />
                <label htmlFor="saturation">Saturation: </label>
                <input
                  type="range"
                  id="saturation"
                  name="saturation"
                  min="0"
                  max="100"
                  onChange={handleSaturationChange}
                />
                <label htmlFor="lightness">Lightness: </label>
                <input
                  type="range"
                  id="lightness"
                  name="lightness"
                  min="0"
                  max="100"
                  onChange={handleLightnessChange}
                />
                <label htmlFor="opacity">Opacity: </label>
                <input
                  type="range"
                  id="opacity"
                  name="opacity"
                  min="0"
                  max="100"
                  onChange={handleOpacityChange}
                />
                <p>
                  <code>box-shadow: {checked ? `inset ${offsetX}px ${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness+20}%),
            -${offsetX}px -${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness-20}%)` : `${offsetX}px ${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness+20}%),
            -${offsetX}px -${offsetY}px ${blur}px ${spread}px hsl(${hue}, ${saturation}%, ${lightness-20}%)`};</code>
                </p>
                <label htmlFor="offset-x">offset-x: </label>
                <input
                  type="range"
                  id="offset-x"
                  name="offset-x"
                  min="0"
                  max="60"
                  defaultValue={offsetX}
                  onChange={handleOffsetX}
                />
                <label htmlFor="offset-y">offset-y: </label>
                <input
                  type="range"
                  id="offset-y"
                  name="offset-y"
                  min="0"
                  max="60"
                  defaultValue={offsetY}
                  onChange={handleOffsetY}
                />
                <label htmlFor="blur">blur-radius: </label>
                <input
                  type="range"
                  id="blur"
                  name="blur"
                  min="0"
                  max="60"
                  defaultValue={blur}
                  onChange={handleBlur}
                />
                <label htmlFor="spread">spread: </label>
                <input
                  type="range"
                  id="spread"
                  name="spread"
                  min="0"
                  max="38"
                  defaultValue={spread}
                  onChange={handleSpread}
                />
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleCheck} name="checked" style={{color: "#1A78C2"}}/>}
                  label="Inset"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
