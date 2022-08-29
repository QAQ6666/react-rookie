/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-12 17:58:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 18:05:32
 * @FilePath: \ant-react\antd-demo\src\components\binCard\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Chart from '@/components/echarts';
import { PieChart } from 'echarts/charts';



export default function BinCard (props){
const option = {

}
    return (
        <>
              <Chart
                    style={{ width: '70%',height:'300px' }}
                    options={option}
                    components={[PieChart]}
                />
        </>
    )
}