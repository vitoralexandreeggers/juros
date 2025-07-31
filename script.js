function calcula(){

    let c = parseInt(document.getElementById('numero_C').value);
    let i = parseInt(document.getElementById('numero_I').value);
    let t = parseInt(document.getElementById('numero_T').value);

    i = i / 100;

    let J = c * i * t;
       
    document.getElementById('juros').textContent = 'juros: ' + J;

    

   }