const request = require('axios');

test('should hold execution for \'done\'', done => {
    function async() {
        expect(true).toBe(true);

        done(); // Holds the test execution until this function is called.
    }

    async();
});

test('should work for promises', done => {
    let testPromise = new Promise(function(resolve, reject) {
        resolve();
    });

    testPromise.then(() => {
        expect(true).toBe(true);

        done(); // comment this out to see it fail (after a timeout period)
    });
});

test('should work for HTTP calls', done => {
    const spy = jest.spyOn(request, 'get').mockImplementation(() => {
         return new Promise((resolve, reject) =>  resolve({ blah: 'blah' 
        }));
    });

    request.get('http://blah.blah')
    .then((response) => {
        expect(response.blah).toBe('blah');

        done();
    });

    spy.mockRestore();
});