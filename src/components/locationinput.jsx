export const LocationInput = props => {

    return(
        <>
            <form onSubmit={props.handleSubmit}>
                <input 
                    name='location'
                    onChange={props.handleChange}
                    value={props.inputValue}
                    className='location-input'
                    placeholder='Input a city or ZIP code...'
                /><br/>
            </form>
            <button className='rand-city' onClick={() => props.randomCity()}>Random City!</button>
        </>
    )
}