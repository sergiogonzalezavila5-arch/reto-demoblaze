import { test, expect } from '@playwright/test';
import { DemoBlazePage } from '../pages/DemoBlazePage';

test.describe('Reto DemoBlaze - Flujo de Compra', () => {
  test('CP-01 Agregar un teléfono al carrito de compras', async ({ page }) => {
    const demoPage = new DemoBlazePage(page);

    await demoPage.goto();
    await demoPage.seleccionarPrimerProducto();
    await demoPage.agregarAlCarrito();
    await demoPage.irAlCarrito();

    await expect(page.locator('.success')).toBeVisible();
  });
});