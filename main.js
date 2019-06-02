
window.jQuery.ajax = function ({method, url, body, headers}) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        for (let key in headers) {
            let value = headers[key]
            xhr.setRequestHeader(key, value)
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve.call(undefined, xhr.responseText)
                } else {
                    reject.call(undefined, xhr)
                }
            }
        }
        xhr.setRequestHeader('dongdong', '18')
        xhr.setRequestHeader('Content-Type', 'x-www-form-urlencoded')
        xhr.send(body)
    })
}

var myButton = document.getElementById('myButton')
myButton.addEventListener('click', function () {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get'
    }).then((responseText) => {
        console.log(responseText)
    }, (request) => {
        console.log(request)
    })
})