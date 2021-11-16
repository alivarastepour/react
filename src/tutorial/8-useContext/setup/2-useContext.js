import React, {useContext, useState} from "react";
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext('a');

function Setup() {
    const [s, ss] = useState(false);
    return (
        <div>
            <input value={s} onChange={e => ss(e.target.checked)} type="checkbox"/>
            <ThemeContext.Provider value={s ? themes.dark : themes.light}>
                <Toolbar/>
            </ThemeContext.Provider>
        </div>


    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
            </button>
        </div>

    );
}
export default Setup ;