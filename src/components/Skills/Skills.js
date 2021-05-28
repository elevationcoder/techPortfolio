import design from './Skills.module.css'
import PageHeader from "../PageHeader/PageHeader"
import coding from './../../img/coding.svg'


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

const otherSkills =
    <ul>
        <li style={listTitleStyle}>OTHER SKILLS</li>
        <li>React Dev Tools - Postman</li>
        <li>Git - GitHub - JSON</li>
        <li> RESTful API </li>
    </ul>

const totalSkills =
    [
        backendSkills, serverLessSkills, frontendSkills, ideSkills, otherSkills
    ]



const Skills = () => {
    return ( 
        <div className={design.Skills} id="skills">
            <PageHeader title={"My Skills"} />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Facilis dignissimos quisquam ad eius! Esse, accusantium 
                accusamus vitae inventore enim laboriosam, voluptates 
                impedit non in incidunt sequi exercitationem dolor similique maiores?
            </p>

            <div className={design.Container}>
                <img className={design.Coding} src={coding} alt="coding" />
                {totalSkills.map(skills => {
                    return (
                        <div className={design.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>

        </div>
     );
}
 
export default Skills;