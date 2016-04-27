# particles-nat-gateway

Particles for [condensation](https://github.com/SungardAS/condensation) that help build an AWS NatGateway.

## Use

    > npm install
    > gulp condensation:build
    > gulp condensation:deploy

Templates will be created in the `dist` directory

To build CloudFormation templates, fill 'region' and 'bucket' in `config/default.js` with bucket configuration

## Particles

### cftemplates

#### natgateway.template

A stack that will build a NATGateway in a given VPC.
