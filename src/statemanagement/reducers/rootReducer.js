/* eslint-disable default-case */

const initialState = 

/**Reducer */

{
    firstName: '',
    lastName: '',
    age: '',
    hobby: '',
    birthday: '',
    tableData: [] 
}

export const rootReducer = ( state = initialState, { type, payload}) => 
{
    switch (type) {

        case 'firstName':
            return { ...state, firstName: payload };
            
        case 'lastName':
            return { ...state, lastName: payload };

        case 'age':
            return { ...state, age: payload };

        case 'hobby':
            return { ...state, hobby: payload };

        case 'birthday':
            return { ...state, birthday: payload };

        case 'submit':
            return {tableData: [...state.tableData, payload] };

        default:
            return state;
    }
};