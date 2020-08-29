/**
 * 帖子 service
 */
import request from 'umi-request';

/**
 * 查询帖子详情
 * @param id
 * @returns {Promise<any>}
 */
export async function queryPostDetailById(id) {
  return request('/api/post/' + id);
}
