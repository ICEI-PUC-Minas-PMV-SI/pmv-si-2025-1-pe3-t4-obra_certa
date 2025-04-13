# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Este documento tem como objetivo descrever e especificar os requisitos funcionais e não funcionais do sistema Obra Certa, atendendo às necessidades da empresa de aluguel de equipamentos e máquinas, bem como de seus clientes. Ele servirá como base para o desenvolvimento e validação do sistema, garantindo que as funcionalidades essenciais para a operação sejam contempladas.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O sistema será denominado Obra Certa – Sistema de Aluguel e Gerenciamento de Equipamentos. Seus principais módulos incluem:

    Gerenciamento de Equipamentos

    Gerenciamento de Clientes

    Controle de Manutenções

    Análise de locações

Esses módulos fornecerão suporte completo para a operação de aluguel de maquinário, desde o cadastro e acompanhamento dos equipamentos até o relacionamento com os clientes e a manutenção dos ativos.

### 3.2.2 Missão do produto
O Obra Certa tem como missão otimizar o processo de aluguel de equipamentos, promovendo maior eficiência na gestão dos recursos, maior controle operacional e melhor experiência para os usuários da empresa.

### 3.2.3 Limites do produto
O sistema Obra Certa é voltado exclusivamente para a gestão de aluguéis de equipamentos e máquinas, tendo enfoque maior no auxílio à empresa. Ele não contempla funcionalidades relacionadas à venda de equipamentos, limitando-se à operação de locação e controle de manutenção.

### 3.2.4 Benefícios do produto

| #   | Benefício                                                           | Valor para o Cliente |
| --- | ------------------------------------------------------------------- | -------------------- |
| 1   | Facilidade no cadastro de clientes e equipamentos                   | Essencial            |
| 2   | Agilidade na recuperação de informações e históricos                | Essencial            |
| 3   | Maior controle sobre a disponibilidade dos equipamentos             | Essencial            |
| 4   | Redução de erros manuais nas operações de aluguel                   | Essencial            |
| 5   | Visão clara de dados operacionais por meio de relatórios e gráficos | Recomendável         |
| 6   | Comunicação facilitada com os clientes via formulário               | Recomendável         |
| 7   | Registro e acompanhamento de manutenções                            | Essencial            |
| 8   | Planejamento eficiente com visualização de calendário               | Recomendável         |

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade)                 | Descrição                                                                                                                |
| ------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| RF1    | Gerenciar Clientes                                   | Processamento de Inclusão, Alteração, Exclusão e Consulta de clientes                                                    |
| RF2    | Gerenciar Equipamentos                               | Processamento de Inclusão, Alteração, Exclusão de equipamentos                                                           |
| RF3    | Consultar Equipamentos                               | Processamento de Consulta de equipamentos                                                                                |
| RF4    | Gerenciar Aluguel                                    | Processamento de Inclusão, Alteração, Exclusão e Consulta de aluguéis                                                    |
| RF5    | Gerenciar Manutenções                                | Processamento de Inclusão, Alteração, Exclusão e Consulta de manutenções dos equipamentos                                |
| RF6    | Filtrar equipamentos                                 | Implementar filtros de equipamentos por tipo/categoria                                                                   |
| RF7    | Visualizar status de disponibilidade                 | Mostrar o status de disponibilidade dos equipamentos                                                                     |
| RF8    | Visualizar calendário                                | Exibir calendário com datas disponíveis para cada equipamento                                                            |
| RF9    | Cálcular valor de aluguel                            | Calcular automaticamente o valor total do aluguel com base no tempo e valor de cada equipamento                          |
| RF10   | Gerenciar Reservas                                   | Processamento de Inclusão, Alteração, Exclusão de reservas de equipamentos                                               |
| RF11   | Filtrar aluguéis por status                          | Implementar filtros de aluguéis por status para o administrador                                                          |
| RF12   | Exibir gráfico de quantidade de aluguéis por dia     | Exibir gráficos de quantidade de aluguéis realizados por dia, na página inicial do painel admin                          |
| RF13   | Exibir gráfico de total de aluguéis dos equipamentos | Exibir gráficos com o número total de vezes que cada equipamento foi alugado, na página inicial do painel admin          |
| RF14   | Preencher formulário de contato                      | Disponibilizar formulário de contato para solicitações de clientes, na landing page                                      |
| RF15   | Consultar histórico de aluguéis por cliente          | Visualizar histórico completo de aluguéis realizados por cliente específico                                              |
| RF16   | Realizar login                                       | Permitir que o admin do sistema (funcionário da empresa) consiga logar no sistema admin, com credenciais pré-cadastradas |
| RF17   | Realizar logout                                      | Permitir que o admin do sistema (funcionário da empresa) consiga deslogar do sistema admin                               |
| RF18   | Emitir relatórios                                    | Permitir emissão de relatórios de quantidade de aluguéis por dia e de total de aluguéis dos equipamentos                 |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição)                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------- |
| RNF1   | A landing page deve se adaptar corretamente a todos os tamanhos de tela, desde dispositivos móveis até monitores desktop. |
| RNF2   | O sistema deve estar disponível pelo menos 99,5% do tempo.                                                                |
| RNF3   | O código-fonte deve seguir padrões de boas práticas para facilitar futuras manutenções.                                   |
| RNF4   | O sistema deve ser acessível via navegadores modernos, sem perdas de funcionalidades.                                     |
| RNF5   | O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados.                                                |
| RNF6   | O design do sistema deve seguir uma identidade visual intuitiva e padronizada, garantindo uma boa usabilidade.            |
| RNF7   | O sistema deve exigir autenticação para que o administrador acesse funcionalidades restritas.                             |

