import Item from '../Item/Item';

const ItemList = ({item}) => {
    return (
        <div>
            {item.map((names, idx) => {
                return(
                    <Item key={idx} item={names}/>
                )
            }
            )
            }
        </div>
    )
}

export default ItemList;