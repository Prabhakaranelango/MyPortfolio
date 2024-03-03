export default function Education() {
    return (
        <section id="Education" className="bg-education flex flex-col justify-center">
            <h1 className="text-center text-white font-bold m-5 text-3xl">Education</h1>
            <div className="education-item m-5 text-white">
                <h1 className="text-white font-bold m-0 text-2xl">Nandha Engineering College</h1>
                <h2 className="text-xl sm:text-2xl">Bachelor's in Artificial Intelligence and Data Science</h2>
                <h4 className="text-md">Aug 2021 - Jun 2025</h4>
                <h5 className="text-md">CGPA: 7.5</h5>
            </div>
            <div className="education-item m-5 text-white">
                <h1 className="text-white font-bold m-0 text-2xl">HSC</h1>
                <h2 className="text-xl sm:text-2xl">Government Higher Secondary School</h2>
                <h4 className="text-md">July 2019 - July 2021</h4>
                <h5 className="text-md">Percentage: 77%</h5>
            </div>
            <div className="education-item m-5 text-white">
                <h1 className="text-white font-bold m-0 text-2xl">SSLC</h1>
                <h2 className="text-xl sm:text-2xl">Government Higher Secondary School</h2>
                <h4 className="text-md">June 2018 - July 2019</h4>
                <h5 className="text-md">Percentage: 67%</h5>
            </div>
        </section>
    );
}
