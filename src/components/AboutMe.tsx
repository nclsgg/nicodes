export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
      <section className="flex flex-col gap-5 w-2/3 md:w-full">
        <div className="about-me__development">
          <h2 className="sectionTitle font-bold text-ncls-purple">Desenvolvimento</h2>
          <p className="">Durante minha jornada na carreira de Desenvolvimento, experienciei diversos tipos de desafios e projetos. Desde web scrapping até gerenciamento de Logs, trabalhei com as mais diversas linguagens e frameworks, como React, Golang, Python, NodeJS, NextJS, NextJS e outros. Para o gerenciamento de Dados tenho conhecimento em bancos relacionais e não relacionais como MySQL, PostgreSQL, MongoDB e Redis para dados em cache.</p>
        </div>
        <div className="about-me__Design">
          <h2 className="sectionTitle font-bold text-ncls-purple">Design</h2>
          <p className="">Devido à minha experiência prévia como designer, reproduzir interfaces pixel perfect é uma das minhas maiores qualidades como desenvolvedor front end. Enquanto desenvolvedor, entendo que meu cliente pode não ser da área da tecnologia, então tento transparecer profissionalidade através da imagem.</p>
        </div>
        <div className="about-me__communication">
          <h2 className="sectionTitle font-bold text-ncls-purple">Comunicação</h2>
          <p className="">Um dos meus maiores aprendizados da carreira foi a comunicação. Tanto para falar com outros desenvolvedores quanto para apresentar o que o time fez até negociar estimativa de entrega de projetos. A comunicação é a chave para um bom ambiente de trabalho.</p>
        </div>
      </section>
    </div>
  )
}