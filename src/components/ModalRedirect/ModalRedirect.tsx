import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalRedirect.scss';

interface ModalProps {
   redirect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalRedirect({ redirect }: ModalProps) {
   const [sec, setSec] = useState(5);
   const navigate = useNavigate();
   useEffect(() => {
      const timer = setInterval(() => setSec((prev) => prev - 1), 1000);
      setTimeout(() => {
         clearInterval(timer);
         redirect(false);
         navigate('/', { replace: true });
      }, 5000);
			// eslint-disable-next-line
   }, []);

   return (
      <div className="redirect">
         Thanks for your order. Redirect to the store after {sec} sec.
      </div>
   );
}
