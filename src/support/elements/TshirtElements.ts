import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class TshirtElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getNomeDaTshirt(): Locator {
    return this.page.locator(
      'h5 [href="http://automationpractice.com/index.php?id_product=1&controller=product"]'
    );
  }
}
