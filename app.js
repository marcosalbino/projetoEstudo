function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  //
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()
  //
  if (campoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado! Digite algo a ser pesquisado!</p>";
    return
  }
  //
  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  //
  let tituloDescricaoTags = ""
  // Itera sobre cada elemento (dado) do array de dados
  for (let dado of dados) {
    //
    tituloDescricaoTags = dado.titulo.toLowerCase() + dado.descricao.toLowerCase() + dado.tags.toLowerCase();
    //
    if (tituloDescricaoTags.includes(campoPesquisa)) {
      // Constrói a estrutura HTML de cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações.</a>
        </div>
      `;
    }
  }
  //
  // Atribui a string com os resultados ao conteúdo HTML da seção
  if (!resultados) {
    resultados = "<p>Sem informaçãoes a serem exibidas!</p>";
  }
  section.innerHTML = resultados;
}
