/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 10:59:31
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 17:27:01
 * @FilePath: \ant-react\antd-demo\src\components\smallbox\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Divider } from "antd"
import SmallTitle from "./smalltitle"
import './index.css'

export default function SmallBox(props) {
    const data = props.data
    return (
        <div className="boxBack col">
            <div style={{ flexGrow: '1' }}>
                <SmallTitle tip={data.tip} title={data.title} />
                <div className="num">
                    <span>{data.single}</span>
                    <span className="num">{data.num}</span>
                </div>
            </div>
            <div style={{height:'30px'}}>
                {props.children}
            </div>
            <div>
                <Divider style={{ margin: '10px 0', background: 'white' }} />
                <div className="bfont">
                    <span style={{ color: '#989898' }}>{data.btitle}</span>
                    <span style={{ padding: '0 5px' }} className='bottom'>{data.single}</span>
                    <span className='bottom'>{data.bottom}</span>
                </div>
            </div>

        </div>
    )
}
