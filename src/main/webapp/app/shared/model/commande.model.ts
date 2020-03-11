export interface ICommande {
  id?: number;
  magasin?: string;
  produit?: string;
  prix?: number;
}

export class Commande implements ICommande {
  constructor(public id?: number, public magasin?: string, public produit?: string, public prix?: number) {}
}
