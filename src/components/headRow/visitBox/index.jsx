/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 15:22:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 16:34:19
 * @FilePath: \ant-react\antd-demo\src\components\visitBox\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Chart from '@/components/echarts';
import { LineChart } from 'echarts/charts'
// import * as echart from 'echarts/core';
import SmallBox from "../smallbox/index";
import { useEffect, useState } from "react";
import useAxios from "@/utils/axios/index";
// const datas = {
//     title: '访问量',
//     tip: '访问量',
//     single: '',
//     btitle: '日访问量',
//     num: '1356,560',
//     bottom: '12,423',
// }

const options = {
    color: ['#733bc0'],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '1', '2', '3'],
        show: false,

    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            data: [520, 732, 601, 934, 1090, 600, 1120, 800, 500, 900],
            type: 'line',
            areaStyle: {
                color: '#733bc0'
            },
            smooth: true,
            symbol: "none",
        }
    ],
    grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
};

const VisitBox = (props) => {
    const { response, loading, error,setloading } = useAxios({
        method: 'get',
        url: '/visit',
        headers: JSON.stringify({ accept: '*/*' }),
        // body: ,
    });
    const [data, setData] = useState(null);
    useEffect(() => {
        if (response !== null) {
            // console.log(response)
            setData(response['data']);
            setloading(false)
        }
    }, [response]);

    return (
        <>
            {loading ? (<h1>ss</h1>) : (
                <SmallBox data={data}>
                    <Chart
                        style={{ width: '100%', height: '50px' }}
                        options={options}
                        components={[LineChart]}
                    />
                </SmallBox>
                // <div></div>
            )}
        </>

    )
}

export default VisitBox;