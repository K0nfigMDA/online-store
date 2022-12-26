import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { IShippingFields } from '../../interfaces/modal';
import './modal-form.scss';


export default function ModalForm() {
	const {register, handleSubmit, formState: {errors}, reset, resetField } = useForm<IShippingFields>({mode: 'onChange'})

	const onSubmit:SubmitHandler<IShippingFields> = (data) => {
		alert(`your name is ${data.name}`)
		reset()
	}
	

   return (
		<>
			<h3 className='modal-text'>Personal Details</h3>
			<form onSubmit={handleSubmit(onSubmit)}>



				<input {...register('name', {
					required: 'Enter your name',
					pattern: {
						value: /[a-z]{3}\s[a-z]{3}/i,
						message: 'Please enter valid name'
					}
				})} 
				type="text" className='modal__name modal-input' placeholder='Name'/>

				{errors?.name && (
					<div className="modal__error">{errors.name?.message}</div>
				)}
				
				<input {...register('phoneNumber', {
					required: 'Enter your phone-number',
					pattern: {
						value: /\+\d{9}/,
						message: 'Please enter valid number'
					}
				})} 
				type="phone" className='modal__phone modal-input' placeholder='Phone number'/>

				{errors?.phoneNumber && (
					<div className="modal__error">{errors.phoneNumber?.message}</div>
				)}

				<input {...register('adress', {
					required: 'Enter your adress',
					pattern: {
						value: /[a-z]{5,30}\s[a-z]{5,30}\s[a-z]{5,30}/i,
						message: 'Please enter valid adress'
					}
				})} 
				type="text" className='modal__adress modal-input' placeholder='Delivery adress'/>

				{errors?.adress && (
					<div className="modal__error">{errors.adress?.message}</div>
				)}

				<input {...register('email', {
					required: 'enter your email',
					pattern: {
						value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
						message: 'Please enter valid Email'
					}
				})} 
				type="email" className='modal__email modal-input' placeholder='E-mail'/>

				{errors?.email && (
					<div className="modal__error">{errors.email?.message}</div>
				)}

				<h3 className='modal-text'>Credit card details</h3>

				<div className='modal__credit-card card'>
					<div className='card__number-logo'>
						<img className='card__logo' src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71" alt="cardlogo" />
						<input name='cardnumber' type="text" className='card__number card-input' placeholder='Card number'/>
					</div>
					<div className='card__date-code'>
						<div className='card__date'>
							<span className='card__date-text'>Valid:</span>
							<input name='date' className='card__date-input card-input' type="text" placeholder='Valid Thru'/>
						</div>
						<div className="card__code">
							<span className='card__code-text'>CVV:</span>
							<input name='code' className='card__code-input card-input' type="text" placeholder='Code' />
						</div>
					</div>
				</div>
				<button type='submit' className='modal__btn'>Confirm</button>
				
			</form>

			
		</>
	 )
}
