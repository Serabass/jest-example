import {plural} from "../src";

describe("simple test", () => {
    let options = {
        none: 'Нет студентов',
        zero: '## студентов',
        one: '## студент',
        few: '## студента',
        many: '## студентов',
    };

    it("test", () => {
        expect(plural(0, options)).toBe('Нет студентов');
        expect(plural(1, options)).toBe('1 студент');
        expect(plural(2, options)).toBe('2 студента');
        expect(plural(11, options)).toBe('11 студентов');
        expect(plural(111, options)).toBe('111 студентов');
        expect(plural(100, options)).toBe('100 студентов');
        expect(plural(21, options)).toBe('21 студент');
        expect(plural(66, options)).toBe('66 студентов');
        expect(plural(88, options)).toBe('88 студентов');
        expect(plural(1991, options)).toBe('1991 студент');
    });
});
