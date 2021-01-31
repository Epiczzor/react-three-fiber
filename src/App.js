import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import ShapesButton from './components/ShapesButton';
import { GeomentrySphere, GeomentryBox, GeomentryCylinder } from './components/Shapes';
import './App.css';

function renderModel({ shape, position, color }) {
  switch (shape) {
    case 'sphere':
      return <GeomentrySphere position={position} color={color} />;
    case 'box':
      return <GeomentryBox position={position} color={color} />;
    default:
      return <GeomentryCylinder position={position} color={color} />;
  }
}
function GeomentryModels(props) {
  return (
    renderModel(props)
  )
}

export default function App() {
  const [geomentryModel, reCalculateModels] = useState([])

  return (
    <>
      <span style={{ display: 'flex' }}>
        <ShapesButton shape="sphere" addFunction={addShape} />
        <ShapesButton shape="cylinder" addFunction={addShape} />
        <ShapesButton shape="box" addFunction={addShape} />
      </span>
      <Canvas
        camera={{ position: [0, 0, 15], near: 5, far: 75 }}
      >
        {/* camera={{ position: [0, 7, 7], near: 5, far: 15 }} */}

        {/* lights */}
        <ambientLight intensity={0.8} />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <spotLight position={[10, 10, 10]} angle={0.15} />

        {/* models */}
        {geomentryModel.map((props) => (
          <GeomentryModels {...props} />
        ))}
        <GeomentryModels shape="sphere" position={[0, 0, 0]} color="chocolate" />
        <OrbitControls />
      </Canvas>
    </>
  )




  function getRandomInt(max) {
    // if max is negative
    // return random b/w +ve and -ve 
    // else
    // return random +ve below max range 
    if (max < 0)
      return Math.ceil(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1)
    return Math.floor(Math.random() * max) + 1;
  }


  /**
   * creates new shape and add it to existing rendering model
   * @param {string} shape new shape to render
   */
  function addShape(shape) {
    // random color and position
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',];
    const color = colors[getRandomInt(6)];
    let position = [getRandomInt(-20), getRandomInt(-7), getRandomInt(3) - getRandomInt(5)];

    let newModel = geomentryModel.map((props) => ({ ...props }))
    newModel.push({ shape: shape, position: position, color: color })
    reCalculateModels([...newModel])
  }
}
