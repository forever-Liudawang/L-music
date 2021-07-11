/**
 * 缓存数据
 */
import React, {
    createContext,
    useReducer
} from "react"
import {
    fromJS
} from "immutable"
export const CategoryDataContext = createContext({});

// 相当于之前的 constants
export const CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY';
export const CHANGE_ALPHA = 'singers/CHANGE_ALPHA';
export const CHANGE_AREA = 'singers/CHANGE_AREA';

//reducer 纯函数
const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return state.set('category', action.data);
        case CHANGE_ALPHA:
            return state.set('alpha', action.data);
        case CHANGE_AREA:
            return state.set('area',action.data)
        default:
            return state;
    }
};
export const Data = props => {
    //useReducer 的第二个参数中传入初始值
    const [data, dispatch] = useReducer(reducer, fromJS({
        category: -1,
        alpha: '',
        area: -1
    }));
    return ( <
        CategoryDataContext.Provider value = {{
                data,
                dispatch
        }}> 
            {
                props.children
            } 
        </CategoryDataContext.Provider>
    )
}