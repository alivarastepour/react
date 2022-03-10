import {Mixin} from "./mixin";

const Setup = () => {
    const m = new Mixin();

    return <>
        {m.add(1, 2)} {m.name}
    </>
}
export default Setup;