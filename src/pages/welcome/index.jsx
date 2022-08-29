/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 17:09:36
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-11 14:03:00
 * @FilePath: \ant-react\antd-demo\src\pages\welcome\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Outlet } from "react-router-dom"
export default function Welcome(){
    return (
        <>
        {/* <h1>这里是  /index 父路由,下边是 子路由的内容</h1> */}
        <Outlet />
        </>

    )
}