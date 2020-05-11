chrome.runtime.onMessage.addListener((req, send, res) => {
    switch (req.action) {
        case 'hacker-corrupt':
            hackerCorrupt()
            break
        case 'reverse':
            reverse()
            break
        case 'bad-color':
            badColor()
            break
        case 'bazooka':
            bazooka()
            break
    }
})

function hackerCorrupt() {
    document.body.innerHTML = document.body.innerHTML
        .split('')
        .reverse()
        .join('')
}

function reverse() {
    function checkElement(element) {
        if (element.hasChildNodes()) {
            element.childNodes.forEach(checkElement)
        } else if (element.nodeType === 3) {
            element.textContent = element.textContent
                .split('')
                .reverse()
                .join('')
        }
    }

    checkElement(document.body)
}

function badColor() {
    const style = document.createElement('style')
    style.innerHTML = `
        body {
            filter: hue-rotate(180deg) contrast(1000%);
        }
    `

    document.body.appendChild(style)
}

function bazooka() {
    function checkElement(element) {
        if (element.hasChildNodes()) {
            element.childNodes.forEach(checkElement)
        } else if (element.nodeType === 3) {
            element.textContent = element.textContent
                .split(' ')
                .map(_ => 'BAZOOKA')
                .join(' ')
        }
    }

    checkElement(document.body)
}
