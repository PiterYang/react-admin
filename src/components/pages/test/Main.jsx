/**
 * Created by tao.yang on 2019/8/3.
 */
import React from 'react';
import {Tabs} from 'antd'
import Tab1 from './tab1'
import Tab2 from './tab2'
const { TabPane } = Tabs

class Test extends React.Component {
    callback(key){
        console.log(key)
        console.log('this is: ', this)
    }
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tab1" key="1">
                  <Tab1 /> 
                </TabPane>
                <TabPane tab="Tab2" key="2">
                  <Tab2 />
                </TabPane>
            </Tabs>
        );
    }
}

export default Test