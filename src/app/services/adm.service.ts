import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

export interface Usuario {
  id?: number;
  usuario: string;
  senha: string;
}

@Injectable({ providedIn: 'root' })
export class AdmService {
  private apiUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
  listarUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  deletarUsuario(id: number | string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  deletarTodos(usuarios: Usuario[]) {
    const requests = usuarios.map(user =>
      this.deletarUsuario(user.id!)
    );
    return forkJoin(requests);
  }
  editarUsuario(id: number | string, usuario: Usuario) {
  return this.http.put<Usuario>(`${this.apiUrl}/${id}`,usuario);
  } 
}
