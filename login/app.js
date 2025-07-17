// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário

    // Obtendo os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dados fictícios para login
    const validUsername = "admin";
    const validPassword = "1234";

     // Simulação de validação (substituir com sua lógica real)
     if (username === 'admin' && password === '1234') {
        // Login bem-sucedido -> redireciona
        window.location.href = '../index.html';
      } else {
        alert('Usuário ou senha incorretos!');
      }
});

