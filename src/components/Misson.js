import React from 'react'
import  children  from "../images/children.jpg";
import  mission2  from "../images/mission-2.jpg";
import  family  from "../images/family.jpg";

export default function Misson() {
  return (
    <div>
      <div className='container'>
  <div className="row">
    <div className="col">
        <h1 className='my-3'>Our Mission</h1>
      <p>In the heart of every child is a hunger for home. Not just for food and a place to sleep, but for safety and community. Most importantly: for love. At the Good Shepherd Agricultural Mission, 350kms east of Delhi in the town of Banbasa, we are much more than a home for children from difficult and desperate circumstances.

We are a family, where love guides us all as we grow and expand year after year. Not just a regular children’s home, we are a nearly self-sustaining organization; a working farm, a vibrant school, receiving no government assistance of any kind. Take a look around and if you have any questions just get in contact with us via the menu above!</p>
  <div className="row">
    <div className="col">
      1 of 2
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
 
    </div>
    <div className="col mx-5">
    <img src={mission2} className="d-block w-100" alt="..."/>
    </div>
  </div>
 </div>
 <div className="container  my-5">
  <div className="row">
    <div className="col">
    <img src={children} className="d-block w-100" alt="..."/>
    </div>
    <div className="col">
      <h1> Our Children’s</h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
    </div>
  </div>
 </div>
 <div className="container my-5">
  <div className="row">
    <div className="col">
    <h1> Welcome to our family!!!!</h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
    </div>
    <div className="col">
    <img src={family} className="d-block w-100" alt="..."/>
    
    </div>
  </div>
 </div>
    </div>
  )
}
