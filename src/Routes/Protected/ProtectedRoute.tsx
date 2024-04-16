/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useMeQuery } from "../../Redux/Features/Auth/AuthApi";
import Skeleton from "../../Components/Shared/Skeleton/Skeleton";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const { data: userData, isLoading } = useMeQuery({});

  const user = userData?.data;

  const location = useLocation();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_: any, i: number) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  if (user && user?.id) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
