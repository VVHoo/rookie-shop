import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

interface IOptions {
  dsn: string
  environment: string
}
class Report {
  // 单例模式
  private static instance: Report
  public vue: any
  public options: IOptions
  public static getInstance(Vue: any, reportOptions: IOptions) {
    if (!this.instance) {
      this.instance = new Report(Vue, reportOptions)
      this.instance.init()
      this.instance.registerGlobalError()
    }
    return this.instance
  }

  constructor(public Vue: any, public reportOptions: IOptions) {
    this.vue = Vue
    this.options = reportOptions
  }
  // 初始化
  public init() {
    Sentry.init({
      dsn: this.options.dsn,
      integrations: [
        new Integrations.Vue({ Vue: this.vue, attachProps: true })
      ],
      environment: this.options.environment
    })
  }

  // 全局错误处理
  public registerGlobalError() {
    window.addEventListener(
      'error',
      event => {
        const target = event.target || event.srcElement
        const isElementTarget =
          target instanceof HTMLScriptElement ||
          target instanceof HTMLLinkElement ||
          target instanceof HTMLImageElement
        if (!isElementTarget) {
          return false
        }
        const url =
          (target as HTMLScriptElement | HTMLImageElement).src ||
          (target as HTMLLinkElement).href
        this.log({
          error: new Error(`ResourceLoadError: ${url}`),
          type: 'resource load'
        })
      },
      true
    )
  }

  public log(info: any) {
    Sentry.withScope(scope => {
      Object.keys(info).forEach(key => {
        if (key !== 'error') {
          scope.setExtra(key, info[key])
        }
      })
      Sentry.captureException(info.error || new Error(''))
    })
  }
}

export default Report
