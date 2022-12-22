import './modal.scss';


interface ModalProps {
	children: React.ReactNode
}

export default function Modal({children}: ModalProps) {
   return (
		<>
			<div className='modal-bg'></div>
			<div className='modal-content'>
			{children}
			</div>
			
		</>
	 )
}
