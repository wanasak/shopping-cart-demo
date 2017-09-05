import { ShoppingShopDemoPage } from './app.po';

describe('shopping-shop-demo App', () => {
  let page: ShoppingShopDemoPage;

  beforeEach(() => {
    page = new ShoppingShopDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
