import*as types from'./actionTypes';

const initialState ={
    error:'',
    loading:false,
    cart:[],
    orders:[]
}
const productReducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
    
            case types.ADD_PRODUCT_CART_REQUEST:
                return{
                   ...state,
                   error:'',  
                   loading:true,
                }
                case types.ADD_PRODUCT_CART_SUCCESS:
                return{
                   ...state,
                   cart:[...state.cart,payload],
                   error:'',
                   loading:false
                }
                case types.ADD_PRODUCT_CART_FAILURE:
                return{
                   ...state,
                   error:payload,
                   loading:false
                }
                case types.FETCH_CART_REQUEST:
                    return{
                       ...state,
                       error:'',  
                       loading:true,
                    }
                    case types.FETCH_CART_SUCCESS:
                    return{
                       ...state,
                       cart:[...payload],
                       error:'',
                       loading:false
                    }
                    case types.FETCH_CART_FAILURE:
                    return{
                       ...state,
                       error:payload,
                       loading:false
                    }
                    case types.REMOVE_PRODUCT_CART_REQUEST:
                        return{
                           ...state,
                           error:'',  
                           loading:true,
                        }
                        case types.REMOVE_PRODUCT_CART_FAILURE:
                        return{
                            ...state,
                            error:payload,
                            loadimg:false
                        }
                        case types.FETCH_ORDERS_REQUEST:
                            return{
                               ...state,
                               error:'',  
                               loading:true,
                            }
                            case types.FETCH_ORDERS_SUCCESS:
                            return{
                               ...state,
                               orders:[...payload],
                               error:'',
                               loading:false
                            }
                            case types.FETCH_ORDERS_FAILURE:
                                return{
                                   ...state,
                                   error:payload,
                                   loading:false
                                }
        default: 
        return state;
    }
}
export default productReducer;