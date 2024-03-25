const containter = document.getElementById('container');
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// const div3 = document.createElement('div');
// const div4 = document.createElement('div');
// const div5 = document.createElement('div');
// const div6 = document.createElement('div');

// containter.append(div1);
// containter.append(div2);
// containter.append(div3);
// containter.append(div4);
// containter.append(div5);
// containter.append(div6);

// div1.classList.add('kwadraty');
// div2.classList.add('kwadraty');
// div3.classList.add('kwadraty');
// div4.classList.add('kwadraty');
// div5.classList.add('kwadraty');
// div6.classList.add('kwadraty');

for(let i = 0; i<256; i++){
    const div = document.createElement('div');
    div.classList.add('kwadraty');
    containter.append(div);
}
