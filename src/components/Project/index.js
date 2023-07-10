import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {

    return (
        <>
            <div className='container contact-page'>
                    <h1>
                       My Projects
                    </h1>
                    <div className='contact-form'>
                        <div className='project project-1'>
                            <h2>Open Source Contribution</h2>

                            <h3 class="baby_header"> Outreachy OpenSource Contributions with ChRIS Project<a href="http://chrisproject.org/"> Click To View</a></h3>
                           <ul class="list">
                                <li>Software Testing and Validation</li>
                                <li>DevOps Principles</li>
                                <li>Linux, Docker, Kubernetes</li>
                                <li>Continuous Integration/Continuous Delivery</li>
                                <li>Antora, Asciidoc, Markdown</li>
                            </ul>

                        </div>

                        <div className='project project-3'>
                        <h3 class="setup">AI project Using OpenAI GPT-3</h3>
                        <h3><a href="https://ghost-stories.netlify.app/">Click to View</a></h3>
                        <ul class="list">
                            <li>Created an AI project that auto generates diagnosis based on Symptoms</li>
                            <li>Used Openai's GPT-3 Davinci Model</li>
                            <li>Used React and deployed on Netlify</li>
                        </ul>
                        </div>
{/* 
                        <div className='project project-3'>
                        <h3 class="setup">Laravel Project Using Digital Ocean, php, MySQL and APache server</h3>
                        <h3><a href="https://github.com/Mfonn/altsch_mini_project">Click to View</a></h3>
                        <ul class="list">
                            <li>DevOps project using Debian, Apache, MySQL</li>
                            <li>Setup Debain 11 on a virtual machine instance with Digital Ocean</li>
                            <li>Setup Apache2 server with dependencies</li>
                            <li>Setup MySQL with credentials and a database</li>
                        </ul>
                        </div> */}

{/* 

                        <div className='project project-5'>
                        <h3 class="setup">Containerized Django and React Application using Docker, Nginx and Digital Ocean</h3>
                        <h3><a href="https://github.com/Mfonn/hng2">Click To View</a></h3>
                        <ul class="list">
                            <li>DevOps project using Docker, Django, NGINX</li>
                            <li>Created Docker images for React and Django application and uploaded to Docker Hub</li>
                            <li>Created a Docker-compose file that spun up images into containers and connected with each other</li>
                            <li>Used reverse proxy in NGINX to point port 3000 to server</li>
                        </ul>
                        </div> */}

                        {/* <div className='project project-6'>
                        <h3 class="setup">Ansible Playbook to Setup Containerized Application on a remote server</h3>
                        <h3><a href="https://github.com/Mfonn/Ansible-ChRIS">Click To View</a></h3>
                        <ul class="list">
                            <li>DevOps project using Docker, and Infrastructure as Code.</li>
                            <li>Install Docker and docker-compose on remote server</li>
                            <li>Added Docker to sudo group</li>
                            <li>Cloned repository and got application running on port `8000`</li>
                        </ul>
                        </div> */}

                        <div className='project project-4'>
                        <h3 class="setup">Co-Founder for HealthTech Startup</h3>
                        <h3><a href="https://igetbelle.com/news">Click to View</a></h3>
                        <ul class="list">
                            <li>Wrote SEO articles on management of health conditions</li>
                            <li>Created AI Chatbot using Diagflow to provide Obstetric consultancy services to users</li>
                            <li>Gathered and documented data for diagnosis for AI to gain knowledge from.</li>
                            {/* <li>Managed Social Media accounts</li>
                            <li>Used Google Cloud Platform for admin management of Software services.</li> */}
                            <li>Actively participated in Agile meetings to brainstorm on a problem space and bring ideas on how to pitch product.</li>
                        </ul>
                        </div>


                        <div className='project project-7'>
                        <h3 class="setup">Colab Project</h3>
                        <h3><a href="https://www.joincolab.io/projects/eyecare">Click To View</a></h3>
                        <ul class="list">
                            <li> Actively participated in Agile meetings to brainstorm on a problem space, propose
                                a solution and method of implementation of solution.</li>
                            <li>Worked remotely to collaborate with project managers and product designer to set
                                    realistic milestones during Scrum.</li>
                            <li>Collaborated with Product Designer and Software Developer to convert wireframe
                                    from figma to user interfaces to improve user experience while working through
                                    user feedback and interactions.</li>
                        </ul>
                        </div>

                        <div className='project project-8'>

                        <h3 class="setup">A Personal Dashboard</h3>
                        <h3><a href="https://mfonn.github.io/My-personal-dashboard">Click To View</a></h3>
                        <ul class="list">
                            <li>Created a Personal Dashboard using Angular, a Javascript Framework</li>
                            <li>Worked with Restful Apis and Angular animation transitions</li>
                        </ul>
                        </div>
                        <div className='project project-9'>

                        <h2>Volunteer</h2>

                        <h3 class="setup">Futurize Africa Mentor</h3>
                             <p class="words">Mentored a team of Students Building tech solutions in Africa</p>
                             <p class="words">Prepared mentees for public speaking and presenting solutions-problems to stakeholders</p>
                              <p class="words">Provided Insight based on my clinical perspective on how tech solutions work in healthcare</p>

                        <h3 class="setup">Medical Officer</h3>
                            <p class="words"> Assisted In Kidney Transplant Surgeries </p>

                            <p class="words">Managed patients post-transplant to discharge</p>
                            <p class="words">Took part in Clinics and Ward Round activities</p>
                        </div>
                    </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact