(function () {
	describe('sample-basic', function () {
		before(function () {
			// Karma creates this global __html__ property that will hold all
			// of our HTML so we can populate the body during our tests
			//if (window.__html__) {
			//	document.body.innerHTML = window.__html__['test/index.html'];
			//}
		});

		describe('test-1', function () {
			it('should always pass', function () {
				var blah = true;
				blah.should.be.true();
			});
		});
	})
}());