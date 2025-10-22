import { Component, inject, input, computed, DestroyRef } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userId = input.required<string>()
  private usersService = inject(UsersService)
  private activatedRoute = inject(ActivatedRoute)
  private destroyRef = inject(DestroyRef)
  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name)
  userName = ''
  ngOnInit(): void {
    console.log(this.activatedRoute)
    console.log(this.activatedRoute.snapshot.paramMap.get('userId'))
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || ''
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
