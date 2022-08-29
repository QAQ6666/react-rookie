/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 09:08:00
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-11 10:30:51
 * @FilePath: \ant-react\antd-demo\src\router\router.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRoutes } from 'react-router-dom'
import Home from '@/pages/home/index'
import Login from '@/pages/login';

import Welcome from '@/pages/welcome';
import NotFound from '@/pages/notFound';
import About from '@/pages/about';

import Map from '@/pages/map/index'
import User from '@/pages/user/index'
import System from '@/pages/system/index'
import Team from '@/pages/team/index'
import Analysis from '@/pages/analysis/index'

const BaseRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
            children:
                [
                    {

                        path: '/index',
                        element: <Welcome />,
                        children: [
                            {
                                path: 'map',
                                element: <Map />
                            },
                            {
                                path: 'user',
                                element: <User />
                            },
                            {
                                path: 'system',
                                element: <System />
                            },
                            {
                                path: 'team',
                                element: <Team />
                            },
                            {
                                path: 'analysis',
                                element: <Analysis />
                            },
                        ]
                    },
                    {
                        path: '/about',
                        element: <About />,

                    },
                    {
                        path: '*',
                        element: <NotFound />
                    }
                ]
        },
        {
            path: '/login',
            element: <Login />
        }


    ]);
    return routes;
}

export default BaseRouter;