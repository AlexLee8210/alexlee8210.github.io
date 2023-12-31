import React from 'react';
import './HomePage.css';
import PageSection from './PageSection';
import ExperienceSection from './ExperienceSection';
import CardGrid from '../components/CardGrid';

function reveal(className, anim) {
    var reveals = document.querySelectorAll(className);
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = reveals[i].getBoundingClientRect().height;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add(anim);
            if (i == reveals.length) {
                window.removeEventListener('scroll', reveal);
            }
        }
    }
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function hackerEffect() {
    let elem = document.getElementById('hacker-effect');
    let iterations = 0;
    const interval = setInterval(() => {
        elem.textContent = elem.textContent.split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return elem.dataset.value[index];
                }
                if (letter === ' ') {
                    return ' ';
                }
                if (letter.localeCompare('A') > 0) {
                    return letters[26 + Math.floor(Math.random() * 26)];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        iterations += 1;
        if (iterations > elem.dataset.value.length) {
            clearInterval(interval);
        }
    }, 50);
}

function HomePage() {

    window.onload = hackerEffect;
    window.addEventListener('scroll', () => reveal('.fade-in-section', 'active'));

    window.addEventListener('DOMContentLoaded', () => reveal('.fade-in-section'));

    return (
        <div className='page-container'>
            <div className='title-container'>
                <h1 className='title-text' >
                    <span 
                    id='hacker-effect' data-value='Alexander Lee'>
                    Alexander Lee
                    </span>
                </h1>
            </div>
            <div>
                <h2 className='header-text' id='about'>
                    <div className='fade-in-section'>
                        About
                    </div>
                </h2>
                <div className='fade-in-section'>
                    <hr />
                </div>
                <PageSection className='fade-in-section'>
                    <p>
                        I am currently an undergraduate student at the University of Texas at Austin, where I am pursuing my Bachelor's Degree in Computer Science and a minor in Business.
                        I have a strong background with Java, Python, and C/C++, and I have also used various other languages including JavaScript, HTML/CSS, C#, and SQL. 
                        I have developed apps and websites using various frameworks such as Xamarin.Forms, React, and Flutter, and I am excited to continue creating more in the future. 
                        In my free time, I enjoy working on personal coding projects as well as playing volleyball and working out. 
                    </p>
                </PageSection>
            </div>
            <div>
                <h2 className='header-text' id='experience'>
                    <div className='fade-in-section'>
                        Experience
                    </div>
                </h2>
                <div className='fade-in-section'>
                    <hr />
                </div>
                {/* <div className='fade-in-section'>
                </div> */}
                <PageSection>
                    <ExperienceSection className='fade-in-section' name='R1649' location='Katy, TX (Remote)' title='Software Engineer Intern' dates='June 2023 - Present'>
                        <ul>
                            <li>
                                Collaborate with a team of designers and developers to translate wireframes and mockups into fully functional React components
                            </li>
                            <li>
                                Utilize React components, hooks, and state management to build interactive and dynamic user interfaces
                            </li>
                            <li>
                                Integrate routing and navigation using React Router to create a seamless user experience across multiple pages
                            </li>
                            <li>
                                Incorporated version control using Git and collaborated with team members using platforms like GitHub for efficient code management and collaboration
                            </li>
                        </ul>
                    </ExperienceSection>
                    <ExperienceSection className='fade-in-section' name='Arion Blue LLC.' location='Houston, TX' title='Software Engineer Intern' dates='Jan 2022 - May 2022'>
                        <ul>
                            <li>
                                Designed and integrated read features, allowing seamless retrieval and display of data from the SQL database in a user-friendly manner
                            </li>
                            <li>
                                Employed advanced debugging techniques within Chrome Developer Tools to diagnose and fix issues, improving website functionality
                            </li>
                            <li>
                                Developed a robust Django-based website that enables efficient searching and retrieval of employee records
                            </li>
                            <li>
                                Utilized design software to create a cohesive set of scalable vector icons for engineering-related topics
                            </li>
                        </ul>
                    </ExperienceSection>
                </PageSection>
            </div>
            <div>
                <h2 className='header-text' id='projects'>
                    <div className='fade-in-section'>
                        Projects
                    </div>
                </h2>
                <div className='fade-in-section'>
                    <hr />
                </div>
                <PageSection>
                    <CardGrid className='fade-in-section'/>
                </PageSection>
            </div>
            <div>
                <h2 className='header-text' id='contact'>
                    <div className='fade-in-section'>
                        Contact
                    </div>
                </h2>
                <div className='fade-in-section'>
                    <hr />
                </div>
                <PageSection className='fade-in-section'>
                    <b>Email</b>:&nbsp;
                        <a href="mailto:alexander.lee@utexas.edu"
                            rel='noreferrer'
                            target='_blank'
                        >
                        alexander.lee@utexas.edu</a> 
                    <br/>
                    <b>Number</b>: +1 (346) 843-9466 <br/>
                </PageSection>
            </div>
        </div>
    );
}

export default HomePage;