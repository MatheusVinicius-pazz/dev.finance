// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário

    // Obtendo os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dados fictícios para login
    const validUsername = "usuario123";
    const validPassword = "senha123";

    // Verificação de login
    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar para uma página interna, por exemplo:
        // window.location.href = 'pagina-principal.html';
    } else {
        document.getElementById('error-message').style.display = "block";
    }
});
