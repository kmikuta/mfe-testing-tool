import { FC } from "react";
import { Box, Breadcrumbs as MatBreadcrumbs, Typography } from "@mui/material";
import { Link } from "../link/Link";
import { capitalize } from "../../utils/strings";

export const Breadcrumbs: FC = () => {
  const pathname = window.location.pathname;
  const pathElements = pathname.split("/").filter((el) => el !== "");

  const linkEls = pathElements.map((el, idx) =>
    idx === pathElements.length - 1 ? (
      <Typography key={el} color="text.primary">
        {capitalize(el)}
      </Typography>
    ) : (
      <Link key={el} underline="hover" color="inherit" href={`/${el}`}>
        {capitalize(el)}
      </Link>
    ),
  );

  return (
    <Box py={3}>
      <MatBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MFA
        </Link>
        {linkEls}
      </MatBreadcrumbs>
    </Box>
  );
};
