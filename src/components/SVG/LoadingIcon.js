/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-tabs */
import React, { Component } from 'react';

class LoadingIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorArray: ['#4A4256', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
      shadowArray: ['#352F3F', '#ffffff', '#ffffff'],
      index: 1
    };
    this.indexCount = this.indexCount.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.indexCount, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  indexCount() {
    const { index, colorArray, shadowArray } = this.state;
    const replaceArray = ['#4A4256', '#FFE5B8', '#FFA022', '#B0EFFE', '#A3E5EF', '#90D8E0'];
    const replaceShadowArray = ['#352F3F', '#EDD0A6', '#E57F23'];
    if (index >= 6) {
      this.setState({
        colorArray: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        shadowArray: ['#ffffff', '#ffffff', '#ffffff'],
        index: 0
      });
      return;
    }
    colorArray.splice(index, 1, replaceArray[index]);
    if (index <= 2) {
      shadowArray.splice(index, 1, replaceShadowArray[index]);
    }
    this.setState((prevState) => (
      {
        colorArray: [...colorArray],
        shadowArray: [...shadowArray],
        index: prevState.index + 1
      }
    ));
  }

  render() {
    const { colorArray, shadowArray } = this.state;
    console.log('render');
    return (
      <svg
        version="1.1"
        id="Capa_1"
        width={200}
        viewBox="0 0 512 512"
      >
        {/* 火焰淺藍 */}
        <path
          fill={colorArray[5]}
          d="M358.583,184.493c5.325-27.606-9.692-57.146-55.105-83.399
	c-39.433-22.796-27.155-73.528-21.74-90.366c0.675-2.1-1.552-3.942-3.491-2.891c-8.484,4.594-24.937,15.386-35.236,34.267
	c-15.731,28.84,9.02,71.509-15.588,77.078c-22.948,5.194-22.22-30.306-21.061-44.364c0.176-2.14-2.288-3.462-3.961-2.116
	c-9.349,7.525-30.599,27.037-39.571,55.085c-6.875,21.491-6.328,40.762-2.752,56.706H358.583z"
        />
        <path
          fill={colorArray[4]}
          d="M303.477,101.094c-39.439-22.799-27.152-73.542-21.738-90.373c0.675-2.098-1.551-3.936-3.489-2.887
	c-8.482,4.593-24.94,15.385-35.241,34.27c-2.936,5.383-4.462,11.249-5.162,17.264c-2.314,19.892,4.883,39.746,18.919,54.029
	c19.597,19.942,47.855,52.56,44.28,71.096h57.535C363.907,156.887,348.89,127.347,303.477,101.094z"
        />
        <path
          fill={colorArray[3]}
          d="M318.352,169.961c0-4.772-1.632-9.36-4.594-12.918c-6.319-7.591-16.203-15.301-29.377-22.917
	c-3.819-2.208-7.424-4.621-10.808-7.233c-0.603-0.465-1.465-0.244-1.78,0.45c-6.716,14.806-19.515,25.332-35.951,29.052
	c-4.268,0.965-8.553,1.455-12.736,1.455c-8.926,0-17.427-2.203-24.935-6.36c-0.721-0.399-1.63,0.077-1.716,0.897
	c-0.516,4.947-0.486,10.035,0.093,15.226l1.88,16.88h119.923v-14.532H318.352z"
        />
        <path
          fill="#DFEDE7"
          d="M143.305,172.884c-2.151,0-3.814,1.882-3.537,4.016c3.814,29.399,27.099,213.247,27.099,319.757
	c0,4.316,39.481,7.814,88.184,7.814s88.184-3.498,88.184-7.814c0-106.511,23.285-290.359,27.099-319.757
	c0.277-2.133-1.386-4.016-3.537-4.016L143.305,172.884L143.305,172.884z"
        />
        {/* 第一層深橘 */}
        <path
          fill={colorArray[2]}
          d="M150.493,267.23H359.61l-0.001,0.011c3.192-29.224,6.194-54.228,8.293-71.14H142.2
	c2.1,16.922,5.105,41.945,8.299,71.19C150.497,267.271,150.495,267.251,150.493,267.23z"
        />
        {/* 第二層淺橘 */}
        <path
          fill={colorArray[1]}
          d="M160.975,376.487h188.153c-0.032,0.397-0.062,0.792-0.094,1.189
	c3.069-38.477,6.944-77.193,10.576-110.445H150.493c3.632,33.252,7.507,71.968,10.576,110.445
	C161.037,377.279,161.006,376.883,160.975,376.487z"
        />
        {/* 最下層深灰 */}
        <path
          fill={colorArray[0]}
          d="M166.2,462.3c18.144,6.365,51.145,10.622,88.851,10.622s70.707-4.257,88.851-10.622
	c0,0,2.671-53.956,5.225-85.813H160.975C163.53,408.352,166.2,462.3,166.2,462.3z"
        />
        {/* 陰影 */}
        <path
          fill={shadowArray[2]}
          d="M312.429,196.102c-2.099,16.909-5.101,41.91-8.292,71.128h55.473
	c-0.011,0.103-0.022,0.206-0.034,0.308c-0.009,0.086-0.018,0.172-0.028,0.257c0.171-1.569,0.342-3.128,0.512-4.672
	c0.059-0.542,0.119-1.073,0.178-1.612c0.121-1.095,0.242-2.188,0.362-3.27c0.079-0.715,0.158-1.42,0.237-2.129
	c0.099-0.884,0.197-1.766,0.295-2.64c0.086-0.763,0.171-1.519,0.256-2.275c0.095-0.844,0.19-1.684,0.284-2.518
	c0.08-0.703,0.159-1.403,0.238-2.099c0.1-0.88,0.199-1.751,0.298-2.62c0.076-0.664,0.151-1.329,0.227-1.987
	c0.107-0.931,0.212-1.849,0.317-2.766c0.065-0.561,0.13-1.128,0.194-1.684c0.118-1.023,0.235-2.03,0.351-3.035
	c0.108-0.933,0.215-1.856,0.323-2.773c0.105-0.901,0.21-1.804,0.314-2.689c0.068-0.583,0.136-1.152,0.203-1.728
	c0.095-0.811,0.19-1.621,0.284-2.418c0.072-0.611,0.143-1.211,0.214-1.814c0.087-0.74,0.175-1.475,0.261-2.202
	c0.074-0.627,0.148-1.246,0.222-1.862c0.076-0.64,0.152-1.273,0.227-1.902c0.078-0.653,0.156-1.303,0.233-1.944
	c0.073-0.61,0.145-1.208,0.217-1.807c0.077-0.64,0.154-1.281,0.23-1.908c0.067-0.559,0.133-1.103,0.2-1.652
	c0.074-0.609,0.148-1.227,0.221-1.824c0.056-0.459,0.11-0.9,0.165-1.352c0.157-1.291,0.311-2.549,0.461-3.777
	c0.053-0.429,0.106-0.865,0.158-1.286c0.076-0.622,0.15-1.223,0.225-1.828c0.049-0.399,0.099-0.802,0.147-1.193
	c0.076-0.613,0.15-1.212,0.224-1.806c0.025-0.204,0.052-0.419,0.077-0.621L312.429,196.102L312.429,196.102z"
        />
        <path
          fill={shadowArray[1]}
          d="M304.136,267.23c-3.594,32.91-7.426,71.171-10.48,109.256h55.472
	c-0.033,0.416-0.065,0.831-0.098,1.247c0.056-0.705,0.112-1.409,0.168-2.114c0.186-2.316,0.375-4.632,0.567-6.947
	c0.028-0.334,0.056-0.668,0.084-1.002c0.166-1.994,0.333-3.987,0.503-5.978c0.067-0.791,0.136-1.58,0.203-2.371
	c0.135-1.571,0.271-3.142,0.408-4.71c0.074-0.844,0.148-1.687,0.222-2.53c0.137-1.559,0.276-3.115,0.415-4.67
	c0.07-0.778,0.139-1.557,0.209-2.334c0.176-1.948,0.353-3.891,0.531-5.831c0.033-0.359,0.065-0.719,0.098-1.077
	c0.211-2.292,0.424-4.576,0.639-6.854c0.065-0.692,0.131-1.38,0.196-2.07c0.152-1.609,0.305-3.216,0.458-4.816
	c0.078-0.814,0.156-1.625,0.235-2.436c0.145-1.503,0.29-3.001,0.436-4.495c0.078-0.803,0.157-1.606,0.236-2.406
	c0.157-1.599,0.315-3.19,0.473-4.777c0.065-0.652,0.129-1.307,0.194-1.957c0.219-2.195,0.439-4.379,0.659-6.55
	c0.046-0.451,0.092-0.897,0.138-1.347c0.178-1.753,0.357-3.499,0.536-5.235c0.077-0.748,0.154-1.491,0.231-2.235
	c0.149-1.437,0.298-2.869,0.446-4.292c0.082-0.787,0.164-1.571,0.247-2.353c0.149-1.422,0.298-2.834,0.448-4.241
	c0.076-0.713,0.151-1.428,0.227-2.137c0.192-1.805,0.384-3.595,0.575-5.373c0.03-0.278,0.06-0.562,0.09-0.839
	c0.221-2.046,0.44-4.07,0.66-6.078c0.016-0.148,0.032-0.299,0.049-0.447h-55.475V267.23z"
        />
        <path
          fill={shadowArray[0]}
          d="M335.728,464.767c0.003-0.001,0.006-0.002,0.009-0.002c0.004-0.001,0.007-0.002,0.011-0.003
	c0.113-0.03,0.226-0.059,0.338-0.089c0.01-0.003,0.021-0.005,0.031-0.008c0.001,0,0.001,0,0.002-0.001
	c0.327-0.087,0.651-0.174,0.971-0.261c0.048-0.013,0.095-0.026,0.142-0.039c0.186-0.051,0.371-0.102,0.555-0.154
	c0.002,0,0.003-0.001,0.005-0.001c0.02-0.006,0.041-0.011,0.061-0.017c0.077-0.022,0.155-0.044,0.232-0.065
	c0.018-0.005,0.037-0.01,0.055-0.016c0.037-0.011,0.075-0.021,0.113-0.032c0.079-0.022,0.159-0.045,0.238-0.068
	c0.101-0.029,0.201-0.058,0.302-0.087c0.084-0.024,0.168-0.049,0.252-0.073c0.076-0.022,0.151-0.044,0.227-0.066
	c0.066-0.019,0.131-0.039,0.196-0.058c0.085-0.025,0.17-0.05,0.255-0.076c0.006-0.002,0.013-0.004,0.02-0.006
	c0.071-0.021,0.142-0.042,0.212-0.064c0.056-0.017,0.112-0.034,0.168-0.051c0.05-0.015,0.101-0.03,0.15-0.046
	c0.04-0.012,0.081-0.025,0.121-0.037c0.02-0.006,0.04-0.012,0.059-0.018c0.097-0.03,0.195-0.06,0.292-0.09
	c0.023-0.007,0.047-0.015,0.071-0.022c0.125-0.039,0.249-0.078,0.373-0.117c0.053-0.017,0.106-0.034,0.159-0.05
	c0.072-0.023,0.144-0.046,0.216-0.069c0.022-0.007,0.045-0.014,0.066-0.021c0.034-0.011,0.068-0.022,0.102-0.033
	c0.1-0.032,0.198-0.064,0.297-0.096c0.032-0.01,0.064-0.021,0.095-0.031c0.032-0.01,0.064-0.021,0.095-0.031
	c0.025-0.008,0.05-0.017,0.076-0.025c0.084-0.027,0.167-0.055,0.25-0.083c0.03-0.01,0.06-0.02,0.09-0.03
	c0.113-0.038,0.226-0.075,0.338-0.113c0.017-0.006,0.035-0.012,0.052-0.017c0.021-0.007,0.042-0.014,0.064-0.022
	c0.064-0.022,0.128-0.044,0.192-0.066c0.044-0.015,0.089-0.03,0.133-0.045c0.039-0.014,0.078-0.027,0.117-0.04
	c0.124-0.043,0.248-0.086,0.37-0.129l0,0c0.001-0.011,2.671-53.959,5.225-85.813l0,0h-55.473
	c-2.655,33.112-4.719,66.084-5.524,95.293C307.014,470.436,323.468,467.975,335.728,464.767z"
        />
        <path
          fill="#D0D6D3"
          d="M343.262,490.534c0.008-1.076,0.019-2.156,0.031-3.246c0.007-0.593,0.015-1.189,0.023-1.786
	c0.014-1.035,0.031-2.078,0.049-3.125c0.01-0.593,0.02-1.183,0.031-1.78c0.023-1.221,0.05-2.453,0.078-3.689
	c0.01-0.417,0.017-0.829,0.027-1.248c0.038-1.585,0.08-3.183,0.126-4.791c0.018-0.643,0.039-1.293,0.058-1.941
	c0.031-1.036,0.063-2.075,0.098-3.12c0.024-0.72,0.048-1.442,0.073-2.166c0.015-0.448,0.029-0.892,0.045-1.342
	c-12.578,4.412-32.298,7.81-55.773,9.48c-0.063,2.275-0.119,4.53-0.166,6.758c-0.24,11.344-7.116,21.467-17.535,25.815
	c0.007,0,0.015,0,0.022,0c1.214-0.019,2.418-0.04,3.614-0.064c0.119-0.002,0.238-0.005,0.356-0.007
	c1.157-0.023,2.305-0.048,3.445-0.075c0.138-0.003,0.276-0.007,0.414-0.01c1.146-0.028,2.283-0.057,3.409-0.089
	c0.088-0.003,0.175-0.005,0.263-0.008c2.353-0.067,4.662-0.142,6.924-0.225c0.067-0.002,0.134-0.005,0.2-0.007
	c1.083-0.04,2.153-0.082,3.214-0.126c0.131-0.005,0.262-0.011,0.392-0.016c1.043-0.044,2.076-0.089,3.096-0.136
	c0.112-0.005,0.224-0.01,0.336-0.016c1.041-0.049,2.071-0.099,3.087-0.151c0.06-0.003,0.119-0.006,0.179-0.009
	c2.084-0.108,4.112-0.223,6.083-0.344c0.095-0.006,0.192-0.012,0.287-0.018c0.931-0.058,1.847-0.118,2.751-0.179
	c0.127-0.009,0.254-0.017,0.38-0.026c0.893-0.061,1.774-0.124,2.639-0.188c0.105-0.008,0.21-0.016,0.314-0.024
	c0.892-0.067,1.772-0.135,2.633-0.204c0.025-0.002,0.05-0.004,0.076-0.006c0.871-0.071,1.725-0.143,2.564-0.216
	c0.053-0.005,0.107-0.009,0.159-0.014c0.813-0.072,1.607-0.145,2.388-0.22c0.103-0.01,0.208-0.02,0.311-0.03
	c0.755-0.073,1.494-0.147,2.217-0.222c0.113-0.012,0.226-0.024,0.339-0.036c0.722-0.076,1.43-0.153,2.119-0.231
	c0.081-0.009,0.161-0.019,0.241-0.028c1.436-0.165,2.799-0.335,4.086-0.51c0.07-0.009,0.141-0.019,0.21-0.028
	c0.607-0.083,1.194-0.168,1.766-0.253c0.096-0.014,0.192-0.029,0.287-0.043c0.557-0.084,1.096-0.17,1.618-0.256
	c0.086-0.014,0.17-0.029,0.255-0.043c0.527-0.089,1.039-0.178,1.529-0.269c0.05-0.009,0.097-0.019,0.146-0.028
	c0.491-0.092,0.965-0.185,1.417-0.278c0.024-0.005,0.05-0.01,0.075-0.015c0.452-0.094,0.88-0.19,1.291-0.287
	c0.058-0.014,0.118-0.027,0.176-0.041c0.391-0.093,0.76-0.187,1.111-0.282c0.061-0.016,0.121-0.033,0.181-0.049
	c0.344-0.095,0.67-0.191,0.974-0.287c0.046-0.015,0.089-0.029,0.135-0.044c0.308-0.1,0.598-0.201,0.862-0.303
	c0.016-0.006,0.03-0.013,0.046-0.019c0.259-0.101,0.494-0.203,0.708-0.305c0.021-0.01,0.045-0.02,0.065-0.03
	c0.207-0.102,0.388-0.204,0.551-0.307c0.027-0.017,0.055-0.034,0.08-0.051c0.152-0.101,0.281-0.202,0.389-0.304
	c0.019-0.018,0.037-0.036,0.054-0.055c0.101-0.103,0.183-0.207,0.238-0.311c0.007-0.014,0.012-0.028,0.018-0.042
	c0.052-0.11,0.084-0.22,0.084-0.331c0-1.527,0.006-3.074,0.015-4.632C343.253,491.531,343.258,491.031,343.262,490.534z"
        />
        <path
          fill="#D7E0DC"
          d="M366.797,172.884h-51.411l-2.958,23.218h55.473c-0.002,0.019-0.005,0.039-0.007,0.059
	c1.088-8.769,1.935-15.368,2.439-19.26C370.611,174.767,368.949,172.884,366.797,172.884z"
        />
        <path d="M376.085,169.125c-2.106-2.397-5.146-3.772-8.339-3.772h-0.281c-4.527-32.57-34.195-56.284-59.269-70.779
	c-14.613-8.447-22.668-22.376-23.944-41.402c-1.096-16.354,3.041-32.169,5.605-40.142c1.253-3.9,0.026-8.109-3.124-10.723
	c-3.153-2.616-7.521-3.044-11.123-1.093c-9.501,5.146-27.106,16.831-38.261,37.283c-8.301,15.219-6.834,33.265-5.657,47.766
	c1.683,20.694,0.305,24.377-4.983,25.574c-3.7,0.836-5.349-0.072-6.369-0.958c-4.788-4.159-6.957-18.071-5.524-35.442
	c0.328-3.983-1.74-7.768-5.271-9.64c-3.522-1.868-7.808-1.461-10.917,1.04c-9.418,7.581-32.366,28.473-42.022,58.656
	c-4.216,13.18-6.089,26.552-5.605,39.861h-6.746c-3.195,0-6.235,1.376-8.341,3.774c-2.103,2.395-3.074,5.582-2.663,8.741
	c0.823,6.346,1.621,12.591,2.395,18.74c0.022,0.329,0.058,0.655,0.121,0.971c3.097,24.645,5.802,47.7,8.167,69.207
	c-0.009,0.147-0.022,0.294-0.022,0.443c0,0.727,0.109,1.427,0.301,2.092c15.168,138.683,16.075,211.99,16.075,227.336
	c0,7.706,9.051,9.602,12.916,10.412c4.73,0.991,11.385,1.871,19.778,2.615c16.866,1.493,39.248,2.316,63.017,2.316
	s46.15-0.823,63.02-2.318c8.393-0.744,15.047-1.623,19.778-2.615c3.865-0.809,12.916-2.706,12.916-10.412
	c0-15.353,0.907-88.681,16.072-227.328c0.193-0.667,0.302-1.37,0.302-2.099c0-0.152-0.014-0.3-0.023-0.45
	c2.366-21.508,5.072-44.565,8.17-69.212c0.061-0.311,0.098-0.631,0.119-0.955c0.774-6.151,1.572-12.397,2.396-18.746
	C379.159,174.705,378.188,171.519,376.085,169.125z M170.95,130.081c6.174-19.299,18.779-34.394,28.354-43.72
	c0.057,13.824,2.508,28.372,11.159,35.886c3.627,3.152,9.971,6.453,19.57,4.278c6.242-1.412,14.193-5.592,16.627-17.482
	c1.428-6.974,0.756-15.245,0.044-24.001c-1.069-13.155-2.281-28.064,3.866-39.334c5.956-10.918,14.196-18.883,21.464-24.343
	c-2.016,9.182-3.615,20.806-2.81,32.814c1.609,23.999,12.479,42.476,31.433,53.433c30.079,17.388,47.724,37.209,51.556,57.74
	H166.065C165.574,153.605,167.21,141.77,170.95,130.081z M336.665,492.168c-9.342,2.175-37.509,4.772-80.666,4.772
	s-71.324-2.597-80.666-4.772c-0.037-6.34-0.15-12.925-0.33-19.708c20.209,5.06,49.419,7.991,80.996,7.991
	c31.576,0,60.787-2.931,80.996-7.991C336.815,479.243,336.702,485.828,336.665,492.168z M353.792,259.699H212.588
	c-4.159,0-7.53,3.371-7.53,7.53s3.371,7.53,7.53,7.53h139.56c-3.121,29.013-6.342,61.539-9.035,94.195h-13.005
	c-4.159,0-7.53,3.371-7.53,7.53s3.371,7.53,7.53,7.53h11.802c-1.926,24.979-3.485,49.723-4.391,72.709
	c-18.674,5.385-49.149,8.665-81.519,8.665c-32.371,0-62.846-3.28-81.52-8.666c-0.906-22.983-2.466-47.728-4.392-72.709h124.879
	c4.159,0,7.53-3.371,7.53-7.53s-3.371-7.53-7.53-7.53H168.884c-2.693-32.655-5.915-65.181-9.035-94.195h17.699
	c4.159,0,7.53-3.371,7.53-7.53s-3.371-7.53-7.53-7.53h-19.343c-2.416-21.808-4.697-41.046-6.536-56.068h208.662
	C358.49,218.653,356.209,237.891,353.792,259.699z M362.2,188.571H149.798c-0.385-3.059-0.734-5.802-1.036-8.157l0,0h214.474l0,0
	C362.934,182.769,362.585,185.512,362.2,188.571z"
        />
      </svg>

    );
  }
}

export default LoadingIcon;