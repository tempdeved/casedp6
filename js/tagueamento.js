// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato

function tag_link_externo() {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
}
function tag_download_pdf() {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
 }

function tag_Lorem() {
    ga('send', 'event', 'analise', 'ver_mais', 'Lorem')
  }

function tag_Ipsum(){
    ga('send', 'event', 'analise', 'ver_mais', 'Ipsum')
}

function tag_Dolor(){
    ga('send', 'event', 'analise', 'ver_mais', 'Dolor')
}

function tag_nome_form() {
    ga('send', 'event', 'contato', 'nome', 'preencheu')
}

function tag_email_form() {
    ga('send', 'event', 'contato', 'email', 'preencheu')
}

function tag_telefone_form() {
    ga('send', 'event', 'contato', 'telefone', 'preencheu')
}

function enviado(){
    ga('send', 'event', 'contato', 'enviado', 'enviado');
}