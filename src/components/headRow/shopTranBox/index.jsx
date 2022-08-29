/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 15:29:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 17:33:05
 * @FilePath: \ant-react\antd-demo\src\components\shopTranBox\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Progress } from "antd";
import SmallBox from "../smallbox/index";
// import './index.css'

const datas = {
    title: '线上购物转化率',
    single: '',
    bottom: '',
    tip:'支付笔数',
    btitle:'',
    num:'78%'
  
}
const ShopTranBox = ()=>  (
        <SmallBox data = {datas}>
            <Progress strokeLinecap="butt" strokeColor={'#19aeae'} percent={75} showInfo={false} />
        </SmallBox>
    )

    export default ShopTranBox;