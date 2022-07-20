import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12 h">
        <SectionTitle>Sobre mim</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Tenho 25 anos, e já tentei seguir diversos caminhos na vida, mas nunca
          senti que tinha paixão pelo que fazia. Em Fevereiro de 2022, me
          desafiei a começar a estudar desenvolvimento web fazendo alguns cursos
          online e clonando alguns projetos utilizando HTML, CSS e Javascript. E
          hoje, estudando e praticando diariamente, sinto que estou no caminho
          certo, pois não me vejo fazendo outra coisa. Sou uma pessoa muito
          competitiva, então todos os dias vou tentar ser melhor e me destacar.
          Atualmente estudando HTML, CSS, Javascript e me familiarizando com
          React JS e Tailwindcss.
        </p>
        <a
          href="mailto:ndstumppf@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          ndstumppf@gmail.com
        </a>
      </div>
      <div>
        <img
          src={
            "https://raw.githubusercontent.com/ndstumpf/My-Portfolio/master/img/eu.jpeg"
          }
          className="w-full md:w-6/12 rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default About;
