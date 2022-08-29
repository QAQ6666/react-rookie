/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 15:01:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 17:22:15
 * @FilePath: \ant-react\antd-demo\src\components\header\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
  import React from 'react';
  import { Layout } from 'antd';
import Banner from './banner/index'
  const { Header } = Layout;

  const right = {
    display: 'flex',
    justifyContent:'space-between',
    paddingRight : '44px'
  }
  

const MyHeader = (props) => {
    const collapsed  = props.collapsed
    const onCollapse = props.onCollapse
    return (<>
    <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            
            <div style={right}>
                <div>
                {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => onCollapse(!collapsed),
              }
            )}
                </div>
           
            <div >
            < Banner/>
            </div>

            </div>
          </Header>
    </>)
}
export default MyHeader;

