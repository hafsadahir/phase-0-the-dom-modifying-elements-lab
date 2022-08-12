// Write your code here!
const removeMain = document.getElementById('main');
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';