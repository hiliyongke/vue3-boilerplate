/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

// 自定义

import {
  ExtractedProjectType,
  ProjectType,
  ProjectUpdateType
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Projects<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Projects
   * @name GetProjects
   * @request GET:/projects
   * @response `200` `(ExtractedProjectType)[]` Ok
   */
  getProjects = (params: RequestParams = {}) =>
    this.http.request<ExtractedProjectType[], any>({
      path: `/projects`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * No description
   *
   * @tags Projects
   * @name AddProjects
   * @request POST:/projects
   * @secure
   * @response `200` `string` Ok
   */
  addProjects = (data: ProjectUpdateType, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/projects`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * No description
   *
   * @tags Projects
   * @name UpdateProject
   * @request PATCH:/projects/{id}
   * @secure
   * @response `200` `ProjectType` Ok
   */
  updateProject = (
    id: string,
    data: ProjectUpdateType,
    params: RequestParams = {}
  ) =>
    this.http.request<ProjectType, any>({
      path: `/projects/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * No description
   *
   * @tags Projects
   * @name DeleteProject
   * @request DELETE:/projects/{id}
   * @response `204` `void` No content
   */
  deleteProject = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/projects/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params
    });
}
