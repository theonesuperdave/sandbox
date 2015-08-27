var index = {
    title: 'May the Force be with you...',
    message: 'The Force will be with you...always.',
    quote: 'There is a great disturbance in the Force.',
    quoteMarkup: '<div><label>I have a bad feeling about this...</label><label rv-text="' + this.quote + '"></label></div>', // this does not work
    quoteMarkupComputed: function () {
        //return '<div><label>I have a bad feeling about this...</label><label rv-text="' + index.quote + '"></label></div>'; // this does not work either
        return '<div><label>I have a bad feeling about this...&nbsp</label><label>' + index.quote + '</label></div>'; // but this does
    },
    palpatine: 'There is a great disturbance in the Force.',
    vader: 'Yes, my master. I have felt it.',
    conversation: function() {
        return 'Palpatine: ' + index.palpatine + '    ' + 'Vader: ' + index.vader;
    },
    date: new Date(1994, 5, 25),
    money: '19.95',
    cache: '',
    click: function() {
        if (index.title === '') {
            index.title = index.cache;
            index.cache = '';
        }
        else {
            index.cache = index.title;
            index.title = '';
        }
    }
}