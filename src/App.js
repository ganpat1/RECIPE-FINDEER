

// import "./App.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [refresh, setRefresh] = useState("");
//   const [recipe, setRecipe] = useState([]);
//   const [data, setData] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const url = await axios.get(
//         `https://api.edamam.com/search?q=${data} &app_id=96fd6ae6&app_key=05223f79aada8a23510c81fb5853413d`
//       );
//       console.log(url.data);
//       setRecipe(url.data.hits);
//       setLoading(false);
//     };
//     fetchApi();
//   }, [data]);

//   // console.log(data)
//   return (
//     <>
//       <h1>the recipe finder </h1>

//       {/* <p>recipie :-{recipe.count}</p> */}

//       <input type="search" onChange={(e) => setRefresh(e.target.value)} />

//       <button
//         onClick={() => {
//           setRecipe([]);
//           setData(refresh);
//           setLoading(true);
//         }}
//       >
//         submit
//       </button>

//       <br />

//       {loading ? (
//         <div className="loading"></div>
//       ) : (
//         recipe.map((x) => {
//           return (
//             <>
//               <img src={x.recipe.image} />
//               <p key={x.index} value={x.index}>
//                 calories intake :- {x.recipe.calories}
//               </p>
//               <ol>
//                 {x.recipe.ingredients.map((item) => {
//                   return (
//                     <>
//                       <img src={item.image}/>
//                       <li>{item.text}</li>
//                     </>
//                   );
//                 })}
//               </ol>
//             </>
//           );
//         })
//       )}
//     </>
//   );
// };

// export default App;
