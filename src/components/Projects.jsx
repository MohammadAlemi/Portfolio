import React from 'react'
import Project1 from "../assets/Project1.png"
import Project3 from "../assets/Project3.png"
import Project4 from '../assets/Project4.png'
import Project2 from "../assets/Project2.png"
import Project from '../components/Project'
const Projects = () => {
    const project=[
        {name:"Student Management System",desc:"Built a Student Management System using HTML, CSS, JavaScript, PHP, and SQL to efficiently manage student records, with features for adding, editing, deleting, and searching student information.", image:Project1},
        {name:"Responsive Dashboard",desc:"Built a responsive admin dashboard using React and Tailwind CSS, featuring sidebar navigation, efficient state management for UI interactions, and a mobile-friendly layout optimized for different screen sizes.", image:Project2},
        {name:"TicTacToe Game",desc:"Built a responsive Tic-Tac-Toe game using HTML, CSS, and JavaScript, featuring interactive gameplay, dynamic game state management, win/draw detection, and a clean mobile-friendly interface.",
 image:Project3},
        {name:"Rock Papper Scissor Game",desc:"Built an interactive Rock Paper Scissors game using HTML, CSS, and JavaScript, featuring dynamic game logic, score tracking, user-computer interaction, and a responsive, user-friendly interface." , image:Project4},
    ]
  return (
    <div id='projects' className=' min-h-screen  text-white  lg:px-[150px] px-[20px] py-6 pt-[80px] lg:pt-[120px] flex flex-col justify-center bg-gradient-to-b from-[#121212] to-[#0A1F44]'>
        <h1 className='text-white text-[30px] md:text-[42px] font-bold text-center '>My Projects</h1>
        <div  className='grid md:grid-cols-3 gap-y-4 gap-x-5 pt-10'>
            {
        project.map((item, index)=>(
            <Project
            key={index}
            name={item.name}
            desc={item.desc}
            image={item.image}
            />
        ))
      }
        </div>
    </div>
  )
}

export default Projects
