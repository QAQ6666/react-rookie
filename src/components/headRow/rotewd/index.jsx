/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 15:47:36
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-11 16:26:10
 * @FilePath: \ant-react\antd-demo\src\components\headRow\rotewd\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

const ChildSpan = (props) => {
    if (props.v) {
        return <CaretUpOutlined style={{ color: 'red' }} />
    } else {
        return <CaretDownOutlined style={{ color: 'green' }} />
    }
}


const Rotewd = (props) => (
    <>
        <span>周同比
            <span style={{padding:'0 5px'}}>{props.week.v}%</span>
            <ChildSpan v={props.week.r} />
        </span>
        <span>日环比
            <span style={{padding:'0 5px'}}>{props.day.v}%</span>
            <ChildSpan v={props.day.r} />
        </span>
    </>
)

export default Rotewd;