import axiosAuth from './auth';
import { notification } from './../actions/App';
import { signOut, modalOpen } from '../actions/Auth';

export default (dispatch, url, data) => {
  return new Promise((resolve, reject) => {
    axiosAuth(url, data)
      .then(response => response.data.state
        ? resolve(response.data.payload)
        : reject(response.data.payload.errorMessage !== undefined
          ? response.data.payload.errorMessage
          : response.data.error
        )
      )
      .catch(error => {
        if ( error && error.response && error.response.status && error.response.status === 401 ) {
          dispatch(signOut());
          dispatch(modalOpen('signIn'));
        } else if ( error && error.response && error.response.status && error.response.status === 303 ) {
          window.location.href = error.response.data.url;
        } else {
          notification('error', error);
        }
      });
  });
};

// import axiosAuth from './auth';
// import { notification } from './../actions/App';
// import { signOut, modalOpen } from '../actions/Auth';

// export default (dispatch, url, data) => {
//   return new Promise((resolve, reject) => {
//     axiosAuth(url, data)
//       .then(response => response.data.state
//         ? resolve(response.data.payload)
//         : reject(response.data.payload.errorMessage !== undefined
//           ? response.data.payload.errorMessage
//           : response.data.error
//         )
//       )
//       .catch(error => {
//         if ( error && error.response && error.response.status && error.response.status === 401 ) {
//           dispatch(signOut());
//           dispatch(modalOpen('signIn'));
//         } else if ( error && error.response && error.response.status && error.response.status === 303 ) {
//           window.location.href = error.response.data.url;
//         } else {
//           notification('error', error);
//         }
//       });
//   });
// };

