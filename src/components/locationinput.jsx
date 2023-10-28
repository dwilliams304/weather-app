export const LocationInput = props => {

    return(
        <form onSubmit={props.handleSubmit}>
            <h2>Input your location here!</h2>
            <input 
                name='location'
                onChange={props.handleChange}
                value={props.inputValue}
                className='location-input'
                placeholder='Input a city or ZIP code...'
            />
        </form>
    )
}