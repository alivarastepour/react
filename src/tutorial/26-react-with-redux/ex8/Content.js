import React from 'react'
import {connect} from "react-redux";
import {add, sub, dub} from "./slice";


const mapStateToProps = (state) => {
    return {
        count:state.reducer.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(add()),
        sub: () => dispatch(sub()),
        dub: () => dispatch(dub()),
    }
}

const ContentX = ({count, add, dub, sub}) => {
    return <>
        <div>
            {count}
        </div>
        <div>
            <button onClick={() => add()}>add</button>
            <button onClick={() => sub()}>sub</button>
            <button onClick={() => dub()}>dub</button>
        </div>
    </>
}
const Content = connect(mapStateToProps, mapDispatchToProps)(ContentX);

export default Content;