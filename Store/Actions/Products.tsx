import { Firebase, FirebaseRef } from '../../Constants/fbAudit';

export function getSocList() {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  return dispatch => new Promise(resolve => FirebaseRef.child('/').orderByChild('तालुका रत्नागिरी').equalTo('खेड')
    .on('value', (snapshot) => {
      const data = snapshot.val() || [];
      return resolve(
        dispatch({ type: 'get_soc_succ', payload: data }),
      );
    })).catch((err) => { throw err.message; });
}
