/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-15 09:30:13
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-15 15:41:25
 * @FilePath: \ant-react\antd-demo\src\components\cardCon\rightCard\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Chart from '@/components/echarts';
import { PieChart } from 'echarts/charts';


export default function RightCon() {

    const options = {

        title: {
            text: '销售额',
            // left: 'center',
            // top: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '-5',
            textStyle: {
                color: "#2efcfa",
            },
            // icon:'bar',
            orient: 'vertical',
            x: 'right',
            formatter: function (v) {
                return v + '1'
            }
            // left: 'center'
        },

        series: [
            {
                // label: {
                //     position: 'inner',
                //     fontSize: 14,
                //   },
                // minAngle: 12,
                name: 'Access From',
                type: 'pie',
                radius: ['60%', '80%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: 6
                },
                label: {
                    // lineHeight:'40',
                    lineHeight: '35',
                    show: true,
                    position: 'center',
                    color: 'white',

                    formatter: '销售额\n{total|¥}{active|2,482}',
                    rich: {
                        total: {
                            fontSize: 35,
                            fontFamily: "微软雅黑",
                            color: '#454c5c'
                        },
                        active: {
                            fontFamily: "微软雅黑",
                            fontSize: 35,
                            color: '#6c7a89',
                            lineHeight: 30,
                        },
                    }

                    // show: true,
                    // position: 'center',
                    // fontSize:10
                },

                emphasis: {
                    // label: {
                    //     show: true,
                    //     fontSize: '20',
                    //     fontWeight: 'bold'
                    // }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };
    return (
        <>
            <Chart
                style={{ width: '100%', height: '300px' }}
                options={options}
                components={[PieChart]}
            />
        </>
    )
}