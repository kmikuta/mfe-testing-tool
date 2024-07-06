import { Application, createApplication } from "../models/Application";

interface ApplicationResponse {
  name: string;
  url: string;
  type: string;
}

interface ApplicationListResponse {
  items: ApplicationResponse[];
}

const API_URL = "http://localhost:8080/api/applications";

export async function getApplications(): Promise<Application[]> {
  const response = await fetch(API_URL);
  const data: ApplicationListResponse = await response.json();
  return data.items.map((item) => createApplication(item.name, item.url, item.type));
}
