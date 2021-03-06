import React from 'react';
import LinearGradient from './LinearGradient';

const GlassOfChampagne = (props) => {
  const { mainColor } = props;
  return (
    <svg
      version="1.1"
      id="圖層_1"
      x="0px"
      y="0px"
      width="150px"
      height="200px"
      viewBox="0 0 148.75 449.305"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <LinearGradient mainColor={mainColor} />
      <g>
        <rect x="11.576" y="429.928" fill="none" stroke="#040000" strokeWidth="5" strokeMiterlimit="10" width="125.6" height="6.766" />
        <rect x="11.576" y="443.76" fill="none" stroke="#040000" strokeWidth="5" strokeMiterlimit="10" width="125.6" height="3.045" />
        <line fill="none" stroke="#040000" strokeWidth="5" strokeMiterlimit="10" x1="74.375" y1="292.842" x2="74.375" y2="429.928" />
        <path
          fill="url(#color-gradient)"
          stroke="#040000"
          strokeWidth="5"
          strokeMiterlimit="10"
          d="M2.5,2.5v218.466
              c0,39.696,32.18,71.876,71.875,71.876c39.696,0,71.875-32.18,71.875-71.876l0,0V2.5H2.5z"
        />
      </g>
    </svg>

  );
};
export default GlassOfChampagne;
