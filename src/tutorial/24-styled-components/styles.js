import styled from "styled-components";

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-bottom: none;
  border-top: 2px black solid;
  border-left: 2px black solid;
  border-radius: 50%;
  animation: spin 1s linear infinite; 
  @keyframes spin{
    0% {
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
     }
  }
  
`

