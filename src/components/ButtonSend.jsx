const ButtonSend = ({onClick}) => {    
    return <button onClick={() => onClick("hello children")}>Click me!</button>
}
export default ButtonSend;