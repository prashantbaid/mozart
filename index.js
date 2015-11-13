var Menu = require('terminal-menu');
var menu = Menu({ width: 50, x: 4, y: 2 });

var mozArr = ['Serenade No.13 \'Eine Kleine Nachtmusik\' Allegro',
'Horn Concerto No.4 Rondo Allegro Vivace',
'Cosi Fan Tutte Soave Sia Il Vento',
'Violin Sonata K.378 Andantino',
'Requiem Confutatis And Lacrymosa',
'Symphony No.40 Molto Allegro',
'String Quartet \'Hunt\' Minuetto',
'Don Giovanni La Ci Darem La Mano',
'German Dance No.3 \'Sleigh Ride\'',
'Piano Concerto No.20 Allegro Assai',
'Marriage Of Figaro Voi Che Sapete',
'Symphony No.25 Allegro Con Brio',
'Ave Verum Corpus',
'Marriage Of Figaro Overture',
'Clarinet Concerto Adagio',
'Mass In C Minor Kyrie',
'Piano Concerto No.21 Andante',
'Symphony No.41 \'Jupiter\' Molto Allegro',
'Die Zauberflote Der Holle Rache',
'Piano Sonata No.11 Rondo Alla Turca',
'Flute And Harp Concerto Andantino',
'Serenade For Winds K.361 Menuetto',
'Clarinet Quintet Larghetto',
'Violin Concerto No.5 Tempo Di Minuetto'
]




menu.reset();
menu.write('The Very Best Of Mozart\n');
menu.write('-------------------------------------------------\n');
for(var i = 0; i < mozArr.length; i++) {
	menu.add(mozArr[i]);
}
menu.add('EXIT');
 
menu.on('select', function (label) {
    menu.close();
    console.log('SELECTED: ' + label);
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);
 
process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});
