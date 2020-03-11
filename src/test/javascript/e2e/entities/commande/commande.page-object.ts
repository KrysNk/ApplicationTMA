import { element, by, ElementFinder } from 'protractor';

export class CommandeComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-commande div table .btn-danger'));
  title = element.all(by.css('jhi-commande div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class CommandeUpdatePage {
  pageTitle = element(by.id('jhi-commande-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  magasinInput = element(by.id('field_magasin'));
  produitInput = element(by.id('field_produit'));
  prixInput = element(by.id('field_prix'));
  dateInput = element(by.id('field_date'));

  clientSelect = element(by.id('field_client'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setMagasinInput(magasin: string): Promise<void> {
    await this.magasinInput.sendKeys(magasin);
  }

  async getMagasinInput(): Promise<string> {
    return await this.magasinInput.getAttribute('value');
  }

  async setProduitInput(produit: string): Promise<void> {
    await this.produitInput.sendKeys(produit);
  }

  async getProduitInput(): Promise<string> {
    return await this.produitInput.getAttribute('value');
  }

  async setPrixInput(prix: string): Promise<void> {
    await this.prixInput.sendKeys(prix);
  }

  async getPrixInput(): Promise<string> {
    return await this.prixInput.getAttribute('value');
  }

  async setDateInput(date: string): Promise<void> {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput(): Promise<string> {
    return await this.dateInput.getAttribute('value');
  }

  async clientSelectLastOption(): Promise<void> {
    await this.clientSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async clientSelectOption(option: string): Promise<void> {
    await this.clientSelect.sendKeys(option);
  }

  getClientSelect(): ElementFinder {
    return this.clientSelect;
  }

  async getClientSelectedOption(): Promise<string> {
    return await this.clientSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class CommandeDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-commande-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-commande'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
