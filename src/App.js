import "./App.css";
import React from "react";
import Profile from "./Profile/Profile";
function App() {
  const sayName = (name) => {
    alert(name);
  };
  const styledDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: '50px',
    fontFamily: 'Courier New'
  };
  return (
    <div  style={styledDiv}>
      <Profile
        fullName="Rihem Ben Ahmed"
        bio="bac sciences exp, licence en administration des réseaux et services, Ingenieurie en dévelepement des infrastructures de communications"
        profession="Etudiante"
        handleName={sayName}
      >
        <img src="femme.png" alt="profile" />
      </Profile>
    </div>
  );
}

export default App;
