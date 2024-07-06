export enum ApplicationType {
  SELF_RENDERING = "SELF_RENDERING",
  FEDERATED_MODULE = "FEDERATED_MODULE",
}

export interface Application {
  id: string;
  name: string;
  url: string;
  type: ApplicationType;
}

export const createApplication = (name: string, url: string, type: string): Application => ({
  id: name.replace(" ", "_").toLowerCase(),
  name,
  url,
  type: ApplicationType[type as keyof typeof ApplicationType],
});
