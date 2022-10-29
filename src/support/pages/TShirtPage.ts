import { Page, expect } from '@playwright/test';
import TshirtElements from '../elements/TshirtElements';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class TshirtPage extends BasePage {
  readonly tshirtElements: TshirtElements;
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.tshirtElements = new TshirtElements(page);
    this.homeElements = new HomeElements(page);
  }

  async selecionarProduto(): Promise<void> {
    await this.homeElements.getTshirtBottom().click();
   // await this.tshirtElements.getNomeDaTshirt().click();
  }

  async checkProductCount(): Promise<void> {
    await expect(this.tshirtElements.getNomeDaTshirt()).toBeVisible();
  }
}
