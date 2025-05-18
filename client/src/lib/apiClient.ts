// Centralized API client for all server communication
// Use this for all fetch/axios requests in the app

import { Risk, Issue, CriticalDate, InsertRisk, InsertIssue, InsertCriticalDate } from '@shared/schema';

export type ApiMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export interface ApiClientOptions<T = any> {
  method: ApiMethod;
  url: string;
  data?: unknown;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

// Get the API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function apiClient<T = any>({
  method,
  url,
  data,
  params,
  headers = {},
  signal,
}: ApiClientOptions): Promise<T> {
  // Ensure URL starts with API base URL if it's a relative path
  let fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  if (params) {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) search.append(key, String(value));
    });
    fullUrl += `?${search.toString()}`;
  }
  const res = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
    signal,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status}: ${text || res.statusText}`);
  }
  if (res.status === 204) return undefined as T;
  return res.json();
}

// Example typed API helpers for each feature (expand as needed)
export const api = {
  risks: {
    list: (projectId?: number) =>
      apiClient<Risk[]>({ method: 'GET', url: '/api/risks', params: projectId ? { projectId } : undefined }),
    create: (risk: InsertRisk) =>
      apiClient<Risk>({ method: 'POST', url: '/api/risks', data: risk }),
    update: (id: number, data: Partial<InsertRisk>) =>
      apiClient<Risk>({ method: 'PATCH', url: `/api/risks/${id}`, data }),
    delete: (id: number) =>
      apiClient<void>({ method: 'DELETE', url: `/api/risks/${id}` }),
  },
  issues: {
    list: (projectId?: number) =>
      apiClient<Issue[]>({ method: 'GET', url: '/api/issues', params: projectId ? { projectId } : undefined }),
    create: (issue: InsertIssue) =>
      apiClient<Issue>({ method: 'POST', url: '/api/issues', data: issue }),
    update: (id: number, data: Partial<InsertIssue>) =>
      apiClient<Issue>({ method: 'PATCH', url: `/api/issues/${id}`, data }),
    delete: (id: number) =>
      apiClient<void>({ method: 'DELETE', url: `/api/issues/${id}` }),
  },
  criticalDates: {
    list: (projectId?: number) =>
      apiClient<CriticalDate[]>({ method: 'GET', url: '/api/critical-dates', params: projectId ? { projectId } : undefined }),
    create: (cd: InsertCriticalDate) =>
      apiClient<CriticalDate>({ method: 'POST', url: '/api/critical-dates', data: cd }),
    update: (id: number, data: Partial<InsertCriticalDate>) =>
      apiClient<CriticalDate>({ method: 'PATCH', url: `/api/critical-dates/${id}`, data }),
    delete: (id: number) =>
      apiClient<void>({ method: 'DELETE', url: `/api/critical-dates/${id}` }),
  },
};