### 3.3.3 Usuários

| Ator          | Descrição                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Administrador | Usuário responsável pelo gerenciamento do sistema. Possui acesso para gerenciar clientes, equipamentos e aluguéis, além de visualizar relatórios e estatísticas.     |
| Cliente       | Usuário que interage apenas com a landing page para conhecer os serviços da empresa, visualizar os equipamentos disponíveis e entrar em contato com o administrador. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como apresentado no diagrama de casos de uso da Figura 1, o Administrador poderá gerenciar não apenas os clientes e os equipamentos, mas também os aluguéis. Já o Cliente poderá visualizar os equipamentos disponíveis e solicitar que entrem em contato com ele.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![Diagrama de Caso de Uso](./img/dcu.png)

### 3.4.2 Descrições de Casos de Uso

### Gerenciar Cliente (CSU01)
Sumário: O Administrador realiza a gestão (inclusão, remoção, alteração e consulta) dos dados dos clientes.

Ator Primário: Administrador.

Ator Secundário: — (não se aplica neste caso).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:
1) O Administrador acessa a funcionalidade de gerenciamento de clientes. <br>
2) O Sistema apresenta as operações disponíveis: inclusão de um novo cliente, alteração de dados de um cliente, exclusão de um cliente e consulta de informações. <br>
3) O Administrador seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso. <br>
4) Se desejar continuar o gerenciamento de clientes, o caso de uso retorna ao passo 2; caso contrário, o caso de uso é encerrado. <br>

Fluxo Alternativo (1): Inclusão

a) O Administrador requisita a inclusão de um novo cliente. <br>
b) O Sistema solicita o CPF ou outro identificador do cliente. <br>
c) O Administrador fornece o dado solicitado. <br>
d) O Sistema verifica se o cliente já está cadastrado. Se estiver, informa o fato e retorna ao início; caso contrário, apresenta um formulário para preenchimento com os dados do cliente (Nome, CPF, Email, Telefone, Endereço, etc.). <br>
e) O Administrador preenche os dados e confirma a inclusão. <br>
f) O Sistema valida os dados informados. Se forem válidos, o novo cliente é adicionado ao banco de dados e a lista de clientes é atualizada; se não forem válidos, o sistema exibe uma mensagem de erro e solicita a correção. <br>

Fluxo Alternativo (2): Remoção

a) O Administrador seleciona um cliente da lista e solicita sua exclusão. <br>
b) O Sistema verifica se o cliente pode ser removido (ex.: não possui aluguéis ativos). <br>
c) Se for possível, o Sistema realiza a remoção e atualiza a lista; caso contrário, exibe uma mensagem informando o impedimento. <br>

Fluxo Alternativo (3): Alteração

a) O Administrador seleciona um cliente e edita um ou mais campos de seu cadastro. <br>
b) O Sistema verifica a validade das alterações. Se forem válidas, atualiza os dados; caso contrário, informa o erro. <br>

Fluxo Alternativo (4): Consulta

a) O Administrador realiza uma busca pelo nome, CPF ou outro critério. <br>
b) O Sistema exibe uma lista de clientes correspondentes. <br>
c) O Administrador seleciona um cliente. <br>
d) O Sistema exibe os dados detalhados do cliente. <br>

Pós-condições:
Um cliente foi inserido ou removido, seus dados foram modificados ou exibidos ao Administrador.

---

### Consultar Equipamentos (CSU02)

Sumário: O Cliente e o Administrador consultam a lista de equipamentos cadastrados no sistema, podendo visualizar informações como nome, categoria, especificações e disponibilidade.

Atores Primários: Cliente, Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Cliente ou o Administrador deve estar autenticado no sistema.

