const Wrapper = ({children}) => {
    return <>
        {children}
    </>
}

const Header = ({children}) => {
    return <>
        <div style={{color: 'blue'}}>
            {children}
        </div>
    </>
}

const Body = ({children}) => {
    return <>
        <div style={{fontSize: '2rem', color: 'black', wordSpacing: '1rem'}}>
            {children}
        </div>
    </>
}

const Footer = ({children}) => {
    return <>
        <div style={{fontFamily: "sans-serif", fontWeight: '600'}}>
            {children}
        </div>
    </>
}

Wrapper.Header = Header;
Wrapper.Body = Body;
Wrapper.Footer = Footer;

export default Wrapper;