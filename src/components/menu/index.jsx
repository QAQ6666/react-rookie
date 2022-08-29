/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 15:01:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-11 10:30:37
 * @FilePath: \ant-react\antd-demo\src\components\header\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
// const menuobj = import('@/assets/menu/index');


const MyMenu = () => {
  // const 
  let navigate = useNavigate();
    function getItem(label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
      }

      const items = [
        getItem('Map', 'map', <PieChartOutlined />),
        getItem('Analysis', 'analysis', <DesktopOutlined />),
        getItem('User', 'user', <UserOutlined />, [
          getItem('Loginout', 'loginout'),
          getItem('Setting', 'setting'),
        ]),
        getItem('Team', 'team', <TeamOutlined />, [
            getItem('We', 'we'), getItem('Ohther', 'ohther')]),
        getItem('System', 'system', <FileOutlined />),
      ];

    return (
    <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={(v)=>{console.log(v);navigate('/index/'+v.key)}}
    />
    )
}
export default MyMenu;

