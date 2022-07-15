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

export type TestAllOfDc = (FooBarBaz & FooBar) & { prop?: string };

export type TestAllOfDc2 = FooBarBaz & { prop?: string };

export type TestAnyOfDc = (FooBarBaz | FooBar | (FooBarBaz & FooBar)) & {
  prop?: string;
};

export type TestOneOfDc = (FooBarBaz | FooBar) & { prop?: string };

/**
 * FooBar
 * @format int32
 */
export enum IntEnumWithNames {
  Unknown = 'Unknown',
  String = 'String',
  Int32 = 'Int32',
  Int64 = 'Int64',
  Double = 'Double',
  DateTime = 'DateTime',
  Test2 = 'Test2',
  Test23 = 'Test23',
  Tess44 = 'Tess44',
  BooFar = 'BooFar'
}

export interface NullableEnum {
  /** @format int64 */
  id?: number;
  legalCategory?: 'SARL' | 'ASSOCIATION' | null;
}

/**
 * Information about job
 */
export interface FooBarBaz {
  id?: string;
  kind?: JobKind;
  name?: string;
  link?: string;
  [key: string]: any;
}

/**
 * Information about job
 */
export interface FooBar {
  kind?: JobKind;
}

/**
 * Information about job
 */
export interface FooBaz {
  name?: string;
  link?: string;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickUserTypeExcludeKeysIdOrId {
  username: string;
  password: string;
}

export type OmitUserTypeIdOrId = PickUserTypeExcludeKeysIdOrId;

export type OmitIdUserType = OmitUserTypeIdOrId;

export type AuthUserType = OmitIdUserType;

export enum JobKind {
  COMPANY = 'COMPANY',
  PERSONAL = 'PERSONAL',
  FREELANCE = 'FREELANCE',
  OPEN_SOURCE = 'OPEN_SOURCE'
}

/**
 * Information about job
 */
export interface JobType {
  id: string;
  kind: JobKind;
  name?: string;
  link?: string;

  /**
   * Exist only in open source jobs
   * Format: `${username}/${projectName}`
   */
  github?: string;

  /**
   * Exist only in open source jobs
   * Format: `${orgname}/${projectName}`
   */
  npm?: string;

  /**
   * Exist only in open source jobs
   * Means project is dev. tool (like swagger code generator)
   */
  isTool?: boolean;

  /** web site address */
  address?: string;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickJobTypeExcludeKeysIdOrId {
  kind: JobKind;
  name?: string;
  link?: string;

  /**
   * Exist only in open source jobs
   * Format: `${username}/${projectName}`
   */
  github?: string;

  /**
   * Exist only in open source jobs
   * Format: `${orgname}/${projectName}`
   */
  npm?: string;

  /**
   * Exist only in open source jobs
   * Means project is dev. tool (like swagger code generator)
   */
  isTool?: boolean;

  /** web site address */
  address?: string;
}

export type OmitJobTypeIdOrId = PickJobTypeExcludeKeysIdOrId;

export type OmitIdJobType = OmitJobTypeIdOrId;

export type JobUpdateType = OmitIdJobType;

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickProjectTypeExcludeKeysJob {
  id: string;
  name?: string;

  /** @format double */
  year: number;
  description: string;
  notImportant?: boolean;
  prefix?: string;
  tags: string[];
  teamSize: string;
}

export type OmitProjectTypeJob = PickProjectTypeExcludeKeysJob;

export type ExtractedProjectType = OmitProjectTypeJob & { job: JobType };

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickProjectTypeExcludeKeysIdOrId {
  name?: string;
  job: string;

  /** @format double */
  year: number;
  description: string;
  notImportant?: boolean;
  prefix?: string;
  tags: string[];
  teamSize: string;
}

export type OmitProjectTypeIdOrId = PickProjectTypeExcludeKeysIdOrId;

export type OmitIdProjectType = OmitProjectTypeIdOrId;

export type ProjectUpdateType = OmitIdProjectType;

export interface ProjectType {
  id: string;

  /** @format double */
  year: number;
  description: string;
  job: string;
  name?: string;
  notImportant?: boolean;
  prefix?: string;
  tags: string[];
  teamSize: string;
}
