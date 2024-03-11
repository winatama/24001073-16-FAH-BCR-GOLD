// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Layout from "./layout"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from "react";
// import Button from "./component/button"; 

// const App = () => {
//   const [state, setState] = useState({
//     username : "",
//     age : "",
//     address: "",
//   });  
  
//   const doChange = (event) => {
//     const {name, value} = event.target;
//     setState((prevState) => (...prevState,[name]))
//   };
     
//   const submitted = (event) => {
//     event.preventDefault();
//     console.log(state); 
//   };

//   return {
//     <div>
//       <form onSubmit={submitted}>
//         <div>
//           <input name="username" onChange={doChange}/>
//           <input name="age" onChange={doChange} />
//           <input name="address" onChange={doChange}/>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   }
// }

const App = () => {
    return(
        <Layout/>
    )
}

export default App