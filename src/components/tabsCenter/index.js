/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 16:21:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-18 13:31:58
 * @FilePath: \my-app\src\components\tabsCenter\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import SalePane from '@/components/salePane'
import Sift from '@/components/sift';
import { Tabs } from 'antd';
import { connect } from "react-redux"
import { useEffect,useState } from 'react';

const { TabPane } = Tabs;


function mapStateToProps(state) {
    return {
        keys: state.value.keys,
        date:state.value.date,
        range:state.value.range
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeKey: (v) => {
            // console.log(v)
            dispatch({ type: 'panel/updateKey', value: v })
        }
    }
}
const Test = ()=>{
    useEffect(()=>{
        console.log('sd')
    },[])
    return (
        <></>
    )
}

function TabsCenter(props) {
    const [cur,setCur] = useState(0)
    const [load,setLoad] = useState(false)
    useEffect(()=>{
    //    setLoad(true)
        // console.log('key变了',props.keys)
        setTimeout(()=>{
            setLoad(false)
        },3000)
    },[cur])

    function dateApi(v){
        if(!v){
            let obj = {
                keys: props.keys,
                date:props.date,
                range:props.range
            }
            console.log(v,obj)
        }
        
    }
    function tabcli(k,v){
        console.log(v)
    }
    return (
        <Tabs className='boxBack'
            style={{ paddingTop: '0' }}
            onTabClick={tabcli}
            // defaultActiveKey="1"
            // onChange={props.changeKey}
            tabBarExtraContent={<Sift setLoad={setLoad} cur={cur} setCur={setCur} dateApi={dateApi} />}
        >
            <TabPane tab="销售额" key="s">
                {
                    load ? '' :  <SalePane eList={[]} listData={[]} />
                }
            </TabPane>
            <TabPane tab="访问量" key="f">
                {/* Content of Tab Pane 2  ssd --{props.keys} */}
                <Test></Test>
            </TabPane>

        </Tabs>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(TabsCenter)