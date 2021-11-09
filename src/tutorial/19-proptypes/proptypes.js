import React from "react";
import PropTypes from "prop-types";


const Setup = () => {
    return <>

        <App name='ali' age={19}/>

    </>
}

const App = ({name, age}) => {
    return <>

        <div>hello i am {name} and i am {age} years old</div>

    </>
}

App.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Setup;