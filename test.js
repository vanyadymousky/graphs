const solutions = require('./solution');

function testAll(solution) {
    describe('test', () => {
        it('should', () => {
            const source = [
                [3],
                [5, 2],
                [2, 3, 5],
                [9, 4, 2, 1],
            ];
            expect(solution(source)).toEqual(15);

            const source2 = [
                [3],
                [2, 4],
                [2, 6, 5],
                [9, 7, 2, 1],
            ];
            expect(solution(source2)).toEqual(20);

            const source3 = [
                [3],
                [1, 8],
                [2, 1, 5],
                [9, 4, 4, 6],
                [9, 4, 4, 6, 9],
                [9, 4, 4, 6, 3, 1],
            ];
            expect(solution(source3)).toEqual(34);

            const source4 = [
                [1],
                [5, 2],
                [2, 1, 5],
            ];
            expect(solution(source4)).toEqual(8);
        });
    });
}

testAll(solutions.reduce);
testAll(solutions.recursive);
