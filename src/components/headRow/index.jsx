/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 14:44:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 17:33:51
 * @FilePath: \ant-react\antd-demo\src\components\headRow\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Row, Col } from "antd"
import SalesBox from './salesBox'
import VisitBox from './visitBox'
import PayBox from "./payBox"
import ShopTranBox from "./shopTranBox"
import './index.css'

const viewList = [
    <SalesBox />,
    <VisitBox />,
    <PayBox />,
    <ShopTranBox />

]

export default function HeadRow() {

    const rowBox = viewList.map((item, index) => {
        return <Col span={6} key={index}>
            {item}
        </Col>
    })
    return (

        <Row>
            {rowBox}
        </Row>

    )
}
