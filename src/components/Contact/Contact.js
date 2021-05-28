import { FaYoutube, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import design from './Contact.module.css'

const youtubeUrl = "https://www.youtube.com/channel/UCUXp0NCMdAXvoAzu6TJtCuw"
const githubUrl ="https://github.com/elevationcoder?tab=repositories"
const twitterUrl = "https://twitter.com/iantmarrs"
const linkedInUrl = "https://www.linkedin.com/in/ian-marrs134/"

const handleUrl = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return ( 
        <div className={design.Contact} id="contact">
            <h1>FRAMER-MOTION</h1>
            <div className={design.ContactIcons}>
                <FaYoutube color="white" size="30px" style={{padding: "1%"}} 
                    onClick={handleUrl(youtubeUrl)}
                />
                <FaGithub color="white" size="30px" style={{padding: "1%"}} 
                    onClick={handleUrl(githubUrl)}
                />
                <FaLinkedin color="white" size="30px" style={{padding: "1%"}} 
                    onClick={handleUrl(linkedInUrl)}
                />
                <FaTwitter color="white" size="30px" style={{padding: "1%"}} 
                    onClick={handleUrl(twitterUrl)}
                />
            </div>
            
        </div>
     );
}
 
export default Contact;