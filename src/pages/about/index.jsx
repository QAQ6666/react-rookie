/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-10 08:52:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 10:25:23
 * @FilePath: \ant-react\antd-demo\src\pages\about\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import  useAxios from '@/utils/axios/index'
import { useEffect,useState } from "react";
export default function About(){
    return (
            <>
            <App></App>
            </>
        )
}
// App Component

const App = () => {
    const { response, loading, error } = useAxios({
        method: 'post',
        url: '/posts',
        headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            userId: 1,
            id: 19392,
            title: 'title',
            body: 'Sample text',
        }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    return (
        <div className='App'>
            <h1>Posts</h1>

            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div style={{color:'white'}}>{data && <p>{data.id}</p>}</div>
                </div>
            )}
        </div>
    );
};


