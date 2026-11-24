/**
 * Core health check response format.
 * Consumed by apps/api to format GET /api/v1/health
 * and by apps/web for health verification.
 */
export interface HealthResponse {
  status: 'ok';
  timestamp?: string;
  service?: string;
}

/**
 * Platform metadata representation.
 * Consumed by both web frontend and API services.
 */
export interface PlatformMetadata {
  name: string;
  author: string;
  version: string;
  defaultLocale: 'ar' | 'en';
  direction: 'rtl' | 'ltr';
}

/**
 * Common API error envelope.
 */
export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  code: string;
  timestamp: string;
}
