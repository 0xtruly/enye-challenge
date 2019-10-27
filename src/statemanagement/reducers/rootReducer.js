/* eslint-disable default-case */


const initialState = 

/**Reducer */

{
    userId: '',
    firstName: '',
    lastName: '',
    age: '',
    hobby: '',
    birthday: '',
    tableData: null,
    isDataBeingSent: false,
    isDataSaved: false
}

export const rootReducer = ( state = initialState, { type, payload}) => 
{
    switch (type) {

        case 'userId':
            return { ...state, userId: payload }

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

        case 'asyncRequest':
         return { tableData: payload} 
        
        case 'Sending':
            return {...state, isDataBeingSent: true};

        case 'Saved':
            return {...state, isDataSaving: true};
           
        default:
            return state;
    }
};


