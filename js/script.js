/*"use strict"

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach. ",
	animal = "Zielone słonie",
	animal = animal.toUpperCase(),
	text = text.replace('Papugi', animal);

document.write("Cały tekst: " + text + '<br ><br >');
console.log(text);
document.write("Tekst od początku do połowy: " + (text.substr(0, text.length/2)) + '    Długość: ' +
(text.substr(0, text.length/2)).length + '<br ><br >');
console.log(text.substr(0, text.length/2));
document.write("Tekst od środka do końca: " + (text.slice(text.length/2, -1)) + '    Długość: ' + (text.slice(text.length/2, -1)).length);
console.log(text.slice(text.length/2, -1));
*/

"use strict"

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach. ",
	animal = "Zielone słonie",
	animal = animal.toUpperCase(),
	text = text.replace('Papugi', animal),
	odPoczatku = (text.substr(0, text.length/2)),
	odKonca = (text.slice(text.length/2, -1));

document.write("Cały tekst: " + text + '<br ><br >');
console.log(text);
document.write("Tekst od początku do połowy: " + odPoczatku + '    Długość: ' +
odPoczatku.length + '<br ><br >');
console.log(odPoczatku);
document.write("Tekst od środka do końca: " + odKonca + '    Długość: ' + odKonca.length);
console.log(odKonca);


//Która wersja lepsza? Z dodatkowymi zmiennymi czy bez nich?