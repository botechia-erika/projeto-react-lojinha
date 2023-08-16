import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main id="grilla">
        <Header />
        <section id="section1" className="border">
          <article className="card"></article>
        </section>
        <section id="section2" className="border">
          Section
        </section>
        <nav className="border">
          <button>HOME</button>
          <button>PRODUTOS</button>
          <button>CADASTRO</button>
          <button>LOGIN</button>
          <hr />
        </nav>
        <aside id="banner" className="border"></aside>
        <footer className="footer">FOOTER</footer>
      </main>
    </>
  );
}

export default App;
