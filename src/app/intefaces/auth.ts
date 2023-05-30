import {User} from "./user";


export interface Auth {
  email: string;
  password: string;
}

export interface TokenInterface {
  token: string;
}

export interface CredentialsInterface extends TokenInterface {
  user: User;
}

