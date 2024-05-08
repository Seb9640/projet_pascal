import { Component } from '@angular/core';
import { NotificationService } from 'services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './app-notification.component.html',
  styleUrl: './app-notification.component.scss'
})
export class AppNotificationComponent {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    // S'abonner aux notifications
    this.notificationService.notifications$.subscribe((notification: any[]) => {
      this.notifications.push(notification);
      // Supprimer automatiquement la notification après quelques secondes
      setTimeout(() => {
        this.removeNotification(notification);
      }, 5000); // Supprimer après 5 secondes
    });
  }

  removeNotification(notification: any): void {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }
}
