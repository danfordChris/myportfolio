import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const CV = () => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-blue-600">Danford Christopher</h1>
                        <h2 className="text-2xl text-gray-600">Web Developer</h2>
                    </div>
                    <div className="text-right">
                        <p>Temeke, Dar es salaam - Tanzania</p>
                        <p><FaPhone className="inline-block mr-2" />+255 699 500 156</p>
                        <p><FaEnvelope className="inline-block mr-2" /><a href="mailto:jurvisdanford329@gmail.com" className="text-blue-500">jurvisdanford329@gmail.com</a></p>
                        <p><FaGlobe className="inline-block mr-2" /><a href="http://danfordchriss.io" className="text-blue-500">Danfordchriss.io</a></p>
                    </div>
                </header>
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold border-b-2 border-pink-500 pb-2">Profile</h3>
                    <p className="mt-4">I'm a passionate web designer with four years of experience. Designed creative and responsive websites with 99% client satisfaction.</p>
                </section>
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold border-b-2 border-pink-500 pb-2">Experience</h3>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold">Finhub community (2022 - Present)</h4>
                        <p className="italic">Web Designer</p>
                        <ul className="list-disc list-inside">
                            <li>Develop custom web design solutions</li>
                            <li>Collaborated with corporations and helped them build powerful websites</li>
                            <li>Designed an e-commerce web app</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold">Trilabs Limited (2022-2023)</h4>
                        <p className="italic">Web Developer &amp; Backend with Django</p>
                        <ul className="list-disc list-inside">
                            <li>Develop custom web design solutions and integrate with AI</li>
                            <li>Designed a tax payment web app</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold">Software Development Club (2020-2021)</h4>
                        <p className="italic">Web Developer &amp; UI/UX Designer</p>
                        <ul className="list-disc list-inside">
                            <li>Develop custom web design solutions</li>
                            <li>Designed an e-commerce web app</li>
                        </ul>
                    </div>  
                </section>
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold border-b-2 border-pink-500 pb-2">Skills</h3>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                        <li>Web Design</li>
                        <li>Design Thinking</li>
                        <li>Responsive Design</li>
                        <li>Testing and Debugging</li>
                        <li>Computer Literacy</li>
                        <li>Strong Communication</li>
                        <li>Excellent Problem-Solving</li>
                    </ul>
                </section>
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold border-b-2 border-pink-500 pb-2">Education</h3>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold">University of Dar es Salaam (2022-Present)</h4>
                        <p className="italic">Bachelor of Science in Computer Science</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold">Udemy.com</h4>
                        <p className="italic">The Complete 2023 Web Development Bootcamp</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold">EC-Council.org</h4>
                        <p className="italic">Introduction to Dark Web, Anonymity, and Cryptocurrency</p>
                        <p className="italic">SQL Injection Attacks</p>
                        <p className="italic">Ethical Hacking Essentials (EHE)</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CV;
