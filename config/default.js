var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'sgas.msaws.vpc.test.089476987273.us-east-1'
      },
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-west-2',
        bucket: 'sgas.msaws.vpc.test.089476987273.us-west-2'
      },
      validate: true,
      create: true
    }
  ],
  dist: 'dist'
};

module.exports = config;
