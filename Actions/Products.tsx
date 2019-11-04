import { Firebase, FirebaseRef } from '../Constants/fbAudit';

export function getSocList() {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  console.log('getsoclist');
  return dispatch => new Promise(resolve => FirebaseRef.child('/')
    .on('value', (snapshot) => {
      const data = snapshot.val() || [];
      console.log(data);
      return resolve(
        dispatch({ type: 'get_soc_succ', payload: data }),
      );
    })).catch((err) => { throw err.message; });
}
