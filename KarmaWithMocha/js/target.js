define([], function () {
    var target = (function () {
        var _this = this;
        function Target() {
            this.goalsScored = 0;
        }

        Target.prototype.gol = function () {
            return 'gooooooooooooooolazo';
        };

        Target.prototype.scoreGoal = function () {
            this.goalsScored++;
        };

        Target.prototype.scoreGoalDelayed = function () {
            var _this = this;
            window.setInterval(function () {
                _this.goalsScored++;
            }, 1000); // delay for a second in real time
        };

        Target.prototype.goalCount = function () {
            return this.goalsScored;
        };

        return Target;
    })();

    return new target();
});