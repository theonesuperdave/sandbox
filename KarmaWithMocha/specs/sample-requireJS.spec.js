define(['target'], function (target) {
    describe('sample-requireJS', function () {
        before(function () {
            // Karma creates this global __html__ property that will hold all
            // of our HTML so we can populate the body during our tests
            if (window.__html__) {
                document.body.innerHTML = window.__html__['specRunner.html'];
            }
        });

        describe('target', function () {
            it('scoreGoal', function () {
                target.scoreGoal();
                target.goalCount().should.be.equal(1);

                target.scoreGoal();
                target.goalCount().should.be.equal(2);
            });

            it('gol', function () {
                var message = target.gol();

                message.should.be.equal('gooooooooooooooolazo');
            });
        });
    });
});