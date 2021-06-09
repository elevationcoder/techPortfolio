import design from './Home.module.css'
import code from './../../img/code.png'
import atom from './../../img/Stylized-atom.svg'
import thinkCode from './../../img/Code_thinking.svg'
import WaveLine from './WaveLine'
import {motion} from 'framer-motion'

const Home = () => {
    return ( 
        <div className={design.Home}>
            <WaveLine />
            <div className={design.Container}>
                <h1 className={design.Hello}>Hello!</h1>
                <h2>Welcome to my Portfolio!</h2>
            </div>
            <motion.img className={design.Code} src={code} alt="code"
                initial={{opacity: 0, y: 600}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 2}}
            ></motion.img>
            <motion.img 
                className={design.Atom} 
                src={atom} 
                alt="atom"
                initial={{scale: 0}}
                animate={{scale: 1, rotate: 360}}
                transition={{duration: 3}}
                >    
            </motion.img>
            <motion.img className={design.ThinkCode} src={thinkCode} alt="Code thinking"
                initial={{opacity: 0, x: -800}}
                animate={{opacity:1, x: 0}}
                transition={{duration: 2}}
            ></motion.img>
        </div>
     );
}
 
export default Home;