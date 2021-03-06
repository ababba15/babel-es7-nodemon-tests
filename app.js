function a(name) {
    this.b = function() {
        return name;
    }
}

const aa = new a('hello');

console.log(aa.b());

// --------------------------------------------

(async function() {
    var sleep = function(para) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('para: ', para)
                resolve(para * para)
            }, 1000)
        })
    }

    var result = await sleep(2);
    console.log('result: ', result);
}());