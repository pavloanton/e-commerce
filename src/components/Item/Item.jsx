import useAppContext from '../../context/CartContext'
import ButtonQL from '../Button/Button';


const Item = ({item}) => {

const { dummyText } = useAppContext()

    return (
        <div>
            <div>
                <ButtonQL content={item.name} path={`/itemdetail/${item.id}`}></ButtonQL>
                <h3>{dummyText}</h3>
            {/* <p key={item.id}>{item.name} {item.price}</p> */}
            </div>
        </div>
    )
}

export default Item;