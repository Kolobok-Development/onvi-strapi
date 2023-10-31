'use strict';

/**
 * A set of functions called "actions" for `carwash`
 */

const axios = require("axios");
module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  async getCarWashes(ctx, next) {
    try {
      const baseUrl = process.env.DS_CLOUD_BASE_URL;
      const apiKey = process.env.DS_CLOUD_API_KEY
      const path = '/external/onvi/carwashes';
      const reqParams = ctx.request.query;
      const queryParams = {
        code: process.env.DS_CLOUD_SOURCE_ID,
        ...reqParams
      };

      const headers = {
        'akey': apiKey,
      };

      const response = await axios.get(baseUrl + path, {
        params: queryParams,
        headers: headers
      });
      return ctx.send({ businessesLocations: response.data});
    }catch (error) {
      return ctx.badRequest(error);
    }
  }
};
