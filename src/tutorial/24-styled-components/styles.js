import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 30px;
  font-weight: lighter;
  font-family: "Ubuntu Light", sans-serif;
  color: ${props => props.alert ? "red" : "green"};
  }
`

export const Details = styled(Wrapper)`
  font-size: 20px;
`

export const Info = styled.div.attrs(() => ({
    size:12,
    color:'lightgreen'

}))`
  color: ${(props) =>
    props.color
  };
  letter-spacing: ${(props) => props.size}px;
`