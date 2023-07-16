import React from 'react';
import './HomePage.css';
import PageSection from './PageSection';
import ExperienceSection from './ExperienceSection';

function reveal() {
    var reveals = document.querySelectorAll(".fade-in-section");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = reveals[i].getBoundingClientRect().height;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        if (i == reveals.length) {
            window.removeEventListener("scroll", reveal);
        }
      }
    }
}

function HomePage() {
    window.addEventListener("scroll", reveal);
    reveal();
    return (
        <div className="page-container">
            <div className='title-container'>
                <h1 className='title-text'>
                    {/* Hi, I'm <br/> */}
                    <span>
                    Alexander Lee
                    </span>
                </h1>
            </div>
            <div>
                <div className='fade-in-section'>
                    <h2 className='header-text' id='about'>
                        About
                    </h2>
                    <hr />
                </div>
                <PageSection className='fade-in-section'>
                    <p>
                        {/* I have a strong background with Java and Python, as well as proficiency in C#, C, JavaScript, HTML, CSS, Dart, and 64-bit ARM assembly. */}
                        I am currenly an undergraduate student at the University of Texas at Austin, where I am pursuing my Bachelor's Degree in Computer Science and a minor in Business. 
                        I have developed apps and websites using various frameworks such as Xamarin Forms, React, and Flutter, and I am excited to continue creating more in the future. 
                        In my free time, I enjoy working on personal coding projects as well as playing volleyball and working out.
                    </p>
                </PageSection>
            </div>
            <div>
                <div className='fade-in-section'>
                    <h2 className='header-text' id='experience'>
                        Experience
                    </h2>
                    <hr />
                </div>
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
                <div className='fade-in-section'>
                    <h2 className='header-text' id='projects'>
                        Projects
                    </h2>
                    <hr />
                </div>
                <PageSection className='fade-in-section'>
                    Projects
                </PageSection>
            </div>
            <div>
                <div className='fade-in-section'>
                    <h2 className='header-text' id='contact'>
                        Contact
                    </h2>
                    <hr />
                </div>
                <PageSection className='fade-in-section'>
                    <b>email</b>: reach.alexander.lee@gmail.com <br/>
                    <b>number</b>: +1 (346) 843-9466 <br/>
                </PageSection>
            </div>
        </div>
    );
}

export default HomePage;