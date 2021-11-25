import styled from "styled-components";

export const Wrapper = styled.div`
  letter-spacing: 10px;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: lighter;
  font-family: "Ubuntu Light", sans-serif;
  color: ${props => props.alert ? "red" : "green"};
`

export const Details = styled(Wrapper)`
  word-spacing: 10px;
  font-size: 20px;
`