Fluxo Principal:
1) O Cliente ou o Administrador acessa a funcionalidade de consulta de equipamentos. <br>
2) O Sistema apresenta as opções de filtro e busca, permitindo refinar a consulta por nome, categoria ou disponibilidade. <br>
3) O ator preenche os filtros desejados e confirma a busca. <br>
4) O Sistema exibe a lista de equipamentos que atendem aos critérios informados. <br>
5) O ator seleciona um equipamento para visualizar seus detalhes. <br>
6) O Sistema exibe as informações detalhadas do equipamento. <br>
7) O ator pode optar por realizar uma nova consulta ou encerrar o processo. <br>

Fluxo Alternativo (1): Consulta sem Filtros

a) O Cliente ou o Administrador opta por consultar todos os equipamentos sem aplicar filtros. <br>
b) O Sistema exibe a lista completa de equipamentos cadastrados. <br>
c) O fluxo segue a partir do passo 5 do fluxo principal. <br>

Pós-condições:
A lista de equipamentos foi apresentada com sucesso, e os dados de um ou mais equipamentos foram visualizados.

---

### Gerenciar Equipamentos (CSU03)

Sumário: O Administrador realiza a gestão (inclusão, remoção, alteração e consulta) dos dados dos equipamentos disponíveis no sistema.

Ator Primário: Administrador.

Ator Secundário: — (não se aplica).

Pré-condições:
O Administrador deve estar autenticado no sistema.

Fluxo Principal:
1. O Administrador acessa a funcionalidade de gerenciamento de equipamentos.  <br>
2. O Sistema apresenta as operações disponíveis: inclusão de novo equipamento, alteração de dados, exclusão e consulta de informações. <br>
3. O Administrador seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso. <br>
4. Se desejar continuar o gerenciamento de equipamentos, o caso de uso retorna ao passo 2; caso contrário, o caso de uso é encerrado. <br>


Fluxo Alternativo (1): Inclusão

a) O Administrador requisita a inclusão de um novo equipamento. <br>
b) O Sistema solicita um identificador (ex.: código interno) do equipamento. <br>
c) O Administrador fornece o dado solicitado. <br>
d) O Sistema verifica se o equipamento já está cadastrado. Se estiver, informa o fato e retorna ao início; caso contrário, apresenta um formulário para preenchimento com os dados do equipamento (Nome, Categoria, Descrição, Quantidade, Status de Disponibilidade, etc.). <br>
e) O Administrador preenche os dados e confirma a inclusão. <br>
f) O Sistema valida os dados informados. Se forem válidos, o equipamento é adicionado ao banco de dados e a lista é atualizada; se não forem válidos, o sistema exibe uma mensagem de erro e solicita a correção. <br>

Fluxo Alternativo (2): Remoção

a) O Administrador seleciona um equipamento da lista e solicita sua exclusão. <br>
b) O Sistema verifica se o equipamento pode ser removido (ex.: não está associado a aluguéis ativos). <br>
c) Se possível, o Sistema realiza a remoção e atualiza a lista; caso contrário, exibe uma mensagem informando o impedimento. <br>

Fluxo Alternativo (3): Alteração

a) O Administrador seleciona um equipamento e edita um ou mais campos de seu cadastro. <br>
b) O Sistema verifica a validade das alterações. Se forem válidas, atualiza os dados; caso contrário, informa o erro. <br>

Fluxo Alternativo (4): Consulta

a) O Administrador realiza uma busca por nome, código ou categoria. <br>
b) O Sistema exibe uma lista de equipamentos correspondentes. <br>
c) O Administrador seleciona um equipamento. <br>
d) O Sistema exibe os dados detalhados do equipamento. <br>

Pós-condições:
Um equipamento foi inserido ou removido, seus dados foram modificados ou exibidos ao Administrador.

---

### Gerenciar Aluguel (CSU04)

Sumário: O Administrador realiza a gestão dos aluguéis de equipamentos, incluindo a criação, atualização, finalização e consulta de aluguéis vinculados aos clientes. Durante a inclusão de um novo aluguel, o sistema executa o caso de uso Calcular Valor do Aluguel.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a funcionalidade de gerenciamento de aluguéis. <br>
2. O Sistema apresenta as opções disponíveis: iniciar novo aluguel, editar um aluguel existente, finalizar aluguel e consultar histórico. <br>
3. O Administrador seleciona a operação desejada. <br>
4. O Sistema solicita as informações necessárias para realizar a operação. <br>
5. O Administrador fornece os dados solicitados (como cliente, equipamento, datas de início e término). <br>
6. O Sistema executa o caso de uso "Calcular Valor do Aluguel". <br>
7. O Sistema exibe o valor total do aluguel com base no período e nos equipamentos selecionados. <br>
8. O Administrador confirma os dados e a operação. <br>
9. O Sistema registra a ação e atualiza os dados relacionados ao aluguel e ao equipamento. <br>
10. O Administrador pode optar por realizar outra operação ou encerrar o processo. <br>

