module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/carwash',
      handler: 'carwash.getCarWashes',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
