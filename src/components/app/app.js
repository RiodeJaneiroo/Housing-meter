import React, { useState, useEffect} from "react";
import ItemAddForm from "../item-add-form";
import ItemList from "../item-list";
// import Message from "../message";
import SignIn from "../sign-in";
import { firestore, fireauth } from "../../firebase";
const dataRef = firestore.collection('apartment/ODbPGN3kqlmPiQUhjc9Z/months/');

const App = () => {
  const [months, setMonths] = useState([]);
  // const [message, setMessage] = useState({});
  const [userAuth, setUserAuth] = useState(null);
  const [lastCounters, setLastCounters] = useState({});


  
  useEffect(() => {

    const fetchData = async () => {
      const snapshop = await dataRef.get();
      const months = snapshop.docs.map(collectIdsAndDocs);
      
      setMonths(months);
  
      await fireauth.onAuthStateChanged((user) => {
        const userAuth = user ? user.uid : null;
        setUserAuth(userAuth);
      });
      
    };
    fetchData();
  }, []);

  useEffect(() => {

    setMonths(months => {
      months.sort((a,b) => b.month.seconds - a.month.seconds);
      setLastCounters(months[0]);

      return months;
    });
    
  }, [months]);
 
  const collectIdsAndDocs = (doc) => {
    return {id: doc.id, ...doc.data()};
  }

 

  const ItemAdd = async item => {

    const docRef = await dataRef.add(item);
    const doc = await docRef.get();
    const newPost = collectIdsAndDocs(doc);

    setMonths(old => [newPost, ...old]);

    // showMsg("Показатели счетчиков успешно добавлены!");
  };

  const ItemDelete = async id => {
    let confirmAc = window.confirm("Вы действительно хотите удалить запись?");
    if (!confirmAc) return;
    
    await dataRef.doc(id).delete();
    
    const newMonths = months.filter(month => month.id !== id);
    setMonths(newMonths);
  };

  const onSignIn = async pass => {

    await fireauth.signInWithEmailAndPassword('prainua@gmail.com', pass).then((res) => {
      setUserAuth(res.user.uid)
      // showMsg('Вы успешно вошли!');
    }).catch(function(error) {
      // showMsg(error.message, 0);
    });
  }


  return (
    <div className="container">
      <div className="row">
        {/* <Message type={msgType} text={msgText} /> */}
        {userAuth ? (
          <div>
            <ItemAddForm onItemAdded={ItemAdd} lastCounters={lastCounters} />
            <ItemList items={months} onItemDelete={ItemDelete} />
          </div>
        ) : (
          <SignIn onSignIn={onSignIn} />
        )}
      </div>
    </div>
  );
}

export default App;