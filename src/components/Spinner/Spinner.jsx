import "./Spinner.scss";
import spinner from '../../images/spinner.gif';


const Spinner = () => {
    return (
        <div id='Spinner'>
            <img src={spinner} alt="Loading"></img>
        </div>
    )
}

export default Spinner;