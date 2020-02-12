import React, { Component } from "react";
import ItemAddForm from "../item-add-form";
import ItemList from "../item-list";
import Message from "../message";
import SignIn from "../sign-in";
import { firestore, fireauth } from "../../firebase";

export default class App extends Component {
  maxId = 100;
  dataRef = firestore.collection('apartment/ODbPGN3kqlmPiQUhjc9Z/months/');
  state = {
    lastCounters: {},
    msgType: 0, // 0: danger | 1: success | 2: warning
    months: null,
    userAuth: null
  };
  componentDidMount = async () => {
    
    const snapshop = await this.dataRef.get();
    const months = snapshop.docs.map(this.collectIdsAndDocs);
    const lastCounters = months.slice().pop();

    await fireauth.onAuthStateChanged((user) => {
      const userAuth = user ? user.uid : null;
      this.setState({
        userAuth
      });
    });
    
    this.setState({
      months,
      lastCounters
    });
    
  }
  collectIdsAndDocs(doc) {
    return {id: doc.id, ...doc.data()};
  }
  showMsg = (msgText, msgType = 1, msgTimeout = 5000) => {
    this.setState({
      msgType,
      msgText
    });

    setTimeout(() => {
      this.setState({
        msgText: ""
      });
    }, msgTimeout);
  };

  ItemAdd = async item => {
    const { dataRef, showMsg } = this;

    const docRef = await dataRef.add(item);
    const doc = await docRef.get();
    const newPost = this.collectIdsAndDocs(doc);

    this.setState(({months}) => ({months: [newPost, ...months]}));

    showMsg("Показатели счетчиков успешно добавлены!");
  };

  ItemDelete = async id => {
    let confirmAc = window.confirm("Вы действительно хотите удалить запись?");
    if (!confirmAc) return;
    console.log(id);
    
    await this.dataRef.doc(id).delete();
    
    const allMonths = this.state.months;
    const months = allMonths.filter(month => month.id !== id);
    this.setState({ months });

    this.showMsg("Показатели счетчиков успешно удалены!");
  };

  onSignIn = async pass => {

    await fireauth.signInWithEmailAndPassword('prainua@gmail.com', pass).then((res) => {
      
      const userAuth = res.user.uid;
      this.setState({ userAuth });  
      this.showMsg('Вы успешно вошли!');

    }).catch(function(error) {
      this.showMsg(error.message, 0);
    });
  }

  render() {
    const { months, msgType, msgText, lastCounters, userAuth } = this.state;
    if(userAuth) {
      
      return (
        <div className="container">
          <div className="row">
            <Message type={msgType} text={msgText} />
            <ItemAddForm onItemAdded={this.ItemAdd} lastCounters={lastCounters} />
            <ItemList items={months} onItemDelete={this.ItemDelete} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <Message type={msgType} text={msgText} />
            <SignIn onSignIn={this.onSignIn} />
          </div>
        </div>
      );
    }
    
  }
}
