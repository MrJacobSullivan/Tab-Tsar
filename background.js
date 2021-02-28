chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'close-tabs-all-except':
      console.log('close all except')
      break
    case 'close-tabs-all-including':
      console.log('close all other')
      break
    case 'close-tabs-right':
      console.log('close tabs right')
      break
    case 'close-tabs-left':
      console.log('close tabs left')
      break
  }
})
