import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Pizzeria le charbon</h1>
        <img src="./src/assets/logo.png" alt="logo" className="logo" />
      </div>
      <div className="base">
        <div className="primary">
          <h3 className="primaryTitle">Pizzas</h3>
          <div className="primaryPizza">
            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Margarita</h4>
                <p>Sauce tomate, Mozzarella, Basilic</p>
              </div>
              <p>18.00$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Anchoix</h4>
                <p>Sauce tomate, Mozzarella, Anchoix, Olives</p>
              </div>
              <p>18.50$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Toute garnie</h4>
                <p>
                  Sauce tomate, Mozzarella, Champignons, Poivron vert, Peppéroni
                </p>
              </div>
              <p>19.50$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Américaines</h4>
                <p>
                  Sauce Tomate, Mozzarella, Oignons, Bacon, Jambon Blanc,
                  Peppéroni
                </p>
              </div>
              <p>21.00$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">4 Fromages</h4>
                <p>
                  Sauce Tomate, Mozzarella, Emmental, Parmesan, Chèvre, Bleu,
                  Olives
                </p>
              </div>
              <p>23.00$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Reine</h4>
                <p>
                  Sauce Tomate, Mozzarella, Champignons, Jambon Blanc, Parmesan,
                  Olives
                </p>
              </div>
              <p>22.00$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Calzones</h4>
                <p>
                  Sauce Tomate, Mozzarella, Champignons, Jambon Blanc, Parmesan,
                  Oeuf
                </p>
              </div>
              <p>22.50$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Végétarienne</h4>
                <p>
                  Sauce Tomate, Mozzarella, Oignons, Champignons, Poivron Vert,
                  Artichaut, Olives
                </p>
              </div>
              <p>21.50$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Poulet</h4>
                <p>
                  Sauce Tomate, Mozzarella, Oignons, Champignons, Poulet,
                  Parmesan, Olives
                </p>
              </div>
              <p>22.00$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Chèvre Miel</h4>
                <p>
                  Sauce Tomate, Mozzarella, Oignons, Chèvre, Noix, Parmesan,
                  Olives, Basilic
                </p>
              </div>
              <p>24.00$</p>
            </div>

            <div className="secondaryPizza">
              <div>
                <h4 className="withp">Bambino</h4>
                <p>
                  Petite Pizza pour Enfant ou Petite Faim ( Toute Garnie ou Végé
                  )
                </p>
              </div>
              <p>12.00$</p>
            </div>

            <div className="boisson">
              <div>
                <h4 className="nop">Extra</h4>
              </div>
              <p>2.50$</p>
            </div>

            <div className="boisson">
              <div>
                <h4 className="nop">Dessert</h4>
              </div>
              <p>7.50$</p>
            </div>
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
              <div className="secondaryPizza">
                <div>
                  <h4 className="withp">Salade Composée</h4>
                  <p>
                    Salade, Légumes Composée, Huile Olives, Vinaigre Balsamique
                  </p>
                </div>
                <p>13.00$</p>
              </div>
              <div className="secondaryPizza">
                <div>
                  <h4 className="withp">Salade César</h4>
                  <p>
                    Salade, Sauce César Fait Maison, Poulet, Parmesan, Oignons
                    Cryspie, Croutons
                  </p>
                </div>
                <p>14.50$</p>
              </div>
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
              referrerpolicy="no-referrer-when-downgrade"
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
