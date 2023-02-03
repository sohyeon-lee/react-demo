import { Card, Divider, Row, Col } from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center'
};

const TableSearchDemoPage = () => (
    <>
        <Card title="검색">
            <Row>
                <Col flex={2}>2 / 5</Col>
                <Col flex={3}>3 / 5</Col>
            </Row>
        </Card>
        <Divider orientation="left">구매 신청 목록</Divider>
    </>
);
export default TableSearchDemoPage;
