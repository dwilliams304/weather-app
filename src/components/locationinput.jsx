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
            <label> Fahrenheit?
                <input 
                    onChange={props.switchFarenheit}
                    value={props.farenheit}
                    type='checkbox'
                />
            </label><br/>
            </form>
            <button className='random-city' onClick={() => props.randomCity()}>Random City!</button>
        </>
    )
}