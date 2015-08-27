// This type of declaration is not working for some reason
//var indexPartial = function() {
//    this.title = 'STAR WARS';
//    this.message = 'We\'re doomed';
//    this.message2 = 'It\'s not my fault. They told me they fixed it!';
//    this.click = function() {
//        if (this.title === '') {
//            this.title = this.message2;
//            this.message2 = '';
//        }
//        else {
//            this.message2 = this.title;
//            this.title = '';
//        }
//    }
//}

var indexPartial = {
    title: 'STAR WARS',
    message: 'blah',
    messages: [ 'We\'re doomed', 'It\'s not my fault. They told me they fixed it!'],
    click: function () {
        if (indexPartial.message === indexPartial.messages[0]) {
            indexPartial.message = indexPartial.messages[1];
        }
        else {
            indexPartial.message = indexPartial.messages[0];
        }
    }
}