Fluxo Alternativo (1): Finalização de Aluguel

a) O Administrador seleciona um aluguel ativo e solicita a finalização. <br>
b) O Sistema solicita a confirmação da devolução do equipamento. <br>
c) Após confirmação, o Sistema atualiza o status do aluguel para "Finalizado" e o status do equipamento para "Disponível". <br>

Fluxo Alternativo (2): Consulta de Histórico

a) O Administrador realiza busca por cliente, equipamento ou período. <br>
b) O Sistema apresenta uma lista com os aluguéis correspondentes aos critérios. <br>
c) O Administrador pode visualizar os detalhes de cada aluguel. <br>

Pós-condições:
O aluguel foi criado, alterado, finalizado ou consultado com sucesso, e o status dos equipamentos foi atualizado conforme necessário. O valor do aluguel foi calculado automaticamente pelo sistema.

---

### Gerenciar Manutenções (CSU05)
Sumário: O Administrador realiza a gestão (inclusão, alteração, finalização e consulta) das manutenções de equipamentos cadastrados no sistema.

Ator Primário: Administrador.

Ator Secundário: Técnico de Manutenção (opcional).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:
1) O Administrador acessa a funcionalidade de gerenciamento de manutenções. <br>
2) O Sistema apresenta as operações disponíveis: abertura de nova manutenção, alteração de manutenção em andamento, finalização de manutenção e consulta de registros. <br>
3) O Administrador seleciona a operação desejada: Inclusão, Alteração, Finalização ou Consulta, ou opta por finalizar o caso de uso. <br>
4) Se desejar continuar o gerenciamento de manutenções, o caso de uso retorna ao passo 2; caso contrário, o caso de uso é encerrado. <br>

Fluxo Alternativo (1): Inclusão
a) O Administrador requisita a inclusão de uma nova manutenção. <br>
b) O Sistema solicita o código ou identificação do equipamento. <br>
c) O Administrador fornece o dado solicitado. <br>
d) O Sistema verifica se o equipamento está disponível para manutenção (ex.: não está alugado). <br>
e) Se estiver disponível, o Sistema apresenta um formulário com os campos necessários (descrição do problema, data prevista, tipo de manutenção, técnico responsável, etc.). <br>
f) O Administrador preenche os dados e confirma a inclusão. <br>
g) O Sistema valida os dados informados. Se forem válidos, a manutenção é registrada e o status do equipamento é alterado para "Em manutenção"; caso contrário, o sistema exibe uma mensagem de erro e solicita a correção. <br>

Fluxo Alternativo (2): Alteração
a) O Administrador seleciona uma manutenção em andamento e opta por editar os dados. <br>
b) O Sistema permite a alteração dos campos editáveis (ex.: data prevista, observações, técnico responsável). <br>
c) O Administrador realiza as alterações e confirma. <br>
d) O Sistema valida e salva os novos dados; se houver erro, informa o Administrador. <br>

Fluxo Alternativo (3): Finalização
a) O Administrador seleciona uma manutenção ativa e opta por finalizá-la. <br>
b) O Sistema solicita a confirmação do término e, se necessário, a descrição final do serviço realizado. <br>
c) O Administrador confirma a finalização. <br>
d) O Sistema atualiza o status da manutenção para “Concluída” e altera o status do equipamento para “Disponível”. <br>

Fluxo Alternativo (4): Consulta
a) O Administrador realiza uma busca por data, tipo, status ou equipamento. <br>
b) O Sistema exibe uma lista com os registros de manutenção correspondentes. <br>
c) O Administrador seleciona um registro. <br>
d) O Sistema exibe os dados detalhados da manutenção selecionada. <br>

Pós-condições: Uma manutenção foi registrada, alterada, finalizada ou consultada, e o status do equipamento foi atualizado conforme a operação realizada.

---

### Filtrar Equipamentos (CSU06)
Sumário: O Administrador aplica filtros na listagem de equipamentos para localizar itens com base em critérios específicos como nome, tipo, status ou disponibilidade.

Ator Primário: Administrador.

Ator Secundário: — (não se aplica neste caso).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:
1) O Administrador acessa a funcionalidade de consulta ou listagem de equipamentos. <br>
2) O Sistema exibe os campos de filtragem disponíveis (ex.: nome, tipo, status, disponibilidade, código do equipamento). <br>
3) O Administrador preenche um ou mais critérios de busca. <br>
4) O Sistema realiza a busca com base nos filtros aplicados. <br>
5) O Sistema exibe os equipamentos que correspondem aos critérios informados. <br>
6) O Administrador pode selecionar um equipamento da lista para visualizar mais detalhes. <br>

