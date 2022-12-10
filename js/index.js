//challange 1

function ageInDays(){
    var birthYear= prompt('Enter your year of birth ');
    var ageDays=(2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer=document.createTextNode('You are ' + ageDays +' days old');
    h1.setAttribute('id' ,'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('btn-result-1').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}



//challange 2

function generateMwvadi(){
   
    var image = document.createElement('img');
    var div = document.getElementById('mwvadi-container');
    image.src="../pic/mwvadi1";

    div.appendChild(image);
}