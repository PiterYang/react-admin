import { Form, Input, Icon, Button, Select } from "antd";
import React from "react";
import { USERS_TEMPLATE } from "../../config/users-template";
const { Option } = Select;
console.log("USERS_TEMPLATE", USERS_TEMPLATE);
// let id = 0
const fixTypeFormItem = [
    {
        type: "select",
        selectList: "",
        disabled: false,
        value: "",
        size: "middle",
        name: "fixItem"
    },
    {
        type: "input",
        disabled: true,
        size: "small",
        name: "empty"
    },
    {
        type: "input",
        disabled: true,
        name: "empty"
    }
];
const fixOptions = [
    { label: "user_type_1", key: "user_type_1" },
    {
        label: "user_type_2",
        key: "user_type_2"
    }
];

class DynamicFieldSet extends React.Component {
    state = {
        selectList: fixOptions
        // stateUseType: this.props.useType
    };

    componentDidMount() {
        // const { getFieldDecorator } = this.props.form;
        // getFieldDecorator('keys', { initialValue: [] });
        console.log("this.props", this.props);
    }
    // componentWillReceiveProps(nextProps) {
    //   console.log('nextProps', nextProps)

    //   this.setState({stateUseType: nextProps.useType});
    // }
    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue("keys");
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k)
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue("keys");
        // const nextKeys = keys.push(fixTypeFormItem);
        const newKeys = keys.filter(v => v.length > 0);
        newKeys.push(fixTypeFormItem);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: newKeys
        });
    };

    addRealAudience = (index, e) => {
        if (fixOptions.map(v => v.key).includes(e)) {
            const { form } = this.props;
            const keys = form.getFieldValue("keys");
            const selectAudience = USERS_TEMPLATE.filter(v => v[0].name === e);
            // const restOpionts = keys.map()
            console.log("keys", keys);
            const restOpionts = keys
                .filter(v => v[0].name !== "fixItem")
                .map(v => v[0].key);
            this.setState({
                selectList: fixOptions.filter(
                    v => !restOpionts.includes(v.name)
                )
            });
            keys.splice(index, 1, selectAudience[0]);
            form.setFieldsValue({
                keys: keys
            });
        }
    };

    formItemType = (item, index) => {
        switch (item.type) {
            case "input":
                return <Input type="text" />;

            case "select":
                let selectList = Array.isArray(item.selectList)
                    ? item.selectList
                    : this.state.selectList;

                return (
                    <Select onChange={e => this.addRealAudience(index, e)}>
                        {selectList.map(options => (
                            <Option key={options.key} value={options.key}>
                                {options.label}
                            </Option>
                        ))}
                    </Select>
                );

            default:
                return <Input type="text" />;
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { names } = values;
                console.log("Received values of form: ", values);
                console.log("names", names);
                const { submitCallback } = this.props;
                if (submitCallback) {
                    submitCallback(values);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 }
            }
        };
        // console.log('this.state.stateUseType', this.state.stateUseType)
        getFieldDecorator("keys", { initialValue: [this.props.useType] });
        const keys = getFieldValue("keys");
        // console.log('keyshhhh', keys)
        // console.log('this.props', this.props)
        // const keys = []
        const formItems = keys.map((k, index) => {
            return (
                <div key={index}>
                    {k.map((v, subIndex) => (
                        <Form.Item
                            {...(subIndex === 0
                                ? formItemLayout
                                : formItemLayoutWithOutLabel)}
                            label={subIndex === 0 ? "Passengers" : ""}
                            required={false}
                            key={subIndex}
                        >
                            {getFieldDecorator(`names[${v.name + index}]`, {
                                validateTrigger: ["onChange", "onBlur"],
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message:
                                            "Please input passenger's name or delete this field."
                                    }
                                ],
                                initialValue: v.value
                            })(this.formItemType(v, index))}
                            {keys.length > 1 ? (
                                <Icon
                                    className="dynamic-delete-button"
                                    type="minus-circle-o"
                                    onClick={() => this.remove(k)}
                                />
                            ) : null}
                        </Form.Item>
                    ))}
                </div>
            );
        });
        return (
            <Form onSubmit={this.handleSubmit}>
                {formItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button
                        type="dashed"
                        onClick={this.add}
                        style={{ width: "60%" }}
                    >
                        <Icon type="plus" /> Add field
                    </Button>
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: "dynamic_form_item" })(DynamicFieldSet);
