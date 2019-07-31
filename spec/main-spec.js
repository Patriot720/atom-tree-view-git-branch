describe("nothing",function(){
    beforeEach(function(){
        this.thing = atom.packages.activatePackage('tree-view');
    })
    it("should return something", function(){
        console.log(this.thing.then(value => {
            value.createView();
        }));
    })
})
