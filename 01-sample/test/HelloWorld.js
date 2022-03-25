// to interact with the contract
const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', () => {

    // initialise the contract instance before running tests
    let contractInstance = null;
    before(async () => {
        contractInstance = await HelloWorld.deployed();
    });

    // TEST 1
    it('initial name should be Jag', async () => {
        // call contract's function
        const currentName = await contractInstance.getName.call();
        // check condition
        assert.equal(currentName, "Jag", "the name is not Jag");
    });

    // TEST 2
    it('should change name in John', async () => {
        // change name in contract
        await contractInstance.changeName("John");
        // get the current name
        const currentName = await contractInstance.getName.call();
        // check condition
        assert.equal(currentName, "John", "the name is not John");
    });

});