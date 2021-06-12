

const Router = require('koa-router')
const axios = require('axios')
const http = require('http')
const router = Router()
 
async function getCookie () {
    return new Promise((resolve, reject) => {
        function callbackFunction (params) {
            console.log(JSON.parse(params), 'params');
            resolve(JSON.parse(params))
        }
        axios.get('https://dfp2.bangruitech.com/public/generate/jsonp?algID=Z2Z4mHMPCh&hashCode=hOGDW2ndMyy36A-Ww79t1dHvolqQiMbnNkfxfIXZdVg&FMQw=0&q4f3=zh-CN&VySQ=FH79YFs6H3-K6h90vRxvl6_K3SmCFebu&VPIf=1&custID=88&VEek=unknown&dzuS=0&yD16=0&EOQP=c227b88b01f5c513710d4b9f16a5ce52&jp76=52d67b2a5aa5e031084733d5006cc664&hAqN=MacIntel&platform=WEB&ks0Q=d22ca0b81584fbea62237b14bd04c866&TeRS=700x1280&tOHY=24xx800x1280&Fvje=i1l1o1s1&q5aJ=-8&wNLf=99115dfb07133750ba677d055874de87&0aew=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_13_6)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F90.0.4430.212%20Safari%2F537.36&E3gR=b88b906452cb492e9e141f6b61daff35&timestamp=1623476180257').then(res => {
            console.log(res.data ,'res');
            if (res && res.data) {
                eval(res.data)
            }
        })
    })
}

/**
 * 获取用户当前环境下的公网ip
 */
router.get('/', async ctx => {
    const { url, key } = ctx.query
    if (url && key) {
        const data = await axios.get(url)
        try {
            ctx.body = eval(`data.${key}`)
        } catch (error) {
            ctx.body = '未找到'
        }
    } else {
        ctx.body = '未找到'
    }
})
 
module.exports = router