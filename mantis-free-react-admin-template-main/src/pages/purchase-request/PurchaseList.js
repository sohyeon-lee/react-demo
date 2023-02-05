import React from 'react';
import { Card, Divider, Descriptions, Select, Input, DatePicker, Space, Button } from 'antd';
import TableDemo from 'components/TableDemo';

const onSelectChange = (value) => {
    console.log(`selected ${value}`);
};
const onDateChange = (date, dateString) => {
    console.log(date, dateString);
};
const onSearch = (value) => {
    console.log('search:', value);
};

const PurchaseList = () => {
    return (
        <>
            <Card
                title="검색"
                extra={
                    <Space wrap>
                        <Button type="primary">승인 요청</Button>
                        <Button type="primary">저장</Button>
                        <Button type="primary">조회</Button>
                        <Button>취소</Button>
                    </Space>
                }
            >
                <Descriptions
                    bordered
                    size="middle"
                    column={{
                        xxl: 4,
                        xl: 3,
                        lg: 3,
                        md: 3,
                        sm: 2,
                        xs: 1
                    }}
                >
                    <Descriptions.Item label="PR번호">
                        <Input placeholder="Borderless" bordered={false} value="123" readOnly />
                    </Descriptions.Item>
                    <Descriptions.Item label="건명">
                        <Input placeholder="Basic usage" />
                    </Descriptions.Item>
                    <Descriptions.Item label="ITEM">
                        <Select
                            onChange={onSelectChange}
                            showSearch
                            style={{
                                width: 200
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                }
                            ]}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="사양">
                        <Input placeholder="Basic usage" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Requester">
                        <Select
                            onChange={onSelectChange}
                            showSearch
                            style={{
                                width: 200
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                }
                            ]}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="Buyer">
                        <Select
                            onChange={onSelectChange}
                            showSearch
                            style={{
                                width: 200
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                }
                            ]}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="PR생성일">
                        <Space direction="vertical">
                            <DatePicker onChange={onDateChange} />
                        </Space>
                    </Descriptions.Item>
                    <Descriptions.Item label="진행 상태">상태</Descriptions.Item>
                </Descriptions>
            </Card>
            <TableDemo />
        </>
    );
};

export default PurchaseList;
