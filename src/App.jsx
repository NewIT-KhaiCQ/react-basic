import './App.css'
// import { courses } from './components/Courses'
import Greeting from './components/Greeting'
import Form from './components/Form';
import Button from './components/Button';
function App() {
//   const handleClick = (course) => {
//     console.log(course.user.full_name);
//   };
// const type = "Checkbox";
// const Component = Form[type];
  return (
    <>
{/* //         <Component />
//         {courses.map((course) => ( */}
{/* //           <Greeting  */}
{/* //             course={course}
//             onClick={handleClick}
//           />
          
//         ))} */}
        <Button 
            title="Click me!"
            href="http://localhost:5173/"
            onClick={() => console.log(Math.random())}
        />
    </>
  )
}

export default App
