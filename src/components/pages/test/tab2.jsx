import Users from '../../users'
import React from 'react'

class Tab2 extends React.Component {
    state ={
        userType: []
    }
    render() {
        return <Users useType={this.state.userType} />
    }
}
export default Tab2