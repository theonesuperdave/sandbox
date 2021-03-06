﻿define(['sinon', 'target'], function (sinon, target) {
    describe('sample-sinonJS', function () {
        before(function () {
            // Karma creates this global __html__ property that will hold all
            //// of our HTML so we can populate the body during our tests
            if (window.__html__) {
                document.body.innerHTML = window.__html__['specRunner.html'];
            }
        });

        describe('sinon', function () {
            it('sinon-not-null', function () {
                var result = sinon !== null && sinon !== undefined;

                result.should.be.true();
            });

            it('sinon-spy-target', function () {
                var callbackScoreGoal = sinon.spy(target, 'scoreGoal');
                var callbackGoalCount = sinon.spy(target, 'goalCount');

                target.scoreGoal(callbackScoreGoal);

                callbackScoreGoal.calledOn(target).should.be.true();

                callbackGoalCount.called.should.be.false();

                target.scoreGoal.restore();
                target.goalCount.restore();
            });

            it('sinon-stub-target', function () {
                var targetStub = sinon.stub(target);

                targetStub.goalCount.returns(3);
                targetStub.scoreGoal.returns();
                targetStub.scoreGoal();

                targetStub.goalCount().should.be.equal(3);
                targetStub.scoreGoal.called.should.be.true();

                targetStub.goalCount.restore();
                targetStub.scoreGoal.restore();
            });

            it('sinon-mock-target', function () {
                var targetMock = sinon.mock(target);
                targetMock.expects('goalCount').atLeast(1).returns(1);

                target.goalCount();
                
                targetMock.verify();

                targetMock.restore();
            });
        });
    });
});