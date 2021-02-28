chrome.commands.onCommand.addListener((command) => {
  chrome.windows.getCurrent((currentWindow) => {
    chrome.tabs.getSelected(null, (currentTab) => {
      chrome.tabs.query(
        {
          active: false,
          pinned: false,
          windowId: currentWindow.id,
        },
        (tabs) => {
          const tabIds = new Array(tabs.length)
          for (var tab of tabs) tabIds.push(tab.id)

          const tabsToDelete = []

          switch (command) {
            case 'close-tabs-all-except':
              for (var element of tabIds.filter(
                (value) => value !== currentTab.id
              ))
                tabsToDelete.push(element)
              break
            case 'close-tabs-all-including':
              for (var element of tabIds) tabsToDelete.push(element)
              break
            case 'close-tabs-right':
              for (var element of tabIds.slice(
                tabIds.indexOf(currentTab.id + 1)
              ))
                tabsToDelete.push(element)
              break
            case 'close-tabs-left':
              for (var element of tabIds.slice(
                null,
                tabIds.indexOf(currentTab.id)
              ))
                tabsToDelete.push(element)
              break
          }
          chrome.tabs.remove(tabsToDelete)
        }
      )
    })
  })
})
