import design from './NavBar.module.css'
import {motion} from 'framer-motion'

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
                        <a href="/#about">About Me</a>
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