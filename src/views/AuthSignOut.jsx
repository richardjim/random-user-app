// import React from "react";
// import { UserAuth } from "../components/context/AuthContext";

// import { Link } from "react-router-dom";

// const AuthSignOut = () => {
//   const { logOut, user } = UserAuth();

//   const handleSignOut = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       {user?.displayName ? (
//         <button onClick={handleSignOut}>Sign Out</button>
//       ) : (
//         <Link to="/signin">Sign In</Link>
//       )}
//     </>
//   );
// };

// export default AuthSignOut;
