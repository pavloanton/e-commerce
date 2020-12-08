import ButtonQL from '../Button/Button';


const Item = ({item}) => {

    return (
        <div>
            <div>
                <ButtonQL content={item.name} path={`/itemdetail/${item.id}`}></ButtonQL>
            {/* <p key={item.id}>{item.name} {item.price}</p> */}
            </div>
        </div>
    )
}

export default Item;