import PageHeader from '../PageHeader/PageHeader'
import design from './About.module.css'
import me from './../../img/Profile1-pic.JPG'
import {motion} from 'framer-motion'

const About = () => {
    return ( 
        <div className={design.AboutMe} id="about">
            <PageHeader title={"About Me"} />
            <div className={design.Container}>
                <div className={design.Text}>
                    <h2>Hi! I'm Ian</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veniam, sed. Sapiente, illo deserunt velit ad eius nobis molestiae 
                        earum facere vel tempora placeat. Earum provident, odio hic modi 
                        maxime quam natus accusantium porro ab deleniti mollitia est consectetur 
                        dicta expedita esse repellendus iusto optio dolorum doloremque itaque 
                        perspiciatis! Nostrum voluptas id dolores. Optio neque ab hic dolor quas. 
                        Ut et laudantium id, maiores officiis nulla nesciunt mollitia nam quas, quam ab?
                        Laudantium deleniti incidunt reiciendis doloribus ipsa, explicabo mollitia 
                        quaerat soluta veniam sapiente facilis, qui repellat porro corrupti error. 
                        Odit quasi at odio eligendi id deleniti sed tenetur, excepturi possimus.
                    </p>
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