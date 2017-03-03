import { FreelancerPage } from './app.po';

describe('freelancer App', () => {
  let page: FreelancerPage;

  beforeEach(() => {
    page = new FreelancerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
