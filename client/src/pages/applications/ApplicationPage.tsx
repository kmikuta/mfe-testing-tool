import { FC } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { Application, ApplicationType } from "../../models/Application";

import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { Renderer } from "../../components/renderer/Renderer";
import { FMRenderer } from "../../components/renderer/FMRenderer";

export const ApplicationViewPage: FC = () => {
  const { appId } = useParams();
  const applications = useLoaderData() as Application[];
  const application = applications.find((app) => app.id === appId);

  if (!application) {
    return null;
  }

  return (
    <>
      <Breadcrumbs />
      {application.type === ApplicationType.SELF_RENDERING ? (
        <Renderer url={application.url} />
      ) : (
        <FMRenderer url={application.url} />
      )}
    </>
  );
};