Fluxo Alternativo (1): Nenhum resultado encontrado
a) O Administrador aplica filtros que não retornam resultados. <br>
b) O Sistema informa que nenhum equipamento foi encontrado com os critérios selecionados. <br>
c) O Administrador pode ajustar os filtros e realizar uma nova busca. <br>

Pós-condições: O Administrador visualizou uma lista de equipamentos conforme os critérios de filtragem aplicados e, se desejado, acessou os detalhes de um ou mais itens.

---

### Visualizar Status de Disponibilidade (CSU07)

Sumário: O Cliente e o Administrador visualizam o status de disponibilidade dos equipamentos cadastrados no sistema, podendo verificar se estão livres para aluguel ou em uso.

Atores Primários: Cliente, Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Cliente ou o Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Cliente ou o Administrador acessa a funcionalidade de visualização de disponibilidade. <br>
2. O Sistema apresenta uma interface de busca e filtro com opções como nome do equipamento, categoria ou status atual. <br>
3. O ator aplica os filtros desejados e confirma a pesquisa. <br>
4. O Sistema exibe uma lista de equipamentos com seus respectivos status de disponibilidade (Disponível, Reservado, Em uso, Em manutenção etc.). <br>
5. O ator pode selecionar um equipamento da lista para obter mais detalhes. <br>
6. O Sistema exibe os dados detalhados, incluindo o status atualizado e informações relevantes (último aluguel, próxima devolução, etc.). <br>
7. O ator pode optar por realizar outra consulta ou encerrar o processo. <br>


Fluxo Alternativo (1): Sem Filtros Aplicados

a) O Cliente ou o Administrador opta por visualizar todos os equipamentos com seus respectivos status. <br>
b) O Sistema apresenta a lista completa, indicando a disponibilidade de cada item. <br>
c) O fluxo segue a partir do passo 5 do fluxo principal. <br>

Pós-condições:
A disponibilidade dos equipamentos foi consultada com sucesso, e os dados foram exibidos ao ator.

---



### Calcular Valor do Aluguel (CSU08)

Sumário: O sistema calcula automaticamente o valor total do aluguel com base no período de locação e nos equipamentos selecionados, incluindo regras de preço e eventuais taxas.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado e o processo de criação de aluguel deve estar em andamento.

Fluxo Principal:

1. O Sistema recebe a data de início, data de término e os equipamentos selecionados. <br>
2. O Sistema verifica o preço por dia de cada equipamento. <br>
3. O Sistema calcula o total com base no número de dias e no valor de cada equipamento. <br>
4. O Sistema pode incluir taxas adicionais se aplicáveis (ex: manutenção, seguro). <br>
5. O valor total é apresentado ao Administrador para confirmação. <br>

Pós-condições:
O valor do aluguel é exibido ao Administrador para prosseguimento no processo de locação.

---

### Gerenciar Reservas (CSU09)
Sumário: O Administrador realiza a gestão (inclusão, alteração, cancelamento e consulta) das reservas de equipamentos feitas pelos clientes.

Ator Primário: Administrador.

Ator Secundário: — (não se aplica neste caso).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:
1) O Administrador acessa a funcionalidade de gerenciamento de reservas. <br>
2) O Sistema apresenta as operações disponíveis: inclusão de nova reserva, alteração de reserva existente, cancelamento e consulta de reservas. <br>
3) O Administrador seleciona a operação desejada: Inclusão, Alteração, Cancelamento ou Consulta, ou opta por finalizar o caso de uso. <br>
4) Se desejar continuar o gerenciamento de reservas, o caso de uso retorna ao passo 2; caso contrário, o caso de uso é encerrado. <br>

Fluxo Alternativo (1): Inclusão
a) O Administrador requisita a inclusão de uma nova reserva. <br>
b) O Sistema solicita os dados do cliente e os equipamentos desejados. <br>
c) O Administrador fornece as informações e define o período da reserva. <br>
d) O Sistema verifica a disponibilidade dos equipamentos para o período informado. <br>
e) Se estiverem disponíveis, o Sistema apresenta um resumo da reserva para confirmação. <br>
f) O Administrador confirma a inclusão. <br>
g) O Sistema valida os dados e registra a reserva; os equipamentos são marcados como "Reservados" para o período correspondente. <br>

Fluxo Alternativo (2): Alteração
a) O Administrador seleciona uma reserva ativa e opta por editar seus dados. <br>
b) O Sistema permite alterações como datas, equipamentos ou dados do cliente. <br>
c) O Administrador confirma as alterações. <br>
d) O Sistema valida e salva as informações atualizadas. <br>

