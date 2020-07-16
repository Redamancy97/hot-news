//引入界面的时候打开
import request from '../utils/http'
//轮播图
export function picSwiper(pageNum,pageSize,) {
    const url=`/api/cms/article/open/banner/list?pageNum=${pageNum}&pageSize=${pageSize}`;
    return request.post(url)
}

//列表分类
export function listCart(pageSize) {
    const url=`/api/cms/category/open/list?pageSize=${pageSize}`;
    return request.post(url)
}

//列表分类
export function listDetail(pageNum,pageSize,categoryId) {
    const url=`/api/cms/article/open/list?pageNum=${pageNum}&pageSize=${pageSize}&categoryId=${categoryId}`;
    return request.post(url)
}
//新闻详情
export function newsDetail(articleId) {
    const url=`/api/cms/article/open/detail/${articleId}`;
    return request.get(url)
}

//热门新闻
export function searchNews(pageNum,pageSize) {
    const url=`/api/cms/article/open/hot/list?pageNum=${pageNum}&pageSize=${pageSize}`;
    return request.post(url)
}

