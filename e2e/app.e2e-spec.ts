import { AngfireListingsPage } from './app.po';

describe('angfire-listings App', function() {
  let page: AngfireListingsPage;

  beforeEach(() => {
    page = new AngfireListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
