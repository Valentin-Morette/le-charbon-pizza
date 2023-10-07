import "./App.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import papa from "papaparse";
import logo from "./assets/img/logo.png";
import PizzaItem from "./components/PizzaItem";

function App() {
  const [infoPizza, setInfoPizza] = useState([]);
  const [infoSalade, setInfoSalade] = useState([]);

  const prepareData = (data, type) => {
    const headers = data[0];
    const rows = data.slice(1);
    const json = rows.map((row) => {
      const obj = {};
      // eslint-disable-next-line no-return-assign
      headers.forEach((key, j) => (obj[key] = row[j]));
      return obj;
    });
    if (type === "pizza") setInfoPizza(json);
    else setInfoSalade(json);
  };

  useEffect(() => {
    const csvUrlPizza =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBSEKMC4hHRxoorMUzDwtrIYycwh-iFWJwonyjHO2K3fNenXpGsjQuegaxGNJl_9IstKvnRM-YVKSf/pub?gid=0&single=true&output=csv";
    fetch(csvUrlPizza)
      .then((response) => {
        if (!response.ok)
          throw new Error(`Network response was not ok ${response.statusText}`);
        return response.text();
      })
      .then((text) => papa.parse(text, { header: false }))
      .then((data) => prepareData(data.data, "pizza"))
      .catch((error) => console.error("Error:", error));

    const csvUrlSalade =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBSEKMC4hHRxoorMUzDwtrIYycwh-iFWJwonyjHO2K3fNenXpGsjQuegaxGNJl_9IstKvnRM-YVKSf/pub?gid=842071051&single=true&output=csv";
    fetch(csvUrlSalade)
      .then((response) => {
        if (!response.ok)
          throw new Error(`Network response was not ok ${response.statusText}`);
        return response.text();
      })
      .then((text) => papa.parse(text, { header: false }))
      .then((data) => prepareData(data.data, "salade"))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Pizzeria le charbon</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="base">
        <div className="primary">
          <h3 className="primaryTitle">Pizzas</h3>
          <div className="primaryPizza">
            {infoPizza.map((pizza) => (
              <PizzaItem
                key={pizza.nom}
                name={pizza.nom}
                ingredients={pizza.ingredients}
                price={pizza.prix}
              />
            ))}
          </div>
        </div>
        <div className="secondary">
          <div className="secondaryBloc">
            <h3 className="secondaryTitle">Boissons</h3>
            <div className="blocSecond">
              <div className="boisson">
                <div>
                  <h4 className="withp">Eau</h4>
                  <p>50cl</p>
                </div>
                <p>2.50$</p>
              </div>

              <div className="boisson">
                <div>
                  <h4 className="withp">Cannette</h4>
                  <p>33cl</p>
                </div>
                <p>2.70$</p>
              </div>

              <div className="boisson">
                <div>
                  <h4 className="withp">Redbull</h4>
                  <p>25cl</p>
                </div>
                <p>5.00$</p>
              </div>

              <div className="boisson">
                <div>
                  <h4 className="withp">Café</h4>
                </div>
                <p>2.50$</p>
              </div>
            </div>
          </div>
          <div className="secondaryBloc">
            <h3 className="secondaryTitle">Salades</h3>
            <div className="blocSecond salade">
              {infoSalade.map((salade) => (
                <PizzaItem
                  key={salade.nom}
                  name={salade.nom}
                  ingredients={salade.ingredients}
                  price={salade.prix}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="coordonne">
          <div>
            <iframe
              className="map"
              title="Localisation de 2018 R. Saint-Denis, Montréal, QC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.12648563513267!2d-73.56599892928435!3d45.5158087356349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bb4bbc29c7d%3A0x502c3b0f58dc83c6!2s2018%20R.%20Saint-Denis%2C%20Montr%C3%A9al%2C%20QC%20H2X%203K8%2C%20Canada!5e0!3m2!1sfr!2sfr!4v1693244983760!5m2!1sfr!2sfr"
              width="500"
              height="375"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h3>Coordonnées</h3>
            <p>Adresse : 2018 Rue Saint-Denis, Montréal, QC H2X 3K8</p>
            <p>Téléphone : 438 - 380 - 8441</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
