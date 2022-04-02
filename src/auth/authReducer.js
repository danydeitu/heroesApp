import {types} from '../types'

export const authReducer = (state = {}, action) => {
  

    switch (action?.type) {
        case types.login:
            
            return {
                ...action.payload,
                logueado : true
            }
        case types.logout :

            return {
                logueado : false
            }
    
        default:
            return state;
    }
}
