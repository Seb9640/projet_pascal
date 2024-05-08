import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  notifications$: Observable<any[]> = this.notificationsSubject.asObservable();

  constructor() { }

  addNotification(message: string) {
    const newNotification = { message };
    const updatedNotifications = [...this.notificationsSubject.getValue(), newNotification];
    this.notificationsSubject.next(updatedNotifications);
    setTimeout(() => this.removeNotification(newNotification), 5000); // Supprime automatiquement la notification après 5 secondes
  }

  removeNotification(notification: any) {
    const updatedNotifications = this.notificationsSubject.getValue().filter(n => n !== notification);
    this.notificationsSubject.next(updatedNotifications);
  }
}
