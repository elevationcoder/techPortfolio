import PageHeader from '../PageHeader/PageHeader'
import design from './About.module.css'
import me from './../../img/Profile1-pic.JPG'
import {motion} from 'framer-motion'

const About = () => {
    return ( 
        <div className={design.AboutMe} id="about">
            <PageHeader title={"Get To Know Me"} />
            <div className={design.Container}>
                <div className={design.Text}>
                    <h2>Hi! I'm Ian</h2>
                    <p>
                        I was born and raised in Colorado and I live near the Front Range with
                        my wife of 8 years and my two boys ages 7 and 4. I have worked in the restaurant 
                        industry for 8 years, and up until recently I was working the transportation industry for the last 5 years.
                        Although I love computers and the science behind them, I never found myself doing it professionally. My dad 
                        has been programming computers for 30 years and my brother is an IT Specialist and yet I never pictured myself being in the techincal industry... until now. 
                    </p>
                    <p>
                        A little over a year ago I found myself at a crossroads in my career and I had to choose whether to 
                        continue my career in a place where growth was all but exhausted or take a chance and go for something
                        that I enjoy and could potentially better family's lives. I decided the latter because although
                        there is an inherent risk leaving a position you know and and can rely on, making the career change
                        put my future in my hands and you can become more successful when you are free to make the decisions that are right for
                        you.
                    </p>
                    <p>
                        Stepping into the world of programming has bettered me as a person by making me look at all the of the
                        different ways things can be resolved as well as appreciate the finer things
                        in life we typically take for granted.
                    </p>
                <div className={design.SecondText}>
                    <p>
                        I hope you enjoy my portfolio and what I have created in the "Projects" section,
                        I designed my projects based off obstacles that I have encountered in my hobbies and 
                        occupations that I have always wanted to use to make those tasks easier. Please feel free 
                        to contact me using the links in the "Contact" section. I would love any feedback on my projects and portfolio!
                    </p>
                </div>
                </div>
                <div className={design.Photo}>
                    <motion.img className={design.Me} src={me} alt="myProfilePic"
                        whileHover={{scale: 1.3, x: -30}}
                        initial={{opacity: 0, scale: 0, x: 100}}
                        animate={{opacity: 1, scale: 1, x: 0}}
                        transition={{duration: .5}}
                    ></motion.img>
                </div>
            </div>
        </div>
     );
}
 
export default About;