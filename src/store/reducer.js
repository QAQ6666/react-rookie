/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 09:51:33
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-17 16:37:41
 * @FilePath: \my-app\src\store\reducer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const initialState = { value :{
    keys:'s',
    date:'fff',
    range:1
}}

function panelReducer(state = initialState,action){
    // console.log(action)
    // let news = {...state}
    if(action.type === 'panel/updateRange'){
        const news = {
            keys:'',
            date:'fsfs',
            range:action.value
        }
        
        // news.value.range = action.value
        // console.log(action.value)
        return {
            ...state,
            value: news
        }
        // return news
    }else if(action.type === 'panel/updateDate'){
        const news = {
            keys:'',
            date:action.value,
            range:''
        }
        return {
            ...state,
            value: news
        }
        // news.value.date = action.value
        // return news
    }else if(action.type === 'panel/updateKey'){
        
        const news = {
            keys:action.value,
            date:'',
            range:''
        }
        return {
            ...state,
            value: news
        }
    }

    return state
}

export default panelReducer;