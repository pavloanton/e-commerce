import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ButtonQL = ({content, path, callback, size}) => {
    return (
        <Link to={path}>
        {content.startsWith('http') || content.startsWith('data') ? (
            <img src={content} alt=''></img>
        ) : (
            <Button variant="success" alguin-item="center" id='Button' size={size} onClick={callback}>{content}</Button>
        )}
        </Link>
    )
}

export default ButtonQL;