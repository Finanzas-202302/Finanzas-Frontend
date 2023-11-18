import { ClientModule } from "./client.module";

export interface UserModule {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    clients: ClientModule;
  }