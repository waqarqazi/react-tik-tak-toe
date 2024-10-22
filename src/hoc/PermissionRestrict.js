import { useSelector } from "react-redux";

export default function PermissionRestrict({ roles = [], children, fallback }) {
  const roleState = useSelector((state) => state?.appState?.roleState);

  console.log("roleStatePR", roleState);
  console.log("roles", roles);
  console.log("roles.includes", roles.includes(roleState));
  const hasRequiredRoles = roles.every((role) => roleState.includes(role));

  console.log("hasRequiredRoles:", hasRequiredRoles);

  return hasRequiredRoles ? <>{children}</> : <>{fallback}</>;
}
