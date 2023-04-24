const CODE = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    BUSINESS_ERROR: 500,
}

/**
 * 统一返回值处理
 */
module.exports = {
    success(data = {}, msg = '请求成功', code = CODE.SUCCESS) {
        return {
            code: code,
            data: data,
            msg: msg
        }
    },
    error(msg = '请求失败', data = {}, code = CODE.BUSINESS_ERROR) {
        return {
            code: code,
            data: data,
            msg: msg
        }
    },
    CODE
}
