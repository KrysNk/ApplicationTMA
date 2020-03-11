import { IClient } from 'app/shared/model/client.model';

export interface ICommande {
  id?: number;
  magasin?: string;
  produit?: string;
  prix?: number;
  date?: string;
  client?: IClient;
}

export class Commande implements ICommande {
  constructor(
    public id?: number,
    public magasin?: string,
    public produit?: string,
    public prix?: number,
    public date?: string,
    public client?: IClient
  ) {}
}
