import axios from "axios";
const fetchData = () => {
    axios.ge('https://api.github.com/users/alivarastepour').then(a => a.json()).then(b => {
        return b.login;
    });
}
module.exports = fetchData;