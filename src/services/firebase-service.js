import { firestore, fireauth } from "../firebase";

export default class FirebaseService {
  _apiBase = firestore.collection('apartment/ODbPGN3kqlmPiQUhjc9Z/months/');

  collectIdsAndDocs = (doc) => {
    return {id: doc.id, ...doc.data()};
  }

  async getData() {
    const snapshop = await this._apiBase.get();
    const months = snapshop.docs.map(this.collectIdsAndDocs);

    return months;
  }

  async itemAdd(item) {
    const docRef = await this._apiBase.add(item);
    const doc = await docRef.get();
    const newPost = this.collectIdsAndDocs(doc);

    return newPost;
  }

  async itemDelete(id) {
    this._apiBase.doc(id).delete();
  }

  async authStatus() {
    let userID = null;
    await fireauth.onAuthStateChanged((user) => userID = user ? user.uid : null);
    return userID;
  }

  async signIn(pass) {
    let userId = null;
    let error = false;
    await fireauth.signInWithEmailAndPassword('prainua@gmail.com', pass)
      .then(res => userId = res.user.uid)
      .catch(err => error = err.message);

    return {
      userId,
      error
    };
  }

}