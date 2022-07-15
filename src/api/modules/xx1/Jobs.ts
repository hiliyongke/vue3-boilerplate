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

import { JobType, JobUpdateType } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Jobs<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Jobs
   * @name GetJobs
   * @request GET:/jobs
   * @secure
   * @response `200` `(JobType)[]` jobs found
   */
  getJobs = (params: RequestParams = {}) =>
    this.http.request<JobType[], any>({
      path: `/jobs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * No description
   *
   * @tags Jobs
   * @name AddJob
   * @request POST:/jobs
   * @secure
   * @response `200` `string` Ok
   */
  addJob = (data: JobUpdateType, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/jobs`,
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
   * @tags Jobs
   * @name GetJob
   * @request GET:/jobs/{id}
   * @secure
   * @response `200` `JobType` job found
   * @response `404` `void` job not found
   */
  getJob = (id: string, params: RequestParams = {}) =>
    this.http.request<JobType, void>({
      path: `/jobs/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * No description
   *
   * @tags Jobs
   * @name UpdateJob
   * @request PATCH:/jobs/{id}
   * @secure
   * @response `200` `JobType` Ok
   */
  updateJob = (
    id: string,
    params: JobUpdateType,
    requestParams: RequestParams = {}
  ) =>
    this.http.request<JobType, any>({
      path: `/jobs/${id}`,
      method: 'PATCH',
      body: params,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...requestParams
    });
  /**
   * No description
   *
   * @tags Jobs
   * @name DeleteJob
   * @request DELETE:/jobs/{id}
   * @secure
   * @response `204` `void` No content
   */
  deleteJob = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/jobs/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
}
