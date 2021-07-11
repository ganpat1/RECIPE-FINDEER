import React, { useState, useEffect } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Design.css";
import axios from "axios";

const Design = () => {
  const [refresh, setRefresh] = useState("");
  const [data, setData] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loder, setLoder] = useState(false);
  // const [window, setWindow] = useState(false);
  // const [ing, setIng] = useState();

  useEffect(() => {
    const fetching_Api = async () => {
      const url = await axios.get(
        `https://api.edamam.com/search?q=${data}&app_id=96fd6ae6&app_key=05223f79aada8a23510c81fb5853413d`
      );

      setRecipe(url.data.hits);
      // setIng(url.data.hits.recipe);
      setLoder(false);
    };
    fetching_Api();
  }, [data]);

  return (
    <>
      <div className="container container-fluid">
        <div className="nav">
          <img
            src="./imges/—Pngtree—logo template for and restaurant_5255565.png"
            alt="error"
            className="logo"
          />
          <input
            type="search"
            placeholder="SEARCH RECIPE"
            className="search"
            onChange={(e) => setRefresh(e.target.value)}
          />
          <input
            type="submit"
            className="submit"
            onClick={() => {
              setRecipe([]);
              setData(refresh);
              setLoder(true);
            }}
          />
        </div>

        <div className="card_section">
          <h1 style={{ textAlign: "center", marginTop: "15px" }}>
            FOOD RECIPE APP
          </h1>
        </div>

        {loder ? (
          <img src="./imges/Ball-Drop-Preloader-1-1.gif" style={{}} alt="" />
        ) : (
          <div className="card">
            {!recipe ? (
              <h1>no recipe found</h1>
            ) : (
              recipe.map((items) => {
                return (
                  <>
                    <div className="card_main ">
                      <img
                        key={items.index}
                        value={items.index}
                        src={items.recipe.image}
                        alt={items.recipe.label}
                        className="card_img"
                      />

                      <p className="recipe_Name">{items.recipe.label}</p>
                      <button
                        className="ingredient_btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Ingredients
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Reicpe-Ingredients
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Ingredients</th>
                                    <th scope="col">Waight</th>
                                  </tr>
                                </thead>
                                      <tbody>
                                {items.recipe.ingredients.map((ingre) => {
                                  return <>
                                        <tr>
                                          <td>{ingre.text}</td>
                                          <td>{ingre.weight}</td>
                                        </tr>
                                    </>
                                  
                                })}

                                      </tbody>
                                <td style={{ fontWeight: "670" }}>
                                  Total Weight:- {items.recipe.totalWeight}
                                </td>
                              </table>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href={items.recipe.url}
                        target="_blank"
                        className="find_recipe_btn"
                        rel="noreferrer"
                      >
                        Full Recipe
                      </a>
                    </div>
                  </>
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Design;
