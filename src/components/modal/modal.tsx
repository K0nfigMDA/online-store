import './modal.scss';


interface ModalProps {
	children: React.ReactNode
	modal: React.Dispatch<React.SetStateAction<boolean>>
	redirect: boolean
}

export default function Modal({children, modal, redirect}: ModalProps) {
   return (
			<div className='modal-bg' onClick={(e) => {if(e.target === e.currentTarget && !redirect )modal(false)}}>
			{children}
			</div>
	 )
}
