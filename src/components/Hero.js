import ProfileImg from '../assets/Profile.png';
import { AiOutlineLinkedin, AiOutlineGithub,AiOutlineInstagram } from "react-icons/ai";

export default function Hero(){
    return <section id='Home' className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-3xl font-Hero-font flex flex-col justify-center font-bold'>
            Hi, <br/>I'm Prabhakaran Elango.
            <p className='text-2xl margin-bottom-2px py-3 flex flex-col justify-center'>An Artficial Intelligence and Data Science student.<br/>
            </p>
            <div className='flex py-3'>
            <a href='https://www.linkedin.com/notifications/?filter=all' className='pr-5 hover:text-black'><AiOutlineLinkedin /></a>
            <a href='https://github.com/Prabhakaranelango' className='pr-5 hover:text-black'><AiOutlineGithub /></a>
            <a href='https://www.instagram.com/prabhxx_04?igsh=MXdxNzMzZmNyMjRiYQ==' className='hover:text-black'><AiOutlineInstagram /></a>

            </div>
        </h1>
        </div>
        <img className='md:w-1/16 h-25 px-5 flex flex-col' src= {ProfileImg}/>
    </section>
}