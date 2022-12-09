import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div className='cont-margin'>
    <div className='home-cont'>
   <span className='home-img'><img src='../Images/todolist.webp' alt='TodoList Image'></img></span>
   <span className='text-cont'>
   <h3>To-do list</h3>
<p><strong> It's a list of tasks you need to complete or things that you want to do.</strong></p> 
<p> They're organised in order of priority. Traditionally, they're written on a piece of paper or post it notes and act as a memory aid, now lets make on it digitally.</p>
   <NavLink to="/single"><button className='btn-glob' >Let's make 1_Line list</button></NavLink>
   <NavLink to="/totallist"><button className='btn-glob' >Let's make To_do list</button></NavLink>
   </span>
    </div>
    </div>
  )
}

export default Home
