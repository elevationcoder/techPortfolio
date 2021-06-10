import design from './NavBar.module.css'
import {motion} from 'framer-motion'


// const resumeLink = "https://drive.google.com/file/d/1qL5BQ5WwGTKkBXPGWWMP-7oQLAoDElkx/view?usp=sharing"
const NavBar = () => {
    return ( 
        <div className={design.NavBar}>
            <nav>
                <ul>
                    <motion.li
                        whileHover={{scale: 1.2}}
                    >
                        <a href="/">Home</a>
                    </motion.li>

                    <motion.li
                        whileHover={{scale: 1.2}}
                    >
                        <a href="/#about">Get To Know Me</a>
                    </motion.li>

                    <motion.li
                        whileHover={{scale: 1.2}}
                    >
                        <a href="/#skills">Skills</a>
                    </motion.li>

                    <motion.li
                        whileHover={{scale: 1.2}}
                    >
                        <a href="/#projects">Projects</a>
                    </motion.li>

                    <motion.li
                        whileHover={{scale: 1.2}}
                    >
                        <a href="/#contact">Contact</a>
                    </motion.li>
                    
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;