export const createProject = (item) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firebase.collection('/').add({
        ...item,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };