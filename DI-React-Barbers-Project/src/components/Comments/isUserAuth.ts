import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserAuthenticated } from "../../utils/helpers";
import Comment from "./Comment";

function isUserAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserAuthenticated()) navigate("/login");
    if (isUserAuthenticated()) Comment;
  }, [isUserAuthenticated()]);
}
console.log(isUserAuthenticated, "true ");
export default isUserAuth;
