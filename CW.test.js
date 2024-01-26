function alphametics(s = '') {
  const [ls, end] = s.split(' = ');
  const letters = ls.split(' + ');
  const notZeros = [end[0], ...letters.map((l) => l[0])];

  const map = {
    end: {
      length: end.length,
      letters: [...end],
    },
  };
  [...s].forEach((v) => {
  	map[v] = notZeros
  });

  return `notZeros "${notZeros}" - ls "${ls}" - end "${end}"`;
}
/*
['
 SEND +
 MORE =
MONEY','9567 + 1085 = 10652'],
['
ZEROES +
  ONES =
BINARY','698392 + 3192 = 701584'],
['
 COUPLE +
 COUPLE =
QUARTET','653924 + 653924 = 1307848'],
['
   DO +
  YOU +
 FEEL =
LUCKY','57 + 870 + 9441 = 10368'],
['
ELEVEN +
  NINE +
  FIVE +
  FIVE =
THIRTY','797275 + 5057 + 4027 + 4027 = 810386']
*/
describe("Example Tests", () => {
  const example_tests = [
    ['SEND + MORE = MONEY','9567 + 1085 = 10652'],
    ['ZEROES + ONES = BINARY','698392 + 3192 = 701584'],
    ['COUPLE + COUPLE = QUARTET','653924 + 653924 = 1307848'],
    ['DO + YOU + FEEL = LUCKY','57 + 870 + 9441 = 10368'],
    ['ELEVEN + NINE + FIVE + FIVE = THIRTY','797275 + 5057 + 4027 + 4027 = 810386']
  ];
  example_tests.forEach(([s,user]) => expect(alphametics(s)).toEqual(user));
});
