/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 14:55:46
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 16:29:59
 * @FilePath: \ant-react\antd-demo\src\components\salesBox\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import SmallBox from "../smallbox/index";
import './index.css'
import Rotewd from '@/components/headRow/rotewd'
import { useEffect, useState } from "react";
import useAxios from "@/utils/axios/index";

const week = {
    r: 1,
    v: 12
}
const day = {
    r: 0,
    v: 11
}
// const datas = {
//     title: '总销售量',
//     single: '¥',
//     bottom: '12,423',
//     tip: '总销售量',
//     btitle: '日均销售量',
//     num: '1356,560'
// }


const SalesBox = (props) => {
    const { response, loading, error ,setloading} = useAxios({
        method: 'get',
        url: '/analysis',
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
                <h1>loading...</h1>
            ) : (
                <SmallBox data={data}>
                    <div className="sales">
                        <Rotewd week={week} day={day} />
                    </div>
                </SmallBox>
                // <div>{data.num}</div>
                
            )
            }
        </>

    )
}
export default SalesBox;