function Toggle() {
    let navbar = document.querySelector('.links-wrapper');
    navbar.classList.toggle('active');
}

let date = new Date();
let year = date.getFullYear();
let full_year = document.getElementById("year");
full_year.innerHTML = year;
//2:44pm
/*var a = 1;
while (a<10) {
    console.log(a);
    a++;
}

var b = 3;
do {
    console.log(b + ' is a number');
    b++;
} while (b < 10);

for (let d = 1; d < 10; d++) {
    if (d==6) {
        console.log('we have reached six');
        continue
    }
    
    console.log(d + 'hello world');
}
var c = 'i am here for groovy key';
console.log(c.indexOf('am'));

var t = new Date()
var y = t.setMonth();
console.log(y);

var z = t.setFullYear();
console.log(z);

var player = {
    name: 'Emma',
    image: `<img src="./images/mylogo (1).png" alt="img"`,
    position: 'forward'
};
var player2 = {
    name: 'mikel',
    image: `<img src="./images/mylogo (1).png" alt="img2">`,
    position: 'fourth'
};

function playerDetails() {
    document.write(this.name + ", " + this.image + " ," + this.position);
}
player.display = playerDetails;
player2.display = playerDetails;
player.display();
//player2.display();*/