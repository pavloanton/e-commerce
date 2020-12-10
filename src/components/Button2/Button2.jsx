import Button from 'react-bootstrap/Button';

const Button2 = ({content, callback}) => {
    return (
            <Button variant="danger" alguin-item="center" id='Button' size="sm" onClick={callback}>{content}</Button>
        )
}

export default Button2;