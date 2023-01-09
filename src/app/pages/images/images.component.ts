import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public imgIndex = 0;

  public dots: string[] = [
    'rgb(100, 100, 100)',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent'
  ];

  public imgs = [
    {
      title: 'Gnocchi Arrabbiata',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-1.jpg);'
    },
    {
      title: 'Filé à Parmegiana com fritas',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-2.jpg);'
    },
    {
      title: 'Risotto Gamberi',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-3.jpg);'
    },
    {
      title: 'Papardelle Bolognese',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-4.jpg);'
    },
    {
      title: 'Scalloppine Nello com purê',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-5.jpg);'
    },
    {
      title: 'Fettuccine al Sugo Finto',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-6.jpg);'
    },
    {
      title: 'Scalloppine madeira com arroz piemontese',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-7.jpg);'
    },
    {
      title: 'Spaghetti alla Carbonara',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-8.jpg);'
    },
    {
      title: 'Pizza Margherita',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-9.jpg);'
    },
    {
      title: 'Tartufo',
      imagUrl: 'background-image: url(../../../assets/imgs/cardapio-img-10.jpg);'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeImg(){
    this.dots[this.dots.indexOf('rgb(100, 100, 100)')] = 'transparent';
    this.dots[this.imgIndex] = 'rgb(100, 100, 100)';
  }

  jumpPage(index: number){
    this.imgIndex = index;
    this.changeImg();
  }

  nextImg(){
    if(this.imgIndex == 9){
      this.imgIndex = 0;
    }else{
      this.imgIndex += 1;
    }

    this.changeImg()
  }

  lastImg(){
    if(this.imgIndex == 0){
      this.imgIndex = 9;
    }else{
      this.imgIndex -= 1;
    }

    this.changeImg()
  }

}
