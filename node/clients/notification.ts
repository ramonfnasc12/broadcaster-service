import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Notification extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('', context, options)
  }

  public async postNotification(path: string, data: any): Promise<string> {
    return this.http.post(path, data, {
      metric: 'status-get',
    })
  }
}
