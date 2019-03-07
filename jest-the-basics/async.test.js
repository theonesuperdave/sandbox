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