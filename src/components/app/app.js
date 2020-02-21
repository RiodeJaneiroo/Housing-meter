import React, { useState, useEffect} from "react";
import ItemAddForm from "../item-add-form";
import ItemList from "../item-list";
import Message from "../message";
import SignIn from "../sign-in";
import FirebaseService from '../../services/firebase-service';

const firebase = new FirebaseService();

const App = () => {
  const [months, setMonths] = useState([]);
  const [message, setMessage] = useState({text: ""});
  const [userAuth, setUserAuth] = useState(null);
  const [lastCounters, setLastCounters] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {

      const months = await firebase.getData();      
      const userId = await firebase.authStatus();

      setMonths(months);
      setUserAuth(userId)
      
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

  useEffect(() => { // clear message
    const timerMsg = setTimeout(() => setMessage({text: ""}), 5000);
    return () => clearTimeout(timerMsg);
  }, [message]);
 


  const ItemAdd = async item => {
    const newPost = await firebase.itemAdd(item);

    setMonths(old => [newPost, ...old]);
    setMessage({ text: "Показатели счетчиков успешно добавлены!" });    
  };

  const ItemDelete = async id => {
    let confirmAc = window.confirm("Вы действительно хотите удалить запись?");
    if (!confirmAc) return;

    await firebase.itemDelete(id);
    
    const newMonths = months.filter(month => month.id !== id);
    setMonths(newMonths);
    setMessage({ text: "Показатели счетчика удалены!", type: 0 });    
  };

  const onSignIn = async pass => {
    const resSignIn = await firebase.signIn(pass);
    
    if(resSignIn.error) {
      setMessage({ text: resSignIn.error, type: 0}); 
    } else {
      setUserAuth(resSignIn.userId)
      setMessage({ text: "Вы успешно вошли!"}); 
    }
  }


  return (
    <div className="container">
      <div className="row">
        <Message msg={message} />
        
        { userAuth ? (
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