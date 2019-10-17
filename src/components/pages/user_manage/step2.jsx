import React from "react";
import { Button, message } from "antd";
import { connect } from "react-redux";
import { setStep } from "../../../store/actions";
import DynamicForm, {
  defaultLabelColSpan
} from "../../forms/dynamic_form/DynamicForm";
import formItems from "../../forms/dynamic_form/FormItem";
import moment from "moment";
// import {getUsers} from '../../../axios'
class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      userType: [],
      userResource: 1,
      userOptions: []
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const data = {
        Input: "Input",
        password: "password",
        Select: "option2",
        RadioGroup: "radio2",
        RadioButtonGroup: "radio2",
        CheckboxGroup: ["checkbox2"],
        DatePicker: moment("2018-05-15T13:36:27.132Z"),
        RangePicker: [
          "2018-04-15T13:36:27.132Z",
          "2018-05-15T13:36:27.132Z"
        ].map(v => moment(v)),
        Switch: true
      };
      this.formRef.current.setFieldsValue(data);
    }, 1000);
  }
  onClickSubmit = () => {
    this.formRef.current.validateFieldsAndScroll((err, values) => {
      console.log(values);
      if (err) {
        return;
      }
      console.log("校验通过");
    });
  };
  next = () => {
    const { dispatch } = this.props;
    dispatch(setStep(2));
  };
  prev = () => {
    const { dispatch } = this.props;
    dispatch(setStep(0));
  };
  render() {
    const { step } = this.props;
    return (
      <div style={this.props.style}>
        <DynamicForm items={formItems} ref={this.formRef} />
        <Button
          style={{ marginLeft: `${(defaultLabelColSpan / 24) * 100}%` }}
          type="primary"
          onClick={this.onClickSubmit}
        >
          Submit
        </Button>
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
export default connect(mapStateToProps)(Step2);
