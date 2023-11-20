import { Credit } from "./credit.module";

export interface ClientModule {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dni: number;
  vehicle: string;
  credits: Credit[];
}