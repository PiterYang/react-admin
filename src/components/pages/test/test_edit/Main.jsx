/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';

// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import { PwaInstaller } from '../widget';
// import {Tabs} from 'antd'
// const { TabPane } = Tabs
// import { connectAlita } from 'redux-alita';

// const FormItem = Form.Item;

class TestEdit extends React.Component {
    // componentDidMount() {
    //     const { setAlitaState } = this.props;
    //     setAlitaState({ stateName: 'auth', data: null });
    // }
    componentDidUpdate(prevProps) { // React 16.3+弃用componentWillReceiveProps
        console.log('prevProps', prevProps)
        const { auth: nextAuth = {}, history } = this.props;
        // const { history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) { // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { setAlitaState } = this.props;
                if (values.userName === 'admin' && values.password === 'admin') setAlitaState({ funcName: 'admin', stateName: 'auth' });
                if (values.userName === 'guest' && values.password === 'guest') setAlitaState({ funcName: 'guest', stateName: 'auth' });
            }
        });
    };
    callback(key){
        console.log(key)
    }
    gitHub = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                TestEdit
            </div>
        );
    }
}

export default TestEdit