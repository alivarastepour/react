import React, {useState} from "react";
import Setup from "./container";

const Index = () => {
    const [value, setValue] = useState('');

    const calculate = () => {
        let statement = (value).toString() ;
        let sides ;
        let ans ;
        if (statement.replace('*', '|') !== statement){
            statement = statement.replace('*', '|')
            sides = statement.split('|');
            ans = parseFloat(sides[0]) * parseFloat(sides[1]) ;
            setValue(ans);
        }else if (statement.replace('/', '|') !== statement){
            statement = statement.replace('/', '|')
            sides = statement.split('|');
            ans = parseFloat(sides[0]) / parseFloat(sides[1]) ;
            setValue(ans);
        }else if (statement.replace('-', '|') !== statement){
            console.log(statement);
            statement = statement.replace('-', '|')
            sides = statement.split('|');
            console.log(sides[0], sides[1])
            ans = parseFloat(sides[0]) - parseFloat(sides[1]) ;
            setValue(ans);
        }else if (statement.replace('+', '|') !== statement){
            statement = statement.replace('+', '|')
            sides = statement.split('|');
            ans = parseFloat(sides[0]) + parseFloat(sides[1]) ;
            setValue(ans);
        }else if (statement.replace('^', '|') !== statement){
            statement = statement.replace('^', '|')
            sides = statement.split('|');
            ans = Math.pow(parseFloat(sides[0]) , parseFloat(sides[1])) ;
            setValue(ans);
        }
    }


    const handleCLick = (e) => {
        if (!((parseInt(e.key) >= 0 && parseInt(e.key) <= 9) ||
            (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '.' || e.key === '-' || e.key === '^' || e.key === "Backspace" || e.key === 'Enter')))
            e.preventDefault();
        else if (e.key === 'Enter') {
            calculate();
        }
    };

    return <>
        <Setup handleCLick={handleCLick} value={value} setValue={setValue} calculate={calculate}/>
    </>
}
export default Index ;