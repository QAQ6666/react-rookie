/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 16:10:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-11 09:43:12
 * @FilePath: \ant-react\antd-demo\src\components\banner\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    UserOutlined,
    BellTwoTone,
    PhoneTwoTone,
    SettingOutlined,
    QuestionCircleTwoTone
} from '@ant-design/icons';
//   import { Button } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
//   import banner from './banner.module.css'

const action = {
    padding: '0 10px',
    fontSize: '18px',
    lineHeight: '64px',
    cursor: 'pointer',
    transition: 'color 0.3s'
}

export default function Banner() {
    let navigate = useNavigate();
    function about() {
        navigate('./about')
    }
    return (
        <>
            {/* <Button type='primary' icon={<QuestionCircleTwoTone style={action} />}></Button> */}
            <QuestionCircleTwoTone style={action} onClick={about} />
            <PhoneTwoTone style={action} />
            <BellTwoTone style={action} />
            <UserOutlined twoToneColor="#52c41a" style={action} />
            <SettingOutlined style={action} />
        </>
    )
}