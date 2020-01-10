import Report from './Report'
import { SentryDSN } from '@/config'
import Vue from 'vue'

// 错误监控
export function createSentry() {
  return Report.getInstance(Vue, {
    dsn: SentryDSN,
    environment: 'Prod'
  })
}
