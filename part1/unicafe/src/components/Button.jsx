const Button = ({handleChange, name}) => { 
    return (<button onClick={() => handleChange(name)}>{name}</button>)
}
export default Button