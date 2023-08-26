import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Pizzeria le charbon</h1>
      <div className="base">
        <div className="primary">
          <h3 className="primaryTitle">Pizzas</h3>
          <div className="primaryPizza">
            <div className="secondaryPizza">
              <div>
                <h4>4 fromages</h4>
                <p>Emmental, Gruyère, Chèvre, Roquefort</p>
              </div>
              <p>12.00€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Reine</h4>
                <p>Tomate, Jambon, Champignons, Emmental</p>
              </div>
              <p>12.50€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Oriental</h4>
                <p>Tomate, Merguez, Oeuf, Emmental</p>
              </div>
              <p>12.50€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Bolo</h4>
                <p>Tomate, Viande hachée, Oeuf, Emmental</p>
              </div>
              <p>11.00€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Kebab</h4>
                <p>Tomate, Viande kebab, Oeuf, Emmental</p>
              </div>
              <p>12.50€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Hawaienne</h4>
                <p>Tomate, Jambon, Ananas, Emmental</p>
              </div>
              <p>10.00€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Retheloise</h4>
                <p>Tomate, Jambon, Champignons, Emmental, Oeuf, Boudin Blanc</p>
              </div>
              <p>16.00€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Carbonnara</h4>
                <p>Crème fraîche, Lardons, Oeuf, Emmental</p>
              </div>
              <p>12.00€</p>
            </div>
            <div className="secondaryPizza">
              <div>
                <h4>Calzone</h4>
                <p>Tomate, Jambon, Champignons, Emmental, Oeuf</p>
              </div>
              <p>11.50€</p>
            </div>
          </div>
        </div>
        <div className="secondary">
          <div className="secondaryBloc">
            <h3 className="secondaryTitle">Boissons</h3>
            <div className="blocSecond">
              <div className="secondaryPizza">
                <div>
                  <h4>Coca-Cola</h4>
                  <p>33cl</p>
                </div>
                <p>2.00€</p>
              </div>
              <div className="secondaryPizza">
                <div>
                  <h4>Fanta</h4>
                  <p>33cl</p>
                </div>
                <p>2.00€</p>
              </div>
            </div>
          </div>
          <div className="secondaryBloc">
            <h3 className="secondaryTitle">Salades</h3>
            <div className="blocSecond">
              <div className="secondaryPizza">
                <div>
                  <h4>Salade Composé</h4>
                  <p>Salade, Tomate, Oeuf</p>
                </div>
                <p>5.50€</p>
              </div>
              <div className="secondaryPizza">
                <div>
                  <h4>Salade César</h4>
                  <p>Salade, Jambon, Emmental</p>
                </div>
                <p>4.90€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
