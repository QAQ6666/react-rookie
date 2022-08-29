/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 11:05:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-11 15:18:36
 * @FilePath: \ant-react\antd-demo\src\components\smalltitle\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './index.css'
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons'

const SmallTitle = (props)=>{
    return (
        <div className="smalltitle">
            <span>{props.title}</span>
            <Tooltip placement="top" title={props.tip}>
                <InfoCircleOutlined />
            </Tooltip>
        </div>
    )
}
export default SmallTitle;