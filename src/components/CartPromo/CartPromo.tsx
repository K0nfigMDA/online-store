import { IPromocode } from '../../constants/promo';
import './CartPromo.scss';

interface ICardPromo {
   promocodes: IPromocode[];
   setapplypromo: React.Dispatch<React.SetStateAction<IPromocode[]>>;
}

export default function CartPromo({ promocodes, setapplypromo }: ICardPromo) {
   function dropPromo(k: string) {
      setapplypromo((prev) => prev.filter((el) => el.key !== k));
   }

   return (
      <div className="summary__applied-codes">
         <h3 className="applied-codes__header">Applied codes</h3>
         {promocodes.map((el, index) => (
            <div className="info__text" key={index}>
               {el.title} - {el.discount}%
               <button
                  className="info__btn"
                  onClick={() => {
                     dropPromo(el.key);
                  }}
               >
                  Drop
               </button>
            </div>
         ))}
      </div>
   );
}
