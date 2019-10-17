import React from "react";
import UserEdit from "../../users";
import { Radio, Select, Button, message, Input } from "antd";
import { connect } from "react-redux";
import { setStep } from "../../../store/actions";
const { Option } = Select;
const { TextArea } = Input;
// import {getUsers} from '../../../axios'
class Step1 extends React.Component {
  state = {
    userType: [],
    userResource: 1,
    userOptions: [],
    userName: "",
    description: ""
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userOptions: [{ label: "user1", id: 1 }, { label: "user2", id: 2 }]
      });
    });
  }
  onUserResourceChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      userResource: e.target.value
    });
  };
  handleUserChange = value => {
    console.log(value);
  };
  onUserNameChange = ({ target: { value } }) => {
    this.setState({
      userName: value
    });
  };
  onDescriptionChange = ({ target: { value } }) => {
    this.setState({
      description: value
    });
  };
  next = () => {
    console.log("name", this.state.userName);
    console.log("description", this.state.description);
    console.log("form", this.form);
    this.form.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    const { dispatch } = this.props;
    dispatch(setStep(1));
  };
  prev = () => {
    const { dispatch } = this.props;
    dispatch(setStep(1));
  };
  render() {
    console.log("routeId", this.props);
    const { userOptions } = this.state;
    const { step } = this.props;
    return (
      <div style={this.props.style}>
        <Radio.Group
          onChange={this.onUserResourceChange}
          value={this.state.userResource}
        >
          <Radio value={1}>Create new</Radio>
          <Radio value={2}>Copy form</Radio>
        </Radio.Group>

        {this.state.userResource === 2 && (
          <Select
            defaultValue={1}
            style={{ width: 120 }}
            onChange={this.handleUserChange}
          >
            {userOptions.map(v => (
              <Option value={v.id} key={v.id}>
                {v.label}
              </Option>
            ))}
          </Select>
        )}
        <UserEdit
          useType={this.state.userType}
          wrappedComponentRef={form => (this.form = form)}
        />
        <div>
          <span>UserName</span>
          <Input
            style={{ width: "200px" }}
            onChange={this.onUserNameChange}
            value={this.state.userName}
          />
        </div>
        <div>
          <span>Description</span>
          <TextArea
            style={{ width: "200px" }}
            onChange={this.onDescriptionChange}
            value={this.state.description}
            autosize
          />
        </div>
        <div className="steps-action">
          {step < 2 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {step === 2 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {step > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    step: state.work.step
  };
};
export default connect(mapStateToProps)(Step1);
