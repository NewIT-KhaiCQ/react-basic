import React from 'react'


const Greeting = ({course, onClick}) => {
  
  
  return (
    <div>
      <h1 onClick={() => onClick(course)}>{course.user.full_name}</h1>
      <img src={course.image_url} alt="" />
      <p>{course.title}</p>
    </div>
  )
}

export default Greeting