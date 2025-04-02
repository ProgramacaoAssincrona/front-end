export default function Footer() {
  return (
    <footer className="bg-black flex flex-col sm:flex-row justify-evenly p-8 gap-7">
      <ul className="flex flex-col gap-3">
        <li className="text-white font-bold text-lg">Suporte</li>
        <li className="text-white">Rua Irineu José Bordon</li>
        <li className="text-white">tamajaki@gmail.com</li>
        <li className="text-white">+55 (11) 98765-4321</li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li className="text-white font-bold text-lg">Conta</li>
        <li className="text-white">Minha conta</li>
        <li className="text-white">Entrar / Cadastrar-se</li>
        <li className="text-white">Carrinho</li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li className="text-white font-bold text-lg">Produtos e serviços</li>
        <li className="text-white">Celulares</li>
        <li className="text-white">Computadores</li>
        <li className="text-white">Relógios</li>
        <li className="text-white">Fones</li>
      </ul>
    </footer>
  );
}
