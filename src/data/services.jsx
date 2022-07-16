import { MdWeb } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default [
  {
    title: "HTML",
    icon: <MdWeb className="w-full h-full" />,
    description:
      "Trata-se de uma linguagem de marcação para desenvolver páginas e documentos eletrônicos para a internet, fornecendo informações para usuários, navegadores e mecanismos de busca.",
  },
  {
    title: "CSS",
    icon: <FaHandHoldingHeart className="w-full h-full" />,
    description:
      "É uma maneira de dar estilo ao código criado por linguagens como HTML. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.",
  },
  {
    title: "Javascript",
    icon: <VscCode className="w-full h-full" />,
    description:
      "É uma linguagem de programação que dá a liberdade para criar e implementar itens complexos em páginas da web. Ou seja, nada de páginas e informações estáticas. Quando falamos sobre Java estamos pensando em mapas interativos, gráficos animados e por aí vai.",
  },
];
