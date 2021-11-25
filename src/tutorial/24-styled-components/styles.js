import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 30px;
  font-weight: lighter;
  font-family: "Ubuntu Light", sans-serif;
  color: ${props => props.alert ? "red" : "green"};
  
  & > div {
    background-color: antiquewhite;
  }
  button:hover {
    transition: 1s;
    background-color: antiquewhite;
  }
  button:not(:hover) {
    transition: 1s;
    background-color: brown;
  }
`

export const Details = styled(Wrapper)`
  font-size: 20px;
  
  p:hover {
    transition: 1s;
    letter-spacing: 10px;
  }
  p:not(:hover){
    transition: 1s;
    letter-spacing: normal;
  }
`