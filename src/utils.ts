type TEncode = {
    'form-name': string,
    email: string
}
export const encode = function (data: TEncode) {
    return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}