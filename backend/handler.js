"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      message: process.env.AWS_ENV ? process.env.AWS_ENV : "DFHDJFHJ"
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
