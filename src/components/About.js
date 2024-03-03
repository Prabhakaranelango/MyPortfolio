import AboutImg from '../assets/About.png';

export default function About() {
    return (
        <section id="About" className='flex flex-col md:flex-row bg-About w-full'>
            <div className='bg-primary flex flex-col md:flex-row w-full text-white px-5 bg-About'>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img className='w-[400px] md:max-w-xs justify-center mt-20 pl-20 ' src={AboutImg} alt="About" />
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-center pr-50'>
                    <h1 className='text-center md:text-left m-3 px-5 text-4xl border-b-4 m-3 md:w-[210px] font-bold'>About Me</h1>
                    <ul className='text-center md:text-left'>
                        <li className='m-3 pb-3 text-2xl'>Hi, I'm Prabhakaran Elango.</li>
                        <li className='m-3 pb-5 text-2xl'>Enthusiastic AI & Data Science student with adept programming and problem-solving skills,
                        dedicated to leveraging advanced technologies for solving complex real-world challenges.</li>
                        <li className='m-3 pb-5 text-2xl'>I am actively seeking opportunities to expand my expertise by tackling real-world challenges and furthering my understanding of practical problem-solving.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

