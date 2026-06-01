# MiauDote 🐾

Projeto desenvolvido com foco em Engenharia de Interface, utilizando exclusivamente HTML5, CSS3 e JavaScript (Vanilla) para conectar animais disponíveis para adoção a novos lares. O projeto prioriza a experiência do usuário (UX), acessibilidade e a organização técnica do código.

## 🚀 Tecnologias e Metodologia
Este projeto foi construído seguindo rigorosamente os requisitos técnicos exigidos:
- **HTML5:** Estrutura semântica utilizando tags como `<header>`, `<main>`, `<section>` e `<article>` para melhor SEO e acessibilidade.
- **CSS3:** Estilização modular com variáveis, uso eficiente de Flexbox/Grid e ausência de estilos *inline*.
- **JavaScript (Vanilla):** Lógica funcional para manipulação do DOM e filtragem dinâmica.

## ✨ Funcionalidades
- **Catálogo Dinâmico:** Filtros de espécie e porte com atualização em tempo real.
- **Modo Escuro (Dark Mode):** Alternância de temas salva localmente no navegador.
- **Design Responsivo:** Adaptado para diferentes dispositivos, garantindo eficiência de uso.
- **Integração Social:** Botões de contato direto via WhatsApp e Instagram.
- **Performance Otimizada:** Uso de atributos como `loading="lazy"` e `decoding="async"` para carregamento rápido.

## 📂 Estrutura do Projeto (Manutenibilidade)
O projeto foi organizado de forma lógica, separando estilos e lógica para facilitar a manutenção, conforme os critérios de avaliação:

```text
/
├── css/
│   ├── base/         # Variáveis, resets e base global
│   ├── layout/       # Configurações de container e grid
│   └── components/   # Botões, cards, navbar, filtros
├── js/
│   ├── script.js     # Lógica principal (temas e filtros)
├── index.html        # Página inicial (Hero, Sobre, Contato)
└── pets.html         # Página do catálogo completo