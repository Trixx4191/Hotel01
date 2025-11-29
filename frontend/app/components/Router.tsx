import { useState, createContext, useContext } from "react";

type Route = {
  path: string;
  component: React.ComponentType;
};

type RouterContextType = {
  currentPath: string;
  navigate: (path: string) => void;
};

const RouterContext = createContext<RouterContextType | null>(null);

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a Router");
  }
  return context;
}

interface RouterProps {
  children: React.ReactNode;
  routes: Route[];
}

export function Router({ children, routes }: RouterProps) {
  const [currentPath, setCurrentPath] = useState("/");

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const currentRoute = routes.find(route => route.path === currentPath);
  const Component = currentRoute?.component;

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {Component ? <Component /> : children}
    </RouterContext.Provider>
  );
}

export function Link({ to, children, className, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();
  
  return (
    <button
      className={className}
      onClick={() => {
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}