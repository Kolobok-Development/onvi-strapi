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
      const path = '/external/collection/group/list';
      const queryParams = {
        code: process.env.DS_CLOUD_SOURCE_ID
      };

      const headers = {
        'akey': apiKey,
      };

      console.log(baseUrl);
      const response = await axios.get(baseUrl + path, {
        params: queryParams,
        headers: headers
      });

      return ctx.send(response.data);
    }catch (error) {
      return ctx.badRequest('An error occurred while fetching data from the API.');
    }
  }
};
