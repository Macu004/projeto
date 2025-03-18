const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aqui você pode adicionar a lógica de autenticação
    console.log(`Usuário: ${username}, Senha: ${password}`);
});