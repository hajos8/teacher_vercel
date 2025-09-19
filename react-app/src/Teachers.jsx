import React from "react";

export default class Teachers extends React.Component{
    state = {
        teachers: []
    }

    render(){
        return (
        <div>
            <ol>
                {this.state.teachers.map((teacher, idx) =>{
                    <li key = {idx}>
                        <b>Name: </b>{teacher.name}; <b>Class: </b> {teacher.hisClass}
                        {teacher.favorite &&
                            <span>
                                ; Our faovrite teacher!
                            </span>
                        }
                    </li>
                })}
            </ol>
        </div>
        )
    }

    async componentDidMount(){
        fetch('http://localhost:3333/teachers')
        .then(data => console.log(data))
        .then(data => {
            data.json()
        })
        .then(data => this.setState({teachers: data}))
        .then(console.log(this.state.teachers))
        .catch(console.warn)
        .finally(console.log("asd"))

        try{
            const favoriteTeacher = await fetch('http://localhost:3333/teacher/true')
            console.log('favoriteTeacher', favoriteTeacher)
        }
        catch(err){
            console.warn(err)
        }

    }


}