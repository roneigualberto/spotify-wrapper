const expect = require('chai').expect;

describe('Main', function () {
    let arr;

    // Roda Uma vez, antes do bloco
    before(function () {

    });

    // Roda Uma vez, depois do bloco
    after(function () {

    });

    // Roda todas as vezes, antes de cada bloco
    beforeEach(function () {
        arr = [1, 2, 3];
    });
    // Roda todas as vezes, depois de cada bloco
    afterEach(function () {

    });

    it('should be an array', function() {
        expect(arr).to.be.a('array');
    })



    it('should have a size of 4 when push another value to the array', function () {


        arr.push(4);


        expect(arr).to.have.lengthOf(4);



    });

    it('should have a size of 2 when pop a value from the array', function () {


        arr.pop();

     

        expect(arr).to.have.lengthOf(2);
    });


    it('should remove the value 3 when use pop in the array', function () {


        arr.pop();

        expect(arr).to.not.include(3);

       
    });







});
