import React from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import contacts from "../contacts.js";



function App(){
    console.log(contacts);
    return (
        <div>
            {/* <h1>Hello! from App()</h1> */}
            <Header />
            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />

            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
            />

            <Card
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel={contacts[2].phone}
                email={contacts[2].email}
            />

            <Footer />
        </div>

        
    );
}

export default App;