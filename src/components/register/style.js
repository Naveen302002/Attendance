import { styled } from "styled-components";

const Wrapper=styled.div`
*{
  margin: 0px;
  padding: 0px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

div {
  width:300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 3px 4px 4px grey;
  margin: 80px auto;
  border: 1px solid black;
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  align-items:center;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    margin-bottom:10px;
  }
  #dropdown{
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  input[type="submit"]:hover {
   
        background-color: blue;  
  }

  
`
export default Wrapper;