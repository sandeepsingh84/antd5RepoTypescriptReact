import { Button, Table, Divider, Tag, Modal, Form, Input, Row, Col } from "antd";
import React, { useState } from "react";

const Vehicle = () => {
const [form] = Form.useForm();
    const colorPicker = (record: any) => {
        if (record % 2 === 0) {
            return 'green';
        }
        else {
            return 'red';
        }

    }
    const onFinish = (values: any) => {
    
    form.validateFields()
        console.log('Success:', values);
    };
    const [isModalOpen, setIsModalOpen] = useState({ visibility: false, id: '' });

    const showModal = () => {
        setIsModalOpen({ visibility: true, id: '' });
    };

    const handleOk = () => {
        form.validateFields();
        setIsModalOpen({ visibility: false, id: '' });
    };

    const handleCancel = () => {
        setIsModalOpen({ visibility: false, id: '' });
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    const dataSource = [
        {
            key: '1',
            name: 'Creta',
            plateNo: 32,
            model: 2016,
            company: 'Suzuki',
            url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=',
        },
        {
            key: '2',
            name: 'Hector',
            plateNo: 42,
            model: 2013,
            company: 'MG',
            url: 'https://imgd-ct.aeplcdn.com/1056x660/n/dfaoo0b_1636741.jpg?q=75',
        },
        {
            key: '3',
            name: 'benz',
            plateNo: 482,
            model: 2016,
            company: 'Mercedes',
            url: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-E-Class-290320211237.jpg&w='
        },
        {
            key: '4',
            name: 'C class',
            plateNo: 822,
            model: '2019',
            company: 'Mercedes',
            url: 'https://imgd.aeplcdn.com/1056x594/n/ksvkl3a_1579019.jpg?q=75'
        },
        {
            key: '5',
            name: 'S class',
            plateNo: 623,
            model: 2023,
            company: 'Mercedes',
            url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-3.jpeg?q=75'
        },
        {
            key: '6',
            name: 'i20',
            plateNo: 4889,
            model: 2014,
            company: 'Honda',
            url: 'https://auto.economictimes.indiatimes.com/files/retail_files/elite-i20-1502362166-prod-var.png',
        },
    ];

    const columns = [
        {
            title: 'Images',
            dataIndex: 'url',
            key: 'url',
            render: (record: any) => (<div><img height="40px" width="70px" src={record} alt="" /></div>)
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Plate No.',
            dataIndex: 'plateNo',
            key: 'plateNo',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            render: (record: Number) => (
                <Tag color={colorPicker(record)}>{record.toString()}</Tag>
            )
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',

        },
    ];
    return (<div>


        <Button type="primary" htmlType="submit" onClick={showModal}>
            Add Vehicle
        </Button>
        <Modal title="Basic Modal" open={isModalOpen.visibility} onOk={handleOk} onCancel={handleCancel}>
            <Form layout="vertical" name="addVehicle" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Row gutter={16}>
                    <Col>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Vehicle name!',
                                },
                            ]}
                        >
                            <Input type="primary" size="large" />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label="Plate Number"
                            name="plateNo"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Plate Number!',
                                },
                            ]}
                        >
                            <Input type="primary" size="large" />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label="Model"
                            name="model"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Vehicle Model!',
                                },
                            ]}
                        >
                            <Input type="primary" size="large" />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label="Company"
                            name="company"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Company name!',
                                },
                            ]}
                        >
                            <Input type="primary" size="large" />
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </Modal>
        <Table dataSource={dataSource} columns={columns} />;</div>)
}
export default Vehicle


