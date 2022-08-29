/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-12 16:00:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 16:01:00
 * @FilePath: \ant-react\antd-demo\src\utils\dateFormat\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default   function dateFormat(v) {
    let time = new Date(v._d)
    let d = new Date(time);
    // 格式转换
    let dateValue = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    return (dateValue);
}