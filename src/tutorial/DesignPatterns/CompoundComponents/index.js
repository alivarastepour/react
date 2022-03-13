import Test from "./Test";

const CompoundComponents = () => {
    return <>
        <Test>
            <Test.Button/>
        </Test>
    </>
}
export default CompoundComponents