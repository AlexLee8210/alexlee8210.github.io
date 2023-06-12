import React from 'react';
import './HomePage.css';
import PageSection from './PageSection';

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
            <h1 className='title-text'>
                {/* Hi, I'm <br/> */}
                Alexander Lee
            </h1>
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
                <PageSection className='fade-in-section'>
                    <h3 className='internship'>
                        Arion Blue LLC. 
                    </h3>
                    <h3 className='internship-title'>
                        Software Engineer Intern
                    </h3>
                    <p>

                    </p>
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
                    poopoo
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