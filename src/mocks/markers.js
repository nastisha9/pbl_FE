const markers = [
  {
    latitude: 47.021074901638116,
    longitude: 28.83304776048192,
    type: {
      id: 'paper',
      marker_color: 'red',
      label: 'Paper',
      description: 'asdsadasdasdsfsfasd'
    }
  },
  {
    id: '2021-10-25T23:10:10.442Z',
    longitude: 28.837933395456158,
    latitude: 47.02197611809995,
    adress_name: 'sdadsadadad',
    type: {
      id: 'glass',
      label: 'glass',
      marker_color: '#F8E71C',
      types: [
        'glass'
      ],
      description: ''
    }
  },
  {
    id: '2021-10-25T23:10:46.651Z',
    longitude: 28.843631969140933,
    latitude: 47.024233262925435,
    type: {
      id: 'accumulator',
      marker_color: 'green',
      label: 'accumulator',
      description: 'asdsadasdasdsfsfasd'
    }
  },
  {
    id: '2021-10-25T23:20:35.659Z',
    longitude: 27.924742995389487,
    latitude: 47.75020116912616,
    name: 'jlklkjkljkljl',
    type: {
      id: 'paper',
      marker_color: 'red',
      label: 'Paper',
      description: 'asdsadasdasdsfsfasd'
    }
  }
];
const APIPath = 'http://localhost:3000/marker';

export const APIGetMarkers = ({url = ''}) =>
  new Promise((res, rej) => {
    const path = 'all';

    setTimeout(() => {
      if (`${APIPath}/${path}` === url) {
        res({
          markers,
          success: true,
        });
      } else {
        rej({
          success: false,
          error: {
            message: 'Resource does not Exist',
          },
        });
      }
    }, 300);
  });

  export const APICreateMarker = ({url = '', body = {}}) =>
  new Promise((res, rej) => {
    const path = 'create';

    setTimeout(() => {
      if (`${APIPath}/${path}` === url) {
        const markerId = new window.Date();

        markers.push({id: markerId, ...body});
        res({
          marker: {id: markerId, ...body},
          success: true,
        });
      } else {
        rej({
          success: false,
          error: {
            message: 'user is not authorized',
          },
        });
      }
    }, 300);
  });

export default APIPath;
