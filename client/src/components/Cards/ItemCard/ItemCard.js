import './ItemCard.scss'
import editIcon from '../../../assets/images/icons/edit.svg'
import deleteIcon from '../../../assets/images/icons/delete.svg'

const ItemCard = (props) => {
    const {itemName, icon, onClickItem, onClickEdit, onClickDelete} = props;
    return (
        <>
            <div className='item-card'>
                <div onClick={onClickItem} className='item-card__body'>
                    <h4 className='item-card__title'> {itemName} </h4>
                    <img  className='item-card__icon'src={icon} alt="icon"></img>
                </div>
                <div className='item-card__buttons'>
                    <div onClick={onClickEdit} className='item-card__button item-card__button--left'>
                        <img  className='item-card__bt-icon' src={editIcon} alt="icon"></img>
                    </div>
                    <div onClick={onClickDelete} className='item-card__button'>
                        <img  className='item-card__bt-icon' src={deleteIcon} alt="icon"></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ItemCard;