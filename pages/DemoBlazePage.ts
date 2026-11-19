import { Page, Locator } from '@playwright/test';

export class DemoBlazePage {
  readonly page: Page;
  readonly phoneCategory: Locator;
  readonly firstProduct: Locator;
  readonly addToCartButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneCategory = page.getByRole('link', { name: 'Phones' });
    this.firstProduct = page.locator('.hrefch').first();
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
    this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com');
  }

  async seleccionarPrimerProducto() {
    await this.phoneCategory.click();
    await this.firstProduct.click();
  }

  async agregarAlCarrito() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await this.addToCartButton.click();
  }

  async irAlCarrito() {
    await this.cartLink.click();
  }
}