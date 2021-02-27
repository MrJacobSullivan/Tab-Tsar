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
          var tabIds = new Array(tabs.length)
          for (var element in tabs) tabIds.push(element.id)
          var tabsToDelete = new Array(0)

          switch (command) {
            case 'close-all-except':
              for (var element of tabIds.filter(
                (value) => value !== currentTab.id
              ))
                tabsToDelete.push(element)
              break
            case 'close-all-other-tabs':
              for (var element of tabIds) tabsToDelete.push(element)
              break
            case 'close-right-tabs':
              for (var element of tabsIds.slice(
                tabIds.indexOf(currentTab.id + 1)
              ))
                tabsToDelete.push(element)
              break
            case 'close-left-tabs':
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
