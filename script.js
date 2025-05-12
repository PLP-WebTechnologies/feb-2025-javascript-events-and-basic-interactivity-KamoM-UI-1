function submitForm(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '<strong>Your Username is:</strong> ' + username + '<br>' +
                            '<strong>E-mail:</strong> ' + password + '<br>' +
                            '<strong> </strong> ' + message;
}

const bgAnimation = document.getElementById('bgAnimation');

const numberOfCxolorBoxes = 400 

for (let i = 0; i < numberOfCxolorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox .classList.add('colorBox');
    bgAnimation.append(colorBox)
}