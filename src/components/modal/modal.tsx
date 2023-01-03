import './modal.scss';


interface ModalProps {
	children: React.ReactNode
	modal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({children, modal}: ModalProps) {
   return (
			<div className='modal-bg' onClick={(e) => {if(e.target === e.currentTarget )modal(false)}}>
			{children}
			</div>
	 )
}
