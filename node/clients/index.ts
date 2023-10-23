import { IOClients } from '@vtex/api'

import Notification from './notification'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get notification() {
    return this.getOrSet('notification', Notification)
  }
}
