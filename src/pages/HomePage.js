import { React, useEffect } from 'react';
import '../styles/HomePage.css';
import PageSection from './PageSection';
import ExperienceSection from './ExperienceSection';
import CardGrid from '../components/CardGrid';

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
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='page-container'>
            <div className='title-container'>
                <h1 className='title-text' >
                    <span id='hacker-effect' data-value='Alexander Lee'>
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
                        I have developed apps and websites using various frameworks such as .NET, React, and Flutter, and I am excited to continue creating more in the future. 
                        In my free time, I enjoy working on personal coding projects as well as playing volleyball, working out, and cooking. 
                    </p>
                </PageSection>
            </div>
            <div>
                <h2 className='header-text' id='education'>
                    <div className='fade-in-section'>
                        Education
                    </div>
                </h2>
                <div className='fade-in-section'>
                    <hr />
                </div>
                <PageSection>
                    <ExperienceSection
                        className='fade-in-section'
                        name='University of Texas at Austin'
                        location='Austin, TX'
                        title='BS Computer Science and Mathematics, Minor in Business'
                        dates='Aug 2022 - Present'
                    >
                        <p>
                            GPA: <b>3.92</b><br/>
                            Relevant Coursework:
                            <ul>
                                <li>
                                    Fall 2025: &ensp;&nbsp;<b>Compilers</b>, <b>Computer Networks</b>
                                </li>
                                <li>
                                    Spring 2025: &ensp;&nbsp;<b>Distributed Computing</b>, <b>Algorithms & Complexity</b>
                                </li>
                                <li>
                                    Fall 2025: &ensp;&nbsp;<b>Cloud Computing</b>, <b>Object-Oriented Programming</b>, Number Theory
                                </li>
                                <li>
                                    Spring 2024: &ensp;&nbsp;<b>Software Engineering</b>, <b>Principles of Machine Learning</b>, Differential Equations
                                </li>
                                <li>
                                    Fall 2023: &emsp;&emsp;&nbsp;<b>Operating Systems</b>, MIS, Competitive Programming
                                </li>
                                <li>
                                    Spring 2023: &ensp;&nbsp;<b>Computer Architecture</b>, Linear Algebra
                                </li>
                                <li>
                                    Fall 2022: &emsp;&emsp;&nbsp;<b>Data Structures</b>, Discrete Math
                                </li>
                            </ul>
                        </p>
                    </ExperienceSection>
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
                    <ExperienceSection
                        className='fade-in-section'
                        name='Amazon Web Services'
                        location='Seattle, WA'
                        title='Software Development Engineer Intern'
                        dates='May 2025 - Aug 2025'
                    >
                        <ul>
                            <li>
                                Designed and implemented a relationship management system for analytics metrics using PySpark
                            </li>
                            <li>
                                Architected a centralized historical stability framework with Apache Iceberg and AWS Glue, eliminating redundant dataset-level tooling and saving ~100 engineering hours per quarter
                            </li>
                            <li>
                                Enabled metric backfilling, reducing compute costs by ~70% and saving 1000+ DPU-hours monthly
                            </li>
                            <li>
                                Built and maintained a DynamoDB table with AWS CDK and sweepers to store and manage metric relationships
                            </li>
                        </ul>
                    </ExperienceSection>
                    <ExperienceSection
                        className='fade-in-section'
                        name='SoundBite'
                        location='Remote'
                        title='Software Engineer Intern'
                        dates='May 2024 - Aug 2024'
                    >
                        <ul>
                            <li>
                                Transcribed and vectorized over 20,000 podcast episodes using OpenAI’s Whisper and stored embeddings in a Pinecone database
                            </li>
                            <li>
                                Leveraged the NVIDIA CUDA toolkit and parallel processing for ML models, achieving a 24× speedup in distributed computation
                            </li>
                            <li>
                                Integrated REST and GraphQL APIs with Google Cloud, Dropbox, PodChaser, and Spotify to deliver dynamic podcast content
                            </li>
                            <li>
                                Designed secure authentication flows using Google OAuth2, bearer tokens, and session cookies
                            </li>
                            <li>
                                Utilized React hooks, state management, and Tailwind CSS to build interactive UIs in Next.js
                            </li>
                            <li>
                                Automated batch cloud job submission and monitoring with Bash scripts on Linux
                            </li>
                        </ul>
                    </ExperienceSection>
                    <ExperienceSection
                        className='fade-in-section'
                        name='R1649 Equity Partners'
                        location='Remote'
                        title='Software Engineer Intern'
                        dates='June 2023 - May 2024'
                    >
                        <ul>
                            <li>
                                Translated design wireframes into reusable React components, improving development collaboration
                            </li>
                            <li>
                                Implemented React Router to enable seamless navigation across multi-page interfaces
                            </li>
                            <li>
                                Used Git and GitHub for version control and code reviews, maintaining clean and modular codebases
                            </li>
                            <li>
                                Contributed to front-end architecture and component reusability for internal dashboards
                            </li>
                        </ul>
                    </ExperienceSection>
                    <ExperienceSection
                        className='fade-in-section'
                        name='Arion Blue LLC.'
                        location='Houston, TX'
                        title='Software Engineer Intern'
                        dates='Jan 2022 - May 2022'
                    >
                        <ul>
                            <li>
                                Designed and integrated read features for efficient SQL data retrieval and display in a Django web app
                            </li>
                            <li>
                                Debugged and optimized website functionality using Chrome DevTools
                            </li>
                            <li>
                                Developed a Django-based employee record system supporting dynamic search and filtering
                            </li>
                            <li>
                                Created scalable vector icons for engineering-related features to improve UI cohesion
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