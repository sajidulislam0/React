import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        return (
            <div>
                {
              this.props.studentId.map((studentInfo) =>(
              <li key={studentInfo.id}>ID: {studentInfo.id}<br/>Name: {studentInfo.name}<br/>Description: {studentInfo.description}<br/></li>

              ))
            }
            </div>
        )
    }
}
