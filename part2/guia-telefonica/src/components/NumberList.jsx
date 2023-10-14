export const NumberList = ({filterPerson, title}) => {
    return (
       <div>
            <h2>{title}</h2>
            {
            filterPerson.map((person) => (
            <p key={person.name}>{`Name: ${person.name}   => Number: ${person.number}`}</p>
            ))
            }
       </div>
        )
}