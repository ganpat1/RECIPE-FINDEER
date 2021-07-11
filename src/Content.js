import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Content = () => {
  const [refresh, setRefresh] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [data, setData] = useState("");



  useEffect(() => {
    const fetchApi = async () => {
      const url = await axios.get(
        `https://api.edamam.com/search?q=${data}&app_id=96fd6ae6&app_key=05223f79aada8a23510c81fb5853413d`
      );
      // const surl= await axios.get(`https://api.edamam.com/search?q=apple &app_id=96fd6ae6&app_key=05223f79aada8a23510c81fb5853413d`)
      //  console.log(surl.data);
      console.log(url.data);
      setRecipe(url.data.hits);
    };
    fetchApi();
  }, [data]);

  // console.log(data);
  return (
    <>
      <input type="search" onChange={(e) => setRefresh(e.target.value)} />
      <input
        type="submit"
        onClick={() => {
          setRecipe([]);
          setData(refresh);
        }}
      />

      {recipe.map((x) => {
        return (
          <>
            <p key={x.index} value={x.index}>
                            callories :-{x.recipe.calories}
            </p>


            {x.recipe.ingredientLines.map((arr) => {
              return (
                <>
                  <li>{arr}</li>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default Content;
