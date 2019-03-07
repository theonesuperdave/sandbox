const target = require('./index');

test('should be false', () => {
    let result = target.opposite(true);

    expect(result).toBe(false);
});

test('should be false', () => {
    let result = target.opposite(true);

    expect(result).not.toBe(true);
});

test('should be undefined', () => {
    let result = target.oof;

    expect(result).toBeUndefined();
});

test('should be null', () => {
    let result = target.oops;

    expect(result).toBeNull();
});

test('should be defined', () => {
    let result = target.oops;

    expect(result).toBeDefined();
});

test('should be truthy', () => {
    let result = target.blah;

    expect(result).toBeTruthy();
});

test('should be falsy', () => {
    let result = target.oops;

    expect(result).toBeFalsy();
});

test('should be 42', () => {
    expect(target.blah).toEqual(42);
});

test('should be greater than 41', () => {
    expect(target.blah).toBeGreaterThan(41);
});

test('should be less than 43', () => {
    expect(target.blah).toBeLessThan(43);
});

test('should find a match in the motto', () => {
    expect(target.motto).toMatch(/Force be with you/);
});

test('should find a match in the motto', () => {
    expect(target.jedis).toContain('Obi-Wan');
});

test('should throw an error', () => {
    expect(target.boom).toThrow(Error);
});