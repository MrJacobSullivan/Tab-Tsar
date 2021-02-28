chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.getAllInWindow(null, (tabs) => {
    for (const [index, tab] of tabs.entries()) {
      if (tab.active) var currentTab = tabs[index]
    }

    const currentTabIndex = currentTab.index

    console.log(`Current Tab: ${currentTabIndex}`)
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
