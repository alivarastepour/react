const WithContext = ({ThemeContext, children, state, setState}) => {
    return <>
        <ThemeContext.Provider value={{state, setState}}>
            {children}
        </ThemeContext.Provider>
    </>
}

export default WithContext;