import request from '../utils/http'

// http://59.111.92.205:8089/top/list?idx=1 音乐列表接口
export function getMusicBill(idx) {
    return request.get(`/music-api/top/list?idx=${idx}`);
}

// http://59.111.92.205:8089/song/url?id=1426649237 音乐详情接口
export function getMusicUrl(id) {
    return request.get(`/music-api/song/url?id=${id}`);
}