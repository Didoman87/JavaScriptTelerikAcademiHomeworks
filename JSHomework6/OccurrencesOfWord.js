function searchString(word, text) {
    word = word.toString().split('');
    text = text.toString().split('');
    //console.log(word,text);
    //console.log(word[0],text[5]);
    for(var i=0; i < text.length; i+=1) {

        if (text[i] === word[0].toUpperCase() || text[i] === word[0].toLowerCase()) {
            var k = i;
            for (var j = 1; j < word.length; j += 1) {
                //console.log(k+1, j, word[j], text[k+1],text[k+2]);
                if (text[k + 1] === word[j].toUpperCase() ||
                    text[k + 1] === word[j].toLowerCase()) {

                    if (j === (word.length-1) && text[k + 2] === ' ') {
                        console.log('the word ' + word.join('') +
                            ' have been found');
                    }
                    k += 1;
                } else {
                    break;
                }



            }

        }

    }
}
searchString('RgA','gewgerg rgea rgarg rga  RgA ragr  rag a rgaergg g g r');
