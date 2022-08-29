/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 15:29:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 17:02:21
 * @FilePath: \ant-react\antd-demo\src\components\payBox\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import SmallBox from "../smallbox/index";
import Chart from '@/components/echarts';
import { GaugeChart } from 'echarts/charts';
import { useEffect, useState } from "react";
import useAxios from "@/utils/axios/index";

// const datas = {
//     title: '支付笔数',
//     single: '',
//     bottom: '60',
//     tip: '支付笔数',
//     btitle: '转化率',
//     num: '6,560'

// }
const options = {
    xAxis: {
        show: false,
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 110, 80, 70, 110, 130, 180, 100, 200, 190, 60],
            type: 'bar'
        }
    ],
    grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
}
const PayBox = () => {
    const { response, loading, error, setloading } = useAxios({
        method: 'get',
        url: '/pay',
        headers: JSON.stringify({ accept: '*/*' }),
        // body: ,
    });

    useEffect(() => {
        if (response !== null) {
            // console.log(response)
            setData(response['data']);
            setloading(false)
        }
    }, [response]);
    const [data, setData] = useState(null);

    return (
        <>
            {loading ? (
                <h1>loading</h1>
            ) : (
                <SmallBox data={data}>
                    <Chart
                        style={{ width: '100%', height: '30px' }}
                        options={options}
                        components={[GaugeChart]}
                    />
                </SmallBox>
            )}
        </>

    )
}

export default PayBox;