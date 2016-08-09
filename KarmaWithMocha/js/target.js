define([], function () {
    var target = (function () {
        function Target() {
            var _this = this;
            this.goalsScored = 0;
        }

        Target.prototype.gol = function () {
            return 'gooooooooooooooolazo';
        };

        Target.prototype.scoreGoal = function () {
            this.goalsScored++;
        };

        Target.prototype.goalCount = function () {
            return this.goalsScored;
        };

        return Target;
    })();

    return new target();
});