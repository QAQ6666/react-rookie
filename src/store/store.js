/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 10:00:52
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-17 11:28:16
 * @FilePath: \my-app\src\store\store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
import { configureStore } from "@reduxjs/toolkit"
import panelReducer from './reducer'

const store = configureStore({ reducer: panelReducer })

export default store;