const navigation = document.querySelector('.global-nav-items ul')

if (navigation) {
  const game = document.createElement('li')
  game.innerHTML = '<a href="https://www.douban.com/game/explore" target="_blank">游戏</a>'

  navigation.appendChild(game)
} else {
  console.warn('Could not find navigation')
}
