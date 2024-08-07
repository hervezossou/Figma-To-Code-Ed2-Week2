class FooterComponent extends HTMLElement {
    constructor() {
      super();
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      const footerTemplate = document.createElement('template');
      footerTemplate.innerHTML = `
        <style>
          @import url(/source/styles/global.css);

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

footer {
    background-color: var(--color-black);
    padding: 26px 20px;
}

.footer-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
}

.footer-headline {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 20px;
}

.footer-logo {
    width: 158px;
    height: 36px;
}

.footer-subscribe {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 16px;
}

.footer-subscribe p {
    font-family: 'Archivo';
    font-size: var(--text-xs);
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.48px;
    color: var(--color-bg-gray);
    width: 100%;
    height: 32px;
}

.subscribe {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.subscribe input {
    width: 199px;
    height: 44px;
    background:none;
    font-family: 'Archivo';
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 14px;
    border-radius: 100px;
    border: 2px solid var(--color-white);
}

.subscribe input::placeholder {
    color: var(--color-white);
}

.subscribe button {
    width: 128px;
    height: 44px;
    background-color: var(--color-white);
    font-family: 'Archivo';
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-black);
    line-height: 20px;
    letter-spacing: -0.56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 12px 20px;
    border-radius: 100px;
}

.footer-columns {
    display: flex;
    align-items: first baseline;
    justify-content: space-between;
    gap: 20px;
}

.footer-products h3, .footer-categories h3, .footer-social h3 {
    color: var(--color-white);
    font-family: 'Archivo';
    font-size: var(--text-xs);
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.48px;
}

.footer-products ul, .footer-categories ul, .footer-social ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.footer-products ul li a, .footer-categories ul li a, .footer-social ul li a{
    color: var(--color-bg-gray);
    font-family: 'Archivo';
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.4px;
}

.footer-bottom {
    margin-top: 32px;
}

.footer-bottom-wrapper {
    width: 117px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 10px;
}

.footer-bottom-wrapper p {
    color: var(--color-dark-gray);
    font-family: Archivo;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.4px;
}
        </style>
        <footer>
    <div class="footer-wrapper">
        <div class="footer-top">
            <div class="footer-headline">
                <div class="footer-logo">
                    <img src="/assets/icons/logo-light.svg" alt="logo-light">
                </div>
                <div class="footer-subscribe">
                    <p>Subscribe to our newsletter  for upcoming products and best discount for all items</p>
                    <div class="subscribe">
                        <input type="email" placeholder="Your email">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="footer-columns">
                <section class="footer-products">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#" target="_blank">Jacket</a></li>
                        <li><a href="#" target="_blank">T-Shirt</a></li>
                        <li><a href="#" target="_blank">Jacket</a></li>
                        <li><a href="#" target="_blank">Shoes</a></li>
                        <li><a href="#" target="_blank">Sunglasses</a></li>
                    </ul>
                </section>
                <section class="footer-categories">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#" target="_blank">Man</a></li>
                        <li><a href="#" target="_blank">Woman</a></li>
                        <li><a href="#" target="_blank">Kids</a></li>
                        <li><a href="#" target="_blank">Gift</a></li>
                        <li><a href="#" target="_blank">New arrival</a></li>
                    </ul>
                </section>
                <section class="footer-social">
                    <h3>Our Social Media</h3>
                    <ul>
                        <li><a href="#" target="_blank">Instagram</a></li>
                        <li><a href="#" target="_blank">Facebook</a></li>
                        <li><a href="#" target="_blank">YouTube</a></li>
                        <li><a href="#" target="_blank">X</a></li>
                    </ul>
                </section>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-wrapper">
                <p>© BALLAMAS <span id="year"></span> by Waris</p>
            </div>
        </div>
    </div>
</footer>
      `;
  
      shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
  }
  
  customElements.define('footer-component', FooterComponent);  