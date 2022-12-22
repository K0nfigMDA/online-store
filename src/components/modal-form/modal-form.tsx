import './modal-form.scss';

export default function ModalForm() {
   return (
		<>
			<h3 className='modal-text'>Personal Details</h3>
			<form action="">
				<input type="text" className='modal__name modal-input' placeholder='Name'/>
				<input type="text" className='modal__phone modal-input' placeholder='Phone number'/>
				<input type="text" className='modal__adress modal-input' placeholder='Delivery adress'/>
				<input type="text" className='modal__email modal-input' placeholder='E-mail'/>
				<h3 className='modal-text'>Credit card details</h3>

				<div className='modal__credit-card card'>
					<div className='card__number-logo'>
						<img className='card__logo' src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71" alt="cardlogo" />
						<input type="text" className='card__number card-input' placeholder='Card number'/>
					</div>
					<div className='card__date-code'>
						<div className='card__date'>
							<span className='card__date-text'>Valid:</span>
							<input className='card__date-input card-input' type="text" placeholder='Valid Thru'/>
						</div>
						<div className="card__code">
							<span className='card__code-text'>CVV:</span>
							<input className='card__code-input card-input' type="text" placeholder='Code' />
						</div>
					</div>
				</div>
				<button type='submit' className='modal__btn'>Confirm</button>
				
			</form>

			
		</>
	 )
}
