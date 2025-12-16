import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Produto {
  title: string;
  visible: boolean;
  img: string;
  price: string;
}

interface Galeria {
  produtos: Produto[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  galerias: Galeria[] = [
    {
      produtos: [
        { title: 'Cadeira Gamer Azul', visible: true, img: 'assets/imgs/produtos/cadeira-gamer-blue.webp', price: 'R$750' },
        { title: 'Coller RGB', visible: true, img: 'assets/imgs/produtos/cooler.jpg', price: 'R$250' },
        { title: 'Headset Gamer Branco', visible: true, img: 'assets/imgs/produtos/headset-gamer-white.jpg', price: 'R$570' },
        { title: 'Monitor Gamer SF', visible: true, img: 'assets/imgs/produtos/monitor-gamer-SF.webp', price: 'R$680' },
        { title: 'Notebook Acer', visible: true, img: 'assets/imgs/produtos/notebook-acer.jpg', price: 'R$2.210' },
        { title: 'Mouse Gamer', visible: true, img: 'assets/imgs/produtos/mouse-gamer.jpg', price: 'R$120' },
        { title: 'Processador AMD', visible: true, img: 'assets/imgs/produtos/processador-AMD.jpg', price: 'R$580' },
        { title: 'Memoria ram 16GB', visible: true, img: 'assets/imgs/produtos/memoria-ram-16gb.jpg', price: 'R$320' },
        { title: 'Teclado Gamer RGB', visible: true, img: 'assets/imgs/produtos/teclado-gamer-RGB.jpg', price: 'R$490' },
        { title: 'Water Coller', visible: true, img: 'assets/imgs/produtos/water-coller.jpg', price: 'R$699' },
        { title: 'Mesa Gamer RGB', visible: true, img: 'assets/imgs/produtos/mesa-gamer-RGB.jpg', price: 'R$700' },
        { title: 'Cadeira Gamer Branca', visible: true, img: 'assets/imgs/produtos/cadeira-gamer-white.jpg', price: 'R$720' },
        { title: 'Headset Gamer Preto', visible: true, img: 'assets/imgs/produtos/headset-gamer-black.jpg', price: 'R$500' },
        { title: 'Memoria ram 8GB', visible: true, img: 'assets/imgs/produtos/memoria-ram-8gb.jpg', price: 'R$150' },
        { title: 'Mesa Gamer', visible: true, img: 'assets/imgs/produtos/mesa-gamer.jpg', price: 'R$630' },
        { title: 'Teclado gamer', visible: true, img: 'assets/imgs/produtos/teclado-gamer.jpg', price: 'R$230' },
        { title: 'Galaxy Z Flip', visible: true, img: 'assets/imgs/produtos/galaxy-zflip.webp', price: 'R$2.700' },
        { title: 'Iphone 15', visible: true, img: 'assets/imgs/produtos/iphone-15.webp', price: 'R$3.000' }
      ]
    },  
  ];

  searchTerm: string = '';

  ngOnInit(): void {}

  filtrar(termo: string) {
    termo = termo.toLowerCase();

    this.galerias.forEach(galeria => {
      galeria.produtos.forEach(p => {
        p.visible = p.title.toLowerCase().includes(termo);
      });
    });
  }
}
