import { useSearchParams } from 'react-router-dom';
import { VIEW_OPTIONS, VIEW_PARAM } from '../../constants/view';
import './ViewModeSwitch.scss';

export default function ViewModeSwitch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get(VIEW_PARAM);
  const viewMode = param 
    ? (param === VIEW_OPTIONS[1]
        ? false
        : true) 
    : true;
  const viewClass = 'active-mode';

  return (
    <div className="view-mode">
      <div className={`small-v ${!viewMode ? viewClass : ''}`} onClick={() => setSearchParams(prev => {
          prev.set(VIEW_PARAM, VIEW_OPTIONS[1]);
          return prev;
          })
        }>
        { Array.from(Array(6**2)).map((_, i) => <div key={i}>.</div>) }
      </div>
      <div className={`big-v ${viewMode ? viewClass : ''}`} onClick={() => setSearchParams(prev => {
          prev.set(VIEW_PARAM, VIEW_OPTIONS[0]);
          return prev;
          })
        }>
        { Array.from(Array(4**2)).map((_, i) => <div key={i}>.</div>) }
      </div>
    </div>
  );
}