Fluxo Alternativo (3): Cancelamento
a) O Administrador seleciona uma reserva ativa e solicita o cancelamento. <br>
b) O Sistema solicita a confirmação da ação. <br>
c) O Administrador confirma o cancelamento. <br>
d) O Sistema cancela a reserva e libera os equipamentos anteriormente reservados. <br>

Fluxo Alternativo (4): Consulta
a) O Administrador realiza uma busca por nome do cliente, data, código da reserva ou status. <br>
b) O Sistema exibe uma lista de reservas correspondentes aos critérios. <br>
c) O Administrador seleciona uma reserva da lista. <br>
d) O Sistema exibe os dados detalhados da reserva selecionada. <br>

Pós-condições: Uma reserva foi criada, alterada, cancelada ou consultada, com os equipamentos devidamente atualizados quanto ao seu status de disponibilidade.

---

### Visualizar Calendário (CSU10)

Sumário: O Administrador visualiza o calendário com os períodos de locação de cada equipamento, facilitando o controle de disponibilidade e o planejamento de novos aluguéis.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a funcionalidade de visualização do calendário. <br>
2. O Sistema apresenta o calendário com a visão mensal, semanal ou diária, conforme preferência do Administrador. <br>
3. O Sistema exibe os períodos de locação dos equipamentos no calendário, com destaque visual para os dias reservados, disponíveis e em manutenção. <br>
4. O Administrador pode aplicar filtros por equipamento, categoria ou cliente. <br>
5. O Administrador seleciona um período ou evento específico no calendário. <br>
6. O Sistema exibe os detalhes da locação correspondente, como cliente, equipamento, data de início e fim. <br>
7. O Administrador pode optar por continuar navegando no calendário ou encerrar o processo. <br>

Fluxo Alternativo (1): Sem Reservas no Período

a) O Administrador acessa um período onde não há reservas registradas. <br>
b) O Sistema exibe o calendário normalmente, com os dias sem marcação de uso. <br>
c) O Administrador pode voltar a outro período ou aplicar filtros diferentes. <br>

Pós-condições:
O Administrador visualizou o calendário com as informações de uso e disponibilidade dos equipamentos.

---

### Preencher Formulário de Contato (CSU11)

Sumário: O Cliente preenche um formulário de contato para solicitar informações adicionais, tirar dúvidas ou pedir retorno da empresa responsável pela locação dos equipamentos.

Atores Primários: Cliente.

Atores Secundários: — (não se aplica).

Pré-condições: O Cliente deve estar autenticado no sistema.

Fluxo Principal:

1. O Cliente acessa a funcionalidade de formulário de contato. <br>
2. O Sistema apresenta um formulário com campos como nome, email, telefone, assunto e mensagem. <br>
3. O Cliente preenche os campos obrigatórios com suas informações e escreve a mensagem desejada. <br>
4. O Cliente envia o formulário. <br>
5. O Sistema valida os dados inseridos. <br>
6. Se os dados forem válidos, o Sistema registra a solicitação e exibe uma mensagem de confirmação. <br>
7. O Cliente pode optar por preencher um novo formulário ou encerrar o processo. <br>

Fluxo Alternativo (1): Dados Inválidos

a) O Sistema identifica campos obrigatórios não preenchidos ou dados inválidos. <br>
b) O Sistema exibe uma mensagem de erro solicitando a correção. <br>
c) O Cliente ajusta os dados e tenta reenviar o formulário. <br>

Pós-condições:
A solicitação de contato foi registrada com sucesso e estará disponível para análise pela equipe administrativa.

---

### Exibir Gráfico de Quantidade de Aluguéis por Dia (CSU12)

Sumário: O Administrador visualiza um gráfico com a quantidade de aluguéis realizados por dia, auxiliando na análise de desempenho e no planejamento da operação.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a funcionalidade de exibição de gráfico de aluguéis por dia. <br>
2. O Sistema apresenta opções de filtro como intervalo de datas, categoria de equipamentos ou cliente. <br>
3. O Administrador seleciona os filtros desejados e confirma. <br>
4. O Sistema processa os dados com base nos critérios informados. <br>
5. O Sistema exibe o gráfico de barras ou linhas representando a quantidade de aluguéis por dia no período selecionado. <br>
6. O Administrador analisa as informações e pode optar por exportar os dados, alterar os filtros ou encerrar o processo. <br>

Fluxo Alternativo (1): Sem Dados no Período

a) O Sistema identifica que não há aluguéis registrados no intervalo selecionado. <br>
b) O Sistema exibe uma mensagem informando a ausência de dados. <br>
c) O Administrador pode selecionar outro intervalo ou encerrar o processo. <br>

