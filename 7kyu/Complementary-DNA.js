// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// SOLUTION
function DNAStrand(dna) {
  return dna.split('').map((elem) => {
    switch (elem) {
      case 'T':
        return 'A'
      case 'A':
        return 'T'
      case 'G':
        return 'C'
      case 'C':
        return 'G'
    }
  })
}

// SOLUTION 2

function DNAStrand(dna) {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }
  return dna
    .split('')
    .map((v) => pairs[v])
    .join('')
}
