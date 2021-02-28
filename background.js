chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.getAllInWindow(null, (tabs) => {
    let currentTabIndex = 0

    tabs.filter((tab) => {
      if (tab.active) currentTabIndex = tab.index
    })

    switch (command) {
      case 'close-tabs-all-except':
        tabs.filter((tab) => {
          if (tab.index != currentTabIndex) {
            chrome.tabs.remove(tab.id)
          }
        })
        break
      case 'close-tabs-all-including':
        tabs.filter((tab) => {
          chrome.tabs.remove(tab.id)
        })
        break
      case 'close-tabs-right':
        tabs.filter((tab) => {
          if (tab.index > currentTabIndex) {
            chrome.tabs.remove(tab.id)
          }
        })
        break
      case 'close-tabs-left':
        tabs.filter((tab) => {
          if (tab.index < currentTabIndex) {
            chrome.tabs.remove(tab.id)
          }
        })
        break
    }
  })
})
