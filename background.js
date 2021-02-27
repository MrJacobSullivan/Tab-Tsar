chrome.commands.onCommand.addListener(function (command) {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.getSelected(null, function (currentTab) {
      chrome.tabs.query(
        {
          active: false,
          pinned: false,
          windowId: currentWindow.id,
        },
        function (tabs) {
          switch (command) {
            case 'close-tab-all-except':
              console.log('all except')
              break
            case 'close-tabs-all-including':
              console.log('all including')
              break
            case 'close-tabs-right':
              console.log('right')
              break
            case 'close-tabs-left':
              console.log('left')
              break
          }
        }
      )
    })
  })
})
