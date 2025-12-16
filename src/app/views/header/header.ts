import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  filtrar() {
    this.searchEvent.emit(this.searchTerm);
  }
}
