import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MatLink, LinkProps } from "@mui/material";

export const Link: FC<LinkProps> = (props) => {
  return <MatLink {...props} component={RouterLink} to={props.href ?? "#"} />;
};
