const Hoc1 = (Component) => {
    return props => {
        const styles = {
            background: 'white',
            width: '200px',
            height: '50px',
            border:'none',
            outline: 'none',
            borderRadius:'10px',
        }
        return <Component {...props} style={styles}/>
    }
}
const Button = (props) => <button {...props}>salam</button>
export default Hoc1(Button);