require('dotenv').config()

const tencentcloud = require("tencentcloud-sdk-nodejs");

const CfsClient = tencentcloud.cfs.v20190719.Client;

const clientConfig = {
  credential: {
    secretId: process.env.TENCENT_SECRET_ID,
    secretKey: process.env.TENCENT_SECRET_KEY,
  },
  region: "ap-shanghai",
  profile: {
    httpProfile: {
      endpoint: "cfs.tencentcloudapi.com",
    },
  },
};

const client = new CfsClient(clientConfig);
const params = {};

client.DescribeCfsFileSystems(params).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("error", err);
  }
);