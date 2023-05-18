alert('Hi');
uname=prompt("Your name:");
alert(`Hi,${uname}`);
online=confirm("You stading online?");
alert(online);

let score=0;
let q1=prompt("Язык разметки:a)HTML;b)CSS;c)JS;");
if (q1=="a"|| q1=="а"){
    score=score+2;
}
    else {
        score = score-2;
    }
      

let q2=prompt("Мова стилю:a)HTML;b)CSS;c)JS;");
if (q2=="b"){
    score=score+2;
}
else {
    score = score-2;
}

alert(`Result: ${score}`)
prompt('Что вам больше всего нравиться смотреть фильмы, сериалы и т.д.');
alert('ok');
let q3=prompt('Хотели бы вы узнать в чем разница между фильмами, сериалами и короткометражными фильмами?: a)Да, хочу b)Нет не хочу, c)Не знаю');
if (q3=="a"|| q3==а){
    alert("Супер поехали!");
}
if (q3==b||q3==б){
    alert("Тогда покидайте сайт");
}
else{
    alert('Ну сейчас узнаете')
}