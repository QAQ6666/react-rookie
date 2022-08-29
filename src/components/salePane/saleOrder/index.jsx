/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-12 15:03:53
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 15:32:24
 * @FilePath: \ant-react\antd-demo\src\components\saleOrder\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default function SaleOrder({name,num}){

    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <span>{name}</span>
            <span>{num}</span>
        </div>
    )
}