import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../Context/UserContextAPI";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const jwtToken = window.localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!jwtToken) {
      // Redirect user to login page if token is missing
      router.replace("/sign-in");
      return null;
    }
  }, [jwtToken, router]);

  // Render the protected content for logged-in users
  return children;
};

export default ProtectedRoute;