Pós-condições:
O gráfico foi exibido com sucesso, permitindo ao Administrador analisar o volume de aluguéis por dia.

---

### Filtrar Aluguéis por Status (CSU13)

Sumário: O Administrador filtra a lista de aluguéis com base no status atual (ativo, finalizado, reservado, cancelado), facilitando a gestão e análise das locações.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a funcionalidade de gerenciamento ou consulta de aluguéis. <br>
2. O Sistema apresenta uma interface com filtros disponíveis, incluindo o filtro por status. <br>
3. O Administrador seleciona um ou mais status desejados (ex.: Ativo, Finalizado, Reservado, Cancelado). <br>
4. O Sistema filtra a lista de aluguéis com base nos critérios selecionados. <br>
5. O Sistema exibe a lista resultante com os aluguéis que possuem o(s) status selecionado(s). <br>
6. O Administrador pode visualizar detalhes de um aluguel, aplicar novos filtros ou encerrar o processo. <br>

Fluxo Alternativo (1): Nenhum Aluguel com o Status Selecionado

a) O Sistema identifica que não existem aluguéis com o status informado. <br>
b) O Sistema exibe uma mensagem informando que não há resultados. <br>
c) O Administrador pode escolher outro filtro ou encerrar o processo. <br>

Pós-condições:
O Administrador obteve uma lista filtrada de aluguéis conforme o status selecionado.

---

### Exibir Gráfico de Total de Aluguéis por Equipamentos (CSU14)

Sumário: O Administrador visualiza um gráfico com o total de aluguéis realizados por cada equipamento, facilitando a análise de demanda e o controle de uso dos itens.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a funcionalidade de exibição de gráfico de aluguéis por equipamento. <br>
2. O Sistema apresenta filtros disponíveis, como intervalo de datas, categorias de equipamento ou cliente. <br>
3. O Administrador seleciona os filtros desejados e confirma. <br>
4. O Sistema processa os dados com base nos critérios fornecidos. <br>
5. O Sistema exibe um gráfico (de barras, pizza ou linhas) representando o total de aluguéis realizados por equipamento no período selecionado. <br>
6. O Administrador analisa as informações apresentadas e pode exportar o gráfico, modificar os filtros ou encerrar o processo. <br>

Fluxo Alternativo (1): Sem Dados no Período

a) O Sistema identifica que não há aluguéis registrados para os equipamentos no período informado. <br>
b) O Sistema exibe uma mensagem informando a ausência de dados. <br>
c) O Administrador pode alterar os filtros ou encerrar o processo. <br>

Pós-condições:
O gráfico com o total de aluguéis por equipamento foi exibido ao Administrador com sucesso.

---

### Consultar Histórico de Aluguéis por Cliente (CSU15)

Sumário: O Administrador consulta o histórico de aluguéis realizados por um cliente específico, permitindo o acompanhamento do relacionamento e uso dos equipamentos ao longo do tempo.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a funcionalidade de consulta de histórico de aluguéis. <br>
2. O Sistema apresenta um campo para busca por cliente (nome, CPF, ou outro identificador). <br>
3. O Administrador informa o cliente desejado e confirma a busca. <br>
4. O Sistema exibe a lista de aluguéis realizados pelo cliente, incluindo datas, equipamentos e status de cada aluguel. <br>
5. O Administrador pode selecionar um aluguel específico para visualizar detalhes completos. <br>
6. O Sistema exibe os dados detalhados da locação, como período, valor, status e observações. <br>
7. O Administrador pode consultar outro cliente, aplicar filtros adicionais ou encerrar o processo. <br>

Fluxo Alternativo (1): Cliente sem Histórico de Aluguéis

a) O Sistema identifica que o cliente não possui registros de aluguéis. <br>
b) O Sistema exibe uma mensagem informando que não há histórico para o cliente informado. <br>
c) O Administrador pode buscar outro cliente ou encerrar o processo. <br>

Pós-condições:
O histórico de aluguéis do cliente foi exibido ao Administrador com sucesso, ou foi informada a ausência de registros.

---

### Realizar Login (CSU16)

Sumário: O Administrador realiza a autenticação no sistema por meio de login e senha, obtendo acesso às funcionalidades disponíveis conforme seu perfil.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar previamente cadastrado no sistema.

Fluxo Principal:

1. O Administrador acessa a tela de login do sistema. <br>
2. O Sistema apresenta campos para inserção de login (usuário ou email) e senha. <br>
3. O Administrador insere suas credenciais e solicita o acesso. <br>
4. O Sistema valida os dados fornecidos. <br>
5. Se os dados estiverem corretos, o Sistema autentica o Administrador e redireciona para a tela inicial com acesso às funcionalidades autorizadas. <br>
6. O Administrador passa a interagir com o sistema como usuário autenticado. <br>

