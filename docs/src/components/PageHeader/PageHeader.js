import design from './PageHeader.module.css'

const PageHeader = (props) => {
    return ( 
        <div className={design.Container}>
            <hr />
            <h1>{props.title}</h1>
        </div>
     );
}
 
export default PageHeader;