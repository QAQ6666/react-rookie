/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 12:32:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-18 13:12:51
 * @FilePath: \my-app\src\components\sift\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import moment from 'moment';
import { DatePicker } from 'antd';
import { connect } from "react-redux"
import dateFormat from '@/utils/dateFormat';

const { RangePicker } = DatePicker;


// const Sift = ({ cur, setCur, dateChange }) => {
const Sift = (props) => {
    const dateFormat = 'YYYY/MM/DD';
    const typeList = ['今日', '本周', '本月', '全年']
    const liItem = typeList.map((v, i) => (
        <span key={i} data-key={i} className={props.cur == i ? 'active' : null}>{v}</span>
    ))


    // function typeChange(e) {
    //     e.stopPropagation()
    //     let ele = e.target
    //     if (ele.nodeName == 'SPAN') {
    //         // setCur(ele.getAttribute('data-key'))
    //     }
    // }
    function openchange(v) {
        props.dateApi(v)
    }
    function  changeRange(e) {
        e.stopPropagation()
        
        let ele = e.target
        if (ele.nodeName == 'SPAN') {
            let v = ele.getAttribute('data-key')
            console.log(v)
            props.setLoad(true)
            props.setCur(v)
            // dispatch({ type: 'panel/updateRange', value: v })
        }
    }
    // 先 load? 在去 cur?

    return <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <a> {props.keys}</a> */}

        <div className='dwmy' onClick={changeRange}>
            {liItem}
        </div>
        <RangePicker
            style={{ width: '230px' }}
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
            onChange={props.changeDate}
            onOpenChange={openchange}
        />


    </div>
}
function mapStateToProps(state) {
    return {
        range: state.value.range,
        date: state.value.date,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // changeRange: (e) => {
        //     e.stopPropagation()
        //     let ele = e.target
        //     if (ele.nodeName == 'SPAN') {
        //         let v = ele.getAttribute('data-key')
        //         props.setCur(v)
        //         // dispatch({ type: 'panel/updateRange', value: v })
        //     }
        // },
        changeDate: (v) => {
            let start = dateFormat(v[0])
            let end = dateFormat(v[1])
            // console.log(start, end)
            // dispatch({ type: 'panel/updateDate', value: start + end })
        }



    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Sift);