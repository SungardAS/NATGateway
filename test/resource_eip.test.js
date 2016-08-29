var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("eip", function() {
    it("creates the resource", function() {
      cTests.testParticle(
        "resource",
        "eip",
        require("./fixtures/resource_eip_output_1"),
        {logicalId: "EIP", hArgs: {}}
      );
    });
  });
});