Fluxo Alternativo (1): Credenciais Inválidas

a) O Sistema identifica que o login ou a senha estão incorretos. <br>
b) O Sistema exibe uma mensagem de erro solicitando nova tentativa. <br>
c) O Administrador pode tentar novamente ou encerrar o processo. <br>

Pós-condições:
O Administrador foi autenticado com sucesso e teve acesso ao sistema, ou foi informado de erro nas credenciais.

---

### Realizar Logout (CSU17)

Sumário: O Administrador encerra sua sessão no sistema de forma segura, finalizando o acesso às funcionalidades restritas.

Atores Primários: Administrador.

Atores Secundários: — (não se aplica).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:

1. O Administrador acessa a opção de logout disponível na interface do sistema. <br>
2. O Sistema solicita a confirmação da ação de logout. <br>
3. O Administrador confirma a intenção de encerrar a sessão. <br>
4. O Sistema finaliza a sessão ativa e redireciona o Administrador para a tela de login ou página inicial pública. <br>

Fluxo Alternativo (1): Cancelamento de Logout

a) O Administrador decide cancelar a ação de logout. <br>
b) O Sistema mantém a sessão ativa e retorna para a interface anterior. <br>

Pós-condições:
A sessão foi encerrada com sucesso, e o Administrador não possui mais acesso às funcionalidades do sistema até novo login.

---


### Emitir Relatórios (CSU18)
Sumário: O Administrador emite relatórios personalizados com dados operacionais do sistema, como aluguéis, manutenções, reservas, disponibilidade de equipamentos e desempenho por período.

Ator Primário: Administrador.

Ator Secundário: — (não se aplica neste caso).

Pré-condições: O Administrador deve estar autenticado no sistema.

Fluxo Principal:
1) O Administrador acessa a funcionalidade de emissão de relatórios. <br>
2) O Sistema apresenta as categorias disponíveis para emissão: Aluguéis, Manutenções, Reservas, Equipamentos e Clientes. <br>
3) O Administrador seleciona a categoria desejada. <br>
4) O Sistema solicita os parâmetros de filtro (ex.: período, status, tipo de equipamento, cliente). <br>
5) O Administrador preenche os filtros e confirma a geração. <br>
6) O Sistema processa os dados com base nos filtros informados. <br>
7) O Sistema exibe o relatório gerado na tela, com opção de exportar em PDF ou Excel. <br>

Fluxo Alternativo (1): Falta de Dados
a) O Administrador preenche os filtros, mas o sistema não encontra registros para o período ou critérios informados. <br>
b) O Sistema exibe uma mensagem informando que não há dados para gerar o relatório. <br>
c) O Administrador pode ajustar os filtros e tentar novamente. <br>

Fluxo Alternativo (2): Exportação
a) Após visualizar o relatório, o Administrador opta por exportar os dados. <br>
b) O Sistema apresenta as opções de formato (PDF ou Excel). <br>
c) O Administrador escolhe o formato desejado. <br>
d) O Sistema gera o arquivo e disponibiliza para download. <br>

Pós-condições: Um relatório foi gerado com base nos filtros informados e, se necessário, exportado para visualização ou análise externa.

---

### 3.4.3 Diagrama de Classes

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.

![Diagrama de Classes](./img/obracerta-diagrama-uml.png)


### 3.4.4 Descrições das Classes

| #   | Nome                      | Descrição                                                   |
| --- | -----------------         | ----------------------------------------------------------- |
| 1   | Usuário                   | Classe genérica para representar os usuários do sistema. Serve como superclasse para Administrador e Cliente.               |
| 2   | Administrador             | Classe que herda características de Usuário. Ser responsável por gerar relatórios no sistema.                               |
| 3   | Cliente                   | Classe que herda características de Usuário. Poder alugar e reservar equipamentos                                           |
| 4   | Reserva                   |	Representar uma solicitação de reserva feita por um Cliente. Pode conter diversos itens de reserva.                         |
| 5   | ItemReserva               | Representar um equipamento específico incluído em uma Reserva.                                                              |
| 6   | Locação                   | Representar uma locação confirmada de equipamentos feita por um Cliente. Pode conter diversos itens de locação.             |
| 7   | ItemLocacao               | Representar um equipamento específico incluído em uma Locação                                                               |
| 8   | Equipamento               | Representar os equipamentos disponíveis para aluguel e reserva. Poder passar por manutenções.                               |
| 9   | AgendaDisponibilidade     | Controlar a disponibilidade dos equipamentos para reserva ou locação.                                                       |
| 10  | Manutenção                | Registrar manutenções realizadas em um equipamento.                                                                         |
