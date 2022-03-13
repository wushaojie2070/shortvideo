const BASE_URL = 'https://skrvideo.fun' //域名或选取所有接口不变的那一部分
export const request = (options) => {
        return new Promise((resolve, reject) => { //异步封装接口，使用Promise处理异步请求
            uni.request({ //发送请求
                url: BASE_URL + options.url, //接收请求的API
                method: options.method || 'GET', //接收请求的方式,如果不传默认为GET
                data: options.data || {}, //接收请求的data,不传默认为空
                success: (res) => { //数据获取成功
                    if (res.data.status !== 200) { //因为200是返回成功的状态码，如果不等于200,则代表获取失败,
                        return uni.showToast({
                            title: "数据获取失败！"
                        })
                    }
                    resolve(res) //成功,将数据返回
                },
                fail: (err) => { //失败操作
                    uni.showToast({
                        title: "请求接口失败！"
                    })
                    reject(err)
                }
            })
        })
    }