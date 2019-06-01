import React from 'react';

const Weather = props => (
		<div className="weather__info container">
			<div className="row">
			{
				props.city && props.city &&
				<div className="col-sm-6">
					<p className="weather__key">Location:</p>
						<p className="weather__value"> { props.city }, { props.country }</p>
				</div>
			}
			{
				props.temperature &&
				<div className="col-sm-6">
					<p className="weather__key">Temperature:</p>
						<p className="weather__value"> { props.temperature } &deg;F</p>
				</div>
			}
			{
				props.humidity &&
				<div className="col-sm-6">
					<p className="weather__key">Humidity:</p>
						<p className="weather__value"> { props.humidity }</p>
				</div>
			}
			{
				props.description &&
				<div className="col-sm-6">
					<p className="weather__key">Conditions:</p>
						<p className="weather__value"> { props.description }</p>
				</div>
			}
			{
				props.error &&
				<p className="weather__error">{ props.error }</p>
			}
		</div>
		</div>
);


export default Weather;
