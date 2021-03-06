// 评论请求模块

import request from '@/utils/request'

// 获取文章怕、评论列表
export const getComments = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    // 我们写的时候是对象，但是最终发给后端的数据是？
    // axios 会把 params 对象转为 key=value?key=value 的格式放到url拼接的参数中
    params
  })
}

// 评论点赞
export const addCommentLike = target => {
  return request({
    method: 'POST',
    url: '/app/v1_0/comment/likings',
    data: {
      target
    }
  })
}

// 取消评论点赞
export const deleteCommentLike = target => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/comment/likings/${target}`
  })
}

// 发布文章评论或回复
export const addComment = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/comments',
    data
  })
}
