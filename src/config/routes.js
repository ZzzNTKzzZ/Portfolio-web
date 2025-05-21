// routes.js
const routes = {
  home: "/",
  portfolio: "/portfolio",
  editPortfolio: "/editPortfolio",
  editPortfolioId: "/editPortfolio/:id",
  getPortfolioBox: (id) => `/editPortfolio/${id}`,
};

export default routes;
