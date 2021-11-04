const resycleTypesList = [
  {
    id: 1,
    type: 'paper',
  },
  {
    id: 2,
    type: 'glass',
  },
  {
    id: 3,
    type: 'plastic'
  },
];
const APIPath = '/single-types-list';

export const APIGetResyleTypesList = ({url = ''}) =>
  new Promise((res, rej) => {
    const path = 'all';

    setTimeout(() => {
      if (`${APIPath}/${path}` === url) {
        res({
          resycleTypesList,
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

export default APIPath;
