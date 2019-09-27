import {userConstant} from './../constants/userconstant'

export function userReducer(state = {}, action) {
    switch (action.type) {
        case userConstant.GET_INFO_SUCCESS:
            
            return{
                ...state,
                loginstatus:true
            }
            break;
        case userConstant.GET_INFO_FAIL:
            
            return{
                ...state,
                loginstatus:false
            }
            break;
        default:
            return{
                ...state,
                loginstatus:false
            }
            break;
            break;
    }
}