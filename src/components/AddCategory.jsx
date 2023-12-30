import { useState } from "react";
import PropTypes from 'prop-types';

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [ ...categories, inputValue ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                /* onChange={ (event) => onInputChange(event) } */
                onChange={ onInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    //setCategories: PropTypes.func.isRequired
    onNewCategory: PropTypes.func.isRequired
}