import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SelectStudentAction from '../actions/SelectStudentAction.js';
import TimerAction from '../actions/TimerAction.js';

// console.log(SelectStudent);


class ReduxStudents extends Component{
    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        setInterval(()=>{
            this.props.timerAction();
        },1000)
    }

    render(){
        // console.log(this.props);
        var studentArray = [];
        this.props.students.map((student,index)=>{
            studentArray.push(
                <li
                    key={index}
                    onClick={()=>{this.props.selectStudent(student)}}
                >
                    {student}
                </li>)
            return true
        })
        return(
            <div>
                <h1>ReduxStudents</h1>
                {studentArray}
                <hr />
                {this.props.selectedStudent} has been selected.
                <hr />
                {this.props.timer} is the current time.
            </div>
        )
    }
}

function mapStateToProps(state){

    return{
        students: state.students,
        selectedStudent: state.selectedStudent,
        timer: state.timerReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectStudent: SelectStudentAction,
        timerAction: TimerAction
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxStudents);
