import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { VIEW_OPTIONS, VIEW_PARAM } from '../../constants/view';
import './ViewModeSwitch.scss';

export default function ViewModeSwitch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get(VIEW_PARAM);
  const viewMode = param 
    ? (param === VIEW_OPTIONS.FALSE
        ? false
        : true) 
    : true;
  const viewClass = 'active-mode';

  const changeView = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    let viewOption: VIEW_OPTIONS;
    if (target.classList.contains('small-v')) {
      viewOption = VIEW_OPTIONS.FALSE;
    }
    if (target.classList.contains('big-v')) {
      viewOption = VIEW_OPTIONS.TRUE;
    }
    setSearchParams(prev => {
      prev.set(VIEW_PARAM, viewOption);
      return prev;
      })
  }

  return (
    <div className="view-mode">
      <div className={`small-v ${!viewMode ? viewClass : ''}`} onClick={changeView}>
        { Array.from(Array(6**2)).map((_, i) => <div key={i}>.</div>) }
      </div>
      <div className={`big-v ${viewMode ? viewClass : ''}`} onClick={changeView}>
        { Array.from(Array(4**2)).map((_, i) => <div key={i}>.</div>) }
      </div>
    </div>
  );
}