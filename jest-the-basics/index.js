var target = () => {
    blah = 42;
    oops = null;
    motto = "May the Force be with you...";
    jedis = [ 'Yoda', 'Windu', 'Obi-Wan'];

    opposite = (input) => {
        return !input;
    }

    boom = () => {
        throw new Error('blah blah blah. bad. blah.');
    }

    return {
        blah: blah,
        oops: oops,
        motto: motto,
        jedis: jedis,
        opposite: opposite,
        boom: boom
    };
}

module.exports = target();