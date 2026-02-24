
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PropsInterface {
  level: "private" | "public" | "restricted";
  children: ReactNode;
}

const SecurityRoute: React.FC<PropsInterface> = ({ level, children }) => {
  // Aquí puedes agregar tu lógica de autenticación
   const isAuthenticated = true

  if (level === "private") {
    // Ruta privada, si no está autenticado, redirige
    if (!isAuthenticated) return <Navigate to="/login" />;
    return <>{children}</>;
  }

  if (level === "restricted") {
    // Ruta restringida, por ejemplo no permitir acceso a ciertos usuarios
    // if (!isAllowed) return <Navigate to="/unauthorized" />;
    return <>{children}</>;
  }

  // Ruta pública
  return <>{children}</>;
};

export default SecurityRoute;
