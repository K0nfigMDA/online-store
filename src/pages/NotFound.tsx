import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import './NotFound.scss';

export default function NotFound() {
	return (
		<main className="not-found">
			<div className="not-found__text">{'PAGE NOT FOUND (404)'}</div>
			<Link to = {ROUTES.ROOT}>
				<button className='button not-found__button'>
					Main Page
				</button>
			</Link>
		</main>
	);
}
