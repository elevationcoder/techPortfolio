import { FaYoutube, FaGithub, FaTwitter, FaLinkedin, FaDochub } from "react-icons/fa";
import design from './Contact.module.css'
import {motion} from 'framer-motion'

const youtubeUrl = "https://www.youtube.com/channel/UCUXp0NCMdAXvoAzu6TJtCuw"
const githubUrl ="https://github.com/elevationcoder?tab=repositories"
const twitterUrl = "https://twitter.com/iantmarrs"
const linkedInUrl = "https://www.linkedin.com/in/ian-marrs134/"
const resumeLink = "https://dochub.com/ian-t-marrs/275eAYrVo6prvO6KzXnBNQ/techresume-2021-pdf?dt=CK-5pFdu9pMgTcjyTXB6"

const handleUrl = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return ( 
        <div className={design.Contact} id="contact">
            <div className={design.ContactIcons}>
                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    
                    <FaYoutube color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(youtubeUrl)}
                    />
                </motion.div>

                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaGithub color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(githubUrl)}
                    />
                </motion.div>

                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaLinkedin color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(linkedInUrl)}
                    />
                </motion.div>

                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaTwitter color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(twitterUrl)}
                    />
                </motion.div>
                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaDochub color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(resumeLink)}
                    />
                </motion.div>
            </div>
            
        </div>
     );
}
 
export default Contact;