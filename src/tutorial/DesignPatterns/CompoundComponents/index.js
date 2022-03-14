import Wrapper from "./Wrapper";

const CompoundComponents = () => {
    return <>
        <Wrapper>
            <Wrapper.Header>
                hi im a header
            </Wrapper.Header>
            <Wrapper.Body>
                hello im a body
            </Wrapper.Body>
            <Wrapper.Footer>
                hello im a footer
            </Wrapper.Footer>
        </Wrapper>
    </>
}
export default CompoundComponents