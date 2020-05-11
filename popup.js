document.addEventListener(
    'DOMContentLoaded',
    () => {
        const htmlCollection = document.getElementsByTagName('button')
        const buttons = [...htmlCollection]

        buttons.forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    chrome.tabs.query(
                        { currentWindow: true, active: true },
                        tabs => {
                            const data = {
                                action: button.innerHTML
                                    .toLowerCase()
                                    .replace(/ /g, '-'),
                            }

                            chrome.tabs.sendMessage(tabs[0].id, data)
                        }
                    )
                },
                false
            )
        })
    },
    false
)
