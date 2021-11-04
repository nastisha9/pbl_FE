const markers = [
  {
    latitude: 47.021074901638116,
    longitude: 28.83304776048192,
  }
];
const APIPath = '/markers';

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
