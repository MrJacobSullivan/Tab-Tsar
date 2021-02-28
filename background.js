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
            console.log(`Tabs to be removed: ${tab.index}`)
          }
        })
        break
      case 'close-tabs-all-including':
        for (element of tabs)
          console.log(`Tabs to be removed: ${element.index}`)
        break
      case 'close-tabs-right':
        tabs.filter((tab) => {
          if (tab.index > currentTabIndex) {
            console.log(`Tabs to be removed: ${tab.index}`)
          }
        })
        break
      case 'close-tabs-left':
        tabs.filter((tab) => {
          if (tab.index < currentTabIndex) {
            console.log(`Tabs to be removed: ${tab.index}`)
          }
        })
        break
    }
  })
})
