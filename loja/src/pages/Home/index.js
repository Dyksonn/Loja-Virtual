import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-charge-canvas/36/HZM-2998-036/HZM-2998-036_zoom1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis show</strong>
        <span>R$200,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-charge-canvas/36/HZM-2998-036/HZM-2998-036_zoom1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis show</strong>
        <span>R$200,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-charge-canvas/36/HZM-2998-036/HZM-2998-036_zoom1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis show</strong>
        <span>R$200,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-charge-canvas/36/HZM-2998-036/HZM-2998-036_zoom1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis show</strong>
        <span>R$200,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-charge-canvas/36/HZM-2998-036/HZM-2998-036_zoom1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis show</strong>
        <span>R$200,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-charge-canvas/36/HZM-2998-036/HZM-2998-036_zoom1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis show</strong>
        <span>R$200,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
