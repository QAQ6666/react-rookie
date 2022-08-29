/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 14:24:03
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-29 11:29:01
 * @FilePath: \ant-react\antd-demo\src\pages\home\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Layout, Input } from 'antd';
import React, { useState } from 'react';
import MyMenu from '@/components/menu/index';
import './home.css'
import MyHeader from '@/components/header/index'
import { Outlet } from 'react-router-dom';


// const Map  = React.lazy( () => import ('@/pages/map/index'))
// const System  = React.lazy( () => import ('@/pages/system/index'))
// const Team  = React.lazy( () => import ('@/pages/team/index'))
// const User  = React.lazy( () => import ('@/pages/user/index'))
// const Analysis  = React.lazy( () => import ('@/pages/analysis/index'))

const { Sider, Content } = Layout;
const { Search } = Input;


const Home = () => {
    const [collapsed, setCollapsed] = useState(false);

    function onSearch(value) {
        console.log(value);
    }

    return (
        <Layout style={{
            minHeight: '100vh',

        }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                />
                <MyMenu />

            </Sider>
            <Layout className="site-layout">
                <MyHeader collapsed={collapsed} onCollapse={(v) => setCollapsed(v)}></MyHeader>

                <Content
                    className="site-layout-background"
                    style={{
                        // margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: '#000'
                    }}
                >
                    <Outlet />

                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;