import {Provider} from "react-redux";
import store from "./store";
import Form from "./Form";

const Container = () => {
    return <>
        <Provider store={store}>
            <Form/>
        </Provider>
    </>
}
export default Container;