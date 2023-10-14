export const AddPerson = ({value, handelChange, name, title}) => {
    return(
        <div>
          <label htmlFor={name}>{title}: </label>
          <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={handelChange}
          />
        </div>
    )
}