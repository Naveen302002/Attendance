import { styled } from "styled-components";

const Wrapper=styled.div`div {
    width: 80%;
    height: 250px;
    text-align : center;
    justify-content : center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border : 1px solid grey;
    box-sizing : border-box;
    margin: 150px auto;
    box-shadow: 3px 3px 5px grey;
    margin-bottom: 20px auto;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing : border-box;
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius:
    font-size:1.2rem;
    margin-bottom: 20px
   
  }
  input[type="submit"]:hover {
    background-color: darkblue;
  }

`
export default Wrapper;