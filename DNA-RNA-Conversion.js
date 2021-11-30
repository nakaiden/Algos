//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
//The input string can be of arbitrary length - in particular, it may be empty. 
//All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    let rna = '';
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === 'T'){
        rna += 'U';
      }else{
        rna += dna[i];
      }
    }
  return rna;
  }