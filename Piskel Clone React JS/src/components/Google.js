export function onSignIn () {
    var provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
}

export function getAuthUser () {
    return new Promise((resolve, reject) => {
        if (!firebase) {
            reject('no firebase');
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                reject('no auth user');
            }
        });
    });
}

export function signOut () {
    return firebase.auth().signOut();
}
