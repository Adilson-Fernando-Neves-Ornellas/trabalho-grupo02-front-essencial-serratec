// funcão que ocorre apos o formulario ser todo preenchido, pega os dados e adiciona no array do localStorage
function AdicionarUsuarioNalistaLocalStorage() {
  const nome = document.getElementsByName("nome")[0].value; // Obtém o valor do campo de nome
  const senha = document.getElementsByName("senha")[0].value; // Obtém o valor do campo de senha
  const email = document.getElementsByName("email")[0].value; // Obtém o valor do campo de email
  const telefone = document.getElementsByName("telefone")[0].value; // Obtém o valor do campo de telefone

  // Obtém os usuários armazenados no localStorage e cria uma copia (objetivo de pegar o id)
  const usuariosArmazenados = JSON.parse(localStorage.getItem("usuarios"));

  // Pega as informaçãoes dos inputs e guarda tudo num objeto
  let novoUsuario = {
    id: usuariosArmazenados.length + 1,
    nome: nome,
    senha: senha,
    email: email,
    telefone: telefone,
  };

  // Pega a copia da lista de usuarios e adiciona o novo usuario
  usuariosArmazenados.push(novoUsuario);

  // substitui a lista de usuarios ja atualizada no LocalStorage
  localStorage.setItem("usuarios", JSON.stringify(usuariosArmazenados));

  alert("Novo usuario cadastrado com sucesso, retornando a page de login");
}
