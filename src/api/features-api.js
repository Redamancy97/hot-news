import request from '../utils/http'

export function getSolarTerms() {
    return request.get('/features-api/jieqi/query?appkey=b582b02aac5800b0&year=')
}

export function getSolarTermsDetails(jieqiid) {
    return request.get(`/features-api/jieqi/detail?appkey=b582b02aac5800b0&jieqiid=${jieqiid}&year=`)
}