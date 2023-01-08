import { IPromocode } from "../../constants/promo";

interface ICardPromo {
	promocodes: IPromocode[]
	setapplypromo: React.Dispatch<React.SetStateAction<IPromocode[]>>
}



export default function CartPromo({promocodes, setapplypromo}:ICardPromo) {

	function dropPromo(k:string) {
		setapplypromo((prev) => prev.filter((el) => el.key !== k))
	}


	return (
		<div className="summary__applied-codes">
			<div className="applied-codes__header">Applied codes</div>
			<div className="applied-codes__info">
				{
				promocodes.map(
					(el, index) => <div key = {index}>{el.title} - {el.discount}%
						<button onClick={()=>{dropPromo(el.key)}}>Drop</button></div>)}
			</div>
		</div>
	);
}