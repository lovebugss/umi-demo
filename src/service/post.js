/**
 * 帖子 service
 */
import request from '@/utils/request';

/**
 * 查询帖子详情
 * @param id
 * @returns {Promise<any>}
 */
export async function queryPostDetailById(id) {
  return request('/api/post/' + id);
}
