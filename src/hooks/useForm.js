import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidation = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=>{

        const formCheckedValues = {};

        for( const formField of Object.keys(formValidation) ){
            const [ fn, errorMessage ] = formValidation[formField];

            formCheckedValues[ `${formField}Valid` ] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}