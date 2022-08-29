/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-10 08:52:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-17 16:24:52
 * @FilePath: \ant-react\antd-demo\src\pages\about\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import HeadRow from '@/components/headRow';
import {
    EllipsisOutlined
} from '@ant-design/icons';
import {  Card } from 'antd';
import './index.css'
import { useState } from 'react';

import LeftCard from '@/components/cardCon/leftCard';
import RightCon from '@/components/cardCon/rightCard';
import { Provider } from "react-redux"
import store from '@/store/store'
import TabsCenter from '@/components/tabsCenter';





function Analysis() {
    // const [cur, setCur] = useState(0)
    const [typep, setTypep] = useState(null)
    // const [date, setDate] = useState('')
    const onChange = (key) => {
        // console.log(key);

        // setTypep(key)
    }

    // const dateChange = (v) => {
    //     let start = dateFormat(v[0])
    //     let end = dateFormat(v[1])
    //     // console.log(start, end)
    //     setDate(start + end)
    // }
    return (
        < div className='sc'>
            <HeadRow />
            <div style={{ marginBottom: '20px' }}></div>
            <Provider store={store}>
               <TabsCenter />
            </Provider>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Card
                    size="small"
                    title="线上热门搜索"
                    extra={<a><EllipsisOutlined /></a>}
                    style={{
                        width: '100%',

                    }}
                >
                    <LeftCard />
                </Card>
                <div style={{ marginLeft: '20px' }}></div>
                <Card
                    size="small"
                    title="销售额类别占比"
                    extra={<a><EllipsisOutlined /></a>}
                    style={{
                        width: '100%',
                    }}
                >
                    <RightCon></RightCon>
                </Card>
            </div>
        </div>
    )
}
export default  Analysis;