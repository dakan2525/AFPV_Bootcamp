export const Search = ({newContact, handelChange}) => {
    return(
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            name="search"
            value={newContact.search}
            onChange={handelChange}
          />
        </div>
    )
}