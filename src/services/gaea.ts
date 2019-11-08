import request from '@/utils/request';
import { RenderJson } from '@/defines/inject';

export interface ErrorResponse {
  message: string;
}

export interface GetRenderJsonsResponse { data: string[] }
export async function getRenderJsons(): Promise<GetRenderJsonsResponse | ErrorResponse> {
  return request(`/gaea/jsons`);
}

export interface GetRenderJsonResponse { data: RenderJson }
export async function getRenderJson(name: string): Promise<GetRenderJsonResponse | ErrorResponse> {
  return request(`/gaea/get-json/${name}`);
}

export interface SaveRenderJsonResponse { data: string }
export async function saveRenderJson(name: string, renderJson: any): Promise<SaveRenderJsonResponse | ErrorResponse> {
  return request(`/gaea/save-json/${name}`, {
    method: 'POST',
    data: { renderJson },
  });
}
