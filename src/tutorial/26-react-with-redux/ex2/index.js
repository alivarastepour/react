import {add, dec, dub} from "./actions";
import {connect} from "react-redux";
import React from 'react'
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(add()),
        dec: () => dispatch(dec()),
        dub: () => dispatch(dub()),

    }
}
const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

const SetupX = ({add, dec, dub, count}) => {
    return <>
        <div>{count}</div>
        <button onClick={() => {add()}}>add</button>
        <button onClick={() => {dec()}}>dec</button>
        <button onClick={() => {dub()}}>dub</button>
    </>
}

const Setup = connect(mapStateToProps, mapDispatchToProps)(SetupX);
export default Setup;