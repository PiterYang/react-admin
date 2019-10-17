import React from "react";
import UserEdit from "../../users";
import { Radio, Select, Button, message } from "antd";
import { connect } from "react-redux";
import { setStep } from "../../../store/actions";
const { Option } = Select;
// import {getUsers} from '../../../axios'
class Step3 extends React.Component {
  state = {
    userType: [],
    userResource: 1,
    userOptions: []
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
  next = () => {
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
        <UserEdit
          useType={this.state.userType}
          wrappedComponentRef={form => (this.form = form)}
        />
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
export default connect(mapStateToProps)(Step3);
