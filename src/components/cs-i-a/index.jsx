import React from 'react'
import { Wrapper } from './style'

const students = [{
    name:"Abhiraj",
    rollno:"01"
},
{
    name:"Naveen",
    rollno:"02"
}
]

const ClassIA = () => {

  return (
    <Wrapper>
      
    {
        students.map((student) => 
        <div key={student.rollno}>
          <div className = 'Buttons'>
            <div className = 'field'>
                {student.rollno} {student.name} 
            </div>
            <input type="button" value="Mark" /> <input type="button" value="View" />
          </div>
            </div>)
    }
    

    </Wrapper>
  )
}

export default ClassIA
