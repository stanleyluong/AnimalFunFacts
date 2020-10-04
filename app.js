import { animals } from './animals';
import React from 'react'
import ReactDOM from 'react-dom'
const background = (
  <img 
    className='background' 
    alt='ocean' 
    src='/images/ocean.jpg'
  />
)
const images = []
for (const animal in animals){
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}
function displayFact(e){
  console.log(e.target.alt)
  let animal = animals[e.target.alt]
  console.log(animal.facts)
  document.getElementById('fact').innerHTML = animal.facts[Math.floor(Math.random()*animal.facts.length)]
  // let fact = e.target.facts[Math.floor(Math.random()*e.target.facts.length)]
  // document.getElementById('fact').innerHTML = fact
}
const title = ""
const animalFacts = (
  <div>
  <p id='fact'></p>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className='animals'>
      {images}
    </div>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById('root'))
