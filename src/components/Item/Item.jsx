import ButtonGlobal from '../Button/Button';

const Item = ({item}) => {

    return (
        <div>
            <div>
                <ButtonGlobal content={`Quick Shop`} path={`/itemdetail/${item}`}></ButtonGlobal>
            </div>
        </div>
    )
}

export default Item;