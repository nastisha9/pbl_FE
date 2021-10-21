const resycleTypes = [
  {
    id: 'paper',
    marker_color: 'red',
    label: 'Paper',
    description: 'asdsadasdasdsfsfasd',
  },
  {
    id: 'accumulator',
    marker_color: 'green',
    label: 'accumulator',
    description: 'asdsadasdasdsfsfasd',
  }
];
const APIPath = '/resycle-types';

export const APIGetResyleTypes = ({url = ''}) =>
  new Promise((res, rej) => {
    const path = 'all';

    setTimeout(() => {
      if (`${APIPath}/${path}` === url) {
        res({
          resycleTypes,
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

  export const APICreateResyleTypes = ({url = '', body = {}}) =>
  new Promise((res, rej) => {
    const path = 'create';

    setTimeout(() => {
      if (`${APIPath}/${path}` === url) {
        const markerId = new window.Date();

        resycleTypes.push({id: markerId, ...body});
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
