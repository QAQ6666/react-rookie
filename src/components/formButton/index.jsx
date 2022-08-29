/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-10 11:09:58
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-29 15:07:45
 * @FilePath: \ant-react\antd-demo\src\components\formButton\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Button } from 'antd';
import React from 'react';
export default function FormButton(props) {
    const onReset = () => {
        props.form.resetFields();
    };

    return (
        <>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button htmlType="button" onClick={onReset} style={{
                marginLeft: '30px'
            }}>
                Reset
            </Button>
        </>
    )

}