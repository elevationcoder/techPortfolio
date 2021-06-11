import design from './Skills.module.css'
import PageHeader from "../PageHeader/PageHeader"
import coding from './../../img/coding.svg'
import {motion} from 'framer-motion'


const listTitleStyle = { fontWeight: 900, color: '#981FE8', marginBottom: '4px', fontSize: '1.2rem'}

const backendSkills =
    <ul>
        <li style={listTitleStyle}>BACKEND</li>
        <li>Ruby - Rails - Sinatra</li>
        <li>C# - ASP.NET Core - ASP.NET MVC</li>
    </ul>

const serverLessSkills =
    <ul>
        <li style={listTitleStyle}>SERVERLESS SKILLS</li>
        <li>MongoDb</li>
    </ul>

const frontendSkills =
    <ul>
        <li style={listTitleStyle}>FRONTEND</li>
        <li>ReactJS - Redux - HTML</li>
        <li> CSS </li>
    </ul>

const ideSkills =
    <ul>
        <li style={listTitleStyle}>IDE SKILLS</li>
        <li>Visual Studio - VSCode</li>
    </ul>

const gameDevSkills = 
    <ul>
        <li style={listTitleStyle}>GAME DEVELOPMENT</li>
        <li>Unity 2D/3D - Roblox Studio</li>
    </ul>

const otherSkills =
    <ul>
        <li style={listTitleStyle}>OTHER SKILLS</li>
        <li>React Dev Tools - Postman</li>
        <li>Git - GitHub - JSON</li>
        <li> RESTful API </li>
    </ul>

const totalSkills =
    [
        frontendSkills, backendSkills, ideSkills, serverLessSkills, gameDevSkills, otherSkills
    ]



const Skills = () => {
    return ( 
        <div className={design.Skills} id="skills">
            <PageHeader title={"My Skills"} />
            <p>
                My programming skills are a mix of professional and solo training.
                I was trained from Flatiron School in Ruby, Sinatra, Ruby on Rails, JavaScript, React and Redux. 
                The languages I learned myself post-education are C#, 
                ASP.NET Core, .NET and Unity. I always strive to learn anything I can, continued knowledge 
                is something I strive for everyday and while it's important to learn new things it is equally important
                to keep the knowledge you already possess. Learning from what you know and do not know forms
                the ultimate outline for success.  
            </p>

            <div className={design.Container}>
                <img className={design.Coding} src={coding} alt="coding" />
                {totalSkills.map(skills => {
                    return (
                        <motion.div className={design.List}
                            whileHover={{scale: 1.3}}
                        >
                            {skills}
                        </motion.div>
                    )
                })}
            </div>

        </div>
     );
}
 
export default Skills;