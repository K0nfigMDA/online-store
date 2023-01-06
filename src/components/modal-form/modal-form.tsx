import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useCart } from '../../contexts/cart/cartContext';
import { IShippingFields } from '../../interfaces/modal';
import {
   restrictInput,
   addSeparator,
   changeCardImg,
} from '../../helpers/modal';
import './modal-form.scss';

interface ModalProps {
   redirect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalForm({ redirect }: ModalProps) {
   const [cardNumber, setCardNumber] = useState('');
   const { cleanCart } = useCart();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<IShippingFields>({ mode: 'onChange' });

   const onSubmit: SubmitHandler<IShippingFields> = (data) => {
      redirect(true);
      cleanCart();
      reset();
   };

   return (
      <div className="modal-content">
         <h3 className="modal-text">Personal Details</h3>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               {...register('name', {
                  required: 'Please enter your name',
                  pattern: {
                     value: /[a-z]{3}\s[a-z]{3}/i,
                     message: 'Please enter valid name',
                  },
               })}
               type="text"
               className="modal__name modal-input"
               placeholder="Name"
            />

            {errors?.name && (
               <div className="modal__error">{errors.name?.message}</div>
            )}

            <input
               {...register('phoneNumber', {
                  required: 'Please enter your phone-number',
                  pattern: {
                     value: /\+\d{9}/,
                     message: 'Please enter valid number',
                  },
               })}
               type="phone"
               className="modal__phone modal-input"
               placeholder="Phone number"
            />

            {errors?.phoneNumber && (
               <div className="modal__error">{errors.phoneNumber?.message}</div>
            )}

            <input
               {...register('adress', {
                  required: 'Please enter your adress',
                  pattern: {
                     value: /[a-z]{5,30}\s[a-z]{5,30}\s[a-z]{5,30}/i,
                     message: 'Please enter valid adress',
                  },
               })}
               type="text"
               className="modal__adress modal-input"
               placeholder="Delivery adress"
            />

            {errors?.adress && (
               <div className="modal__error">{errors.adress?.message}</div>
            )}

            <input
               {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                     value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                     message: 'Please enter valid Email',
                  },
               })}
               type="email"
               className="modal__email modal-input"
               placeholder="E-mail"
            />

            {errors?.email && (
               <div className="modal__error">{errors.email?.message}</div>
            )}

            <h3 className="modal-text">Credit card details</h3>

            <div className="modal__credit-card card">
               <div className="card__number-logo">
                  <img
                     className="card__logo"
                     src={changeCardImg(cardNumber)}
                     alt="cardlogo"
                  />

                  <input
                     {...register('cardNumber', {
                        required: 'Please enter your card number',
                        pattern: {
                           value: /\d{16}/,
                           message: 'Please enter valid card number',
                        },
                     })}
                     type="number"
                     onInput={(e: FormEvent) => {
                        const target = e.target as HTMLInputElement;
                        restrictInput(e, 16);
                        setCardNumber(target.value);
                     }}
                     className="card__number card-input"
                     placeholder="Card number"
                  />
               </div>
               <div className="card__date-code">
                  <div className="card__date">
                     <span className="card__date-text">Valid:</span>

                     <input
                        {...register('cardDate', {
                           required: 'Please enter your card date',
                           pattern: {
                              value: /[0-1][0-2]\/\d{2}/,
                              message: 'Please enter valid card date',
                           },
                        })}
                        type="text"
                        onInput={(e: FormEvent) => {
                           addSeparator(e);
                        }}
                        className="card__date-input card-input"
                        placeholder="Valid Thru"
                     />
                  </div>
                  <div className="card__code">
                     <span className="card__code-text">CVV:</span>

                     <input
                        {...register('cvv', {
                           required: 'Please enter your cvv',
                           pattern: {
                              value: /\d{3,3}/,
                              message: 'Please enter valid cvv',
                           },
                        })}
                        type="number"
                        onInput={(e: FormEvent) => restrictInput(e, 3)}
                        className="card__code-input card-input"
                        placeholder="Code"
                     />
                  </div>
               </div>
            </div>
            {errors?.cardNumber && (
               <div className="modal__error">{errors.cardNumber?.message}</div>
            )}
            {errors?.cardDate && (
               <div className="modal__error">{errors.cardDate?.message}</div>
            )}
            {errors?.cvv && (
               <div className="modal__error">{errors.cvv?.message}</div>
            )}
            <button type="submit" className="modal__btn">
               Confirm
            </button>
         </form>
      </div>
   );
}
