import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ButtonGlobal = ({content, path, callback}) => {
    return (
        <Link to={path}>
        {content.startsWith('http') || content.startsWith('data') ? (
            <img src={content} alt=''></img>
        ) : (
            <Button variant="success" alguin-item="center" id='Button' onClick={callback}>{content}</Button>
        )}
        </Link>
    )
}

export default ButtonGlobal;