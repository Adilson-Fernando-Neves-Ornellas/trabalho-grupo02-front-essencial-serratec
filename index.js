// Está dentro dessas chaves o que foi copiado do bootstrap
{
  // Get the modal
  let modal = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// Array com usuario padrão
let usuarios = [
  {
    id: 1,
    nome: "Admin",
    senha: "12345678",
    email: "admin@admin.com",
    telefone: "22999999999",
  },
];

// carrega o localStorege quando abre o menu pro login
function CarregarLocalStorage() {
  // Se o localStorage ja estiver criado, não tem necessidade de cria-lo novamente
  if (localStorage.length === 0) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

// verifica se o login digitadio esta no Array de usuarios
function VerificarListaUsuarios() {
  const nome = document.getElementsByName("nome")[0].value; // Obtém o valor do campo de nome
  const senha = document.getElementsByName("senha")[0].value; // Obtém o valor do campo de senha

  // Obtém os usuários armazenados no localStorage
  const usuariosArmazenados = JSON.parse(localStorage.getItem("usuarios"));

  // Procura pelo usuário com o nome inserido
  const usuarioEncontrado = usuariosArmazenados.find(
    (user) => user.nome === nome
  );

  if (usuarioEncontrado) {
    if (usuarioEncontrado.senha === senha) {
      return true; // Permite o envio do formulário
    } else {
      alert("Senha incorreta");
    }
  } else {
    alert("Usuário não encontrado");
  }
  return false; // Impede o envio do formulário
}

// Se a opção gravar senha estiver selecionada, grava no local storage, se não apaga
const gravarSenhaNavegador = () => {
  const nome = document.getElementsByName("nome")[0].value; // Obtém o valor do campo de nome
  const senha = document.getElementsByName("senha")[0].value; // Obtém o valor do campo de senha

  const estadoInputBoleano =
    document.getElementsByClassName("inputGravarSenha")[0].checked; //Pega o estado do input ( true|false )

  if (estadoInputBoleano === true) {
    // Se for true grava no Local Storage
    const modeloLocalStorage = [
      {
        nome: nome,
        senha: senha,
      },
    ];
    localStorage.setItem("Login Usuario", JSON.stringify(modeloLocalStorage));
  } else {
    // Se não apaga do LocalStorage
    localStorage.removeItem("Login Usuario");
  }
};
