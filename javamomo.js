let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'nop'
document.querySelector("#no").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://media3.giphy.com/media/Pn1h5Un3LZD9uq3u07/giphy.gif?cid=790b7611rnjbeny87loxkd3qteocsrr7x64rk28xtlxmjinw&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'sii'
document.querySelector("#yes").addEventListener("mouseover", function () {
  let width = window.innerWidth - 30;
  let height = window.innerHeight - 30;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});