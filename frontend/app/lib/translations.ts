export type Lang = 'en' | 'pt'

export const translations = {
  en: {
    nav: { about: 'About', blog: 'Blog', resume: 'Resume' },
    hero: {
      role: 'Software Engineer',
      bio: 'Writing about backend engineering, system design, and software architecture. From Ruby & Rails to distributed systems, Kubernetes, and API design.',
    },
    tags: { title: 'Topics' },
    newsletter: {
      label: 'Newsletter',
      title: 'Stay in the loop',
      description:
        'Articles on backend engineering, system design, Ruby, Kubernetes, and more — straight to your inbox.',
      placeholder: 'your@email.com',
      subscribe: 'Subscribe',
    },
    about: {
      label: 'About',
      bio1: 'Software Engineer focused on backend systems and distributed architecture. I write about the things I learn — from everyday engineering challenges to deeper dives into system design, performance, and scalability.',
      bio2: 'This blog covers topics like Ruby, Rails, TypeScript, Node.js, Kubernetes, API Design, Algorithms, Optimization and Distributed Systems — in Portuguese and English.',
      linksLabel: 'Links',
      topicsLabel: 'Topics on this blog',
    },
  },
  pt: {
    nav: { about: 'Sobre', blog: 'Blog', resume: 'Currículo' },
    hero: {
      role: 'Engenheiro de Software',
      bio: 'Escrevendo sobre engenharia backend, design de sistemas e arquitetura de software. De Ruby & Rails a sistemas distribuídos, Kubernetes e design de APIs.',
    },
    tags: { title: 'Tópicos' },
    newsletter: {
      label: 'Newsletter',
      title: 'Fique por dentro',
      description:
        'Artigos sobre engenharia backend, design de sistemas, Ruby, Kubernetes e mais — direto na sua caixa de entrada.',
      placeholder: 'seu@email.com',
      subscribe: 'Assinar',
    },
    about: {
      label: 'Sobre',
      bio1: 'Engenheiro de Software focado em sistemas backend e arquitetura distribuída. Escrevo sobre o que aprendo — de desafios cotidianos de engenharia a mergulhos mais profundos em design de sistemas, performance e escalabilidade.',
      bio2: 'Este blog cobre tópicos como Ruby, Rails, TypeScript, Node.js, Kubernetes, API Design, Algoritmos, Otimização e Sistemas Distribuídos — em português e inglês.',
      linksLabel: 'Links',
      topicsLabel: 'Tópicos neste blog',
    },
  },
}
