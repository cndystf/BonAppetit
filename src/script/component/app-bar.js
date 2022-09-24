import css from 'bootstrap/dist/css/bootstrap.min.css';

class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
        ${css}
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            color: white;
            text-align:center;
            font-size: 35px;
          }
        </style>
        <div class="container-fluid" style="padding:30px">
          <a class="navbar-brand">
            <img src="/images/nav.png" alt="logo" width="30" height="24" class="d-inline-block"> Bon Appetit 
            </a>
        </div>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  