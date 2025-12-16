import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdmService, Usuario } from '../../services/adm.service';

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adm.html',
  styleUrl: './adm.css',
})
export class Adm implements OnInit {

  nome = '';
  senha = '';
  usuarios: Usuario[] = [];
  idEditando: number | string | null = null;

  constructor(private admService: AdmService) {}

  ngOnInit() {
    this.atualizarLista();
  }

  //Criar Usuarios
  salvarUsuario() {
  console.log('nome:', this.nome);
  console.log('senha:', this.senha);
  if (this.senha === '' || this.nome === '') {
    return alert('Usuario ou senha invalidos')
  }

  const novoUsuario: Usuario = {
    usuario: this.nome,
    senha: this.senha
  };

  this.admService.criarUsuario(novoUsuario).subscribe({
      next: res => console.log('RESPOSTA:', res),
      error: err => console.error('ERRO:', err)
    });
  window.location.reload();
  }

  //Carregar Lista
  atualizarLista() {
  this.admService.listarUsuarios().subscribe({
    next: (data) => {
      this.usuarios = data;
    },
    error: (err: any) => {
      console.error('Erro ao listar:', err);
    }
  });
  }

  //Limpar Usuarios
  limparLista() {
  if (this.usuarios.length === 0) return;

  const confirmar = confirm('Tem certeza que deseja apagar todos os usuários?');
  if (!confirmar) return;

  this.admService.deletarTodos(this.usuarios).subscribe({
    next: () => {
      window.location.reload();
    },
    error: err => console.error(err)
  });
  }

  //Excluir Usuario
  excluirUsuario(id: number | string) {
  if (!confirm('Deseja realmente excluir este usuário?')) return;

  this.admService.deletarUsuario(id).subscribe({
    next: () => {
      alert('Usuário excluído com sucesso!');
      window.location.reload();
    },
    error: (err: any) => {
      console.error('Erro ao excluir usuário:', err);
    }
  });
  }

  //habilitar Edição
  iniciarEdicao(user: Usuario) {
    this.idEditando = user.id!;
    this.nome = user.usuario;
    this.senha = user.senha;
  }

  //Salvar Edição
  salvarEdicao() {
  if (this.idEditando === null) return;

  const usuarioAtualizado: Usuario = {
    usuario: this.nome,
    senha: this.senha
  };

  this.admService.editarUsuario(this.idEditando, usuarioAtualizado).subscribe({
    next: (res) => {
      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].id === this.idEditando) {
          this.usuarios[i] = {
            id: this.usuarios[i].id,
            usuario: res.usuario,
            senha: res.senha
          };
          window.location.reload();
          return;
        }
      }
    },
    error: (err) => console.error(err)
  });
  }
}
