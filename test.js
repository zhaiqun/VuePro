var fs = require('fs')

function ReadFile(url, succBc, errCb) {

    fs.readFile(url, 'utf-8', function(err, data) {
        if (err) {
            return errCb(err)
        }
        succBc(data)
    })
}


// ReadFile('./text.txt', (data) => {
//     console.log(data)
// }, (err) => { console.log(err) })

function PReadFile(url) {

    var promise = new Promise(function(resolve, reject) {
            // console.log("pomise构造函数里func调用");
            fs.readFile(url, 'utf-8', function(err, data) {
                // console.log("pomise构造函数里异步读取");
                if (err) {
                    return reject(err)
                }
                resolve(data)
                    // console.log("pomise构造函数里回调函数调用完毕");
            })
        },

    )

    // console.log("返回一个pomise");
    return promise

}

PReadFile('./text5.txt').then((result) => {
    // console.log('给promise注册成功的回调函数')
    console.dir(result)
    return PReadFile('./text1.txt')
}, (err) => {
    console.log('搓搓了' + err)
    throw err
        // return PReadFile('./text1.txt')
}).then(function(data) {

    console.log(data)
    return PReadFile('./text3.txt')

}).then(function(data) {
    console.log(data)
}).catch(function(err) {

    console.log('失败了')
})

console.log("ooo")

// for (let index = 0; index < 10; index++) {
//     if (index > 6) {
//         break;
//     }
//     console.log(index)
// }