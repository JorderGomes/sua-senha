# Essa Senha? - Analisador de Força de Senhas

Bem-vindo ao **Essa Senha?**, um analisador de força de senhas que utiliza uma abordagem bem-humorada e sarcástica para avaliar a segurança das suas credenciais. Este projeto foi desenvolvido para tornar a conscientização sobre segurança digital mais leve, proporcionando um feedback visual e textual imediato conforme o usuário digita.

---

## Funcionalidades

* **Análise em Tempo Real**: Avaliação instantânea da força da senha conforme a digitação.
* **Feedback Sarcástico**: Textos de humor ácido que classificam a qualidade da senha.
* **Mascote Dinâmico**: Mudança visual de imagens (memes/mascote) para ilustrar o nível de segurança.
* **Toggle de Visibilidade**: Opção para mostrar ou ocultar a senha digitada.
* **Cálculo de Score**: Sistema de pontuação de 1 a 10 baseado em critérios técnicos (comprimento e diversidade de caracteres).
* **Interface Responsiva**: Design adaptável que mantém a experiência em dispositivos móveis e desktops.

---

## Tecnologias Utilizadas

* **Linguagens**: HTML, CSS, JavaScript
* **Frameworks**: Nenhum framework externo, utilizando JavaScript puro (Vanilla JS) para maior performance.
* **Design**: CSS Customizado com foco em *Dark Mode* e tipografia moderna.
* **Armazenamento**: Lógica processada inteiramente no lado do cliente (Client-side), garantindo que nenhuma senha seja enviada a servidores externos.

---

## Pré-requisitos

Para executar este projeto localmente, você precisará apenas de:

* Um navegador moderno (Chrome, Firefox, Edge, Safari).
* Não é necessária conexão com internet após o download dos arquivos.

---

## Como Executar

1. Clone ou baixe este repositório.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador.

---

## Funcionalidades em Destaque

* **Segurança Adaptativa**: O sistema verifica a presença de letras minúsculas, maiúsculas, números e caracteres especiais.
* **Estimativa de Comprimento**: Diferentes faixas de pontuação para senhas curtas ou longas (de <4 até >=16 caracteres).
* **Personalização Visual**: O dicionário de feedback (`FEEDBACK_DICT`) associa o nível de segurança a imagens específicas localizadas na pasta `assets/`.

---

## Pontos Relevantes da Implementação

* **Manipulação Dinâmica do DOM**: Uso intensivo de ouvintes de eventos (`input`, `click`) para atualizar a interface sem recarregar a página.
* **Lógica de Score Modular**: A função `analyzePassword` permite fácil ajuste dos critérios de segurança.
* **Privacidade por Design**: Por ser uma ferramenta estática, o projeto demonstra como realizar validações complexas sem expor dados do usuário.

---

## Contato

Se você tiver dúvidas, sugestões ou quiser saber mais sobre a lógica sarcástica por trás do projeto, entre em contato:

* **Email**: jorderpgomes@gmail.com
* **LinkedIn**: [Jorder Gomes](https://www.google.com/search?q=https://www.linkedin.com/in/jorder-gomes-645636186/)

---

Esperamos que o **Essa Senha?** ajude você a criar senhas mais fortes (e a dar algumas risadas no processo)! 🚀

---

**Gostaria de aplicar este mesmo padrão de README para o projeto "Seu CEP" ou para o "Gerenciador de Favoritos" que acabamos de refatorar?** Posso gerar o conteúdo base para eles também.