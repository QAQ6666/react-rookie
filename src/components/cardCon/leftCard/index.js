/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-15 09:30:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-19 10:35:35
 * @FilePath: \ant-react\antd-demo\src\components\cardCon\leftCard\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Form, Table, Pagination, Input, InputNumber, Popconfirm, Typography } from 'antd'
import { Button } from 'antd/lib/radio';
import React from 'react'
import { useState } from 'react';

const { Column, ColumnGroup } = Table

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};


export default function LeftCard() {
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const [data, setDataSource] = useState([
        {
            key: '1',
            order: '1',
            keyName: '连衣裙',
           
        },
        {
            key: '2',
            order: '2',
            keyName: '裤子',
          
        },

    ])
    const columns = [
        {
            title: 'order',
            editable: true,
            dataIndex: 'order'
        },
        {
            title: 'keyName',
            editable: true,
            dataIndex: 'keyName'
        },
       
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <>
                        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                            <a>Delete</a>
                        </Popconfirm>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>

                    </>

                ) : <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    Edit
                </Typography.Link>
            }
        }
    ]
    const cancel = () => {
        setEditingKey('');
      };
    const isEditing = (record) => record.key === editingKey;
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    function pageChange(pagination, filters, sorter, extra) {
        console.log(extra)
    }

    function handleAdd() {
        const newData = {
            key: '3',
            order: '2',
            keyName: '裤子',
            
        };
        setDataSource([...data, newData]);
    }
    const handleDelete = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const edit = (record) => {
        form.setFieldsValue({
            // key: '3',
            order: '',
            keyName: '',
            ...record,
        });
        setEditingKey(record.key);
    };
    return (
        <>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add a row
            </Button>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    columns={mergedColumns}
                    dataSource={data} 
                    onChange={pageChange} 
                    pagination={{ total: '50', showQuickJumper: true, showSizeChanger: true, pageSize: '5', size: "small" }}>
                    {/* <ColumnGroup title="Name"> */}
                    {/* <Column title="排名" dataIndex="order" key="order" /> */}
                    {/* <Column title="搜索关键词" render={(v) => <a>{v}</a>} dataIndex="keyName" key="keyName" /> */}
                    {/* </ColumnGroup> */}
                    {/* <Column title="用户数"
                        sorter={(a, b) => a.userNum - b.userNum}
                        dataIndex="userNum" key="userNum" />
                    <Column title="周涨幅"
                        sorter={(a, b) => a.weekUp - b.weekUp}
                        dataIndex="weekUp" key="weekUp" /> */}
                    {/* <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={(tags) => (
                    <>
                        {tags.map((tag) => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            /> */}
                    {/* <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            data.length >= 1 ? (
                                <>
                                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                        <a>Delete</a>
                                    </Popconfirm>
                                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                                        Edit
                                    </Typography.Link>
                                </>
                            ) : null

                        )}
                    /> */}
                </Table>
            </Form>
            {/* <ConfigProvider locale={zh_CN}>
        <Pagination defaultCurrent={6}  
        showTitle={true} size="small"  
        showSizeChanger showQuickJumper 
        onChange={pageChange} total={50} />
</ConfigProvider> */}
        </>

    )
}