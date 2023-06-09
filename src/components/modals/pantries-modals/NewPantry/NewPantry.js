import './NewPantry.scss'
import {useState} from 'react';
import pantryIcon from '../../../../assets/images/icons/kitchen.svg'
import BackButton from '../../../BackButton/BackButton';
const NewPantryModal = (props) => {

    const {show, handleNew, onClose} = props

    const [pantryName, setPantryName] = useState("");

    if(!show){
        return null;
    }

    return (
        <div className="new-pantry" onClick={onClose}>
            <div className='new-pantry__content' onClick={(e) => e.stopPropagation()}>
                <div className='new-pantry__header'>
                    <BackButton onClose={onClose}/>
                    <h2 className='new-pantry__title'> New Pantry </h2>
                </div>
                <form onSubmit={(e) => {handleNew(e, pantryName)}} className='new-pantry__form'>
                    <img className = 'new-pantry__image' src={pantryIcon} alt='Kitchen Icon'/>
                    <p className='new-pantry__label'> Name </p>
                    <input className='new-pantry__input' placeholder="Pantry Name" onChange={(e) => setPantryName(e.target.value)} value={pantryName} ></input>
                    <div className='new-pantry__buttons'>
                        <button className='new-pantry__button' type = "submit">Create</button>
                        <button className='new-pantry__button' type = "button" onClick={onClose}> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPantryModal;