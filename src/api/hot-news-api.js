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

//列表详情
export function listDetail(pageNum,pageSize,categoryId) {
    const url=`/api/cms/article/open/list?pageNum=${pageNum}&pageSize=${pageSize}&categoryId=${categoryId}`;
    return request.post(url)
}
//新闻详情
export function newsDetail(articleId) {
    const url=`/api/cms/article/open/detail/${articleId}`;
    return request.get(url)
}

//获取热门新闻
export function searchNews(pageNum,pageSize) {
    const url=`/api/cms/article/open/hot/list?pageNum=${pageNum}&pageSize=${pageSize}`;
    return request.post(url)
}
//搜索列表
//form表单
export function SearchList(pageNum = 0, pageSize = 10, value) {
    const formData = new FormData();
    formData.append('pageNum', pageNum)
    formData.append('pageSize', pageSize)
    formData.append('title', value)
    return request.post(`/api/cms/article/open/list`, formData);
}
//收藏接口
export function collectArticleId(articleId) {
    return request.get(`/api/cms/collect/collect/article/${articleId}`)

}

//点赞接口
export function dianZan(articleId) {
    return request.get(`/api/cms/article/add/zan/${articleId}`)
}



