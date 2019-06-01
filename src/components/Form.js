import React from 'react';

const Form = props => (

	<form onSubmit={props.getWeather}>
		<div className="container">
				<div className="row">
						<div className="col-lg-4">
							<input type="text" name="city" placeholder="City..." />
						</div>
						<div className="col-lg-4">
							<input type="text" name="country" placeholder="Country..." />
						</div>
						<div className="col-lg-4 text-center">
							<button>Submit</button>
						</div>
				</div>
		</div>
	</form>

);

export default Form;
