import request from '../utils/http'
//https://api.jisuapi.com/astro/all?appkey=92a2efe26926f9cf
export function getConstellation() {
    return request.get(`/astro/all?appkey=cc740d566c5d084f`);
}

export function getConstellationDetails(astroid) {
    return request.get(`/astro/fortune?astroid=${astroid}&date=&appkey=cc740d566c5d084f`)
}