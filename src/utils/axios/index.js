/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 09:49:58
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 16:29:41
 * @FilePath: \ant-react\antd-demo\src\utils\axios\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// useAxios hook
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = '/user';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                // setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading, setloading};
};

export default useAxios;
