import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';
import TShirtPage from '../support/pages/TShirtPage';

test.describe('Find Products', () => {
  let homePage: HomePage;
  let tshirtPage: TShirtPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    tshirtPage = new TShirtPage(page);
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Selecionar uma Tshirt', async () => {
    await tshirtPage.selecionarProduto()
  });
});
