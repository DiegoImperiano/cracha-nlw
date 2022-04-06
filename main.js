const LinksSocialMedia = {
  github: 'DiegoImperiano',
  facebook: 'diego.imperiano',
  instagram: 'diego_imperiano',
  twitter: 'diego_imperiano'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) //função que pega o conteudo de uma url. nesse caso ele esta pegando as informações do arquivo JASON presente na url contida na variavel de mesmo nome
    .then(response => response.json()) // .then é uma promeça e está pegando o conteudo retornado pela função fetch em um JSON
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) // essa outra promeça pega o arquivo ja em JSON e substitui as informações do html pelas informações do arquivo JSON
}

getGitHubProfileInfos()
