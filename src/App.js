/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 13:52:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 14:18:40
 * @FilePath: \ant-react\antd-demo\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import * as echarts from 'echarts';//引入主模块
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


import BaseRouter from './router/router.config'
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/*" index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes> */}

        <BaseRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
