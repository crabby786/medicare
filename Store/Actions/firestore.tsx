import { db } from '../../Constants/fbAudit';

export {
    addDoc,getDocs,getDoc,setDoc,getByQuery
}
function addDoc(data) {
    return ()=> {
        db.collection("Society").add({
            name: data.name
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}

function getDocs() {
    return (dispatch)=> {
        db.collection("Society")
        .get()
        .then((querySnapshot:any) => {      
            // dispatch({type:'get_soc_succ',payload:querySnapshot})
            querySnapshot.forEach((doc) => {
                var abc = doc.data();
            });
        });
    }
}
function getDoc(docName) {
    return (dispatch)=> {
        db.collection("Society").doc(docName).get()
        .then(function(doc) {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                let payload = doc.data()
                dispatch({type:'get_soc_succ',payload})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}
function getByQuery(key, value) {
    return (dispatch)=> {
        db.collection("stockA")
        .where(key, "==", value)
        .get()
        .then(function(querySnapshot) {
            debugger;
            var payload = [];
            querySnapshot.forEach(function(doc) {
                let abc= doc.data();
                // console.log(abc);
                payload.push(abc);
            });
            dispatch({type:'query_succsess',payload})
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
}

function setDoc(docName,newData) {
    return ()=> {
        db.collection("Society")
        .doc(docName).set
        ({
            name: newData.name
        })
    }
}
