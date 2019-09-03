import Users from '../../users'
import React from 'react'
import {Table, Button, Modal, Form, Input} from 'antd'

class UserModal extends React.Component {
    formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    };
    formTailLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8, offset: 4 },
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const {rowData} = this.props
        return (
            <div>
                <Form>
                    <Form.Item {...this.formItemLayout} label="Name">
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your name',
                                },
                            ],
                            initialValue: rowData && rowData.name ? rowData.name : ''
                        })(<Input placeholder="Please input your name" />)}
                    </Form.Item>
                    <Form.Item {...this.formItemLayout} label="Name1">
                        {getFieldDecorator('name1', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your name1',
                                },
                            ],
                            initialValue: rowData && rowData.name1 ? rowData.name1 : ''
                        })(<Input placeholder="Please input your name1" />)}
                    </Form.Item>
                    <Form.Item {...this.formItemLayout} label="Name2">
                        {getFieldDecorator('name2', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your mame2',
                                },
                            ],
                            initialValue: rowData && rowData.name2 ? rowData.name2 : ''
                        })(<Input placeholder="Please input your name1" />)}
                    </Form.Item>
                    <Form.Item {...this.formItemLayout} label="Name3">
                        {getFieldDecorator('name3', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your nickname',
                                },
                            ],
                            initialValue: rowData && rowData.name3 ? rowData.name3 : ''
                        })(<Input placeholder="Please input your name3" />)}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const UserModalForm = Form.create({name: 'user_modal_form'})(UserModal)
class Tab1 extends React.Component {
    state = {
        tableData: [],
        visible: false,
        rowData: {},
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tableData: [{name: 'test',name1: 1,name2: 2,name3: 3,name4:4, key:1},{key: 2,name: 'test2',name1: 12,name2: 22,name3: 32,name4:42},{key: 3,name: 'test3',name1: 13,name2: 23,name3: 33,name4:43},]
            })
        }, 1000)
    }
    columns = [{
        title: '用户名',
        dataIndex: 'name',
        width: 100,
        key: '1'
    },{
        title: '描述',
        dataIndex: 'name1',
        width: 100,
        key: '2'
    },{
        title: '用户群体',
        dataIndex: 'name2',
        width: 100,
        rendor: (text, record) => <span>{text + record.region}</span>,
        key: '3'
    },{
        title: '用户状态',
        dataIndex: 'name3',
        width: 100,
        key: '4'
    },{
        title: '操作',
        dataIndex: '',
        width: 100,
        render: (text, record) => (
            <span>
                <Button onClick={() => this.showModal(record)}>编辑</Button>
                <span className="ant-divider" />
                <Button>删除</Button>
            </span>
        ),
        key: '5'
    },]
    showModal = (record) => {
        console.log('record', record)
        // this.visible = true
        this.setState({
            rowData: { ...record },
            visible: true
        })
    }
    handleOk = e => {
        console.log(e);
        console.log('this.form', this.form)
        this.form.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
        this.setState({
          visible: false,
          rowData: {}
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
          rowData: {}
        });
    };
    useTypeCallback = (useType) => {
        console.log('useType', useType)
    }
    render() {
        console.log('rowData', this.state.rowData)
        return (
            <div>
                <Users useType={[]} submitCallback={this.useTypeCallback} />
                <Table columns={this.columns} dataSource={this.state.tableData} />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    destroyOnClose
                >
                    <UserModalForm rowData={this.state.rowData} wrappedComponentRef={(form) => this.form = form} />
                </Modal>
            </div>
        )
    }
}
export default Tab1