import React from 'react'
import Wrapper from './style'

const Student = () => {
  return(
    <Wrapper>
      <main>
        <h1>RollCall</h1>
      <table>
        <tr>
          <th>Subject</th>
          <th>Attendance</th>
        </tr>
        <tr>
          <td>Mathematics</td>
          <td>75%</td>
        </tr>
        <tr>
          <td>DCCN</td>
          <td>80%</td>
        </tr>
        <tr>
          <td>DBMS</td>
          <td>77%</td>
        </tr>
        <tr>
          <td>TOC</td>
          <td>82%</td>
        </tr>
      </table>
      </main>
    </Wrapper>
  )
}

export default Student
