define([], function() {
    var home =
    {
        rivetsBinding: {},
        title: 'What is a rivet?',
        toggleOptions: ['Take the rivet challenge!', 'Just show me the answer already...'],
        toggle: function () { return home.toggleOptions[0]; }, // a little shady, but it works...
        clickToggle: function() {
            if (home.showQuestion) {
                home.toggle = home.toggleOptions[0];
            }
            else {
                home.toggle = home.toggleOptions[1];
            }

            home.clickQuestion();
        },
        showQuestion: false,
        doNotShowQuestion: function () { return home.showQuestion === false; },
        clickQuestion: function() {
            home.showQuestion = !home.showQuestion;
        },

        questionOptions: [{ id: 1, value: 'A type of frog only found on Corellia?' }, { id: 2, value: 'A permanent mechanical fastener?' }, { id: 3, value: 'The name of the long-lost sword of King Authur? ' }],

        activate: function() {
        },
        binding: function() {
            home.rivetsBinding = rivets.bind($('#home'), { vm: home });
        },
        compositionComplete: function() {
        },
        deactivated: function() {
            home.showQuestion.unbind();
        }
    }

    return home;
});