/*jshint esversion: 6 */
'use sctrict';

let domElement = function(selector, height,width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  };

domElement.prototype.create = function (){
  let div = document.createElement('div');
  if (this.selector[0] == '.') {
    this.selector.classList.add('');
    document.body.appendChild(div);
  }
  if (this.selector[0] == '#'){
    let p = document.createElement('p');
    this.selector.id = 'p';
    document.body.appendChild(p);
  }
  div.style.cssText = 'height: 26px; width: 45px; background-color: #435C89; font-size: 18px;';
};

 let test = new domElement('.dom', '48px', '26px', 'black', '24px');
 test.create('Для проверки кода');
 console.log(domElement);

