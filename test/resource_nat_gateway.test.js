var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("route", function() {
    it("creates the resource", function() {
      cTests.testParticle(
        "resource",
        "nat_gateway",
        require("./fixtures/resource_nat_gateway_output_1"),
        {
          logicalId: "NatGateway",
          hArgs: {
            allocationId: '{"Ref": "EIP"}',
            subnetId: '{"Ref": "Subnet"}'
          }
        }
      );
    });
  });
});
