import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";

import { Application } from "../../models/Application";
import { ApplicationCard } from "../../components/applications/card/ApplicationCard";
import { AddApplicationButton } from "../../components/applications/form/AddApplicationButton";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";

export const ApplicationListPage: FC = () => {
  const applications: Application[] = useLoaderData() as Application[];

  return (
    <>
      <Breadcrumbs />
      <Grid container spacing={4}>
        {applications.map((app) => (
          <Grid key={app.name} item xs={4}>
            <ApplicationCard application={app} />
          </Grid>
        ))}
        <Grid item xs={1}>
          <AddApplicationButton />
        </Grid>
      </Grid>
    </>
  );
};
