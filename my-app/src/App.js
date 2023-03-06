import logo from './logo.svg';
import './App.css';


import React from 'react';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="intro">
          <h1>Hi, I'm Raj Shah!</h1>
          <h3>Software Developer and Data Scientist</h3>
        </section>
        <section id="about-me">
        <h2>About Me</h2>
          <img id = "raj-pic" src="" alt="Picture of Raj"/>
          <a href="https://www.linkedin.com/in/raj-shah-0904/"> <img id = "link-logo" alt = "Linkedin"/> </a>
          <a href="https://github.com/rajshah0904"> <img id = "git-logo" alt = "Github"/> </a>
          <a href="https://www.instagram.com/rajshah_0904/"> <img id = "ig-logo" alt = "Instagram"/></a>
          <p>My name is Raj Shah and I am currently a freshman, studying 
            Computer Science at the University of Maryland. Some of my
            technical interests include web design, full-stack development, machine
            learning, quantitative finance, and blockchain development.
            Some of my other hobbies include working out, trading stocks, 
            going hiking, and going out with friends. I am looking for an internship
            or job that allows me to apply my skills!
          </p>
        </section>
        

	<section id="education">
		<h2>Education</h2>
    <h4>University of Maryland — College Park, MD</h4>
		<ul>
			<li>Expected May 2025</li>
			<li>Bachelor of Science, Computer Science (FIRE Program, Statistics Minor)</li>
			<li>GPA: 3.7 / 4.0</li>
		</ul>
    <h4>Monroe Township High School — Monroe Twp, NJ</h4>
		<ul>
			<li>Sep 2019 – Jun 2022</li>
			<li>High School Diploma</li>
			<li>GPA: 99.43 | Top 10% | SAT: 1560</li>
		</ul>
	</section>

	<section id="skills">
		<h2>Skills</h2>
		<ul>
			<li>Programming Languages/Technologies: Java, Python, SQL, R, HTML, CSS, Javascript, React.js, Flask, Pandas, Tidyverse</li>
			<li>Notable Courses: Data Structures & Intro to Algorithms, Linear Algebra, Calculus I-III, Discrete Structures</li>
		</ul> 
	</section>

	<section id="experience">
		<h2>Experience</h2>
		<article>
			<h4>WaveLi</h4>
			<p><em>Software Engineer Intern</em></p>
			<p>Nov 2022–Present</p>
			<ul>
				<li>Collaborate on a collective code base with a team of 6 to develop the company website using React.js framework.</li>
				<li>Debug any issues with the company website and on the mobile application to improve user interface.</li>
				<li>Brainstorm new, innovative ideas to expand the outreach of the company in the marketplace.</li>
			</ul>
      <h4>Koalateer</h4>
			<p><em>Chief Technology Officer</em></p>
			<p>Jan 2022–Feb 2023</p>
			<ul>
				<li>Lead a team of 6 to develop a dynamic and interactive website in HTML, CSS, 
          and JS using VSCode and a React.js framework </li>
				<li>Envision and implement my vision for the organization by 
          effectively communicating with 15 team members to strategically delegate tasks.</li>
				<li>Manage legal documents and paperwork on behalf of the organization.</li>
			</ul>
      <h4>MOCORE Lab – Stevens Institute of Technology</h4>
			<p><em>BME VR Development Intern </em></p>
			<p>May 2021–Sep 2021 </p>
			<ul>
				<li>Lead a team of 6 to develop a dynamic and interactive website in HTML, CSS, 
          and JS using VSCode and a React.js framework </li>
				<li>Envision and implement my vision for the organization by 
          effectively communicating with 15 team members to strategically delegate tasks.</li>
				<li>Manage legal documents and paperwork on behalf of the organization.</li>
			</ul>
		</article>
   </section>
   <section id="projects">
          <h2>Projects</h2>
          <article>
			      <h4>HackRU</h4>
			      <p><em>SafeTransit</em></p>
			      <p>Feb 2023</p>
			      <ul>
				      <li>Developed a Flask application that serves to make NJ Transit trains safer by alerting authorities if disturbances are detected in security cameras.</li>
				      <li>Built backend in Python and integrated Google VisionAPI, an ML model differentiating between violent and nonviolent physical contact, and Twilio API to detect violence, weapons, and spills in images and automatically calling the authorities of the issue.</li>
				      <li>For proof of concept, integrated a static webpage to upload a file of images and used a REST API to execute the backend script.</li>
				      <li>Has the potential to be utilized in NJ Transit trains to promote safety for customers according to NJ Transit official judges.</li>
			      </ul>
            <h4>Smith Investment Fund</h4>
			      <p><em>Netflix Ranking System</em></p>
			      <p>Sep 2022</p>
			      <ul>
				      <li>Analyzed a dataset with over 9,000 titles on Netflix in Python using NumPy, Pandas, and Scikit and visualized over 10 sets of trends within the data using Matplotlib.</li>
				      <li>Created a composite score to rank each title by using the correlational weights of the IMDb Score, Rotten Tomatoes, Hidden Gem, and Metacritic Score for each title.</li>
              <li>Designed an algorithm known as NetfScore to rank titles using both popularity and user reviews, 
                unlike the current ranking system that focuses solely on views. </li>
				      <li>Created a PowerPoint presentation depicting prominent trends in data in a succinct and comprehensive manner.</li>
			      </ul>
            <h4>Hack TCNJ (Major League Hacking)</h4>
			      <p><em>JoyScore</em></p>
			      <p>Apr 2022</p>
			      <ul>
				      <li>Built a web application in Python using Jupyter Notebook and Voila server extension that uses Google VisionAPI and Youtube Data API to detect 4 types of user emotions as they are watching a video.</li>
				      <li>Designed a numerical emotion weighting system to provide content recommendation based on a user’s emotions. </li>
              <li>Has potential to be integrated in apps such as Tiktok and Youtube to recommend appropriate content using emotion sentiment score.</li>
				      <li>Won 'Best Use of Google Cloud' award among 50+ undergraduate and high school students, as a high schooler.</li>
			      </ul>
          </article>
        </section>
        <section id="projects">
          <h2>Non-Technical Experience</h2>
          <article>
			      <h4>Tigerway Tutors</h4>
			      <p><em>SAT/AP Tutor</em></p>
			      <p>Dec 2022 - Present</p>
			      <ul>
				      <li>Developed a Flask application that serves to make NJ Transit trains safer by alerting authorities if disturbances are detected in security cameras.</li>
			      </ul>
            <h4>Dominos Pizza</h4>
			      <p><em>Customer Service Representative</em></p>
			      <p>Jul 2022 - Sep 2022</p>
			      <ul>
				      <li>Expedite customer orders by following organization rules of readiness and customer satisfaction.</li>
				      <li>Performed cashier duties that included adjusting the daily money and transaction receipts at theend of each shift.</li>
              <li>Confirmed safety procedures and all daily cleaning are completed each hour.</li>
				      <li>Assist customers with suggestions and answer questions with an amiable demeanor.</li>
			      </ul>
            <h4>Stichies Reselling</h4>
			      <p><em></em></p>
			      <p>Mar 2020 - Aug 2022</p>
			      <ul>
				      <li>Strategically regulated and managed exclusive and sought-after inventory valued over $50,000+</li>
				      <li>Analyzed market trends of 94.9-billion-dollar industry to preemptively purchase high demand goods</li>
              <li>Developed positive consumer relations with 100+ customers in both, marketplace and surrounding community</li>
			      </ul>
          </article>
        </section>        
        <section id="contact-me">
          <h2>Contact Me</h2>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );

}



export default App; 
