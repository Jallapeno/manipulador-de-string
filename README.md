## Rotas do sistema manipulador de strings

#### GET: Gerador de token
- <b>http://localhost:3200/authenticate</b>

        Gera um token de acesso que será necessário para passar no cabeçalho(x-access-token) das próximas requisições.

#### POST: Contador de palavras e de sentenças
- <b>http://localhost:3200/counter/:type</b> - types: <b>words</b> ou <b>sentences</b>

        headers: x-access-token(resultado da rota /authenticate)
        body: {
            "text": "Olá mundo! Esse é o meu primeiro contador de palavras disponível para o mundo."
        }

#### Inversor de texto
- <b>http://localhost:3200/reverse</b>

        headers: x-access-token
        body: {
            "text": "Olá mundo! Esse é o meu primeiro contador de palavras disponível para o mundo."
        }

#### Separador de texto em partes iguais
- <b>http://localhost:3200/apart</b>

        headers: x-access-token
        body: {
            "text": "Olá mundo! Esse é o meu primeiro contador de palavras disponível para o mundo.",
            "size": 20
        }

#### Ofuscador de texto
- <b>http://localhost:3200/outshine</b>

        headers: x-access-token
        body: {
            "text": "Olá mundo! Esse é o meu primeiro contador de palavras disponível para o mundo.",
            "wordlist": [
                "mundo",
                "meu"
            ]
        }