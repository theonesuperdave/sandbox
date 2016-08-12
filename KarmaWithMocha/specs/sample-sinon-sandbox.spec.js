define(['sinon', 'target'], function (sinon, target) {
    describe('sample-sinonJS-sandbox', function () {
        describe('sinon', function () {
        	it('sinon-spy-target-sandbox', function () {
        		sinon.test(function (target) {
        			var callbackScoreGoal = sinon.spy(target, 'scoreGoal');
        			var callbackGoalCount = sinon.spy(target, 'goalCount');

        			target.scoreGoal(callbackScoreGoal);

        			callbackScoreGoal.calledOn(target).should.be.true();

        			callbackGoalCount.called.should.be.false();
        		});
            });

        	it('sinon-stub-target-sandbox', function () {
        		sinon.test(function (target) {
        			var targetStub = sinon.stub(target);

        			targetStub.goalCount.returns(3);
        			targetStub.scoreGoal.returns();
        			targetStub.scoreGoal();

        			targetStub.goalCount().should.be.equal(3);
        			targetStub.scoreGoal.called.should.be.true();
        		});
            });

        	it('sinon-mock-target-sandbox', function () {
        		sinon.test(function (target) {
        			var targetMock = sinon.mock(target);
        			targetMock.expects('goalCount').atLeast(1).returns(1);

        			target.goalCount();

        			targetMock.verify();
        		});
            });
        });
    });
});