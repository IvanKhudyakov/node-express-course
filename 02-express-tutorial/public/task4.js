document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('request');
    const input = document.getElementById('productID');
    const output = document.getElementById('results');

    button.addEventListener('click', () => {
        //When you click the button, your JavaScript would issue a fetch call for /api/v1/products. 
        //Then you’d add the data you get back to a div in your HTML.
        const url = `http://localhost:3000/api/v1/products/${input.value}`;
        console.log(url);
        let outcome = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
            output.textContent = JSON.stringify(data);
        })
        .catch((err) => {
            output.textContent = `Error is ${err.message}`;
        })
    })
});