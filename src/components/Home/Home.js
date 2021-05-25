import design from './Home.module.css'
import code from './../../img/code.png'
import atom from './../../img/Stylized-atom.svg'
import thinkCode from './../../img/Code_thinking.svg'

const Home = () => {
    return ( 
        
        <div className={design.Home}>
            <div className={design.Container}>
                <h1 className={design.Hello}>Hello world!</h1>
                <h1>Welcome to my Website</h1>
            </div>
            <img className={design.Code} src={code} alt="code"></img>
            <img className={design.Atom} src={atom} alt="atom"></img>
            <img className={design.ThinkCode} src={thinkCode} alt="Code thinking"></img>
        </div>
     );
}
 
export default Home;