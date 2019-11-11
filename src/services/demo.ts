import request from '@/utils/request';

export async function getProjectInfo(id: number | string) {
  return request(`/demo/project-info/${id}`);
}
