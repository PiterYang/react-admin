import { Steps, 
  // Button, message 
} from 'antd';
import React from 'react'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import {connect} from 'react-redux'

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <Step1 />,
  },
  {
    title: 'Second',
    content: <Step2 />,
  },
  {
    title: 'Last',
    content: <Step3 />,
  },
];
class UserEditIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }
  
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
  
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }
  
    render() {
      const { step } = this.props;
      console.log('step', step)
      return (
        <div>
          <Steps current={step}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">
            <Step1 style={step === 0 ? {display:'block'}: {display:'none'}} />
            <Step2 style={step === 1 ? {display:'block'}: {display:'none'}} />
            <Step3 style={step === 2 ? {display:'block'}: {display:'none'}} />
          </div>
          {/* <div className="steps-action">
            {step < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {step === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {step > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div> */}
        </div>
      );
    }
  }
const mapStateToProps = state => {
  return {
    step: state.work.step
  }
}
export default connect(mapStateToProps)(UserEditIndex)