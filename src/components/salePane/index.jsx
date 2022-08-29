/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-12 14:33:07
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-18 17:42:57
 * @FilePath: \ant-react\antd-demo\src\components\salePane\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import Chart from '@/components/echarts';
import { BarChart } from 'echarts/charts';
import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import SaleOrder from './saleOrder';
import './index.css'


const SpanIndex = ({index})=> <span style={{ backgroundColor: '#2a3b4a', borderRadius: '50%' }}>{index}</span>

const SalePane = ({ eList, listData }) => {
    const [childrenvalue, setChildrenValue] = useState('')
    useEffect(()=>{
        console.log('渲染了')
    })
    const api = [

        {
            name:'安分守法',
            num:'323,689'
        },
        {
            name:'安分守法',
            num:'323,689'
        }
        
        
    ]

    // 父传子
    // const changeCount = useCallback(() => {
    //     setcount(count + 1)
    // }, [count])
    const getDatas = api.map((v, i) => {
        return {
            avatar: <SpanIndex index={i+1} />,
            description: <SaleOrder name={v.name} num={v.num} />
        }
    }
    )
    const getData = () => getDatas
    // // 子传父
    // const getChildren = (value) => {
    //     setChildrenValue(value)
    // }


    const option = {
        title: {
            text: '销售额趋势'
        },

        xAxis: {
            data: ['1','2','3','4','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: [9,6,13,10,13, 24, 18, 25, 27, 18, 25]
            }
        ],
        grid: {
            left: 20,
            top: 50,
            right: 0,
            bottom: 20,
            // width: "70%",
            // height: "300px",
        }
    };

    return (
        <>
            <div className="salePanels">
                
                <Chart
                    style={{ height:'300px' }}
                    options={option}
                    components={[BarChart]}
                />
                
                <List
                    header={'门店销售额排名'}
                    style={{  paddingLeft: '30px' }}
                    itemLayout="horizontal"
                    dataSource={getData()}
                    split={false}
                    size={'small'}
                    renderItem={(item, index) => (
                        <List.Item >
                            <List.Item.Meta
                                avatar={item.avatar}
                                description={item.description}

                            />
                        </List.Item>
                    )}
                />
            </div>

        </>
    )
}

export default SalePane;