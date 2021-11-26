// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "ap-south-1" });
exports.handler = async function (event) {
  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Headers" : "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
    };
  var params = {
    Destination: {
      ToAddresses: event.toAddresses,
    },
    Message: {
      Body: {
        Text: { Data: event.text },
      },

      Subject: { Data: event.subject },
    },
    Source: "abdulla.thanseeh@ccs-technologies.com",
  };
 
  return ses.sendEmail(params).promise()
};
