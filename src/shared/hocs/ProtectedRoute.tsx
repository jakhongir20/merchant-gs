import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../lib/services";

interface Props {
  roles: string[];
}

export default function ProtectedRoute({ children }: PropsWithChildren<Props>) {
  const navigate = useNavigate();
  const isLoading = false;
  // TODO: need to check for token expiration
  const userId = getCookie("__user");

  useEffect(() => {
    if (!userId) {
      // navigate("/Auth/login", { replace: true });
    }
  }, [navigate, userId]);

  if (isLoading) {
    return <div className="full-page">LOADING...</div>;
  }

  return children;
}
