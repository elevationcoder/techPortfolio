import design from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader'
import myHaul from './../../img/myHaulMoment.jpg'
import flockTracker from './../../img/2020-06-16 15-47-01_Moment.jpg'
import dataGem from './../../img/Ruby_Data_Gem_Moment.jpg'
import background from './../../img/cloudBackground.jpg'
import {motion} from 'framer-motion'

const playButtonSvg = (url) => {
    return (
        <motion.div
        whileHover={{scale: 1.3, fill: 'white'}} 
        className={design.PlayButton}
        onClick={(e) => window.open(url, "_blank").focus}
        >
        <svg fill='purple' xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 60 60">
<g>
	<path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
	<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
</g>
</svg>
        

        </motion.div>
    )
}

const projectVideo = (url, thumbnail, desc) => {
    return (
        <div className={design.VideoContainer}>
            <div className={design.Thumbnail}>
                {playButtonSvg(url)}
                <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className={design.Text}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const myHaulDescription = "MyHaul is an application that I designed that is used to help local shippers find independent contractors for same day and distance delivery. It is built using Rails MVC and is implemented with Facebook OAuth for user signin and registry. It uses RESTful practices for client-side navigation as well as the BCrypt gem and cookies and sessions to store user information and server-side authentication." 
const flockTrackerDescription = "Hatch Tracker is another application I designed by myself that lets you track the incubation period of poultry egg batches from various flocks of farm birds. I built this application using Ruby on Rails for the data storage, which I used PostgreSQL and used React for the UI. I utilized the React-Router library for client-side routing and Redux for scalabilty."
const dataGemDescription = "Cosmic Odyssey is an information based CLI application using Ruby. I got all the facts used in the application by scraping them from a website using the Nokogiri gem. It is even published on the Ruby Gems website for public use."

const myHaulUrl = "https://www.youtube.com/watch?v=PAv_PqNHzQM"
const flockTrackerUrl = "https://www.youtube.com/watch?v=PijCOTJGsm8"
const dataGemUrl = "https://www.youtube.com/watch?v=LxgS3yhHdxM&t=15s"

const Projects = () => {
    return ( 
        <div className={design.Projects} id="projects">
            <img className={design.Background} src={background} alt="cloudy background" />
                <PageHeader title={"My Projects"}/>
                <div className={design.ProjectContent}>
                    <div className={design.Paragraph}>
                        <p>
                            All of the projects listed below are original in thought and execution.
                            I was inspired to create these applications based on personal experience 
                            and the trials that certain scenarios bring. I created the MyHaul application 
                            to help local shipping companies quickly find independent contractors to make timely deliveries.
                            The Hatch Tracker application was created to help me keep track of various poultry egg 
                            batches ready for incubation. It helps me keep record of that various incubations stats 
                            and in turn helps me make adjustments for future egg batches.

                            My life hobbies as well as past, current and future occupations are the driving forces behind
                            my passion for programming and if I can make a difference in at least one persons life from one of my
                            applications then every hard earned focus hour is worth it.
                        </p>
                    </div>
                    <div className={design.Videos}>
                    {projectVideo(myHaulUrl, myHaul, myHaulDescription)}
                    {projectVideo(flockTrackerUrl, flockTracker, flockTrackerDescription)}
                    {projectVideo(dataGemUrl, dataGem, dataGemDescription)}
                    </div>
                </div>
        </div>
     );
}
 
export default Projects;