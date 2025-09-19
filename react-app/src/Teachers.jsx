import React from "react";

export default class Teachers extends React.Component{
    state = {
        teachers: []
    }

    render(){
        return (
        <div>
            <ol>
                {this.state.teachers.map((teacher, idx) => (
                    <li key={idx}>
                        <b>Name: </b>{teacher.name}; <b>Class: </b>{teacher.hisClass}
                        {teacher.favorite && <span>; Our favorite teacher!</span>}
                    </li>
                ))}
            </ol>
        </div>
        )
    }

    async componentDidMount(){
        // http://localhost:3333/teachers
        const response = await fetch('/api/teachers')
        const data = await response.json()
        this.setState({teachers: data})

        try{
            const favoriteTeacherJson = await fetch('/api/teacher/true')
            const favoriteTeacher = await favoriteTeacherJson.json()
            console.log('favoriteTeacher', favoriteTeacher)
        }
        catch(err){
            //console.warn(err)
        }

    }


}