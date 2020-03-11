export interface IClient {
  id?: number;
  name?: string;
  prenom?: string;
  adresse?: string;
  telephone?: number;
}

export class Client implements IClient {
  constructor(public id?: number, public name?: string, public prenom?: string, public adresse?: string, public telephone?: number) {}
}
