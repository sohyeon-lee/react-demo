import { Button, Table, Space, Card } from 'antd';
import React, { useEffect, useState } from 'react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address'
    }
];

// sample data
const sampleData = [];
for (let i = 0; i < 46; i++) {
    sampleData.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
    });
}

const TableDemo = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [data, setData] = useState(sampleData);

    const handleDelete = () => {
        for (let i = 0; i < selectedRowKeys.length; i++) {
            console.log(selectedRowKeys[i]);
            data.splice(selectedRowKeys[i], 1);
            console.log(data);
        }
        setData(data);
        setSelectedRowKeys([]);
    };
    const handleCopy = () => {
        // setLoading(true);
        // // ajax request after empty completing
        // setTimeout(() => {
        //     setSelectedRowKeys([]);
        //     setLoading(false);
        // }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div
            style={{
                marginTop: 16
            }}
        >
            <Card
                title="구매 신청 목록"
                extra={
                    <Space wrap>
                        <span
                            style={{
                                marginRight: 8
                            }}
                        >
                            {hasSelected ? `${selectedRowKeys.length} 개의 item 선택` : ''}
                        </span>
                        <Button type="primary" onClick={handleDelete} disabled={!hasSelected}>
                            행삭제
                        </Button>
                        <Button type="primary" onClick={handleCopy} disabled={!hasSelected}>
                            행복사
                        </Button>
                    </Space>
                }
            >
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered />
            </Card>
        </div>
    );
};
export default TableDemo;
