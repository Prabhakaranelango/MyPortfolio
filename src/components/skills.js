
import PythonImg from '../assets/Python.png';
import javaImg from '../assets/java.png';
import cImg from '../assets/c.png';
import HTMLImg from '../assets/HTML.png';
import CssImg from '../assets/Css.png'
import ReactImg from '../assets/React.png';
import NodejsImg from '../assets/Nodejs.png';
import FlaskImg from '../assets/Flask.png';
import DjangoImg from '../assets/Django.png';
import GColabImg from '../assets/GColab.png';
import VSCodeImg from '../assets/VSCode.png';
import PowerbiImg from '../assets/Powerbi.png';
import SQLImg from '../assets/SQL.png';
import PHPImg from '../assets/PHP.png';
import CHImg from '../assets/CH.png';

export default function Skills() {
    return (
        <section id='Skills' className="bg-Skills flex flex-col justify-center">
            <div>
                <h1 className="text-center text-white font-bold m-5 text-3xl">Skills</h1>
                <h1 className="text-center text-white font-bold m-5 text-3xl">Programming Languages</h1>
                <div className='flex flex-wrap justify-center'>
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={PythonImg} alt='Python' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={javaImg} alt='java' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={cImg} alt='c' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={HTMLImg} alt='HTML' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={CssImg} alt='Css' />
                </div>
            </div>

            <div>
                <h1 className="text-center text-white font-bold m-10 text-3xl">FrameWorks</h1>
                <div className='flex flex-wrap justify-center'>
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={ReactImg} alt='React' />
                    <img className='w-full  md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={NodejsImg} alt='Node.js' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={FlaskImg} alt='Flask' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={DjangoImg} alt='Django' />
                </div>
            </div>

            <div>
                <h1 className="text-center text-white font-bold m-10 text-3xl">Tools</h1>
                <div className='flex flex-wrap justify-center'>
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={GColabImg} alt='Google Colab' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={VSCodeImg} alt='Visual Studio Code' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={PowerbiImg} alt='Power BI' />
                </div>
            </div>

            <div>
                <h1 className="text-center text-white font-bold m-10 text-3xl">Backend</h1>
                <div className='flex flex-wrap justify-center'>
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={PythonImg} alt='Python' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={SQLImg} alt='SQL' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={PHPImg} alt='PHP' />
                    <img className='w-full md:w-1/4 max-w-xs justify-center m-5 md:mx-2' src={CHImg} alt='C#' />
                </div>
            </div>
        </section>
    );
}
