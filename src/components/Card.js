import React, { Component } from 'react'
import { Card } from 'antd';

export default class TodoCard extends Component {
    render() {
        return (
            <Card style={{
                height: '15%', width: '30%', backgroundColor: 'yellow'
            }}>
                <p>{this.props.value}</p>
            </Card>
        )
    }
}

