import React, {Component} from "react";

class Students extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount(){
        var students = [
            'Bob',
            'Fred',
            'Sean',
            'Jimothy'
        ];
        this.setState({
            students: students
        })
    }

    render(){
        var studentArray = [];
        this.state.students.map((student,index)=>{
            studentArray.push(<li key={index}>{student}</li>)
        })
        return(
            <div>
                <h1>Students</h1>
                {studentArray}
            </div>

        )
    }
}

export default Students;
