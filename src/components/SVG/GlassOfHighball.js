import React from 'react';
import LinearGradient from './LinearGradient';

const GlassOfHighball = (props) => {
  const { mainColor } = props;
  return (
    <svg
      version="1.1"
      id="圖層_1"
      x="0px"
      y="0px"
      width="200px"
      height="200px"
      viewBox="0 0 209.5 477.5"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <LinearGradient mainColor={mainColor} />
      <rect x="2.5" y="5" fill="url(#color-gradient)" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" width="204.5" height="426.5" />
      <rect x="2.5" y="444.5" fill="none" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" width="204.5" height="16" />
      <rect x="2.5" y="472.5" fill="none" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" width="204.5" height="5" />
      <g>

        <rect x="30.376" y="98.836" transform="matrix(0.8767 -0.4811 0.4811 0.8767 -54.4549 44.7975)" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" width="59.527" height="59.528" />

        <rect x="124.345" y="134.502" transform="matrix(0.9747 0.2236 -0.2236 0.9747 40.6344 -30.3012)" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" width="59.527" height="59.528" />

        <rect x="47.932" y="194.379" transform="matrix(0.9837 -0.1796 0.1796 0.9837 -39.001 17.6033)" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" width="59.527" height="59.528" />

        <rect x="118.224" y="260.118" transform="matrix(0.3489 0.9372 -0.9372 0.3489 368.0164 50.0515)" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" width="59.526" height="59.528" />

        <rect x="35.35" y="301.914" transform="matrix(0.6182 0.786 -0.786 0.6182 285.5562 75.4453)" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" width="59.528" height="59.527" />
      </g>
    </svg>

  );
}
export default GlassOfHighball;
