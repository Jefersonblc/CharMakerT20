export const classes = [
    {
        nome: "Arcanista",
        variante: {
            nome: "Necromante",
            skills: ["Conhecimento", "Cura", "Diplomacia", "Enganação", "Fortitude", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Nobreza", "Ofício", "Percepção"]
        },
        descricao: "Um conjurador de magias arcanas, por meio de estudo, um foco ou dom natural.",
        atributo: "Inteligência ou Carisma",
        pv: 8,
        pv_per_level: 2,
        pm: 6,
        treinedSkills: ["Misticismo", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Conhecimento", "Diplomacia", "Enganação", "Guerra", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Nobreza", "Ofício", "Percepção"],
        extraSkills: 2,
        proficiencies: [],
        abilities: [
            {
                name: "Caminho do Arcanista",
                description: "A magia é um poder incrível, capaz de alterar a realidade. Esse poder tem fontes distintas e cada uma opera conforme suas próprias regras. Escolha uma das opções a seguir. Uma vez feita, essa escolha não pode ser mudada.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Bruxo",
                description: "Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa empunhar o foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem RD 10 e PV iguais à metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM por descanso. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é Inteligência."
            },
            {
                name: "Feiticeiro",
                description: "Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes (veja a página 39). Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo, mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.), em vez de a cada nível. Seu atributo-chave para magias é Carisma."
            },
            {
                name: "Mago",
                description: "Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por exemplo, se conhece 7 magias, escolhe 3). Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um grimório tem as mesmas estatísticas de um foco (veja acima) e pode ser recuperado da mesma forma. Você começa com uma magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia adicional daquele círculo. Seu atributo-chave para magias é Inteligência."
            },
            {
                name: "Magias",
                description: "Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho (veja acima) e você soma o bônus do atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras de magia.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Familiares Arcanos",
                description: "Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes.\n• Borboleta. A CD dos testes de Vontade para resistir a suas magias aumenta em +1.\n• Cobra. A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.\n• Coruja. Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.\n• Corvo. Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.\n• Falcão. Você não pode ser surpreendido e nunca fica desprevenido.\n• Gato. Você recebe visão no escuro e +2 em Furtividade.\n• Lagarto. A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.\n• Morcego. Você adquire percepção às cegas em alcance curto.\n• Rato. Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.\n• Sapo. Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo)."
            },
            {
                name: "Arcano de Batalha",
                description: "Quando lança uma magia, você soma seu atributo-chave na rolagem de dano."
            },
            {
                name: "Agrilhoar os Caídos",
                description: "Quando uma de suas magias de necromancia reduz os PV de um inimigo vivo a 0 ou menos, você pode aprisionar uma parte de seu espírito, que então fica flutuando ao seu redor. Para cada espírito, você recebe +2 na Defesa e em testes de resistência. Quando lança uma magia de dano, você pode libertar um espírito para causar +2d6 pontos de dano de trevas. Você pode acumular um máximo de espíritos simultâneos igual ao seu atributo-chave e eles permanecem ao seu redor até serem libertados ou até o fim do dia. Pré-requisito: 3º nível de arcanista."
            },
            {
                name: "Alquimia Arcana",
                description: "A CD para resistir aos preparados alquímicos e poções que você usa aumenta em +1 para cada círculo de magia a que você tiver acesso. Pré-requisito: treinado em Ofício (alquimista)."
            },
            {
                name: "Apoteose Celestial",
                description: "Sua conexão com o divino se torna ainda mais profunda, às custas de uma fração de sua mortalidade. Você recebe +1 em Sabedoria e aprende uma magia divina de cada círculo a que tenha acesso. Entretanto, sua Constituição diminui em -1. Pré-requisitos: Herança Superior (linhagem celestial), 17° nível de arcanista."
            },
            {
                name: "Apoteose Dracônica",
                description: "A influência de sua magia dracônica se torna cada vez mais evidente, tornando-o mais e mais próximo dos dragões. As magias do seu elemento escolhido causam +1 ponto de dano por dado e, contra criaturas imunes a esse elemento, ainda causam metade do dano. Contudo, você não pode mais lançar magias do tipo oposto ao seu elemento escolhido (fogo para frio e ácido para eletricidade). Pré-requisitos: Herança Superior (linhagem dracônica), 17° nível de arcanista."
            },
            {
                name: "Apoteose Feérica",
                description: "Sua natureza feérica se acentua, mas isso o afasta do mundo dos mortais. Sempre que um ou mais inimigos falharem em um teste de Vontade contra uma de suas magias, você recebe 1 PM temporário cumulativo que dura até o fim da cena. Se a magia é de encantamento ou ilusão, em vez disso você recebe 2 PM temporários. Em ambos os casos, o ganho é limitado pelo total de PM gasto na magia. Contudo, você não pode mais lançar magias de convocação e necromancia. Pré-requisitos: Herança Superior (linhagem feérica), 17° nível de arcanista."
            },
            {
                name: "Apoteose Rubra",
                description: "Você acolheu a corrupção rubra em seu ser — uma escolha que pode ser percebida por todos ao redor. Escolha uma magia que cause dano de cada círculo a que tem acesso. O tipo de dano dessas magias muda para psíquico. Além disso, quando lança uma magia de dano psíquico, você soma seu total de poderes da Tormenta na rolagem de dano. Este poder conta como um poder da Tormenta (exceto para perda de Carisma). Pré-requisitos: Herança Superior (linhagem rubra), 17° nível de arcanista."
            },
            {
                name: "Arcanista de Linha de Frente",
                description: "Quando você lança uma magia, criaturas adjacentes sofrem -2 em seus testes de resistência contra ela e, se ela causar dano, causa um dado extra do mesmo tipo."
            },
            {
                name: "Asas de Sapo",
                description: "Você pode empunhar dois catalisadores diferentes em uma mão ao mesmo tempo e, quando lança uma magia, pode gastar ambos para aplicar seus efeitos. Pré-requisito: treinado em Ofício (alquimista)."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Caldeirão do Bruxo",
                description: "Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, pode criar poções de até 5º círculo. Pré-requisitos: Bruxo, treinado em Ofício (alquimista)."
            },
            {
                name: "Conhecimento Mágico",
                description: "Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser."
            },
            {
                name: "Contingência Arcana",
                description: "Quando lança Runa de Proteção com o aprimoramento que muda o alvo para “você”, você pode substituir o componente material da magia por uma penalidade em PM igual ao círculo da magia inscrita na runa. Pré-requisito: Runa de Proteção."
            },
            {
                name: "Contramágica Aprimorada",
                description: "Uma vez por rodada, você pode fazer uma contramágica como uma reação (veja a página 173). Pré-requisito: Dissipar Magia."
            },
            {
                name: "Contramágica Superior",
                description: "Quando anula uma magia com uma contramágica, você recebe uma quantidade de PM temporários igual ao círculo da magia anulada (limitada pelos PM que gastou para anular). Pré-requisitos: Contramágica Aprimorada, 9º nível de arcanista."
            },
            {
                name: "Envolto em Mistério",
                description: "Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo."
            },
            {
                name: "Escriba Arcano",
                description: "Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500. Pré-requisitos: Mago, treinado em Ofício (escriba)."
            },
            {
                name: "Especialista em Escola",
                description: "Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2. Pré-requisito: Bruxo ou Mago."
            },
            {
                name: "Especialista em Invocações",
                description: "Você soma seu atributo-chave na Defesa de suas criaturas conjuradas por habilidades mágicas (incluindo capangas) e a ação necessária para comandá-las diminui em um passo (de padrão para movimento e de movimento para livre). Contudo, cada comando só pode ser executado uma vez por rodada."
            },
            {
                name: "Familiar",
                description: "Você possui um animal de estimação mágico. Veja o quadro para detalhes."
            },
            {
                name: "Familiar Aprimorado",
                description: "Seu familiar pode falar e passa a fornecer um segundo benefício, escolhido entre os tipos comuns de familiares (Tormenta20, p. 38). Pré-requisitos: Familiar, 5º nível de arcanista."
            },
            {
                name: "Fluxo de Mana",
                description: "Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente. Pré-requisito: 10º nível de arcanista."
            },
            {
                name: "Foco Vital",
                description: "Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde PV igual ao valor excedente ou até ser destruído (se o foco for destruído, você sofre o dano excedente). Pré-requisito: Bruxo. e"
            },
            {
                name: "Fortalecimento Arcano",
                description: "A CD para resistir a suas magias aumenta em +1. Se você puder lançar magias de 4º círculo, em vez disso ela aumenta em +2. Pré-requisito: 5º nível de arcanista."
            },
            {
                name: "Herança Aprimorada",
                description: "Você recebe a herança aprimorada de sua linhagem sobrenatural. Pré-requisitos: Feiticeiro, 6º nível de arcanista."
            },
            {
                name: "Herança Superior",
                description: "Você recebe a herança superior de sua linhagem sobrenatural. Pré-requisitos: Herança Aprimorada, 11º nível de arcanista."
            },
            {
                name: "Ingrediente Especial",
                description: "Quando usa uma poção, você pode usar um catalisador e aplicar seus efeitos a ela. Pré-requisitos: Caldeirão do Bruxo, 5º nível de arcanista."
            },
            {
                name: "Magia Performática",
                description: "Quando lança uma magia diante de uma ou mais criaturas inteligentes (Int -3 ou mais), você pode fazer um teste de Atuação (CD 20 + custo em PM da magia) para lançá-la de forma impressionante. Se você passar, a CD da magia aumenta em +1. Esse bônus aumenta em +1 para cada 10 pontos pelos quais o teste passar da CD. Se falhar, a magia não funciona. Pré-requisitos: Car 1, treinado em Atuação."
            },
            {
                name: "Magia Pungente",
                description: "Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela."
            },
            {
                name: "Memória Súbita",
                description: "Escolha uma de suas magias que não esteja memorizada. Você pode gastar uma ação de movimento para memorizar essa magia até o fim da cena. Se fizer isso, uma de suas outras magias memorizadas, a sua escolha, deixa de estar memorizada. Pré-requisito: Mago."
            },
            {
                name: "Mestre em Escola",
                description: "Escolha uma escola de magia. O custo para lançar magias dessa escola diminui em -1 PM. Pré-requisitos: Especialista em Escola com a escola escolhida, 8º nível de arcanista."
            },
            {
                name: "O Próprio Sangue",
                description: "Se você aprender novamente como feiticeiro uma magia que já possa lançar por uma habilidade qualquer (como uma habilidade de raça ou um poder concedido), a CD para resistir a ela aumenta em +2. Pré-requisito: Feiticeiro."
            },
            {
                name: "Poder Mágico",
                description: "Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM e assim por diante."
            },
            {
                name: "Raio Arcano",
                description: "Você pode gastar uma ação padrão para causar 1d8 pontos de dano de essência num alvo em alcance curto. Esse dano aumenta em +1d8 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. O raio arcano conta como uma magia para efeitos de habilidades e itens que beneficiem suas magias. e"
            },
            {
                name: "Raio Dividido",
                description: "Você pode usar Raio Arcano como uma ação completa, em vez de padrão. Se fizer isso, ele afeta um número de alvos igual ao seu atributo-chave. Pré-requisitos: Raio Arcano, 5º nível de arcanista."
            },
            {
                name: "Raio Elemental",
                description: "Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de ácido, eletricidade, fogo, frio ou trevas, a sua escolha. Se o alvo falhar no teste de Reflexos, sofre uma condição, de acordo com o tipo de dano (veja a descrição das condições na página 394). Ácido: vulnerável por 1 rodada. Eletricidade: ofuscado por 1 rodada. Fogo: fica em chamas. Frio: lento por 1 rodada. Trevas: não pode curar PV por 1 rodada. Pré-requisito: Raio Arcano. e"
            },
            {
                name: "Raio Poderoso",
                description: "Os dados de dano do seu Raio Arcano aumentam para d12 e o alcance dele aumenta para médio. Pré-requisito: Raio Arcano. e"
            },
            {
                name: "Ritual do Lich (Necromante)",
                description: "Você aprendeu o Ritual do Lich e pode executar seus passos (veja o quadro acima). Pré-requisitos: Celebrar Ritual, Escrever Pergaminho, Preparar Poção, 17º nível de necromante.",
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Sifão de Mana",
                description: "Quando você lança uma magia e pelo menos um inimigo falha no teste de resistência contra ela, você recupera uma quantidade de pontos de mana igual ao círculo da magia (limitada pelo total de PM gastos nela). Pré-requisito: 17° nível de arcanista."
            },
            {
                name: "Tinta do Mago",
                description: "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade. Pré-requisitos: Mago, treinado em Ofício (escriba)."
            },
            {
                name: "Trama Célere",
                description: "Uma vez por rodada, quando usa uma ação padrão para lançar uma magia, você pode gastar 2 PM para fazer uma conjuração dupla. Isso permite que você lance uma segunda magia de 1º círculo como ação livre, pagando seu custo em PM como normal. Pré-requisito: 9º nível de arcanista."
            },
            {
                name: "Transliteração Impossível",
                description: "Quando usa um pergaminho de uma magia que conheça, você recebe +2 PM para gastar em aprimoramentos e a magia não pode ser anulada por contramágica. Pré-requisito: Escriba Arcano."
            },
            {
                name: "Alta Arcana",
                description: "No 20º nível, seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo).",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Caminho do Necromante (Necromante)",
                description: "Você lança magias por meio de uma conexão com a morte. Você pode aprender magias de necromancia divinas como se fossem arcanas, mas não pode aprender magias de encantamento e pelo menos metade das magias que aprender devem ser de necromancia. Além disso, para lançar suas magias você precisa primeiro acessar sua conexão com a morte. Para isso, você deve gastar uma quantidade de PV igual ao círculo máximo de magias que deseja usar (limitado pelo círculo máximo a que tem acesso). Uma vez ativada, a conexão se mantém até o fim da cena. Seu atributo-chave para magias é Inteligência.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Falar com Mortos (Necromante)",
                description: "Você pode se comunicar com mortos-vivos por meio de seus poderes arcanos. Você pode usar Misticismo com mortos-vivos para mudar atitude e persuasão (Tormenta20, p. 118).\nA partir do 3º nível, você pode gastar uma ação padrão e 1 PM para conversar com um cadáver em alcance curto. Esta habilidade funciona como a magia Voz Divina, com o aprimoramento de conceder um pouco de vida a um cadáver.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Animar Cadáver (Necromante)",
                description: "No 2º nível, você pode gastar uma ação completa e 3 PM para animar o cadáver de uma criatura Pequena, Média ou Grande em alcance curto. O cadáver se torna um parceiro iniciante de um tipo a sua escolha, adequado ao seu tamanho e anatomia, que não conta em seu limite de parceiros (mas você só pode ter um parceiro cadáver por vez). Quando sofre dano, você pode sacrificar o parceiro cadáver para reduzir esse dano à metade. Cadáveres sacrificados não podem ser reanimados.\nA partir do 7º nível, quando você usa esta habilidade, pode gastar 6 PM para criar um parceiro veterano e, a partir do 11º nível, pode gastar 9 PM para criar um parceiro mestre.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Necrologia (Necromante)",
                description: "No 3º nível, você recebe +2 em Cura, Fortitude e na CD para resistir às suas magias de necromancia. A cada cinco níveis, esse bônus aumenta em +1.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Distorção Necrótica (Necromante)",
                description: "No 4º nível, escolha uma de suas magias conhecidas de 1º círculo que não seja de necromancia. A escola dessa magia muda para necromancia. Essa mudança não tem efeitos mecânicos (além da troca de escola), mas altera a aparência e natureza de seu efeito (por exemplo, uma Armadura Arcana de necromancia cria uma armadura de ossos ou de sombras, enquanto uma magia Concentração de Combate manifesta espíritos dos mortos que o aconselham durante a luta).",
                default: true,
                nivel: 4,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Necropotência (Necromante)",
                description: "No 5º nível, quando estabelece sua conexão com a morte, você pode gastar o dobro de PV. Se fizer isso, sempre que reduzir um ou mais inimigos vivos a 0 PV ou menos com uma magia de necromancia, você recebe 2 PM temporários. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no fim da cena.",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Domínio Sobre a Morte (Necromante)",
                description: "No 20° nível, você domina as fronteiras da vida e da morte. O custo em PM de suas magias de necromancia é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo). Além disso, quando você mata uma criatura viva com uma magia de necromancia, pode gastar 2 PM para erguer seu cadáver como um morto-vivo sob seu controle. Isso funciona como a magia Servo Morto-Vivo, mas você escolhe o tipo de parceiro entre quaisquer aprimoramentos da magia e não precisa pagar seu componente material. Mortos-vivos erguidos dessa forma não contam em seu limite de parceiros durante a cena em que são criados (ao fim da cena, mortos-vivos excedentes, a sua escolha, voltar a ser apenas cadáveres).",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "O Ritual do Lich (Necromante)",
                description: "O Ritual do Lich representa o auge do conhecimento mágico de um necromante. É o resultado de anos de estudos, pesquisas e experimentos, sendo conhecido por poucos. Os passos deste ritual são descritos a seguir.\n\nPasso 1: O Filactério\n“Para viver para sempre, a alma não pode ser destruída”. Baseado nesse princípio, o candidato a lich deve possuir um filactério, um local seguro no qual poderá guardar sua alma. O filactério típico é uma caixa de metal selada, repleta de tiras de pergaminhos com escritos mágicos, mas pode ser quase qualquer objeto. Independente de sua forma, o filactério custa T$ 20.000. Com este item em mãos, você deve lançar as seguintes magias, nessa ordem: Profanar (com o aprimoramento que torna permanente), Ligação Sombria (como parte do ritual, pode ser lançada tendo como alvo o filactério), Roubar a Alma (em si mesmo) e Tranca Arcana (no filactério). As magias não surtem efeito imediatamente, apenas no fim do ritual.\n\nPasso 2: A Poção do Sono Eterno\nCom um receptáculo em mãos, você deve se concentrar no próximo passo: morrer. Mas não de qualquer maneira — apenas através da poção do sono eterno. Esta poção especial contém vários tipos de venenos: beladona, cicuta, essência de sombra e pó de lich (uma dose de cada), que são usados como matéria-prima, e fabricá-la exige um teste de Ofício (alquimista) contra CD 35. Com a poção em mãos, você deve lançar as seguintes magias, nessa ordem: Erupção Glacial, Rogar Maldição e Servo Morto-Vivo. Você deve esperar uma noite de lua minguante para beber a poção, pois esta é uma etapa que não pode ser testemunhada por Lena.\n\nPasso 3: O Mago Imortal\nPara você, a poção do sono eterno é letal. Após sua morte, seu corpo fica inerte e sua alma é sugada para o filactério (assim, um candidato que não tenha realizado o primeiro passo do ritual simplesmente morre). Sem um corpo físico, sua consciência vaga pelos reinos dos deuses. Depois de uma semana, sua mente retorna para seu corpo — mas o tempo já cobrou seu preço. Seu corpo está seco, enrugado, com olhos vazios e ossos salientes. Você não respira mais e não tem sangue, tendo se tornado um morto-vivo. Este é um ritual complexo e a preparação e execução dele provavelmente terá tomado boa parte de seu tempo de vida. Mas isso não é um problema: agora você é um lich e não precisa mais se preocupar nem com tempo, nem com vida.\nEm termos de regras, você adquire as características a seguir:\n\nAtributos. Inteligência +1, Sabedoria +1, Carisma +1, Constituição -1.\n\nMorto-Vivo. Seu tipo muda para morto-vivo. Você recebe visão no escuro e imunidade a efeitos de cansaço e metabólicos, eletricidade, frio, metamorfose, trevas e veneno. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, efeitos mágicos de cura de luz causam dano a você e você não se beneficia de itens da categoria alimentação, mas dano de trevas recupera seus PV.\n\nCadáver Resiliente. Você recebe +5 na Defesa e redução de dano 10/mágico.\n\nAura de Medo. Você recebe este poder (Tormenta20, p. 132, mas ele não é um poder concedido). Se já o possui, a CD para resistir a ele aumenta em +2.\n\nToque Gélido. Quando faz um ataque desarmado, você pode gastar 3 PM para envolver sua mão em frio sobrenatural. Se fizer isso e acertar o ataque, em vez do dano normal você causa 6d6+6 pontos de dano de frio e a vítima fica paralisada por 1 rodada (apenas uma vez por cena, Fort CD Int evita).\n\nFilactério. Se for morto, você retorna completamente recuperado em 1d10 dias. A única forma de derrotá-lo permanentemente é destruir seu filactério. Você pode deixar o filactério em qualquer lugar, mas você e ele precisam estar no mesmo Plano. O filactério possui RD 30 e PV iguais aos seus. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM por descanso.\n\nPreço da Não Vida. Você precisa passar 8 horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais (você não é afetado por condições boas ou ruins de descanso). Caso contrário, sofre os efeitos de fome.",
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Linhagens Sobrenaturais",
                description: "O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de arcanista."
            },
            {
                name: "Linhagem Abençoada",
                description: "• Básica. Escolha um deus maior. Uma vez feita, essa escolha não pode ser mudada. Você aprende uma magia divina de 1º círculo e pode aprender magias divinas de 1º círculo como magias de feiticeiro. No 2º nível, você recebe um poder concedido do deus escolhido, aprovado pelo mestre, sem precisar ser devoto dele (mas você ainda pode ser devoto desse ou de outro deus). • Aprimorada. Suas magias divinas de círculo igual ou menor que sua Sabedoria custam -1 PM e você pode aprender magias divinas de 2º e 3º círculos como magias de feiticeiro. • Superior. Você recebe +1 em Sabedoria e aprende uma magia divina de cada círculo a que tenha acesso, limitado por sua Sabedoria. A cada dia, após descansar, pode trocar essas magias por outras dos mesmos círculos. Por fim, pode aprender magias divinas de 4º e 5º círculos como magias de feiticeiro."
            },
            {
                name: "Linhagem Dracônica",
                description: "Um de seus antepassados foi um majestoso dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio. • Básica. Você soma seu Carisma em seus pontos de vida iniciais e recebe redução de dano 5 ao tipo escolhido. • Aprimorada. Suas magias do tipo escolhido custam -1 PM e causam +1 ponto de dano por dado. • Superior. Você passa a somar o dobro do seu Carisma em seus pontos de vida iniciais e se torna imune a dano do tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido, você recebe uma quantidade de PM temporários igual ao círculo da magia."
            },
            {
                name: "Linhagem Feérica",
                description: "Seu sangue foi tocado pelas fadas. • Básica. Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha. • Aprimorada. A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam -1 PM. • Superior. Você recebe +2 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão lançada por você, você fica alquebrado até o final da cena."
            },
            {
                name: "Linhagem Rubra",
                description: "Seu sangue foi corrompido pela Tormenta. • Básica. Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta. • Aprimorada. Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam -1 PM. Sempre que recebe um novo poder da Tormenta, você pode escolher uma nova magia. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma). • Superior. Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma)."
            }
        ]
    },
    {
        nome: "Bárbaro",
        variante: {
            nome: "Machado de Pedra",
            extraSkills: 2,
            proficiencies: [
                "Escudos"
            ],
        },
        descricao: "Um combatente primitivo, que usa fúria e instintos para destruir seus inimigos.",
        atributo: "Força",
        pv: 24,
        pv_per_level: 6,
        pm: 3,
        treinedSkills: ["Fortitude", "Luta"],
        treinedSkillsOr: [],
        skills: ["Adestramento", "Atletismo", "Cavalgar ", "Iniciativa", "Intimidação", "Ofício", "Percepção", "Pontaria", "Sobrevivência", "Vontade"],
        extraSkills: 4,
        proficiencies: [
            "Armas marciais",
            "Escudos"
        ],
        abilities: [
            {
                name: "Fúria",
                description: "Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Alma de Bronze",
                description: "Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a seu nível + sua Força."
            },
            {
                name: "Alma Inabalável",
                description: "Quando faz um teste de resistência, você pode gastar 1 PM para substituir a perícia normal por Intimidação. Se você passar no teste e a fonte do efeito for uma criatura, ela fica abalada por 1d4 rodadas (Vontade CD igual ao resultado do teste de Intimidação evita). Pré-requisito: treinado em Intimidação."
            },
            {
                name: "Ampliar Brado",
                description: "O alcance de seus brados aumenta para médio e a CD para resistir a eles aumenta em +2."
            },
            {
                name: "Arremesso Violento",
                description: "Enquanto você está em fúria, o dano e o alcance de suas armas de arremesso aumenta em um passo (de curto para médio e de médio para longo) e a penalidade em ataques que você sofre por arremessar armas sem alcance diminui para -2. Pré-requisito: Fúria da Savana."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Beberrão Selvagem",
                description: "Você pode gastar uma ação de movimento para ingerir um preparado alquímico que cause dano e tenha uma criatura como alvo. Se fizer isso, armazena o equivalente a 3 cargas do preparado em sua boca. Até o fim da cena, sempre que acerta um ataque corpo a corpo, você pode gastar uma carga para que o ataque cause dano adicional igual ao do preparado. Pré-requisito: Con 3."
            },
            {
                name: "Brado: Assombroso",
                description: "Você pode gastar uma quantidade de PM limitada pela sua Constituição. Para cada PM que gastar, você causa 1d6 pontos de dano psíquico em todos os inimigos no alcance do brado (Von CD Con reduz à metade). Medo. Pré-requisito: Brado Assustador."
            },
            {
                name: "Brado Assustador",
                description: "Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto ficam vulneráveis até o fim da cena. Pré-requisito: treinado em Intimidação. Medo."
            },
            {
                name: "Brado: Retardante",
                description: "Você dá um berro que faz seus inimigos hesitarem. Criaturas a sua escolha no alcance do brado ficam lentas por 1 rodada. Medo."
            },
            {
                name: "Brado: Sísmico",
                description: "Você emite um brado que faz o chão tremer. Criaturas no alcance do brado ficam vulneráveis por 1d4 rodadas e caídas (Fort CD For reduz para vulneráveis por 1 rodada). Criaturas que já estavam vulneráveis, inclusive por este efeito, ficam desprevenidas pelo mesmo tempo. Pré-requisito: outro poder de brado."
            },
            {
                name: "Brado Vitorioso",
                description: "Quando faz um acerto crítico ou reduz um inimigo a 0 ou menos PV enquanto está em fúria, você pode usar um dos seus poderes de brado como ação livre. Pré-requisitos: Brado Assustador, Sangue dos Inimigos."
            },
            {
                name: "Crítico Brutal",
                description: "Seu multiplicador de crítico com armas corpo a corpo e de arremesso aumenta em +1. Por exemplo, seu multiplicador com um machado de batalha (normalmente x3) será x4. Pré-requisito: 6º nível de bárbaro."
            },
            {
                name: "Destruidor",
                description: "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma. Pré-requisito: For 1."
            },
            {
                name: "Enigma do Aço",
                description: "Após tantas lutas e matanças, você descobriu que a verdadeira força não reside na arma, mas na mão de quem a empunha. Se estiver empunhando uma arma mundana, você recebe +5 em testes de ataque e causa dois dados extras de dano do mesmo tipo. Pré-requisito: 17º nível de bárbaro."
            },
            {
                name: "Espírito Inquebrável",
                description: "Enquanto está em fúria, você não fica inconsciente por estar com 0 PV ou menos (você ainda morre se chegar em um valor negativo igual à metade de seus pontos de vida máximos). Pré-requisito: Alma de Bronze."
            },
            {
                name: "Espiritualista",
                description: "Você recebe +1 PM a cada nível ímpar. Além disso, aprende e pode lançar uma magia adicional definida pelo seu animal totêmico (atributo-chave Sabedoria) e pode lançá-la e sustentá-la mesmo em fúria. As magias são: Coruja (Augúrio), Corvo (Voz Divina), Falcão (Mapear), Grifo (Físico Divino), Lobo (Localização), Raposa (Camuflagem Ilusória), Tartaruga (Vestimenta da Fé), Urso (Soco de Arsenal). Pré-requisitos: Sab 2, Totem Espiritual, 6º nível de bárbaro."
            },
            {
                name: "Esquiva Sobrenatural",
                description: "Seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos o percebam. Você nunca fica surpreendido."
            },
            {
                name: "Força Indomável",
                description: "Quando faz um teste de Força ou Atletismo, você pode gastar 1 PM para somar seu nível nele. Você pode usar esta habilidade depois de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não."
            },
            {
                name: "Frenesi",
                description: "Uma vez por rodada, se estiver em fúria e usar a ação agredir para fazer um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 2 PM para fazer um ataque adicional."
            },
            {
                name: "Fúria Bestial",
                description: "Enquanto você está em fúria, o dano das suas armas naturais aumenta em dois passos e o multiplicador de crítico delas aumenta em +1."
            },
            {
                name: "Fúria da Savana",
                description: "Seu deslocamento aumenta em +3m. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso."
            },
            {
                name: "Fúria Elemental",
                description: "Escolha um elemento entre ácido, eletricidade, fogo ou frio. Uma vez feita, essa escolha não pode ser mudada. Enquanto está em fúria e faz um ataque em que aplique seus benefícios, você causa +1d12 pontos de dano do tipo escolhido. Pré-requisitos: Totem Espiritual, 11º nível de bárbaro."
            },
            {
                name: "Fúria Raivosa",
                description: "Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente."
            },
            {
                name: "Golpe Poderoso",
                description: "Ao acertar um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 1 PM para causar um dado extra de dano do mesmo tipo (por exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12, para um dano total de 2d12)."
            },
            {
                name: "Ímpeto",
                description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada."
            },
            {
                name: "Impiedoso",
                description: "Você recebe +2 em testes de ataque, rolagens de dano e na CD de suas habilidades contra criaturas vulneráveis."
            },
            {
                name: "Investida Imprudente",
                description: "Quando faz uma investida, você pode aumentar sua penalidade na Defesa pela investida para -5 para receber um bônus de +1d12 na rolagem de dano deste ataque."
            },
            {
                name: "Invocar os Ancestrais",
                description: "Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 ancestrais capangas em espaços desocupados em alcance curto. Eles têm Defesa igual à sua, 1 PV, são incorpóreos e falham automaticamente em qualquer teste de resistência ou oposto. Você pode gastar uma ação de movimento para fazê-los se mover (deslocamento 9m). Cada ancestral fornece um bônus cumulativo de +2 em rolagens de dano a um personagem adjacente e, uma vez por rodada, quando faz a ação agredir, você pode gastar um ancestral pra fazer um ataque adicional. Pré-requisitos: Totem Espiritual, 11º nível de bárbaro."
            },
            {
                name: "Manifestar Totem",
                description: "Escolha um tipo de parceiro entre assassino, atirador, combatente, fortão, guardião, perseguidor ou montaria. Uma vez feita, essa escolha não pode ser mudada. Você pode gastar 3 PM e uma ação de movimento para invocar uma manifestação espiritual de seu animal totêmico até o fim da cena. Ele é um parceiro veterano do tipo escolhido. Pré-requisitos: Totem Espiritual, 7º nível de bárbaro."
            },
            {
                name: "Pele de Aço",
                description: "O bônus de Pele de Ferro aumenta para +8. Pré-requisitos: Pele de Ferro, 8º nível de bárbaro."
            },
            {
                name: "Pele de Ferro",
                description: "Você recebe +4 na Defesa, mas apenas se não estiver usando armadura pesada."
            },
            {
                name: "Poderes de Brado",
                description: "Poderes de brado compartilham as seguintes regras.\n• Emitir um brado gasta uma ação de movimento e 1 PM, a menos que a descrição diga o contrário.\n• Brados têm alcance curto.\nA critério do mestre, habilidades raciais baseadas em gritos, como o Rugido Imponente do moreau do leão (Ameaças de Arton, p. 305), podem ser consideradas poderes de brado para um bárbaro."
            },
            {
                name: "Recuperação Gutural",
                description: "Quando usa um brado enquanto está em fúria, você recebe uma quantidade de PV temporários igual à metade do seu nível + sua Força. Pré-requisitos: Alma de Bronze, um poder de brado."
            },
            {
                name: "Regeneração Sobrenatural",
                description: "Enquanto está em fúria e com menos da metade de seus PV máximos, você tem Cura Acelerada 5. Pré-requisitos: Con 5, Vigor Primal, 5º nível de bárbaro."
            },
            {
                name: "Revide",
                description: "Uma vez por rodada, quando sofre dano de um ataque corpo a corpo enquanto está em fúria, você pode gastar 2 PM para fazer um ataque corpo a corpo contra a criatura que o atacou, desde que ela esteja em seu alcance. Pré-requisitos: Frenesi, 11º nível de bárbaro."
            },
            {
                name: "Rigidez Selvagem",
                description: "Enquanto está em fúria, você soma o bônus da fúria na Defesa, em Fortitude e em RD."
            },
            {
                name: "Sangue dos Inimigos",
                description: "Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena."
            },
            {
                name: "Sede Sanguinária",
                description: "Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV ou menos, você recupera 10 PV e 2 PM. Pré-requisitos: Sangue dos Inimigos, 5º nível de bárbaro."
            },
            {
                name: "Superstição",
                description: "Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +5."
            },
            {
                name: "Totem Espiritual",
                description: "Você soma sua Sabedoria no seu total de pontos de mana. Escolha um animal totêmico (veja o quadro ao lado). Você aprende e pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria) e pode lançá-la mesmo em fúria. Pré-requisitos: Sab 1, 4º nível de bárbaro."
            },
            {
                name: "Vigor Primal",
                description: "Você pode gastar uma ação de movimento e uma quantidade de PM limitada por sua Constituição. Para cada PM que gastar, você recupera 1d12 pontos de vida."
            },
            {
                name: "Instinto Selvagem",
                description: "No 3º nível, você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Redução de Dano",
                description: "A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Fúria Titânica",
                description: "No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por exemplo, se gastar 5 PM, em vez de um bônus de +5, recebe um bônus de +10.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Grunhidos (Machado de Pedra)",
                description: "Você conhece apenas o idioma rústico da pequena comunidade onde viveu e nenhum outro. Você não só é incapaz de compreender outros dialetos como não se importa com isso, comunicando-se com grunhidos e sons simples. Contudo, você conhece uma palavra no idioma valkar (o mais comum de Arton) por nível de machado de pedra.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Machado de Pedra (Machado de Pedra)",
                description: "Você não recebe proficiência com armas simples. Você sabe usar apenas adaga, azagaia, clava, funda, lança, machadinha e tacape. No 9° nível, aprende a usar uma arma simples ou marcial a sua escolha. Entretanto, quando ataca com uma arma natural, um ataque desarmado ou uma dessas armas, você recebe +1 no teste de ataque e na rolagem de dano.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Tanga de Peles (Machado de Pedra)",
                description: "Você não recebe proficiência com armaduras leves. Entretanto, se não estiver usando armadura, você soma sua Constituição na Defesa. Além disso, no 3º nível, e a cada quatro níveis seguintes, você recebe +1 na Defesa.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Fúria Primitiva (Machado de Pedra)",
                description: "A partir do 2º nível, se não estiver usando armadura e estiver empunhando uma das armas de sua habilidade Machado de Pedra, o custo de sua Fúria é reduzido em -1 PM. Além disso, uma vez por cena, quando entra em fúria, você recebe uma quantidade de PV temporários igual ao seu nível + sua Constituição.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Resiliência Primal (Machado de Pedra)",
                description: "A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 3. A cada três níveis, sua RD aumenta em 3, até um máximo de RD 15 no 17º nível.",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Fúria Rústica (Machado de Pedra)",
                description: "No 20º nível, quando entra em fúria, você pode gastar 5 PM. Se fizer isso, durante a fúria você recebe Cura Acelerada 10 (cumulativo com outras Curas Aceleradas) e, quando faz a ação agredir, pode fazer um ataque desarmado adicional.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Animais Totêmicos",
                description: "A seguir está uma lista de animais venerados por tribos bárbaras de Arton.\n• Coruja. A sábia coruja guia seus discípulos. Você pode lançar Orientação.\n• Corvo. Um seguidor do corvo enxerga além do véu. Você pode lançar Visão Mística.\n• Falcão. Sempre atento, o falcão permite que você lance Detectar Ameaças.\n• Grifo. O mais veloz dos animais, o grifo permite que você lance Primor Atlético.\n• Lobo. O lobo é feroz e letal. Você pode lançar Concentração de Combate.\n• Raposa. A sagaz raposa nunca está onde se espera. Você pode lançar Imagem Espelhada.\n• Tartaruga. A tartaruga protege os seus. Você pode lançar Armadura Arcana.\n• Urso. O vigoroso urso permite que você lance Vitalidade Fantasma e possa usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um druida de seu nível."
            }
        ]
    },
    {
        nome: "Bardo",
        variante: {
            nome: "Magimarcialista",
            pv: 16,
            pv_per_level: 4,
            treinedSkills: ["Atuação", "Luta"],
            skills: ["Acrobacia", "Atletismo", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Fortitude", "Guerra", "Iniciativa", "Jogatina", "Misticismo", "Reflexos"],
        },
        descricao: "Um artista errante e faz-tudo versátil, sempre com a solução certa para cada ocasião.",
        atributo: "Carisma",
        pv: 12,
        pv_per_level: 3,
        pm: 4,
        treinedSkills: ["Atuação", "Reflexos"],
        treinedSkillsOr: [],
        skills: ["Acrobacia", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Furtividade", "Iniciativa", "Intuição", "Investigação", "Jogatina", "Ladinagem", "Luta", "Misticismo", "Nobreza", "Percepção", "Pontaria", "Vontade"],
        extraSkills: 6,
        proficiencies: [
            "Armas marciais"
        ],
        abilities: [
            {
                name: "Inspiração",
                description: "Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua arte. Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Magias",
                description: "Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma e você soma seu Carisma no seu total de PM. Veja o Capítulo 4 para as regras de magia.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Acorde Místico",
                description: "Se estiver empunhando um instrumento musical, você pode gastar uma ação padrão para fazer um teste de Atuação oposto ao teste de Vontade de uma criatura em alcance curto. Se você vencer, a criatura sofre 1d6 pontos de dano de essência e fica vulnerável por 1 rodada. Esse dano aumenta em +1d6 para cada círculo de magia acima do 1º que você puder lançar. Quando faz um ataque como parte da execução de uma magia (como pelo aprimoramento de Toque Chocante), você pode usar este poder no lugar do ataque."
            },
            {
                name: "Acorde Poderoso",
                description: "Os dados de dano do seu Acorde Místico aumentam para d10, o alcance dele aumenta para médio e, se você vencer o teste oposto, a vítima fica desprevenida, em vez de vulnerável. Pré-requisito: Acorde Místico."
            },
            {
                name: "Adereço Musical",
                description: "Você pode gastar 10 minutos para acoplar (ou desacoplar) um item esotérico a um instrumento musical. Isso permite empunhar o esotérico com a mesma mão que empunha o instrumento e usar seu efeito em Acorde Místico, como se esse poder fosse uma magia. Cada instrumento musical só pode ter um esotérico acoplado."
            },
            {
                name: "Apresentação Impactante",
                description: "Quando usa Inspiração, você impacta também os inimigos dentro do alcance. Na próxima vez que um inimigo fizer um teste de ataque ou de resistência nessa cena, ele rola dois dados e usa o pior resultado (apenas uma vez por cena)."
            },
            {
                name: "Arte Mágica",
                description: "Enquanto você estiver sob efeito de sua Inspiração, a CD para resistir a suas habilidades de bardo aumenta em +2."
            },
            {
                name: "Aumentar Repertório",
                description: "Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Balada do Atirador",
                description: "Você pode usar Esgrima Mágica, e qualquer poder de bardo que o tenha como pré-requisito, com armas de ataque à distância leves ou de uma mão. Quando faz isso, você pode substituir testes de Pontaria por Atuação. Pré-requisito: Esgrima Mágica."
            },
            {
                name: "Celebridade Artoniana",
                description: "No início de cada cena, você pode gastar 3 PM para fazer um teste de Atuação oposto pelo teste de Vontade de uma criatura inteligente (Int -3 ou maior) que possa ver. Se você vencer, a criatura se revela sua fã. Você recebe +5 em todos os testes de perícia contra ela e ela sofre -5 em todos os testes dela contra você até o fim da aventura. Quem vai querer agredir seu ídolo? Pré-requisitos: Estrelato, 17º nível de bardo."
            },
            {
                name: "Dança Acrobática",
                description: "Você pode substituir testes de Acrobacia por Atuação. Quando você faz isso para passar por um inimigo, ele só pode usar Acrobacia ou Iniciativa no teste oposto."
            },
            {
                name: "Dança das Lâminas",
                description: "Quando você lança uma magia com execução de uma ação padrão, pode gastar 1 PM para fazer um ataque corpo a corpo como uma ação livre. Pré-requisitos: Esgrima Mágica, 10º nível de bardo."
            },
            {
                name: "Esgrima Mágica",
                description: "Sua arte mescla esgrima e magia, transformando dança em golpes. Se estiver sob efeito de Inspiração, você pode substituir testes de Luta por testes de Atuação, mas apenas para ataques com armas corpo a corpo leves ou de uma mão."
            },
            {
                name: "Espada Encantada",
                description: "Quando você causa dano com seu Golpe Elemental, o alvo sofre uma condição conforme o tipo de dano escolhido. Ácido: vulnerável por 1 rodada. Eletricidade: ofuscado por 1 rodada. Fogo: em chamas. Frio: lento por 1 rodada. Pré-requisito: Golpe Elemental."
            },
            {
                name: "Estrelato",
                description: "Suas apresentações o tornaram famoso, fazendo com que você seja reconhecido e bem tratado por aqueles que apreciam a arte. Por outro lado, pode ser difícil passar despercebido, especialmente em grandes cidades. Quando usa Atuação para impressionar uma plateia, o bônus recebido em perícias baseadas em Carisma aumenta para +5. Pré-requisito: 6º nível de bardo."
            },
            {
                name: "Fascinar em Massa",
                description: "Quando usa Música: Balada Fascinante, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas a sua escolha no alcance da música (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura). Pré-requisito: Música: Balada Fascinante."
            },
            {
                name: "Golpe Elemental",
                description: "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo, pode gastar 1 PM para causar 1d6 de dano extra de ácido, eletricidade, fogo ou frio, a sua escolha. Para cada quatro níveis que possuir, pode gastar +1 PM para aumentar o dano em +1d6. Pré-requisito: Golpe Mágico."
            },
            {
                name: "Golpe Mágico",
                description: "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários cumulativos. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena. Pré-requisito: Esgrima Mágica."
            },
            {
                name: "História de Acampamento",
                description: "Você pode gastar 1 hora para entreter um número de pessoas igual ao seu nível com histórias e canções. A recuperação de PM por descanso dessas pessoas aumenta em +1 por nível nesse dia."
            },
            {
                name: "Inspiração Espirituosa",
                description: "Na primeira vez que você usa Inspiração em cada combate, você e seus aliados recebem uma quantidade de PM temporários igual ao bônus fornecido por essa habilidade. Pré-requisito: 11º nível de bardo."
            },
            {
                name: "Inspiração Marcial",
                description: "Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido em rolagens de dano (além de testes de perícia)."
            },
            {
                name: "Inspiração Resoluta",
                description: "Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido na Defesa (além de testes de perícia)."
            },
            {
                name: "Inspiração Revigorante",
                description: "Quando você usa Inspiração, você e seus aliados recebem uma quantidade de PV temporários igual a 5 vezes o bônus fornecido."
            },
            {
                name: "Lendas e Histórias",
                description: "Você é um arquivo vivo de relatos, canções e folclore. Além de outros benefícios a critério do mestre, quando faz um teste de Conhecimento, Misticismo, Nobreza ou Religião para informação, identificar criaturas ou identificar itens mágicos, você pode gastar 1 PM para rolá-lo novamente. Pré-requisito: Int 1."
            },
            {
                name: "Magia Performática",
                description: "Quando lança uma magia diante de uma ou mais criaturas inteligentes (Int -3 ou mais), você pode fazer um teste de Atuação (CD 20 + custo em PM da magia) para lançá-la de forma impressionante. Se você passar, a CD da magia aumenta em +1. Esse bônus aumenta em +1 para cada 10 pontos pelos quais o teste passar da CD. Se falhar, a magia não funciona. Pré-requisitos: Car 1, treinado em Atuação."
            },
            {
                name: "Mago Vermelho",
                description: "Se estiver empunhando uma arma leve ou ágil, você soma o círculo máximo de magias que pode lançar nos testes de ataque e nas rolagens de dano com ela. Além disso, a mão da arma é considerada livre para lançar magias. Pré-requisito: treinado em Misticismo."
            },
            {
                name: "Manipular",
                description: "Você pode gastar 1 PM para fazer uma criatura fascinada por você ficar enfeitiçada até o fim da cena (Von CD Car anula). Se a criatura passar, fica imune a este efeito por um dia. Usar esta habilidade não conta como ameaça à criatura fascinada. Pré-requisito: Música: Balada Fascinante."
            },
            {
                name: "Manipular em Massa",
                description: "Quando usa Manipular, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas a sua escolha em alcance curto. Pré-requisitos: Fascinar em Massa, Manipular, 10º nível de bardo."
            },
            {
                name: "Música: Balada Fascinante",
                description: "Faça um teste de Atuação oposto pelo teste de Vontade de uma criatura no alcance. Se você passar, ela fica fascinada enquanto você se concentrar (uma ação padrão por rodada). Um alvo hostil ou envolvido em combate recebe +5 no teste de resistência e tem direito a um novo teste sempre que você se concentrar. Se a criatura passar, fica imune a este efeito por um dia."
            },
            {
                name: "Música: Canção Assustadora",
                description: "Faça um teste de Atuação oposto pelo teste de Vontade de cada criatura a sua escolha dentro do alcance (você faz um único teste). Alvos que falhem ficam abalados até o fim da cena. Alvos que passem ficam imunes a este efeito por um dia."
            },
            {
                name: "Música: Marcha Vitoriosa",
                description: "Faça um teste de Atuação. Para cada 10 pontos no resultado desse teste, seus aliados dentro do alcance recebem +1 em rolagens de dano por 1 rodada. Pré-requisitos: Inspiração Marcial, 5º nível de bardo."
            },
            {
                name: "Música: Melodia Curativa",
                description: "Criaturas a sua escolha no alcance recuperam 1d6 PV. Quando usa esta habilidade, você pode gastar mais pontos de mana. Para cada PM extra, aumente a cura em +1d6 PV."
            },
            {
                name: "Música: Réquiem Sombrio",
                description: "Um cadáver de uma criatura Média ou menor dentro do alcance se ergue como um morto-vivo sob seu comando. Ele é um parceiro iniciante de um tipo a sua escolha aprovado pelo mestre que não conta em seu limite de parceiros. Você pode animar um máximo de cadáveres simultâneos igual ao seu Carisma. Os cadáveres se decompõem no fim da cena. Pré-requisito: necromancia como uma de suas escolas de magia."
            },
            {
                name: "Música: Sonata da Distração",
                description: "Faça um teste de Atuação oposto pela Vontade de cada criatura a sua escolha dentro do alcance (você faz um único teste). Alvos que falharem ficam desprevenidos por 1 rodada. Alvos que passarem ficam imunes a este efeito por 1 dia. Mental."
            },
            {
                name: "Melodia Restauradora",
                description: "Quando você usa Música: Melodia Curativa, pode gastar +2 PM. Se fizer isso, escolha uma das condições a seguir: abalado, alquebrado, apavorado, atordoado, cego, confuso, enfeitiçado, esmorecido, exausto, fatigado, frustrado, pasmo ou surdo. Você remove a condição escolhida das criaturas afetadas pela música. Pré-requisito: Música: Melodia Curativa."
            },
            {
                name: "Mestre dos Sussurros",
                description: "Você é dissimulado, atento para rumores e ótimo em espalhar fofocas. Quando faz um teste de Investigação para interrogar ou um teste de Enganação para intriga, você rola dois dados e usa o melhor resultado. Além disso, pode fazer esses testes em ambientes sociais (taverna, festival, corte...) sem custo e em apenas um minuto. Pré-requisitos: Car 1, treinado em Enganação e Investigação."
            },
            {
                name: "Paródia",
                description: "Uma vez por rodada, quando vê outra criatura lançando uma magia em alcance médio, você pode pagar 1 PM e fazer um teste de Atuação (CD 15 + custo em PM da magia). Se passar, até o final de seu próximo turno você pode lançar essa magia."
            },
            {
                name: "Portas da Fama",
                description: "Você recebe +10 em testes de Diplomacia, Enganação e Furtividade para entrar em lugares proibidos — as pessoas simplesmente presumem que você tem acesso a tudo! Pré-requisito: Estrelato."
            },
            {
                name: "Prestidigitação",
                description: "Quando faz uma ação padrão, você pode aproveitar seus gestos para lançar uma magia com execução de ação completa ou menor. Faça um teste de Atuação (CD 15 + custo em PM da magia). Se passar, você lança a magia como uma ação livre. Se falhar, a magia não funciona, mas você gasta os PM mesmo assim. Outros personagens só percebem que você lançou uma magia com um teste de Misticismo (CD 20). Pré-requisito: 6º nível de bardo."
            },
            {
                name: "Ressoar",
                description: "Quando lança uma magia que tenha apenas você como alvo, você pode gastar 2 PM e fazer um teste de Atuação (CD 15 + custo em PM da magia). Se você passar, um aliado em alcance curto que esteja sob efeito de sua Inspiração é afetado pelo efeito básico da magia como se você a tivesse lançado nele. Pré-requisito: 17º nível de bardo."
            },
            {
                name: "Triunfo do Amor",
                description: "Se você “conquistar” romanticamente um NPC, seus PM aumentam em +1 por nível até o fim da aventura. O mestre define exatamente o que você precisa fazer, de acordo com o NPC. Por padrão, isso envolve aumentar a atitude dele em relação a você para prestativo e então passar em um teste de Atuação, Diplomacia ou Enganação oposto pela Vontade do NPC +10. Você pode receber esse benefício até duas vezes por aventura (ou seja, pode conquistar até duas pessoas por aventura para ganhar +2 PM por nível)."
            },
            {
                name: "Eclético",
                description: "A partir do 2º nível, quando vai fazer um teste de perícia, você pode gastar 1 PM para receber os benefícios de ser treinado nessa perícia para este teste.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Artista Completo",
                description: "No 20º nível, você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito de sua Inspiração, qualquer habilidade de bardo (incluindo magias) que você usar tem seu custo em PM reduzido pela metade (após aplicar quaisquer outras habilidades que reduzam o custo).",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Cadência Magimarcial (Magimarcialista)",
                description: "Sempre que lança uma magia de bardo você recebe uma carga arcana e, sempre que faz a ação agredir, recebe uma carga marcial. Você pode acumular um máximo de cargas de cada tipo igual ao seu Carisma e elas duram até o fim da cena.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Magificação (Magimarcialista)",
                description: "Se tiver pelo menos 1 carga arcana e 1 carga marcial, você recebe +2 em testes de ataque e rolagens de dano e é considerado sob Inspiração (Tormenta20, p. 44) para efeitos baseados nisso. A cada cinco níveis, esses bônus aumentam em +1.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Bravado Magimarcial (Magimarcialista)",
                description: "No 2º nível, quando lança uma magia, você pode gastar 1 carga marcial para reduzir seu custo em -1 PM (cumulativo com outras reduções) e, quando faz um ataque, pode gastar 1 carga arcana para receber +1d6 na rolagem de dano.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Dança Defensiva (Magimarcialista)",
                description: "No 3º nível, quando faz um teste de resistência, você pode gastar 1 carga marcial para receber +5 nesse teste e, quando sofre dano, pode gastar 1 carga arcana para receber redução de dano 10 contra esse dano.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Arte Sublime (Magimarcialista)",
                description: "A partir do 7º nível, quando usa Bravado Magimarcial ou Dança Defensiva, você pode gastar uma carga adicional do tipo exigido para dobrar seu efeito.",
                default: true,
                nivel: 7,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Crescendo Vitorioso (Magimarcialista)",
                description: "No 20° nível, no início de cada combate, você recebe 1 carga arcana e 1 carga marcial. Além disso, você soma seu total de cargas marciais na CD para resistir às suas habilidades de bardo e o total de suas cargas arcanas em seus testes de ataque e rolagens de dano.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Músicas de Bardo",
                description: "Alguns poderes do bardo são Músicas. Esses poderes compartilham as seguintes regras.\n• Para ativar uma música, você precisa ser treinado em Atuação e empunhar um instrumento musical (veja a página 158).\n• Ativar uma música gasta uma ação padrão e 1 PM.\n• Efeitos de músicas têm alcance curto.",
                nivel: 1,
                default: true,
            }
        ]
    },
    {
        nome: "Bucaneiro",
        variante: {
            nome: "Duelista",
            skills: ["Acrobacia", "Atletismo", "Atuação", "Diplomacia", "Fortitude", "Iniciativa", "Intimidação", "Luta", "Ofício", "Percepção", "Pilotagem", "Pontaria"],
            extraSkills: 2
        },
        descricao: "Um navegador inconsequente e galante, sempre em busca de ouro ou emoção.",
        atributo: "Destreza",
        pv: 16,
        pv_per_level: 4,
        pm: 3,
        treinedSkills: ["Reflexos"],
        treinedSkillsOr: ["Luta", "Pontaria"],
        skills: ["Acrobacia", "Atletismo", "Atuação", "Enganação", "Fortitude", "Furtividade", "Iniciativa", "Intimidação", "Jogatina", "Luta", "Ofício", "Percepção", "Pilotagem", "Pontaria"],
        extraSkills: 4,
        proficiencies: [
            "Armas marciais"
        ],
        abilities: [
            {
                name: "Audácia",
                description: "Quando faz um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste. Você não pode usar esta habilidade em testes de ataque.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Insolência",
                description: "Você soma seu Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Evasão",
                description: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Abusar dos Fracos",
                description: "Quando ataca uma criatura sob efeito de uma condição de medo, seu dano aumenta em um passo. Pré-requisito: Flagelo dos Mares."
            },
            {
                name: "Amigos no Porto",
                description: "Quando chega em uma comunidade portuária, você pode fazer um teste de Carisma (CD 10). Se passar, encontra um amigo para o qual pode pedir um favor ou que pode ajudá-lo como parceiro veterano de um tipo a sua escolha por um dia. Pré-requisitos: Car 1, 6º nível de bucaneiro."
            },
            {
                name: "Aparar",
                description: "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 1 PM para fazer um teste de ataque com bônus igual ao seu nível (além do normal). Se o resultado do seu teste for maior que o do oponente, você evita o ataque. Você só pode usar este poder se estiver usando uma arma corpo a corpo leve ou ágil. Pré-requisito: Esgrimista."
            },
            {
                name: "Apostador",
                description: "Você pode gastar um dia para encontrar e participar de uma mesa de wyrt ou outro jogo de azar. Escolha um valor e faça um teste de Jogatina contra a CD correspondente: T$ 100 (CD 15), T$ 200 (CD 20), T$ 400 (CD 25), T$ 800 (CD 30), T$ 1.600 (CD 35) e assim por diante. Se passar, você ganha o valor escolhido (ou um item ou favor equivalente, a critério do mestre). Se falhar, perde esse mesmo o valor. A critério do mestre, o lugar onde você está pode limitar ou impossibilitar o uso deste poder. Pré-requisito: treinado em Jogatina."
            },
            {
                name: "Ardil Afiado",
                description: "Você pode usar Audácia em testes de manobra. Se fizer isso contra um oponente desprevenido, soma o dobro do Carisma no teste. Pré-requisitos: Car 1, treinado em Enganação."
            },
            {
                name: "Ataque Acrobático",
                description: "Quando se aproxima de um inimigo com um salto ou pirueta (em termos de jogo, usando Atletismo ou Acrobacia para se mover) e o ataca no mesmo turno, você recebe +2 nesse teste de ataque e na rolagem de dano."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Aventureiro Ávido",
                description: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional. Se possuir o poder Surto Heroico, em vez disso seu custo diminui em -2 PM."
            },
            {
                name: "Bloqueio Desconcertante",
                description: "Quando uma criatura erra um ataque corpo a corpo contra você, ou quando você bloqueia um ataque com Aparar, você pode gastar 1 PM. Se você fizer isso, a criatura fica desprevenida contra seu próximo ataque feito até o fim do seu próximo turno. Pré-requisito: Esgrimista."
            },
            {
                name: "Bom de Trago",
                description: "Uma vez por rodada, você pode ingerir uma bebida, preparado ou poção que esteja empunhando como uma ação livre."
            },
            {
                name: "Bravatas",
                description: "Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes atrelada a uma restrição, como \"Navegarei até Galrasia com um barco furado!\". Todas as Bravatas compartilham as seguintes regras.\n• Uma Bravata deve envolver um desafio real. Em termos de jogo, deve ser uma ação com ND igual ou maior que o nível do bucaneiro.\n• Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.\n• Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso aconteça perto do fim da aventura, o benefício pode se estender até a próxima."
            },
            {
                name: "Bravata Audaz",
                description: "Você jura fazer uma façanha específica, como roubar o tesouro de Sckhar ou ganhar um beijo do príncipe e da princesa até o fim do baile. Se cumprir a bravata, seus PM aumentam em +2 por nível de bucaneiro até o fim da aventura."
            },
            {
                name: "Bravata Imprudente",
                description: "Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição a sua escolha, como lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc. Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o fim da aventura."
            },
            {
                name: "Charme Cafajeste",
                description: "Você aprende e pode lançar Enfeitiçar (atributo- -chave Carisma). A CD para resistir a esta habilidade aumenta em +2 para criaturas inamistosas e em +5 para criaturas hostis. Esta não é uma habilidade mágica e provém de sua habilidade de cativar seus adversários (veja “Magias Simuladas”, p. 44). Pré-requisitos: treinado em Enganação, 3º nível de bucaneiro."
            },
            {
                name: "Cobrir de Pólvora",
                description: "Você pode gastar uma ação de movimento, 1 PM e uma bala de arma de fogo para cobrir uma criatura em alcance curto com uma pequena quantidade de pólvora. O alvo fica cego por 1 rodada (Ref CD Car evita) e, até o fim da cena, o próximo ataque contra ele causa +1d6 pontos de dano de fogo e deixa-o em chamas."
            },
            {
                name: "Cortejo de Espadas",
                description: "Quando você faz um teste de Acrobacia para passar por um inimigo, o espaço ocupado por esse inimigo não conta como terreno difícil e ele só pode usar Iniciativa para o teste oposto. Se você vencer esse teste, recebe +2 na Defesa e em Reflexos contra esse inimigo por 1 rodada. Pré-requisito: treinado em Acrobacia."
            },
            {
                name: "Dançar nas Cordas",
                description: "Se você usar Ataque Acrobático tendo vencido um teste oposto para passar pelo espaço de um inimigo, os bônus fornecidos por esse poder aumentam para +5 e se aplicam a todos os seus ataques contra esse inimigo nessa rodada. Pré-requisito: Ataque Acrobático."
            },
            {
                name: "En Garde",
                description: "Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando uma arma corpo a corpo leve ou ágil, você recebe +2 na margem de ameaça com essas armas e +2 na Defesa. Pré-requisito: Esgrimista."
            },
            {
                name: "Entrada Triunfal",
                description: "Se um combate começar e você for o primeiro na iniciativa, recebe uma quantidade de PV temporários igual à metade de seus PV máximos."
            },
            {
                name: "Esgrima Sambur",
                description: "Se estiver empunhando duas armas corpo a corpo leves ou ágeis e fizer a ação agredir, você pode gastar 1 PM para fazer dois ataques, um com cada arma (se tiver Ambidestria ou Estilo de Duas Armas, em vez disso não sofre penalidade para usá-los). Além disso, se tiver o poder Aparar, pode usá-lo uma segunda vez na rodada. Pré-requisito: Esgrimista."
            },
            {
                name: "Esgrimista",
                description: "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 1."
            },
            {
                name: "Estampido Ensurdecedor",
                description: "Quando faz um ataque à distância com uma arma de fogo, você pode pagar 1 PM para deixar todas as criaturas adjacentes a você abaladas e surdas (Fort CD Car reduz a duração das condições para 1 rodada). Pré-requisito: Grudar o Cano."
            },
            {
                name: "Estocada no Flanco",
                description: "Uma vez por rodada, quando vence um teste oposto para passar por um inimigo, você pode gastar 2 PM para fazer um ataque contra ele. Se você acertar o ataque e causar dano de corte ou perfuração, o inimigo fica sangrando. Pré-requisito: Cortejo de Espadas."
            },
            {
                name: "Flagelo dos Mares",
                description: "Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de incutir medo em seus inimigos. Pré-requisito: treinado em Intimidação."
            },
            {
                name: "Folião",
                description: "Você sabe fazer amizades durante festas, de noitadas em tavernas a bailes na corte. Nesses locais, você recebe +2 em testes de perícias de Carisma e a atitude de todas as pessoas em relação a você melhora em uma categoria. Pré-requisito: Car 1."
            },
            {
                name: "Gole da Coragem",
                description: "Uma vez por cena, quando ingerir uma bebida, preparado ou poção, você recebe uma ação padrão adicional nesse turno."
            },
            {
                name: "Golpe Humilhante",
                description: "Você pode gastar 2 PM para humilhar uma criatura em alcance curto. Até o fim da cena, sempre que você acertar um ataque nessa criatura, ela sofre uma penalidade de -1 na Defesa. A penalidade é cumulativa, limitada pelo seu Carisma e dura até o fim da cena."
            },
            {
                name: "Grudar o Cano",
                description: "Quando faz um ataque à distância com uma arma de fogo contra um oponente adjacente, você não sofre a penalidade de -5 no teste de ataque e aumenta seu dano em um passo. Pré-requisitos: treinado em Luta, Pistoleiro."
            },
            {
                name: "Introdução Calorosa",
                description: "Na primeira rodada de um combate, você pode gastar uma ação a para se apresentar. Veja o quadro 1-17 da página 60 do suplemento Heróis de Arton para os tipos de ação que você pode gastar e seus respectivos benefícios. Você recebe todos os benefícios das ações anteriores e eles duram até o fim da cena."
            },
            {
                name: "Lobo do Mar",
                description: "Você já viu quase todo o mundo e almeja ver o resto. Quando você chega a um lugar no qual nunca esteve, pelo resto da aventura o custo de Audácia diminui em -1 PM e você pode usá-la em testes de ataque (ambos nesse lugar). Pré-requisito: 17º nível de bucaneiro."
            },
            {
                name: "Lorotas da Terra e do Mar",
                description: "Você pode gastar 10 minutos para contar uma mentira sobre seu passado. Escolha uma cena de uma de suas aventuras e reconte-a de forma “criativa” para um NPC que não a testemunhou. Então faça um teste de Enganação (CD 15 + 5 para cada vez que usou este poder na mesma aventura). Se passar, pode usar um poder qualquer cujos pré- -requisitos cumpra e que seja relacionado à sua mentira (a critério do mestre), até o fim do dia ou até usar este efeito novamente. Se falhar, não pode mais usar este efeito até o fim da aventura. Pré-requisitos: treinado em Enganação, 11º nível de bucaneiro."
            },
            {
                name: "Onda de Sangue",
                description: "Sempre que você deixa alguém sangrando, a perda de vida causada por sangramento aumenta em um passo (cumulativo até um máximo de d12) e a criatura falha automaticamente em seu próximo teste de Constituição para remover essa condição. Pré-requisito: Estocada no Flanco."
            },
            {
                name: "Passo Das Ondas",
                description: "Uma vez por rodada, quando acerta um ataque em um inimigo, você pode gastar 2 PM para se mover até a metade do seu deslocamento. Esse deslocamento ignora terreno difícil e não ativa reações dos inimigos (como pelo poder Ataque Reflexo). Pré-requisito: Pernas do Mar."
            },
            {
                name: "Pernas do Mar",
                description: "Você recebe +2 em Acrobacia e Atletismo. Além disso, quando está se equilibrando ou escalando, você não fica desprevenido e seu deslocamento não é reduzido à metade."
            },
            {
                name: "Pirouette",
                description: "Enquanto está sob efeito de En Garde, você pode gastar uma ação de movimento para receber +5 na Defesa por 1 rodada. Pré-requisito: En Garde."
            },
            {
                name: "Pistoleiro",
                description: "Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas."
            },
            {
                name: "Presença Paralisante",
                description: "Você soma seu Carisma em Iniciativa e, se for o primeiro na iniciativa, ganha uma ação padrão extra na primeira rodada. Pré-requisitos: Car 1, 4º nível de bucaneiro."
            },
            {
                name: "Remise",
                description: "Enquanto está sob efeito de En Garde, uma vez por rodada, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional. Pré-requisitos: En Garde, 7º nível de bucaneiro."
            },
            {
                name: "Ripostar",
                description: "Quando usa a habilidade aparar e evita o ataque, você pode gastar 1 PM. Se fizer isso, pode fazer um ataque corpo a corpo imediato contra o inimigo que o atacou (se ele estiver em alcance). Pré-requisitos: Aparar, 12º nível de bucaneiro."
            },
            {
                name: "Sucesso Atrai Sucesso",
                description: "Você pode gastar 2 PM para invocar uma onda de boa sorte. Sempre que fizer um acerto crítico em um inimigo, você recebe um bônus cumulativo de +2 nas rolagens de dano (limitado pelo seu Carisma) até o fim da cena."
            },
            {
                name: "Touché",
                description: "Quando se aproxima de um inimigo e o ataca com uma arma corpo a corpo leve ou ágil no mesmo turno, você pode gastar 2 PM para aumentar seu dano em um passo e receber +5 na margem de ameaça neste ataque. Pré-requisitos: Esgrimista, 10º nível de bucaneiro."
            },
            {
                name: "Esquiva Sagaz",
                description: "No 3º nível, você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Panache",
                description: "A partir do 5º nível, sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Evasão Aprimorada",
                description: "A partir do 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 10,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Sorte de Nimb",
                description: "No 20º nível, você encara os piores desafios e ri na cara deles — pois sabe que tem a sorte ao seu lado. Quando faz um teste, você pode gastar 5 PM para rolá-lo novamente. Qualquer resultado 11 ou mais na segunda rolagem será considerado um 20 natural.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Escola de Duelo (Duelista)",
                description: "No 2º nível, escolha uma escola de duelo entre as seguintes. Uma vez feita, essa escolha não pode ser mudada.\n\n• Escola Ambidestra. Se estiver empunhando duas armas (e pelo menos uma delas for leve), você recebe +2 na Defesa e em Reflexos.\n\n• Escola Clássica. Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 em rolagens de dano com essa arma.\n\n• Escola de Tiro. Você recebe proficiência com armas de fogo leves e de uma mão. Caso receba essa proficiência novamente, com essas armas você pode usar suas habilidades de bucaneiro normalmente usadas com armas corpo a corpo leves ou ágeis.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Truques de Capa (Duelista)",
                description: "A partir do 4º nível, se estiver usando uma capa esvoaçante (ou outro item semelhante aprovado pelo mestre), você pode gastar 2 PM e a ação indicada para gerar um dos efeitos a seguir.\n\n• Capa Inoportuna (Livre). Reduz a ação necessária para fintar em um passo até o fim do seu turno.\n\n• Distração Oportuna (Reação). Quando faz um teste de Reflexos ou Vontade, você recebe +5 nesse teste.\n\n• Efeito Dramático (Livre). Você recebe +5 em um teste de perícia baseada em Carisma feito nesse turno.\n\n• Impulso (Livre). Você recebe deslocamento +9m e +5 em Acrobacia e Atletismo por 1 rodada.\n\n• Paraquedas (Reação). Quando cai, você reduz o dano da queda em 6d6.\n\n• Rasgar a Capa (Reação). Quando sofre dano, você reduz esse dano à metade. Fazer isso destrói a capa.",
                default: true,
                nivel: 4,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Técnica Avançada (Duelista)",
                description: "No 10º nível, você aprende uma técnica de combate conforme sua escola de duelo. Você só pode usar esta habilidade se estiver usando sua escola.\n\n• Escola Ambidestra. Uma vez por rodada, se uma criatura atacá-lo e errar, você pode gastar 1 PM para fazer um ataque corpo a corpo contra essa criatura (desde que ela esteja em seu alcance).\n\n• Escola Clássica. O dano de sua escola aumenta para +5. Além disso, uma vez por rodada, quando usa a ação agredir, você pode gastar 1 PM. Se fizer isso e pelo menos um de seus ataques for um acerto crítico, você pode fazer um ataque adicional nessa ação.\n\n• Escola de Tiro. Seu dano com armas de fogo aumenta em um passo e seu alcance com essas armas aumenta em uma categoria (de curto para médio, de médio para longo).",
                default: true,
                nivel: 10,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Duelista Lendário (Duelista)",
                description: "No 20º nível, seu domínio de sua escola atinge o ápice. Quando faz um ataque utilizando sua escola de duelo, você pode gastar 1 PM para rolá-lo novamente. Quando um oponente o ataca enquanto você está usando sua escola de duelo, você pode gastar 1 PM para forçá-lo a rolar o teste novamente (apenas uma vez por ataque).",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Caçador",
        variante: {
            nome: "Seteiro",
            treinedSkills: ["Pontaria", "Sobrevivência"],
            treinedSkillsOr: [],
            skills: ["Adestramento", "Atletismo", "Cavalgar ", "Cura", "Fortitude", "Furtividade", "Iniciativa", "Investigação", "Luta", "Ofício", "Percepção", "Reflexos"],
            extraSkills: 6,
            proficiencies: [
                "Armas marciais"
            ],
        },
        descricao: "Um exterminador de monstros e mestre da sobrevivência em áreas selvagens.",
        atributo: "Força ou Destreza",
        pv: 16,
        pv_per_level: 4,
        pm: 4,
        treinedSkills: ["Sobrevivência"],
        treinedSkillsOr: ["Luta", "Pontaria"],
        skills: ["Adestramento", "Atletismo", "Cavalgar ", "Cura", "Fortitude", "Furtividade", "Iniciativa", "Investigação", "Luta", "Ofício", "Percepção", "Pontaria", "Reflexos "],
        extraSkills: 4,
        proficiencies: [
            "Armas marciais",
            "Escudos"
        ],
        abilities: [
            {
                name: "Marca da Presa",
                description: "Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (veja a tabela da classe).",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Rastreador",
                description: "Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer penalidades no teste de Sobrevivência. Poder de Caçador. No 2º nível, e a cada nível seguinte, você recebe uma habilidade da lista a seguir.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Ambidestria",
                description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre -2 em todos os testes de ataque até o seu próximo turno. Pré-requisito: Des 2."
            },
            {
                name: "Armadilha Alquímica",
                description: "Quando prepara uma armadilha, você pode gastar uma dose de um preparado alquímico. Se fizer isso, as criaturas afetadas pela armadilha também sofrem os efeitos desse preparado automaticamente. Prérequisito: Armadilheiro."
            },
            {
                name: "Armadilha: Arataca",
                description: "A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab)."
            },
            {
                name: "Armadilha: Espinhos",
                description: "A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade."
            },
            {
                name: "Armadilha: Laço",
                description: "A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab)."
            },
            {
                name: "Armadilha: Rede",
                description: "Todas as criaturas na área ficam enredadas e não podem sair da área. Uma vítima pode se libertar com uma ação padrão e um teste de Força ou Acrobacia (CD 25). Além disso, a área ocupada pela rede é considerada terreno difícil. Nesta armadilha você escolhe quantas criaturas precisam estar na área para ativá-la."
            },
            {
                name: "Armadilheiro",
                description: "A CD para encontrar e resistir às suas armadilhas aumenta em +5 e você soma sua Sabedoria ao dano delas. Pré-requisitos: um poder de armadilha, 5º nível de caçador."
            },
            {
                name: "Arqueiro",
                description: "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 1."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Avanço do Predador",
                description: "Uma vez por rodada, quando uma criatura marcada por sua Marca da Presa se afasta voluntariamente de você, você pode gastar 1 PM para se mover na direção dela (até o limite do seu deslocamento). Pré-requisitos: Ímpeto, 11° nível de caçador."
            },
            {
                name: "Batedor Marcial",
                description: "Você pode usar testes de Sobrevivência no lugar de testes de Guerra. Além disso, se passar em um teste para analisar terreno, além de quaisquer benefícios encontrados, na próxima vez que usar Marca da Presa nessa cena você recupera 1 PM."
            },
            {
                name: "Bote",
                description: "Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária. Pré-requisito: Ambidestria, 6º nível de caçador."
            },
            {
                name: "Camuflagem",
                description: "Você pode gastar 2 PM para se esconder mesmo sem camuflagem ou cobertura disponível. Pré-requisito: 6º nível de caçador."
            },
            {
                name: "Chuva de Lâminas",
                description: "Uma vez por rodada, quando usa Ambidestria, você pode pagar 2 PM para fazer um ataque adicional com sua arma primária. Pré-requisitos: Des 4, Ambidestria, 12º nível de caçador."
            },
            {
                name: "Companheiro Animal",
                description: "Você recebe um companheiro animal. Veja o quadro na página 62. Pré-requisito: Car 1, treinado em Adestramento."
            },
            {
                name: "Curandeiro dos Ermos",
                description: "Você pode usar Ervas Curativas como uma ação de movimento e os dados de cura dessa habilidade aumentam para d8. Pré-requisito: Ervas Curativas."
            },
            {
                name: "Elo com a Natureza",
                description: "Você soma sua Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza (atributo-chave Sabedoria). Pré-requisitos: Sab 1, 3º nível de caçador. e"
            },
            {
                name: "Elo Com a Natureza Maior",
                description: "Escolha duas magias entre Abençoar Alimentos, Acalmar Animal, Alarme, Aviso, Conjurar Armadilhas , Detectar Ameaças, Orientação ou Suporte Ambiental. Você aprende e pode lançar as magias escolhidas (atributo- -chave Sabedoria) e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um druida do seu nível. Você pode escolher este poder mais vezes para magias diferentes. Pré-requisito: Elo com a Natureza."
            },
            {
                name: "Emboscar",
                description: "Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate. Pré-requisito: treinado em Furtividade."
            },
            {
                name: "Empatia Selvagem",
                description: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja Diplomacia, na página 118)."
            },
            {
                name: "Escaramuça",
                description: "Quando se move 6m ou mais, você recebe +2 na Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver vestindo armadura pesada. Pré-requisito: Des 2, 6º nível de caçador."
            },
            {
                name: "Escaramuça Superior",
                description: "Quando usa Escaramuça, seus bônus aumentam para +5 na Defesa e Reflexos e +1d12 em rolagens de dano. Pré-requisitos: Escaramuça, 12º nível de caçador."
            },
            {
                name: "Espreitar",
                description: "Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade Inimigo."
            },
            {
                name: "Ervas Curativas",
                description: "Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo."
            },
            {
                name: "Explorador Viajado",
                description: "Você pode escolher dois tipos de terrenos extras para sua habilidade Explorador. Você pode escolher este poder mais vezes para tipos de terrenos adicionais. Pré-requisito: 5º nível de caçador."
            },
            {
                name: "Flecheiro",
                description: "Você pode usar Sobrevivência no lugar de Ofício para fabricar munições e pode fabricar munições com uma melhoria. Pré-requisito: 3° nível de caçador."
            },
            {
                name: "Golpe do Predador",
                description: "Se você causar dano em uma criatura analisada por sua Marca da Presa, ela fica sangrando. Se ela já estiver sangrando, a perda de vida por sangramento aumenta em um passo (cumulativo até um máximo de d12) e ela falha automaticamente em seu próximo teste de Constituição para remover essa condição."
            },
            {
                name: "Herói do Povo",
                description: "Você recebe +2 na Defesa e em testes de resistência. Além disso, sempre que acertar um ataque em um vilão que esteja ameaçando pessoas comuns (um bandido assolando camponeses, um nobre tirano, um monstro devorando viajantes...), você recebe 2 PM temporários. Você pode receber um número máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena. Pré-requisito: 5º nível de caçador."
            },
            {
                name: "Identificar Presas",
                description: "Você pode identificar criaturas como uma ação de movimento. Além disso, se passar nesse teste, para cada informação obtida você recebe +1 em rolagens de dano contra criaturas dessa espécie até o fim da cena."
            },
            {
                name: "Ímpeto",
                description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada."
            },
            {
                name: "Inimigo de (Criatura)",
                description: "Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras vezes para inimigos diferentes."
            },
            {
                name: "Lâminas Guardiãs",
                description: "Enquanto você estiver empunhando duas armas corpo a corpo, recebe +2 na Defesa e em testes de resistência contra inimigos em seu alcance natural. Pré-requisitos: Ambidestria, 5° nível de caçador."
            },
            {
                name: "Lanceiro",
                description: "Você recebe +2 em testes de ataque e rolagens de dano com lanças (exceto lanças montadas e de justa). Além disso, se estiver empunhando uma dessas armas com as duas mãos, seu dano com ela aumenta em um passo e ela é considerada uma arma alongada."
            },
            {
                name: "Olho do Falcão",
                description: "Você pode usar a habilidade Marca da Presa em criaturas em alcance longo."
            },
            {
                name: "Pega!",
                description: "Você pode gastar uma ação de movimento e 1 PM para fazer a manobra agarrar contra uma criatura em alcance curto usando Adestramento em vez de Luta, usando seu companheiro animal para isso. Se o alvo estiver sob efeito de sua Marca da Presa, você soma os dados dessa habilidade como um bônus no teste. A criatura permanece agarrada até vencer um teste de manobra contra seu companheiro animal (como acima) ou até você mandar seu animal soltá-la (uma ação livre). Pré-requisito: Companheiro Animal."
            },
            {
                name: "Ponto Fraco",
                description: "Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse bônus dobra com a habilidade Inimigo."
            },
            {
                name: "Primeiro Sangue",
                description: "Na primeira rodada de cada combate, você recebe +2 em testes de ataque e todos os seus dados de dano aumentam em dois passos. Pré-requisito: Emboscar."
            },
            {
                name: "Sequência Dilaceradora",
                description: "Quando usa Ambidestria, se acertar ambos os ataques, você pode gastar 1 PM para causar +2d8 pontos de dano no segundo ataque. Pré-requisitos: Ambidestria, 11° nível de caçador."
            },
            {
                name: "Sequência do Predador",
                description: "Quando usa Ambidestria com armas que causam tipos de dano diferentes, se acertar ambos os ataques, você pode gastar 1 PM para fazer uma manobra entre desarmar, derrubar ou quebrar contra o mesmo alvo. Pré-requisitos: Ambidestria, 8° nível de caçador."
            },
            {
                name: "Sombra dos Ermos",
                description: "Você pode gastar uma ação de movimento e 1 PM para receber camuflagem leve com duração sustentada. Pré-requisito: Camuflagem."
            },
            {
                name: "Tiro de Abate",
                description: "Quando usa a ação mirar, até o fim do turno você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância, e os dados extras de sua habilidade Marca da Presa também são multiplicados em caso de acerto crítico. Pré-requisitos: Sab 1, Espreitar."
            },
            {
                name: "Tiro Trespassante",
                description: "Quando você faz um ataque à distância com uma arma de disparo e reduz os pontos de vida do alvo a 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura que esteja adiante na mesma linha, usando a mesma arma e munição do ataque original. Pré-requisito: Arqueiro."
            },
            {
                name: "Tempestade de Lâminas",
                description: "Quando usa Chuva de Lâminas, você pode fazer um ataque adicional com sua arma secundária (para um total de quatro ataques na ação). Pré-requisitos: Chuva de Lâminas, 17º nível de caçador."
            },
            {
                name: "Tocaia Habilidosa",
                description: "Sua Marca da Presa também fornece +1 na CD de suas habilidades contra a criatura marcada para cada PM gasto. Esse bônus dobra com a habilidade Inimigo."
            },
            {
                name: "Último Sangue",
                description: "Seus ataques contra criaturas sangrando causam um dado extra de dano do mesmo tipo. Pré-requisito: 5º nível de caçador."
            },
            {
                name: "Explorador",
                description: "No 3º nível, escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície, subterrâneo ou urbano. A partir do 11º nível, você também pode escolher área de Tormenta. Quando estiver no tipo de terreno escolhido, você soma sua Sabedoria (mínimo +1) na Defesa e nos testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência. A cada quatro níveis, escolha outro tipo de terreno para receber o bônus ou aumente o bônus em um tipo de terreno já escolhido em +2.",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Caminho do Explorador",
                description: "No 5º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Mestre Caçador",
                description: "No 20º nível, você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, quando usa a habilidade, pode pagar 5 PM para aumentar sua margem de ameaça contra a criatura em +2. Se você reduz uma criatura contra a qual usou Marca da Presa a 0 pontos de vida, recupera 5 PM.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Caminho do Atirador (Seteiro)",
                description: "Você abriu mão do treinamento convencional de um caçador para abraçar o caminho do atirador. Suas habilidades de seteiro relacionadas a ataques e armas só funcionam com arcos e bestas.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Tiro de Supressão (Seteiro)",
                description: "Sempre que você causa dano com um arco ou besta em uma criatura que esteja sob efeito de sua Marca da Presa, essa criatura sofre uma penalidade cumulativa de -1 em rolagens de dano, até um valor igual à quantidade de PM gasta em Marca da Presa, até o fim da cena.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Evasão (Seteiro)",
                description: "A partir do 3° nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Disparo Constritor (Seteiro)",
                description: "No 5° nível, quando usa a ação mirar, você pode pagar 2 PM. Se fizer isso, pode executar uma manobra entre desarmar, empurrar ou quebrar com um de seus ataques à distância feitos até o fim desse turno.",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Rajada de Flechas (Seteiro)",
                description: "A partir do 10° nível, você pode gastar uma ação completa e 2 PM para alvejar uma área com seus disparos. Escolha um ponto no alcance de sua arma, então faça um ataque à distância e compare-o com a Defesa de cada inimigo num raio de 3m dele. Então faça uma rolagem de dano, com um bônus cumulativo de +2 para cada acerto, e aplique-a em cada inimigo atingido. Você gasta apenas uma munição, independente de quantos inimigos atacou.",
                default: true,
                nivel: 10,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Sentinela (Seteiro)",
                description: "No 15° nível, uma vez por rodada, quando uma criatura sob efeito de sua Marca da Presa acerta um ataque contra um aliado, você pode gastar 1 PM para fazer um ataque contra essa criatura.",
                default: true,
                nivel: 15,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Mestre do Disparo (Seteiro)",
                description: "No 20° nível, você pode usar sua Marca da Presa como uma ação livre. Além disso, uma vez por rodada, quando faz um ataque com um arco ou besta contra um alvo de sua Marca da Presa, você pode fazer um ataque adicional contra ele.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Armadilhas",
                description: "Alguns poderes do caçador são Armadilhas. Esses poderes compartilham as seguintes regras.\n• Preparar uma armadilha gasta uma ação completa e 3 PM.\n• Uma armadilha afeta uma área de 3m de lado adjacente a você e é acionada pela primeira criatura que entrar na área.\n• Uma criatura que o veja preparando a armadilha saberá que ela está lá. Uma criatura que não o veja preparando a armadilha pode encontrá-la se gastar uma ação padrão procurando e passar em um teste de Investigação (CD Sab).\n• É possível aplicar veneno a uma armadilha, como se ela fosse uma arma. Você não precisa de nenhum item para criar a armadilha, pois usa materiais naturais, como galhos e cipós. Porém, precisa estar em um ambiente propício, como uma floresta, um beco repleto de entulhos etc.",
                default: true,
                nivel: 0,
                mainclassOnly: true,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Cavaleiro",
        variante: {
            nome: "Vassalo",
            proficiencies: [
                "Armas marciais",
                "Escudos"
            ],
        },
        descricao: "Um combatente honrado, especializado em suportar dano e proteger os outros.",
        atributo: "Força",
        pv: 20,
        pv_per_level: 5,
        pm: 3,
        treinedSkills: ["Fortitude", "Luta"],
        treinedSkillsOr: [],
        skills: ["Adestramento", "Atletismo", "Cavalgar", "Diplomacia", "Guerra", "Iniciativa", "Intimidação", "Nobreza", "Percepção", "Vontade"],
        extraSkills: 2,
        proficiencies: [
            "Armas marciais",
            "Armaduras pesadas",
            "Escudos"
        ],
        abilities: [
            {
                name: "Código de Honra",
                description: "Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Baluarte",
                description: "Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7º nível, quando usa esta habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo bônus aos outros. A partir do 15º nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Duelo",
                description: "A partir do 2º nível, você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Armas da Cavalaria",
                description: "Você recebe +2 em testes de ataque e rolagens de dano com espadas longas e bastardas, escudos leves e pesados, lanças montadas e de justa, maças e alabardas. Pré-requisito: 5º nível de cavaleiro."
            },
            {
                name: "Armadura da Honra",
                description: "No início de cada cena, você recebe uma quantidade de pontos de vida temporários igual a seu nível + seu Carisma. Os PV temporários duram até o final da cena."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Autoridade Feudal",
                description: "Você pode gastar uma hora e 2 PM para conclamar o povo a ajudá-lo (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo seu reino). Em termos de jogo, essas pessoas contam como um parceiro iniciante de um tipo a sua escolha (aprovado pelo mestre) que lhe acompanha até o fim da aventura. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre). Pré-requisito: 6º nível de cavaleiro."
            },
            {
                name: "Cavaleiro das Paixões",
                description: "Você recebe +5 em testes de atributo para usar suas Paixões. Pré-requisito: um poder de Paixão."
            },
            {
                name: "Cavaleiro Bandido",
                description: "Você abandonou sua honra em favor de vitórias fáceis. Você perde as habilidades Código de Honra e Duelo, mas recebe Ataque Furtivo como se fosse um ladino do seu nível de cavaleiro. Pré-requisitos: Código de Honra, Duelo."
            },
            {
                name: "Cavaleiro Sagrado",
                description: "Você recebe um poder de paladino cujos pré-requisitos cumpra, usando seu nível de cavaleiro como nível de paladino. Pré-requisitos: treinado em Religião, devoto de uma divindade que aceite paladinos."
            },
            {
                name: "Desprezar os Covardes",
                description: "Você recebe redução de dano 5 se estiver caído, desprevenido ou flanqueado."
            },
            {
                name: "Duelista Escudado",
                description: "Enquanto sua habilidade Duelo estiver ativa e você estiver empunhando um escudo, você recebe RD igual ao bônus concedido pela habilidade."
            },
            {
                name: "Duelo Irrecusável",
                description: "Enquanto sua habilidade Duelo estiver ativa, a criatura escolhida sofre uma penalidade em testes de ataque e rolagens de dano contra seus aliados igual ao bônus concedido pela habilidade."
            },
            {
                name: "Escudeiro",
                description: "Você recebe os serviços de um escudeiro, um parceiro especial que cuida de seu equipamento. Suas armas fornecem +1 em rolagens de dano e sua armadura concede +1 na Defesa. Além disso, você pode pagar 1 PM para receber ajuda do escudeiro em combate. Você recebe uma ação de movimento que pode usar para se levantar, sacar um item ou trazer sua montaria. O escudeiro não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com um mês de trabalho."
            },
            {
                name: "Especialização em Armadura",
                description: "Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Bastião). Pré-requisito: 12º nível de cavaleiro."
            },
            {
                name: "Estandarte",
                description: "Sua flâmula torna-se um símbolo de inspiração. No início de cada cena, você e todos os aliados que possam ver seu estandarte recebem um número de PM temporários igual ao seu Carisma (mínimo 1). Esses pontos temporários desaparecem no final da cena. Pré-requisito: Título, 14º nível de cavaleiro."
            },
            {
                name: "Etiqueta",
                description: "Você recebe +2 em Diplomacia e Nobreza e quando faz um teste dessas perícias pode gastar 1 PM para rolá-lo novamente."
            },
            {
                name: "Grão-Mestre",
                description: "Você é um cavaleiro lendário. Talvez seja um oficial de alto escalão — ou mesmo o líder — de uma ordem de cavalaria, talvez seja apenas um cavaleiro errante famoso no Reinado e além. Você recebe +5 em testes de Diplomacia e Nobreza e, quando ataca um inimigo contra o qual esteja recebendo os bônus de Duelo, ou quando faz uma investida, você causa dois dados de dano extras do mesmo tipo. Pré-requisito: 17º nível de cavaleiro."
            },
            {
                name: "Honra Compartilhada",
                description: "Quando usa o poder Armadura da Honra, você pode fornecer seu benefício a todos os aliados em alcance curto. Pré-requisito: Armadura da Honra."
            },
            {
                name: "Inércia do Aço",
                description: "Quando acerta um ataque com uma arma de duas mãos em uma criatura, você pode gastar 3 PM para causar metade do dano desse ataque a cada inimigo adjacente a essa criatura. Pré-requisito: 5º nível de cavaleiro."
            },
            {
                name: "Investida Convicta",
                description: "Quando faz uma investida, você pode gastar 1 PM para somar seu Carisma nos testes de ataque e rolagens de dano dela."
            },
            {
                name: "Investida Defensiva",
                description: "Quando faz uma investida, você não sofre a penalidade de -2 na Defesa e seu deslocamento não ativa reações de inimigos (como por Ataque Reflexo)."
            },
            {
                name: "Investida Destruidora",
                description: "Quando faz a ação investida, você pode gastar 2 PM. Se fizer isso, causa +2d8 pontos de dano. Você deve usar esta habilidade antes de rolar o ataque."
            },
            {
                name: "Mestre das Posturas",
                description: "O custo para assumir uma postura de combate diminui em -1 PM e você pode assumir e manter duas posturas ao mesmo tempo. Pré-requisitos: dois poderes de postura, 11º nível de cavaleiro."
            },
            {
                name: "Montaria Corajosa",
                description: "Sua montaria concede +1d6 em rolagens de dano corpo a corpo (cumulativo com qualquer bônus que ela já forneça como parceiro). Pré-requisito: Montaria."
            },
            {
                name: "Poderes de Paixão",
                description: "Paixões são aspectos da vida de um cavaleiro aos quais ele se entrega com dedicação total. São crenças tão importantes que, em nome delas, ele é capaz de se inspirar e sobrepujar quaisquer limitações. Contudo, se um cavaleiro é derrotado enquanto está inspirado por sua Paixão, a vergonha pode abalá-lo profundamente. Esses poderes compartilham as seguintes regras.\n• Evocar uma Paixão é uma ação livre.\n• Quando evoca uma Paixão, você faz um teste de Carisma (CD 10 +5 por teste dessa Paixão na mesma aventura). Se passar, recebe o benefício da Paixão. Se falhar, não pode mais usá-la até o fim da aventura.\n• Paixões que não têm um efeito instantâneo duram até o fim da cena.\n• Sempre que rola 20 natural em um teste de Paixão, ou obtém uma vitória significativa em uma cena em que usou uma Paixão com sucesso, você recebe um bônus permanente e cumulativo de +1 nos testes de atributo para ativá-la.\n• Sempre que rola 1 natural em um teste de Paixão, ou sofre uma falha significativa em uma cena em que usou uma Paixão com sucesso, você recebe uma penalidade permanente e cumulativa de -1 nos testes de atributo para ativá-la.\n\nPaixões e Resultados Significativos\nSempre que o cavaleiro evoca uma Paixão, está colocando à prova um sentimento que faz parte das fundações de sua alma. Nenhum cavaleiro que tenha uma Paixão ousa tratá-la como uma mera ferramenta, nem espera que o objeto de sua Paixão o defenda. Pelo contrário: ele está disposto a entregar a vida pelo objeto da Paixão. Assim, uma “vitória significativa” ao usar uma Paixão nunca se refere ao próprio cavaleiro. Para que uma vitória seja significativa, deve beneficiar diretamente o alvo da Paixão e não pode servir a interesses pessoais ou egoístas do cavaleiro. Por exemplo, uma cavaleira que tenha Paixão: Amor (sua esposa) pode obter uma vitória significativa ao salvá-la de um vilão, mas não ao derrotar esse mesmo vilão se ela não estiver sendo ameaçada por ele. Se a mesma cavaleira tiver Paixão: Lealdade (a Ordem da Luz), pode obter uma vitória significativa ao defender o Castelo da Luz contra uma invasão, mas não ao vencer os mesmos inimigos em uma circunstância na qual a Ordem não esteja ameaçada. Da mesma forma, uma “falha significativa” é uma circunstância em que o cavaleiro não consegue proteger o alvo de sua Paixão e, por omissão ou incompetência, permite que ele seja prejudicado. A mesma cavaleira teria uma falha significativa se sua esposa fosse aprisionada e levada embora pelo vilão, ou se o Castelo da Luz fosse invadido. O mestre tem a palavra final sobre o que é uma vitória ou uma falha significativas no uso de uma Paixão. Como regra geral, o jogador deve se esforçar ao máximo para proteger e beneficiar o alvo da Paixão. Se negligenciá-la ou colocá-la em segundo plano, atrás de coisas como sua própria segurança, uma recompensa ou o grupo de aventureiros, pode sofrer uma penalidade, como se tivesse rolado 1 natural em um teste de Paixão."
            },
            {
                name: "Paixão: Amor",
                description: "Ao escolher esta Paixão, decida a quem ela vai se aplicar. Pode ser um personagem específico (como um amigo, parente ou interesse romântico) ou um grupo de pessoas (como sua família). Você pode evocar esta Paixão para extrair forças desse amor. Se passar, recupera 2d4 PM por ponto de bônus máximo que sua habilidade Duelo pode fornecer."
            },
            {
                name: "Paixão: Honra",
                description: "A principal virtude de um cavaleiro, a honra é o combustível de seus feitos. Você pode evocar esta Paixão para resistir aos mais severos ferimentos. Se passar, recupera 2d12 PV por ponto de bônus máximo que sua habilidade Duelo pode fornecer."
            },
            {
                name: "Paixão: Hospitalidade",
                description: "Para um cavaleiro, a hospitalidade vai além do abrigo físico: representa também o papel do cavaleiro como guardião daqueles ao seu redor. Você pode evocar esta Paixão para proteger seus aliados. Se passar, você emana uma aura de 6m de raio; dentro dela, você e seus aliados recebem um bônus na Defesa e em testes de resistência igual ao bônus máximo que sua habilidade Duelo pode fornecer."
            },
            {
                name: "Paixão: Lealdade",
                description: "Ao escolher esta Paixão, decida a quem sua lealdade será dedicada. Pode ser um nobre, uma organização, uma região etc. Você pode evocar esta Paixão para buscar forças nesse compromisso de fidelidade. Se passar, você recebe um bônus em testes de ataque e rolagens de dano igual ao bônus máximo que sua habilidade Duelo pode fornecer."
            },
            {
                name: "Pajem",
                description: "Você recebe os serviços de um pajem, um parceiro que o auxilia em pequenos afazeres. Você recebe +2 em Diplomacia, por estar sempre aprumado, e sua condição de descanso é uma categoria acima do padrão pela situação (veja a página 106). O pajem pode executar pequenas tarefas, como entregar mensagens e comprar itens, e não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com uma semana de trabalho."
            },
            {
                name: "Posturas de Combate",
                description: "Alguns poderes do cavaleiro são Posturas de Combate. Esses poderes compartilham as seguintes regras.\n• Assumir uma postura gasta uma ação de movimento e 2 PM.\n• Os efeitos de uma postura duram até o final da cena, a menos que sua descrição diga o contrário.\n• Você só pode manter uma postura por vez."
            },
            {
                name: "Postura de Combate: Aríete Implacável",
                description: "Ao assumir esta postura, você aumenta o bônus de ataque em investidas em +2. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta o bônus de ataque em +1. Além disso, se fizer uma investida contra um construto ou objeto, causa +2d8 de dano. Você precisa se deslocar todos os turnos para manter esta postura ativa."
            },
            {
                name: "Postura de Combate: Armamento Pesado",
                description: "Para assumir esta postura, você precisa estar empunhando uma arma corpo a corpo de duas mãos. Você recebe +2 em Fortitude e em rolagens de dano com esta arma. Para cada PM adicional que você gastar quando assumir a postura, esse bônus aumenta em +1 (até um limite de +5). Além disso, quando acerta um ataque nesta postura, você pode empurrar o alvo 1,5m. Você precisa atacar todos os turnos para manter esta postura ativa."
            },
            {
                name: "Postura de Combate: Castigo de Ferro",
                description: "Sempre que um aliado adjacente sofrer um ataque corpo a corpo, você pode gastar 1 PM para fazer um ataque na criatura que o atacou."
            },
            {
                name: "Postura de Combate: Foco de Batalha",
                description: "Sempre que um inimigo atacá-lo, você recebe 1 PM temporário (cumulativos). Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena."
            },
            {
                name: "Postura de Combate: Muralha Intransponível",
                description: "Para assumir esta postura você precisa estar empunhando um escudo. Você recebe +1 na Defesa e em Reflexos. Além disso, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, não sofre nenhum dano se passar. Para cada 2 PM adicionais que gastar quando assumir a postura, aumente esse bônus em +1. Por fim, enquanto mantiver esta postura, seu deslocamento é reduzido para 3m."
            },
            {
                name: "Postura de Combate: Provocação Petulante",
                description: "Enquanto esta postura estiver ativa, todos os inimigos que iniciarem seus turnos em alcance curto devem fazer um teste de Vontade (CD Car). Se falharem, qualquer ação hostil que realizarem deve ter você como alvo (mas suas outras ações não têm esta restrição). Ações hostis incluem ataques e outras ações que causem dano e/ou condições negativas. Mental."
            },
            {
                name: "Postura de Combate: Quebra-Magia",
                description: "Você recebe resistência a magia +2. Para cada PM adicional que você gastar quando assumir esta postura, esse bônus aumenta em +1. Além disso, uma vez por rodada, quando uma criatura em seu alcance usa uma habilidade mágica, você pode gastar 1 PM para fazer um ataque corpo a corpo contra ela."
            },
            {
                name: "Postura de Combate: Sequência Blindada",
                description: "Para assumir esta postura, você precisa estar vestindo armadura pesada. Quando faz a ação agredir, você pode fazer um ataque desarmado além de seus demais ataques."
            },
            {
                name: "Postura de Combate: Torre Inabalável",
                description: "Você assume uma postura defensiva que o torna imune a qualquer tentativa de tirá-lo do lugar, de forma mundana ou mágica. Enquanto mantiver a postura, você não pode se deslocar, mas soma sua Constituição na Defesa e pode substituir testes de Reflexos e Vontade por testes de Fortitude."
            },
            {
                name: "Presença de Muralha",
                description: "Você pode gastar 1 PM para gerar uma aura com 9m de raio e duração sustentada. Cada inimigo que começar seu turno nessa área deve fazer um teste de Vontade (CD Car). Se falhar, seu deslocamento é reduzido à metade pela duração do efeito. Se passar, não é mais afetado por este efeito nesse dia. Medo."
            },
            {
                name: "Solidez",
                description: "Se estiver usando um escudo, você soma o bônus na Defesa recebido pelo escudo em testes de resistência."
            },
            {
                name: "Título",
                description: "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de cavaleiro (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte). Pré-requisitos: Autoridade Feudal, 10º nível de cavaleiro, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano."
            },
            {
                name: "Torre Armada",
                description: "Quando um inimigo erra um ataque contra você, você pode gastar 1 PM. Se fizer isso, recebe +5 em rolagens de dano contra esse inimigo até o fim de seu próximo turno."
            },
            {
                name: "Caminho do Cavaleiro",
                description: "No 5º nível, escolha entre Bastião ou Montaria.\n• Bastião. Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Especialização em Armadura).\n• Montaria. Você recebe um cavalo de guerra com o qual possui +5 em testes de Adestramento e Cavalgar. Ele fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. De acordo com o mestre, você pode receber outro tipo de montaria. Veja a lista de montarias na página 261. Caso a montaria morra, você pode comprar outra pelo preço normal e treiná-la para receber os benefícios desta habilidade com uma semana de trabalho.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Resoluto",
                description: "A partir do 11º nível, você pode gastar 1 PM para refazer um teste de resistência contra uma condição (como abalado, paralisado etc.) que esteja o afetando. O segundo teste recebe um bônus de +5 e, se você passar, cancela o efeito. Você só pode usar esta habilidade uma vez por efeito.",
                default: true,
                nivel: 11,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Bravura Final",
                description: "No 20º nível, sua virtude vence a morte. Se for reduzido a 0 ou menos PV, pode gastar 3 PM para continuar consciente e de pé. Esta habilidade tem duração sustentada. Quando se encerra, você sofre os efeitos de seus PV atuais, podendo cair inconsciente ou mesmo morrer.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Jovem Pajem (Vassalo)",
                description: "Você inicia sua carreira como um pajem, servindo a um sir ou dame mais experiente. Você se torna treinado em Adestramento ou Ofício (armeiro).",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Suserano (Vassalo)",
                description: "Escolha um membro da nobreza aprovado pelo mestre. Você serve a esse nobre, sendo oficialmente reconhecido como parte de sua corte. Os efeitos de seu status ficam a cargo do mestre mas, como regra geral, você recebe +5 em testes de Diplomacia e Intimidação ao lidar com vassalos de seu suserano de nível inferior ao seu e, nas terras dele, pode obter alojamento e alimentação sem custo. Se deixar de servir a seu suserano por qualquer motivo, você perde todos os seus PM e só pode recuperá-los após ser aceito por outro suserano.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Valete (Vassalo)",
                description: "A partir do 2º nível, você já acompanha seu senhor na corte e nos salões nobres. Você se torna treinado em Diplomacia ou Nobreza e recebe um poder de cavaleiro a sua escolha.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Escudeiro Aprendiz (Vassalo)",
                description: "A partir do 3º nível, você ajuda seu senhor na batalha. Você se torna treinado em Cavalgar e recebe proficiência com armaduras pesadas. Se já tiver proficiência com armaduras pesadas, recebe +2 na Defesa enquanto usa uma armadura pesada.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Guarda do Castelo (Vassalo)",
                description: "No 4º nível, você já patrulha as muralhas do castelo sozinho. Você se torna treinado em Intuição e recebe um poder de cavaleiro a sua escolha.",
                default: true,
                nivel: 4,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Vigilante de Estradas (Vassalo)",
                description: "A partir do 5º nível, você expande suas responsabilidades para além do castelo. Você recebe a habilidade Montaria e se torna treinado em Percepção.",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Cavaleiro do Reino (Vassalo)",
                description: "No 6º nível, você recebe o título de sir ou dame e atinge o grau mais baixo da nobreza. Você recebe uma arma, armadura ou escudo superior com duas melhorias a sua escolha e recebe um poder de cavaleiro a sua escolha.",
                default: true,
                nivel: 6,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Sargento do Reino (Vassalo)",
                description: "No 7º nível, você adquire uma posição no exército do reino. Você recebe um poder de cavaleiro ou de guerreiro a sua escolha (como um guerreiro de nível igual ao seu para propósitos de pré-requisitos).",
                default: true,
                nivel: 7,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Capitão do Reino (Vassalo)",
                description: "No 8º nível, você se torna um oficial no exército, respeitado e prestigiado por militares, nobres e plebeus. Você recebe o poder Escudeiro e a habilidade Golpe Divino (Tormenta20, p. 82), como um paladino de nível igual ao seu. Esta não é uma habilidade mágica e provém de seu senso de justiça e determinação em combate (veja “Magias Simuladas”, p. 44).",
                default: true,
                nivel: 8,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Lorde (Vassalo)",
                description: "No 9º nível você ascende dentro da nobreza, recebendo um feudo — e muitas responsabilidades. Você recebe o poder Autoridade Feudal. Se já possui esse poder, as pessoas convocadas passam a contar como um parceiro veterano. Além disso, escolha um dos caminhos a seguir.\n\n• Caminho do Soldado. Você recebe um poder de guerreiro (como um guerreiro de nível igual ao seu) a sua escolha.\n\n• Caminho do Governante. Você recebe um poder de nobre (como um nobre de nível igual ao seu) a sua escolha.",
                default: true,
                nivel: 9,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Barão (Vassalo)",
                description: "No 10º nível, você ascende dentro da nobreza e passa a receber impostos de seus plebeus. Você recebe o poder Título e um domínio de nível 1 (veja p. 314). Se já tiver um domínio, em vez disso ele recebe uma construção gratuita (cujos pré-requisitos seu domínio cumpra).",
                default: true,
                nivel: 10,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Visconde (Vassalo)",
                description: "No 11º nível, você adquire um título mais alto. Se escolheu o Caminho do Soldado, recebe +1 PV por nível de vassalo. Se escolheu o Caminho do Governante, recebe +1 em Inteligência.",
                default: true,
                nivel: 11,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Conde (Vassalo)",
                description: "A partir do 12º nível, você é um alto nobre e tem acesso a equipamentos poderosos. No início de cada aventura, você recebe um “orçamento” de T$ 30.000 que pode gastar em itens mágicos. Esses itens devem ser devolvidos ou reembolsados no fim da aventura. Além disso, recebe um poder de cavaleiro ou geral a sua escolha.",
                default: true,
                nivel: 12,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Marquês (Vassalo)",
                description: "No 13º nível, seus feitos alçam-no a um título ainda mais alto. Se escolheu o Caminho do Soldado, você recebe redução de dano 5 e +2 na Defesa. Se escolheu o Caminho do Governante, você passa a somar seu Carisma em seus testes de resistência.",
                default: true,
                nivel: 13,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Duque (Vassalo)",
                description: "No 14º nível, você se tornou um dos mais altos nobres do reino. Quando você usa Autoridade Feudal, o nível do parceiro convocado aumenta em um passo. Além disso, você recebe um poder de cavaleiro a sua escolha.",
                default: true,
                nivel: 14,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Arquiduque (Vassalo)",
                description: "No 15º nível você atinge o mais alto grau da nobreza, possuindo uma aura que o distingue das pessoas normais e o torna quase intocável. Uma vez por rodada, quando uma criatura inteligente lhe causar dano, você pode gastar 5 PM para reduzir esse dano a 0.",
                default: true,
                nivel: 15,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Conselheiro Real (Vassalo)",
                description: "A partir do 16º nível, você se torna um dos conselheiros do rei e passa a partilhar do poder de Sua Majestade. Você recebe um poder de cavaleiro a sua escolha e aprende e pode lançar uma magia divina de até 4º círculo a sua escolha (atributo-chave Carisma).",
                default: true,
                nivel: 16,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Rei Mercenário (Vassalo)",
                description: "No 17º nível, você dá seus primeiros passos rumo à majestade, e a terra responde às suas aspirações. Se escolheu o Caminho do Soldado, você recebe 3 pontos de atributo para distribuir como quiser em Força, Destreza e Constituição. Se escolheu o Caminho do Governante, recebe 3 pontos de atributo para distribuir como quiser em Inteligência, Sabedoria e Carisma.",
                default: true,
                nivel: 17,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Rei (Vassalo)",
                description: "No 18º nível, seu reino já não precisa mais do apoio de seu antigo lorde — mas vocês ainda são aliados. Você recebe +1 em Carisma e um poder de cavaleiro a sua escolha.",
                default: true,
                nivel: 18,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Alto Rei (Vassalo)",
                description: "No 19º nível, você se torna um alto rei, senhor de seu reino e do antigo reino de seu lorde. Tem a sua disposição seguidores e riquezas sem fim — seu “orçamento” de itens mágicos aumenta para T$ 100.000 e seu limite de parceiros aumenta em 2.",
                default: true,
                nivel: 19,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Imperador (Vassalo)",
                description: "No 20º nível, você chegou ao ápice político de Arton. Talvez tenha colonizado um continente desconhecido. Talvez tenha conquistado o Império de Tauron ou o Reinado. De qualquer forma, você agora é um grande imperador, respeitado e temido por todos. Sua fama não tem limites e as pessoas atribuem a você os mais variados poderes. Você recebe +1 em dois atributos diferentes a sua escolha e aprende e pode lançar uma magia divina de até 5º círculo a sua escolha (atributo- -chave Carisma). Você pode começar a pensar em dar terras a seu antigo escudeiro, formando mais um rei e continuando o nobre ciclo do cavaleiro vassalo.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Vassalo em Campanha (Vassalo)",
                description: "O vassalo é uma classe diferente. Em vez de oferecer muitos poderes abertos, que podem ser escolhidos pelo jogador, tem uma lista em grande parte fixa e imutável. Em vez de se encaixar em quase qualquer campanha, exige uma progressão narrativa para o personagem — determinando parcialmente os rumos da história. Como lidar com toda essa esquisitice?\nAntes de escolher um vassalo, o jogador deve conversar com o mestre, garantindo que essa variante tem espaço na campanha. Por sua vez, o mestre deve trabalhar com o jogador para que sua ascensão na aristocracia aconteça em jogo. Simulando o lado mais tradicional e até antiquado da nobreza de Arton, o vassalo também é uma variante mais estanque em termos de regras. Empurra o personagem e a campanha como um todo para um certo lado. Por isso, todos precisam estar de acordo para que ele funcione. Se você prefere um personagem mais solto, que tenha mais opções de poderes e liberdade na campanha, talvez um cavaleiro ou um nobre se encaixem mais com seu conceito.\nPara um exemplo de como um personagem vassalo funciona na mesa, você pode assistir à Guilda do Macaco — na campanha, Lothar Algherulff seguiu essa variante do 1º ao 17º nível. O sistema de jogo era outro, mas a classe era parecida e os ajustes necessários na campanha não dependeram de regras, mas de história.",
                default: true,
                nivel: 0,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "O Treinamento de um Vassalo (Vassalo)",
                description: "Ao longo de sua carreira, o vassalo se torna treinado em diversas perícias. Sempre que receber um desses treinamentos por uma habilidade de vassalo, se já for treinado na perícia, em vez disso você recebe +2 nela.",
                default: true,
                nivel: 0,
                mainclassOnly: false,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Clérigo",
        variante: {
            nome: "Usurpador",
            treinedSkills: ["Enganação", "Vontade"],
            skills: ["Atuação", "Conhecimento", "Cura", "Diplomacia", "Furtividade", "Iniciativa", "Intimidação", "Intuição", "Misticismo", "Nobreza", "Ofício", "Percepção", "Reflexos", "Religião"],
            proficiencies: [],
        },
        descricao: "Servo de um dos deuses de Arton, usa poderes divinos para defender seus ideais.",
        atributo: "Sabedoria",
        pv: 16,
        pv_per_level: 4,
        pm: 5,
        treinedSkills: ["Religião", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Conhecimento", "Cura", "Diplomacia", "Fortitude", "Iniciativa", "Intuição", "Luta", "Misticismo", "Nobreza", "Ofício", "Percepção"],
        extraSkills: 2,
        proficiencies: [
            "Armaduras pesadas",
            "Escudos"
        ],
        abilities: [
            {
                name: "Devoto Fiel",
                description: "Você se torna devoto de um deus maior. Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa a sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Magias",
                description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM. Veja o Capítulo 4 para as regras de magia.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Abençoar Arma",
                description: "Você se torna proficiente na arma preferida de sua divindade. Se estiver empunhando essa arma, pode gastar uma ação de movimento e 3 PM para infundi-la com poder divino. Até o final da cena, a arma é considerada mágica e emite luz dourada ou púrpura (como uma tocha). Além disso, o dano da arma aumenta em um passo e você pode usar sua Sabedoria em testes de ataque e rolagens de dano com ela, em vez do atributo padrão (não cumulativo com efeitos que somam este atributo)."
            },
            {
                name: "Acólito Escudeiro",
                description: "Você recebe os serviços de um acólito escudeiro, um parceiro especial que não conta em seu limite de parceiros. Você recebe +2 em Religião e o custo de uma de suas magias de 1º círculo, escolhida ao você receber este poder, diminui em -1 PM. Além disso, você pode gastar 1 PM para receber os efeitos de um esotérico ou catalisador em seu inventário, mesmo que não o esteja empunhando. Caso perca seu acólito, você pode treinar outro com uma semana de trabalho. Pré-requisito: Autoridade Eclesiástica."
            },
            {
                name: "Arma Divina",
                description: "Quando você usa Abençoar Arma, além dos efeitos normais, a sua arma adquire os efeitos do encanto sagrado (se você canalizar energia positiva) ou do encanto profano (se você canalizar energia negativa). Pré-requisitos: Abençoar Arma, 7º nível de clérigo."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Autoridade Eclesiástica (Básico)",
                description: "Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder variam de acordo com a igreja e o deus — clérigos de Khalmyr, por exemplo, possuem autoridade como juízes no Reinado — e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia ou Intimidação ao lidar com devotos de sua divindade e paga metade do preço de itens alquímicos, poções e serviços em templos de sua divindade. Pré-requisitos: 5º nível de clérigo, devoto de um deus maior."
            },
            {
                name: "Autoridade Eclesiástica (Deuses)",
                description: "Você possui uma posição formal e reconhecida em uma igreja. Você recebe +5 em testes de Diplomacia e Intimidação ao lidar com devotos de sua divindade, além do benefício específico de sua divindade. Pré-requisitos: 5º nível de clérigo ou frade, devoto de um deus maior."
            },
            {
                name: "Autoridade Eclesiástica (Aharadak)",
                description: "Você aprende e pode lançar Sussurros Insanos (Tormenta20, p. 207) como uma magia divina. Além disso, se estiver em um templo de Aharadak, ou com pelo menos 5 outros devotos do Deus da Tormenta, pode gastar 1 hora para executar um ritual que o aproxima da Anticriação. Se fizer isso, você recebe um embrião rubro, uma larva que se aloja em seu corpo e ocupa 1 espaço. Até o fim da aventura, ou até executar esse ritual novamente, você pode despertar essa larva para receber 1 poder da Tormenta a sua escolha, cujos pré-requisitos cumpra, até o fim da cena. Ao fim da cena, a larva se desaloja e cai no chão como uma pequena poça de visco rubro."
            },
            {
                name: "Autoridade Eclesiástica (Allihanna)",
                description: "Você recebe +5 em Adestramento e Cavalgar, e pode usar essas perícias com animais mesmo sem ser treinado. Além disso, quando descansa em terreno natural, recebe uma bênção dos espíritos locais. Para cada patamar, você recebe 1d4 de auxílio que pode ser adicionado como um bônus em um teste de perícia feito até o fim do dia."
            },
            {
                name: "Autoridade Eclesiástica (Arsenal)",
                description: "Quando visita um templo do Deus da Guerra, você pode orar para que ele abençoe seu… arsenal. Escolha uma arma, armadura ou escudo; o item recebe uma melhoria a sua escolha (exceto material especial) cujos pré-requisitos ele cumpra. Essa melhoria não conta no limite de melhorias do item. Se tiver o poder Conjurar Arma, você pode aplicar esse benefício às armas ou munições conjuradas com ele. Esses efeitos duram até o fim da aventura ou até você orar por outra melhoria."
            },
            {
                name: "Autoridade Eclesiástica (Azgher)",
                description: "Você recebe +5 em Sobrevivência. Além disso, uma vez por aventura, se visitar um templo de Azgher, você pode medir o peso de sua alma. Faça um teste de Religião com CD definida pelo mestre: 15 se você seguiu os preceitos de Azgher à risca durante o último mês; 20 se seguiu-os, mas não perfeitamente; 25 se quebrou suas Obrigações & Restrições. Você recebe 1 TO por patamar para cada ponto do resultado acima da CD."
            },
            {
                name: "Autoridade Eclesiástica (Hyninn)",
                description: "Quando chega a uma comunidade, você pode fazer um teste de Sabedoria (CD 10). Se passar, faz contato com ladrões locais; até partir desse lugar, você recebe +5 em testes de Diplomacia para barganha e de Investigação para interrogar. Além disso, uma vez durante sua estadia pode ganhar a ajuda de um parceiro veterano de um tipo a sua escolha entre ajudante (Enganação, Furtividade e Ladinagem), assassino, fortão, perseguidor ou vigilante, que não conta em seu limite de parceiros."
            },
            {
                name: "Autoridade Eclesiástica (Kallyadranoch)",
                description: "Você recebe +5 em Intimidação. Além disso, se visitar um templo de Kallyadranoch, você recebe uma fração da energia dominante do Deus dos Dragões. Durante uma cena a sua escolha, sempre que aplicar uma condição de medo em um ou mais inimigos, você recupera 1d4 PM."
            },
            {
                name: "Autoridade Eclesiástica (Khalmyr)",
                description: "Você recebe +5 em testes de Diplomacia e Intimidação com agentes da lei (cavaleiros, paladinos, guardas e outros, a critério do mestre). Além disso, uma vez por aventura, se estiver em um templo de Khalmyr, você pode solicitar uma escolta: até dois parceiros iniciantes, cada um de um tipo a sua escolha entre combatente, guardião ou médico. Eles o acompanham até o fim da aventura."
            },
            {
                name: "Autoridade Eclesiástica (Lena)",
                description: "Você recebe o poder Aparência Inofensiva (se já possuí-lo, a CD para resistir a ele aumenta em +2). Além disso, quando passa um dia descansando em um templo da Deusa da Vida, recebe +1 em testes de resistência e +1 PV por nível até o fim da aventura. A seu critério, aliados que façam o mesmo podem receber esses benefícios."
            },
            {
                name: "Autoridade Eclesiástica (Lin-Wu)",
                description: "Você recebe +2 em testes de perícia e na CD de suas habilidades contra criaturas treinadas em ao menos uma perícia desonrada (Enganação, Furtividade e Ladinagem) ou que possuam a habilidade Ataque Furtivo."
            },
            {
                name: "Autoridade Eclesiástica (Marah)",
                description: "Você é um conduíte para a beleza de Marah e recebe +1 em Carisma. Além disso, quando usa uma habilidade que cause uma condição entre enfeitiçado, fascinado ou pasmo, pode gastar 2 PM para fazer com que as criaturas afetadas rolem dois dados para seus testes de resistência e usem o pior resultado."
            },
            {
                name: "Autoridade Eclesiástica (Megalokk)",
                description: "Você tem autoridade até mesmo sobre monstros irracionais. A atitude de qualquer monstro com Int -3 ou menor em relação a você aumenta em uma categoria. Se mesmo assim o monstro atacá-lo, você recebe +1 em testes de ataque e rolagens de dano contra ele."
            },
            {
                name: "Autoridade Eclesiástica (Nimb)",
                description: "Essa conversa de autoridade não tem muito a ver com Nimb. Você está fora! Uma vez por dia, você pode conferir o status de autoridade de Nimb a outra criatura em alcance curto, que não seja devota do Deus do Caos. A vítima faz um teste de Vontade (CD Sab). Se ela passar, você fica confuso. Contudo, se ela falhar, fica sob efeito das Obrigações & Restrições de Nimb. Além disso, devotos do Deus do Caos procuram a vítima instintivamente, pedindo conselhos, infernizando sua vida e criando caos generalizado. Esse efeito dura um dia e, durante esse tempo, você fica livre das Obrigações & Restrições de Nimb. Conveniente, não?"
            },
            {
                name: "Autoridade Eclesiástica (Oceano)",
                description: "Você tem autoridade sobre as águas. Seu deslocamento nadando é dobrado. Além disso, uma vez por dia, se estiver em uma extensão de água natural, como um mar, lago ou rio, pode gastar 1 PM para convocar um animal anfíbio ou aquático, um parceiro iniciante a sua escolha entre combatente, fortão ou guardião, que não conta no seu limite de parceiros. O animal o acompanha até o fim do dia."
            },
            {
                name: "Autoridade Eclesiástica (Sszzaas)",
                description: "Você pode conduzir uma cerimônia especial com devotos do Deus da Traição. Você precisa de no mínimo 3 outros devotos para essa cerimônia, ela dura 1 hora e precisa ser realizada num local totalmente escondido (envolve cânticos profanos e exaltações a Sszzaas). Se fizer isso, para cada outro devoto na cerimônia seu total de PM aumenta em +1 até o fim da aventura e você recebe +1 em Enganação (ambos limitados pelo seu nível). O bônus em Enganação dura indefinidamente, mas diminui em 1 sempre que você fizer um teste dessa perícia."
            },
            {
                name: "Autoridade Eclesiástica (Tanna-Toh)",
                description: "Você recebe +5 em Conhecimento e em testes de perícia para identificar criatura, item e magia (veja Misticismo em Tormenta20, p. 121). Além disso, se visitar um templo da Deusa do Conhecimento, tem acesso a todo o conteúdo de sua biblioteca. Escolha uma perícia em que não seja treinado. Até o fim da aventura, ou até usar esse benefício novamente, você recebe os benefícios de ser treinado na perícia escolhida."
            },
            {
                name: "Autoridade Eclesiástica (Tenebra)",
                description: "Se estiver em um templo de Tenebra à noite, você pode conduzir uma cerimônia especial: Súplica à Deusa das Trevas. Isso é uma Missa (veja Tormenta20, p. 57), mas seus efeitos duram uma semana. Os participantes recebem redução de luz e fogo 5 e seus efeitos de trevas causam um dado extra de dano. À noite, esses benefícios são dobrados."
            },
            {
                name: "Autoridade Eclesiástica (Thwor)",
                description: "Você recebe +5 em qualquer teste de perícias baseadas em Carisma feito para convencer alguém a ajudar a causa duyshidakk (o mestre tem a palavra final sobre as situações em que esse bônus se aplica). Além disso, se visitar um templo de Thwor ou um local qualquer em que haja um diagrama do Akzath como parte da arquitetura, você e quaisquer aliados a sua escolha podem escolher se colocar mais próximos a um lado do Akzath. Escolha entre +10 PV e +1 em testes de perícias, exceto ataques (Vida, Início, Continuidade...) ou +1 em testes de ataque e rolagens de dano (Morte, Fim, Mudança...). Esse benefício dura até o fim da aventura, ou até ser trocado."
            },
            {
                name: "Autoridade Eclesiástica (Thyatis)",
                description: "Você recebe um ícone da fênix, um item esotérico especial que reduz o custo de magias de adivinhação e de fogo em -1 PM (cumulativo com outras reduções) e que conta como um símbolo sagrado de Thyatis. Se perder esse ícone, você pode receber outro visitando um templo do Deus da Ressurreição e da Profecia e fazendo uma doação de T$ 100."
            },
            {
                name: "Autoridade Eclesiástica (Valkaria)",
                description: "Você pode permanecer por uma aventura inteira em um mesmo local, desde que haja um templo de Valkaria a no máximo um dia de distância. Além disso, ao visitar um templo de Valkaria, pode decretar que está em uma “demanda”, uma missão envolvendo viagens com um objetivo definido, como recuperar um tesouro ou capturar um vilão. Em uma demanda, você recebe +1 PV por nível e dormir ao relento conta como uma condição de descanso confortável para você, mas dormir sob um teto conta como condição ruim. Esse efeito dura até que a demanda seja cumprida. Se você abandonar a demanda, fica alquebrado até fazer uma penitência."
            },
            {
                name: "Autoridade Eclesiástica (Wynna)",
                description: "Você paga metade do preço por pergaminhos, poções e serviços em templos de Wynna. Além disso, se passar um dia meditando em um templo da Deusa da Magia, recebe uma fração de seu conhecimento místico. Escolha uma magia que você não conheça, arcana ou divina, de até 2º círculo. Até o fim da aventura, ou até usar esse benefício novamente, você pode lançar essa magia pagando seu custo normal."
            },
            {
                name: "Bênção de Batalha",
                description: "Bênção passa a afetar também você (em vez de apenas seus aliados). Além disso, na primeira rodada de combate, você pode lançar essa magia como ação de movimento (em vez de padrão). Pré-requisito: Bênção."
            },
            {
                name: "Canalizar Energia Positiva/Negativa",
                description: "Você pode gastar uma ação padrão e PM para liberar uma onda de luz (se sua divindade canaliza energia positiva) ou trevas (se canaliza energia negativa) que afeta criaturas a sua escolha em alcance curto. Para cada PM que gastar, luz cura 1d6 PV em criaturas vivas e causa 1d6 pontos de dano de luz em mortos-vivos (Vontade CD Sab reduz o dano à metade). Trevas tem o efeito inverso — causa dano de trevas a criaturas vivas e cura mortos-vivos."
            },
            {
                name: "Canalizar Abençoado",
                description: "Quando você usa Canalizar Energia Positiva, pode gastar 1 PM. Se fizer isso, além do normal, as criaturas afetadas recebem 10 PV temporários. Pré-requisitos: Canalizar Energia Positiva, 11° nível de clérigo."
            },
            {
                name: "Canalizar Amplo",
                description: "Quando você usa a habilidade Canalizar Energia, pode gastar +2 PM para aumentar o alcance dela para médio. Pré-requisito: Canalizar Energia Positiva ou Negativa."
            },
            {
                name: "Canalizar Concentrado",
                description: "Quando usa Canalizar Energia, você pode afetar apenas uma criatura no alcance (em vez de todas). Se fizer isso, a cura ou o dano da habilidade aumenta em +1 por dado e a CD aumenta em +2. Pré-requisitos: Canalizar Energia, 11° nível de clérigo."
            },
            {
                name: "Canalizar Profanado",
                description: "Quando você usa Canalizar Energia Negativa, pode gastar 1 PM. Se fizer isso, além do normal, criaturas que falhem na resistência não podem recuperar PV por 1 rodada. Pré-requisitos: Canalizar Energia Negativa, 11° nível de clérigo."
            },
            {
                name: "Canalizar Poderoso",
                description: "Os dados de seu Canalizar Energia mudam para d10. Pré-requisitos: Canalizar Amplo, 9° nível de clérigo."
            },
            {
                name: "Comunhão Vital",
                description: "Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original. e"
            },
            {
                name: "Conhecimento Mágico",
                description: "Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser."
            },
            {
                name: "Conversão de Fé",
                description: "Uma vez por cena, você pode gastar uma ação completa e 3 PM para pregar sua fé a uma criatura inteligente (Int -3 ou maior) do tipo lacaio em alcance curto. Faça um teste de Religião oposto ao teste de Vontade da criatura (você recebe +5 no teste com devotos de seu deus, mas sofre -5 com devotos de outros deuses). Se você vencer, até o fim da cena a atitude da criatura se torna prestativa com relação a você e ela passa a atuar como um parceiro iniciante de um tipo à escolha do mestre, que não conta no seu limite de parceiros. Pré-requisito: Autoridade Eclesiástica."
            },
            {
                name: "Dizimar Infiéis",
                description: "Se estiver usando uma arma afetada por Abençoar Arma, você pode gastar uma ação padrão e 2 PM para canalizar a punição divina! Faça um ataque corpo a corpo e compare o resultado com a Defesa de cada criatura em alcance curto. Então faça uma rolagem de dano e aplique-a em cada criatura atingida. Cada inimigo atingido fica ofuscado (se você canaliza energia positiva) ou vulnerável (se canaliza energia negativa) por 1 rodada. Pré-requisitos: Abençoar Arma, 5º nível de clérigo."
            },
            {
                name: "Égide da Fé",
                description: "Quando você lança Escudo da Fé, a magia também fornece 5 PV temporários para cada +1 na Defesa. Esses PV temporários duram até o fim da cena. Pré-requisito: Escudo da Fé."
            },
            {
                name: "Expulsar/Comandar Mortos-Vivos",
                description: "Você pode gastar uma ação padrão e 3 PM para expulsar (se sua divindade canaliza energia positiva) ou comandar (se canaliza energia negativa) todos os mortos-vivos em alcance curto. Mortos-vivos expulsos ficam apavorados por 1d6 rodadas. Mortos-vivos comandados não inteligentes (Int -4 ou menor) ficam sob suas ordens por um dia (até um limite de ND somados igual a seu nível +3; dar uma ordem a todos eles é uma ação de movimento) e mortos-vivos comandados inteligentes ficam fascinados por uma rodada. Mortos-vivos têm direito a um teste de Vontade (CD Sab) para evitar qualquer destes efeitos. Pré-requisito: Canalizar Energia Positiva ou Negativa. e"
            },
            {
                name: "Força da Devoção",
                description: "Quando você lança uma magia de clérigo, sua CD aumenta em +1 para cada dois poderes concedidos de sua divindade que você possui. Pré-requisito: 6º nível de clérigo."
            },
            {
                name: "Liturgia Mágica",
                description: "Você pode gastar uma ação de movimento para executar uma breve liturgia de sua fé. Se fizer isso, a CD para resistir à sua próxima habilidade de clérigo (desde que usada até o final de seu próximo turno) aumenta em +2."
            },
            {
                name: "Liturgia Marcial",
                description: "Você pode gastar uma ação de movimento para executar uma breve liturgia de sua fé. Se fizer isso, você recebe +2 no teste de ataque e na rolagem de dano de seu próximo ataque corpo a corpo nesse turno."
            },
            {
                name: "Magia Sagrada/Profana",
                description: "Quando lança uma magia divina que causa dano, você pode gastar +1 PM. Se fizer isso, muda o tipo de dano da magia para luz (se sua divindade canaliza energia positiva) ou trevas (se canaliza energia negativa)."
            },
            {
                name: "Mestre Celebrante",
                description: "O número de pessoas que você afeta com uma missa aumenta em dez vezes e os benefícios que elas recebem dobram. Abaixo detalhamos como isso se aplica.\n• Se a Missa fornece um bônus numérico que se aplica por toda sua duração, como o de Mente Abençoada, esse bônus é dobrado.\n• Se fornece uma quantidade de PV ou PM, como Elevação do Espírito, essa quantidade é dobrada.\n• Se permite usar uma habilidade ou receber um benefício uma vez, como Compartilhar Milagre, esse efeito pode ser usado uma vez adicional pela duração da Missa. Pré-requisitos: qualquer poder de Missa, 12º nível de clérigo."
            },
            {
                name: "Missas",
                description: "Alguns poderes do clérigo são Missas. Esses poderes compartilham as seguintes regras.\n• Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$ 25. Um mesmo celebrante pode aplicar mais de um poder de Missa na mesma celebração. Cada poder adicional aumenta o custo da Missa em T$ 25.\n• Uma Missa afeta um número máximo de pessoas igual a 1 + sua Sabedoria. Todas as pessoas precisam estar presentes durante toda a Missa.\n• Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios da mesma Missa uma vez por dia."
            },
            {
                name: "Missa: Bênção da Vida",
                description: "Os participantes recebem pontos de vida temporários em um valor igual ao seu nível + sua Sabedoria."
            },
            {
                name: "Missa: Chamado às Armas",
                description: "Os participantes recebem +1 em testes de ataque e rolagens de dano."
            },
            {
                name: "Missa: Compartilhar Milagre",
                description: "Escolha um dos seus poderes concedidos. Até o fim do dia, cada participante desta Missa pode usar esse poder durante 1 rodada, como se fosse devoto da sua divindade (os demais pré-requisitos do poder ainda devem ser cumpridos). Pré-requisito: 17° nível de clérigo."
            },
            {
                name: "Missa: Elevação do Espírito",
                description: "Os participantes recebem pontos de mana temporários em um valor igual a sua Sabedoria."
            },
            {
                name: "Missa: Escudo Divino",
                description: "Os participantes recebem +1 na Defesa e testes de resistência."
            },
            {
                name: "Missa: Imposição da Vontade",
                description: "A CD para resistir às habilidades dos participantes aumenta em +1."
            },
            {
                name: "Missa: Mente Abençoada",
                description: "Os participantes recebem +2 em testes de perícias baseadas em Sabedoria."
            },
            {
                name: "Missa: Superar as Limitações",
                description: "Cada participante recebe +1d6 num único teste a sua escolha e pode usá-lo mesmo após rolar o dado."
            },
            {
                name: "Prece de Combate",
                description: "Quando lança uma magia divina com tempo de conjuração de uma ação padrão em si mesmo, você pode gastar +2 PM para lançá-la como uma ação de movimento."
            },
            {
                name: "Presente dos Deuses",
                description: "Você recebe uma arma superior e mágica, com duas melhorias e um encanto a sua escolha. Normalmente, será a arma preferida de seu deus, mas pode ser outra, de acordo com o mestre. A cada quatro níveis, a arma ganha mais uma melhoria e um encanto a sua escolha. Nas mãos de uma pessoa que não seja devota de sua divindade, a arma se comporta como um item mundano. Se a arma for perdida ou destruída, você pode receber outra fazendo uma penitência (como se tivesse descumprido as Obrigações & Restrições de sua divindade). Pré-requisito: 9º nível de clérigo."
            },
            {
                name: "Punição Divina",
                description: "Uma vez por rodada, quando lança uma magia divina com tempo de execução de ação de movimento em si mesmo, você pode gastar +2 PM fazer um ataque como ação livre. Pré-requisito: Prece de Combate."
            },
            {
                name: "Representante Divino",
                description: "Você fala com a autoridade de seu deus. Escolha uma magia divina que possa lançar com tempo de execução de ação padrão ou completa. Você pode lançar essa magia como uma ação de movimento, sem precisar gesticular ou se concentrar (mas ainda precisa falar). Pré-requisito: 17º nível de clérigo."
            },
            {
                name: "Símbolo Sagrado Energizado",
                description: "Você pode gastar uma ação de movimento e 1 PM para fazer uma prece e energizar seu símbolo sagrado até o fim da cena. Um símbolo sagrado energizado emite uma luz dourada ou prateada (se sua divindade canaliza energia positiva) ou púrpura ou avermelhada (se canaliza energia negativa) que ilumina como uma tocha. Enquanto você estiver empunhando um símbolo sagrado energizado, o custo em PM para lançar suas magias divinas diminui em 1. e"
            },
            {
                name: "Solo Profanado",
                description: "Quando você lança uma magia de dano de trevas dentro de uma área de Profanar, criaturas que falhem no teste de resistência da magia não podem curar PV por um número de rodadas igual ao círculo da magia. Pré-requisito: Profanar."
            },
            {
                name: "Solo Sagrado",
                description: "Quando você lança uma magia de luz dentro de uma área de Consagrar, criaturas a sua escolha nessa área recebem RD igual ao dobro do círculo da magia contra o próximo dano que sofrerem até o início do seu próximo turno. Pré-requisito: Consagrar."
            },
            {
                name: "Mão da Divindade",
                description: "No 20º nível, você pode gastar uma ação completa e 15 PM para canalizar energia divina. Ao fazer isso, você lança três magias divinas quaisquer (de qualquer círculo, incluindo magias que você não conhece), como uma ação livre e sem gastar PM (mas ainda precisa pagar outros custos). Você pode aplicar aprimoramentos, mas precisa pagar por eles. Após usar esta habilidade, você fica atordoado por 1d4 rodadas (mesmo se for imune a esta condição). Corpos mortais não foram feitos para lidar com tanto poder.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Inimigo dos Deuses (Usurpador)",
                description: "Por roubar o poder de todos os deuses, o usurpador não é aceito por nenhum. Você não pode ter nenhuma devoção.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Magias (Usurpador)",
                description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você não começa com nenhuma magia e não aprende magias automaticamente como um clérigo faria (mas veja Usurpar, a seguir). Seu atributo-chave para lançar magias é Carisma e você soma seu Carisma no seu total de PM.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Usurpar (Usurpador)",
                description: "Você pode lançar qualquer magia divina de um círculo a que tenha acesso. Para lançar uma magia dessa forma, deve passar em um teste de Enganação (CD 15 + custo em PM da magia). Se falhar, a magia é perdida, mas os PM são gastos mesmo assim. Você não pode escolher 10 nesse teste, mesmo que possua uma habilidade que permita isso, e sofre penalidade de armadura nele. Além disso, sofre uma penalidade de -5 se estiver em um local contendo um símbolo sagrado visível.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Canalização Falsa (Usurpador)",
                description: "No 2º nível, você pode canalizar tanto energia positiva quanto negativa.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Discrição Divina (Usurpador)",
                description: "No 3º nível, você recebe +1 em Furtividade e testes de resistência. A cada seis níveis, esse bônus aumenta em +1.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Poder Capturado (Usurpador)",
                description: "No 4º nível, você rouba o poder que os deuses concedem a seus devotos. Escolha um deus maior por nível e um poder concedido desse deus (você deve cumprir seus pré-requisitos e não pode escolher poderes exclusivos de qualquer classe, inclusive clérigo). Você pode gastar uma hora e fazer um teste de Enganação (CD é 20 +5 para cada uso adicional no mesmo dia). Se passar, você é considerado um devoto desse deus para efeitos de habilidades e itens, e pode usar o poder concedido escolhido, mas não precisa seguir as Obrigações e Restrições. Se falhar, você perde 3 PM. Este efeito dura até o fim do dia ou até você usá-lo novamente.",
                default: true,
                nivel: 4,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Roubo Divino (Usurpador)",
                description: "No 20º nível, você é capaz de roubar a própria essência divina. Quando lança uma magia com Usurpar, para cada 10 pontos no resultado do teste de Enganação, o total de PM que você gasta nessa magia é reduzido em -1 (cumulativo com outras reduções) e a CD para resistir a ela aumenta em +1.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Druida",
        variante: {
            nome: "Ermitão",
            pv: 12,
            pv_per_level: 3,
            extraSkills: 2,
            proficiencies: [],
        },
        descricao: "Guardião do mundo natural e devoto das forças selvagens, naturais ou monstruosas.",
        atributo: "Sabedoria",
        pv: 16,
        pv_per_level: 4,
        pm: 4,
        treinedSkills: ["Sobrevivência", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Adestramento", "Atletismo", "Cavalgar", "Conhecimento", "Cura", "Fortitude", "Iniciativa", "Intuição", "Luta", "Misticismo", "Ofício", "Percepção", "Religião"],
        extraSkills: 4,
        proficiencies: [
            "Escudos"
        ],
        abilities: [
            {
                name: "Devoto Fiel",
                description: "Você se torna devoto de um deus disponível para druidas (Allihanna, Megalokk ou Oceano). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Empatia Selvagem",
                description: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja a página 118).",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Magias",
                description: "Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias divinas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM. Veja o Capítulo 4 para as regras de magia.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Arma Tradicional",
                description: "Quando faz um ataque com uma foice, você pode gastar 2 PM para lançar uma magia de ácido, eletricidade, fogo ou frio com execução de movimento, padrão ou completa como ação livre. Considere que a mão da arma está livre para lançar essa magia. Pré-requisitos: druida de Arton, 5º nível de druida."
            },
            {
                name: "Aspecto do Inverno",
                description: "Você aprende e pode lançar uma magia de convocação ou evocação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, recebe redução de frio 5 e suas magias que causam dano de frio causam +1 ponto de dano por dado."
            },
            {
                name: "Aspecto do Outono",
                description: "Você aprende e pode lançar uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para impor uma penalidade de -2 nos testes de resistência de todos os inimigos em alcance curto até o início do seu próximo turno."
            },
            {
                name: "Aspecto da Primavera",
                description: "Você aprende e pode lançar uma magia de encantamento ou ilusão, arcana ou divina, de qualquer círculo que possa lançar. Além disso, escolha uma quantidade de magias igual ao seu Carisma (mínimo 1). O custo dessas magias é reduzido em −1 PM."
            },
            {
                name: "Aspecto do Verão",
                description: "Você aprende e pode lançar uma magia de transmutação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para cobrir uma de suas armas com chamas até o fim da cena. A arma causa +1d6 pontos de dano de fogo. Sempre que você acertar um ataque com ela em combate, recebe 1 PM temporário. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Auspício do Crepúsculo",
                description: "Você pode gastar 1 PM para cobrir uma de suas armas com sombras até o fim da cena. A arma causa +1d6 pontos de dano de trevas. Se você estiver sob efeito de escuridão, sempre que acertar um ataque com ela em combate, recebe 5 PV temporários cumulativos. Pré-requisito: druida de Tenebra."
            },
            {
                name: "Auspício da Madrugada",
                description: "Você pode gastar 1 PM para impor uma penalidade de -1 em testes de perícia e na CD de habilidades de criaturas a sua escolha em alcance curto por 1 rodada. Se você estiver sob efeito de escuridão, a penalidade se torna -2. Pré-requisito: druida de Tenebra."
            },
            {
                name: "Auspício da Meia-Noite",
                description: "Você pode gastar uma ação de movimento e 2 PM para aumentar a CD das suas habilidades de druida em +1 até o fim da cena. Se você usar este poder sob efeito de escuridão, o bônus na CD se torna +2. Pré-requisito: druida de Tenebra."
            },
            {
                name: "Banquete Selvagem",
                description: "Se você estiver em forma selvagem e gastar uma ação padrão para devorar um pedaço de uma criatura inconsciente que esteja com 0 PV ou menos (exceto construtos e seres incorpóreos), recebe +2 em Força, +5 em Intimidação e 2 PV temporários por nível até o fim da cena. Se a criatura é do tipo lacaio, ela morre. Pré-requisitos: druida de Megalokk, Forma Selvagem."
            },
            {
                name: "Ciclo da Vida",
                description: "Uma vez por cena, você pode gastar uma ação padrão para fazer um cadáver em alcance curto se decompor instantaneamente. Se fizer isso, você recebe +2 pontos de mana por ND que a criatura tinha em vida. Esses PM adicionais duram até o fim do dia."
            },
            {
                name: "Companheiro Aberrante",
                description: "Escolha um de seus companheiros animais. Ele recebe o tipo aberrante, ganhando os bônus de seu nível. Um parceiro aberrante fornece os benefícios a seguir. Iniciante: uma vez por rodada, você pode gastar 1 PM para disparar um pulso mental contra uma criatura em alcance curto; ela sofre 2d6 pontos de dano psíquico ou perde 1d4 PM, a sua escolha. Veterano: você também pode gastar 2 PM para causar 4d6 pontos de dano ou fazer a criatura perder 2d4 PM. Mestre: você também pode gastar 4 PM para causar 6d6 pontos de dano ou fazer a criatura perder 3d4 PM. Pré-requisitos: druida de Aharadak, Companheiro Animal, 6º nível de druida."
            },
            {
                name: "Companheiro Animal Detalhes",
                description: "Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele. Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo companheiro após um dia inteiro de prece e meditação. A seguir, alguns exemplos de animais (mas você é livre para escolher outros). Veja a página 260 para as regras de parceiros.\n• Ajudante. Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.\n• Assassino. Lince, onça ou outro animal treinado para abater presas.\n• Atirador. Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância.\n• Fortão. Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.\n• Guardião. Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.\n• Perseguidor. Gambá, sabujo ou outro animal farejador."
            },
            {
                name: "Companheiro Animal",
                description: "Você recebe um companheiro animal. Veja o quadro para detalhes. Você pode escolher este poder quantas vezes quiser, mas deve escolher companheiros diferentes e ainda está sujeito ao limite de parceiros que pode ter (veja a página 260). Pré-requisitos: Car 1, treinado em Adestramento."
            },
            {
                name: "Companheiro Animal Aprimorado",
                description: "Escolha um de seus companheiros animais. Ele recebe um segundo tipo, ganhando os bônus de seu nível. Por exemplo, se você tiver um companheiro guardião veterano, pode adicionar o tipo fortão a ele, tornando-o um guardião fortão veterano que concede +3 na Defesa e +1d12 em uma rolagem de dano corpo a corpo. Pré-requisitos: Companheiro Animal, 6º nível de druida."
            },
            {
                name: "Companheiro Animal Lendário",
                description: "Escolha um de seus companheiros animais. Esse animal passa a dobrar os bônus concedidos de seu tipo original. Pré-requisitos: Companheiro Animal, 18º nível de druida."
            },
            {
                name: "Companheiro Animal Mágico",
                description: "Escolha um de seus companheiros animais. Ele recebe um segundo tipo diferente, entre adepto, destruidor, magivocador ou médico, ganhando os bônus de seu nível. Pré-requisitos: Companheiro Animal, 8º nível de druida."
            },
            {
                name: "Companheiro Elemental",
                description: "Escolha um de seus companheiros animais. Ele recebe o tipo destruidor, ganhando os bônus de seu nível. Se você possuir o suplemento Ameaças de Arton, em vez disso ele pode se tornar também um parceiro aquin’ne, t’peel, pakk ou terrier (também ganhando o bônus de seu nível). Pré-requisitos: druida de Arton, Companheiro Animal."
            },
            {
                name: "Coração da Selva",
                description: "A CD para resistir a seus efeitos de veneno aumenta em +2 e estes efeitos causam +1 de perda de vida por dado."
            },
            {
                name: "Erupção Elemental",
                description: "Se você estiver em forma elemental, pode gastar uma ação de movimento e 2 PM. Se fizer isso, seu próximo ataque com uma arma natural realizado nessa cena afeta todas as criaturas em um cone de 6m (faça um único ataque corpo a corpo e compare o resultado com a Defesa de cada criatura na área) e causa dois dados de dano extras. Pré-requisito: Forma Elemental."
            },
            {
                name: "Espírito dos Equinócios",
                description: "Você pode gastar 4 PM para ficar em equilíbrio com o mundo. Até o final da cena, quando rola um dado, pode rolar novamente qualquer resultado 1. Pré-requisitos: Aspecto da Primavera, Aspecto do Outono, 10º nível de druida. e"
            },
            {
                name: "Espírito dos Solstícios",
                description: "Você transita entre os extremos do mundo natural. Quando lança uma magia, pode gastar +4 PM para maximizar os efeitos numéricos variáveis dela. Por exemplo, uma magia Curar Ferimentos aprimorada para curar 5d8+5 PV irá curar automaticamente 45 PV, sem a necessidade de rolar dados. Uma magia sem efeitos variáveis não pode ser afetada por este poder. Pré-requisitos: Aspecto do Inverno, Aspecto do Verão, 10º nível de druida."
            },
            {
                name: "Força da Natureza",
                description: "Se estiver em forma selvagem, você pode gastar 4 PM para se cobrir de terra e raízes, como um elemental da própria terra, até o fim da cena. Nesse estado, você recebe +4 em um atributo a sua escolha. Pré-requisitos: Forma Selvagem Superior, 17º nível de druida."
            },
            {
                name: "Força dos Penhascos",
                description: "Você recebe +2 em Fortitude. Quando sofre dano enquanto em contato com o solo ou uma superfície de pedra, pode gastar uma quantidade de PM limitada por sua Sabedoria. Para cada PM gasto, reduz esse dano em 10. Pré-requisito: 4º nível de druida."
            },
            {
                name: "Forma Aberrante",
                description: "Quando usa Forma Selvagem, você pode gastar +2 PM para assumir uma forma aberrante. Nessa forma, você conta como se tivesse dois poderes da Tormenta adicionais (exceto para perda de Carisma). Pré-requisitos: druida de Aharadak, Forma Selvagem."
            },
            {
                name: "Forma de Cardume",
                description: "Quando usa Forma Selvagem, você pode gastar +1 PM para assumir a forma de um cardume de criaturas anfíbias com duração sustentada. Você recebe imunidade a manobras de combate, sofre apenas metade do dano de armas, pode entrar nos espaços ocupados por inimigos e criaturas no mesmo espaço que você ficam em condição ruim para lançar magias. Pré-requisitos: druida de Oceano, Forma Selvagem."
            },
            {
                name: "Forma Elemental",
                description: "Quando usa Forma Selvagem, você pode gastar +2 PM para assumir uma forma elemental. Escolha entre ácido, eletricidade, fogo ou frio. Você recebe imunidade ao tipo de dano escolhido e vulnerabilidade ao tipo oposto. Além disso, o alcance de suas armas naturais aumenta em +1,5m e elas causam dano do tipo escolhido (em vez de seu dano normal). Pré-requisitos: druida de Arton, Forma Selvagem."
            },
            {
                name: "Forma Esquelética",
                description: "Quando usa Forma Selvagem, você pode gastar +2 PM para assumir uma forma esquelética. Seu tipo muda para morto-vivo e você recebe redução de corte, frio e perfuração 5 e imunidade a efeitos de cansaço, metabólicos e de veneno. Por fim, você sofre dano por efeitos mágicos de cura de luz (Vontade CD do efeito reduz à metade) e recupera PV com dano de trevas. Pré-requisitos: druida de Tenebra, Forma Selvagem."
            },
            {
                name: "Forma Primal",
                description: "Quando usa Forma Selvagem, você pode se transformar em uma fera primal. Você recebe os benefícios de dois tipos de animais (bônus iguais não se acumulam; use o que você quiser de cada tipo). Pré-requisito: 18º nível de druida."
            },
            {
                name: "Forma Selvagem",
                description: "Você pode se transformar em animais (veja a seguir)."
            },
            {
                name: "Forma Vegetal",
                description: "Quando usa Forma Selvagem, você pode gastar +2 PM para assumir uma forma vegetal. Você recebe RD 5/corte ou fogo e Natureza Vegetal (fica imune a atordoamento e metamorfose, mas é afetado por efeitos que afetem plantas monstruosas — se o efeito não tiver um teste de resistência, você tem direito a um teste de Fortitude). Pré-requisitos: druida de Allihanna, Forma Selvagem."
            },
            {
                name: "Forma Selvagem Aprimorada",
                description: "Quando usa Forma Selvagem, você pode gastar 6 PM ao todo para assumir uma forma aprimorada. Pré-requisitos: Forma Selvagem, 6º nível de druida."
            },
            {
                name: "Forma Selvagem Superior",
                description: "Quando usa Forma Selvagem, você pode gastar 10 PM ao todo para assumir uma forma superior. Pré-requisitos: Forma Selvagem Aprimorada, 12º nível de druida."
            },
            {
                name: "Instinto Venenoso",
                description: "Você pode usar Sab como atributo-chave de venenos (em vez de Int). Além disso, em Forma Selvagem, pode aplicar venenos de contato em suas armas naturais como ação livre. Pré-requisito: Coração da Selva."
            },
            {
                name: "Liberdade da Pradaria",
                description: "Você recebe +2 em Reflexos. Se estiver ao ar livre, sempre que lança uma magia, pode gastar 1 PM para aumentar o alcance dela em um passo (de toque para curto, de curto para médio ou de médio para longo)."
            },
            {
                name: "Magia Natural",
                description: "Em forma selvagem, você pode lançar magias e empunhar catalisadores e esotéricos. Pré-requisito: Forma Selvagem."
            },
            {
                name: "Metamorfose Instantânea",
                description: "Uma vez por rodada, quando usa Forma Selvagem, você pode gastar +2 PM para usar essa habilidade como ação livre. Pré-requisitos: Forma Selvagem, 11º nível de druida."
            },
            {
                name: "Oráculo da Natureza",
                description: "Você pode gastar uma ação de movimento para se conectar com as energias naturais do mundo. Enquanto você permanecer no mesmo lugar, a CD para resistir a suas magias aumenta em +2 e, sempre que você lança uma magia, recebe 2 PM para gastar em aprimoramentos. Se você estiver em um ambiente urbano, a ação necessária para usar este poder muda para completa. Pré-requisitos: Xamã Místico, 11º nível de druida."
            },
            {
                name: "Orador dos Elementos",
                description: "Você aprende e pode lançar uma magia de dano de ácido, eletricidade, fogo ou frio, arcana ou divina, de qualquer círculo que possa lançar. Além disso, você pode aprender magias arcanas de ácido, eletricidade, fogo ou frio como se fossem divinas."
            },
            {
                name: "Presas Afiadas",
                description: "A margem de ameaça de suas armas naturais aumenta em +2."
            },
            {
                name: "Proteção Fúngica",
                description: "Você pode gastar 1 PM para cobrir seu corpo de esporos com duração sustentada. Nesse estado, sempre que você sofrer um ataque corpo a corpo de uma criatura adjacente, ela perde 1d8 PV. A cada quatro níveis acima do 1º, você pode gastar +1 PM quando usa este poder para aumentar a perda de vida em +1d8. Veneno. Pré-requisito: Coração da Selva."
            },
            {
                name: "Segredos da Natureza",
                description: "Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser."
            },
            {
                name: "Tranquilidade dos Lagos",
                description: "Você recebe +2 em Vontade. Se estiver portando um recipiente com água (não precisa estar empunhando), uma vez por rodada, quando faz um teste de resistência, pode pagar 1 PM para refazer a rolagem."
            },
            {
                name: "Transformação Repugnante",
                description: "Quando usa Forma Selvagem, você pode gastar +2 PM. Se fizer isso, inimigos em alcance curto sofrem 1d6 pontos de dano psíquico para cada poder da Tormenta que você possui e ficam alquebrados e frustrados (Vontade CD Sab reduz à metade e evita as condições). Pré-requisito: Forma Aberrante."
            },
            {
                name: "Xamã Místico",
                description: "Você recebe +1 PM por nível de druida, pode aprender e lançar magias de uma escola adicional e a CD para resistir a suas magias aumenta em +1. Prérequisito: não possuir Forma Selvagem."
            },
            {
                name: "Caminho dos Ermos",
                description: "No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo aumenta em +10. Esta habilidade só funciona em terrenos naturais.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Força da Natureza",
                description: "No 20º nível, você diminui o custo de todas as suas magias em -2 PM e aumenta a CD delas em +2. Os bônus dobram (-4 PM e +4 na CD) se você estiver em terrenos naturais.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Empatia Selvagem (Ermitão)",
                description: "Você pode se comunicar com animais, com criaturas vegetais não inteligentes (Int -4 ou -5) e espíritos por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja a página 118).",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Sítio Sagrado (Ermitão)",
                description: "No 3º nível, você assume um local sagrado para sua divindade (veja o quadro). \n\nUma área erma com 5 km de raio, o sítio sagrado é um refúgio para o ermitão e fornece diversas habilidades a ele, algumas das quais o acompanham para além das fronteiras deste local. Caso o sítio sagrado seja destruído, você perde todos os seus PM e só pode recuperá-los ao criar um novo sítio. Fazer isso ocupa um tempo entre aventuras.\n\nAliados da Natureza. Dentro do sítio, criaturas não inteligentes (Int -4 ou -5) têm atitude melhor com você, conforme seu tipo: no 7º nível, animais são amistosos e espíritos e monstros, indiferentes. No 15º nível suas categorias de atitude melhoram um passo. Você pode comandar criaturas prestativas para lutar ao seu lado e ajudar a defender o sítio sagrado, mas elas não irão segui-lo para fora dele. O mestre decide quais criaturas estão presentes no sítio (de forma geral, a qualquer momento há um número de criaturas com ND total somado igual ao seu nível).\n\nTerreno Associado. Ao receber seu sítio sagrado, escolha um terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície ou subterrâneo. Esse será o tipo de terreno associado ao seu sítio sagrado. Sempre que estiver em um terreno desse tipo, você soma sua Sabedoria (mínimo +1) em Furtividade, Percepção, Misticismo, Religião e Sobrevivência. No 7º nível, e a cada quatro níveis subsequentes, escolha mais um tipo de terreno para associar ao seu sítio ou aumente o bônus de perícias de um tipo de terreno já escolhido em +2.\nVocê também é capaz de atingir uma conexão mais forte com sua divindade dentro do sítio sagrado. Dentro dele, seu redutor de PM por Vínculo com a Terra muda para -2.\n\nCaminhos Sagrados. Quando está em um terreno de um tipo associado ao seu sítio, você não sofre redução de deslocamento por terreno difícil natural e a CD para rastreá-lo aumenta em +10.\n\nBase. O sítio sagrado conta como uma base (veja p. 244) básica. Você paga apenas a metade do custo para aumentar o porte dessa base e para construir cômodos nela.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Vínculo com a Terra (Ermitão)",
                description: "No 5º nível, quando você estiver em um terreno de um dos tipos de seu sítio sagrado, suas magias custam -1 PM (cumulativo com outras reduções).",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Temperado pelo Clima (Ermitão)",
                description: "No 11º nível, você recebe RD 5 contra dano dos tipos correspondentes aos terrenos associados ao seu sítio sagrado: aquático (eletricidade), ártico (frio), colina (impacto), deserto (fogo), floresta (corte), montanha (perfuração), pântano (ácido), planície (luz) e subterrâneo (trevas).",
                default: true,
                nivel: 11,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Eixo de Pedras (Ermitão)",
                description: "No 20º nível, você cria um eixo de pedras ritualísticas em seu sítio sagrado. Uma vez por aventura, você pode lançar no eixo de pedras uma quantidade de magias cujo custo em PM total somado seja igual ao seu nível + sua Sabedoria. Essas magias devem ter execução de movimento, padrão ou completa. Até o fim da aventura, se estiver em um terreno de um dos tipos associados ao seu sítio sagrado, uma vez por rodada você pode descarregar uma dessas magias como ação livre sem pagar seu custo.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Forma Selvagem",
                description: "Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Se ganhar uma arma natural, escolha seu tipo de dano entre corte, impacto e perfuração. Características não mencionadas não mudam. Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer."
            },
            {
                name: "Forma Ágil",
                description: "Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Quando usa a ação agredir, pode atacar com ambas, mas sofre -2 em todos os testes de ataque até o seu próximo turno.\n• Aprimorada. Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (-2 em Furtividade, +2 em testes de manobra).\n• Superior. Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (-2 em Furtividade, +2 em testes de manobra)."
            },
            {
                name: "Forma Feroz",
                description: "Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.\n• Aprimorada. Você recebe Força +5, +4 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (-2 em Furtividade, +2 em testes de manobra).\n• Superior. Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (-5 em Furtividade, +5 em testes de manobra)."
            },
            {
                name: "Forma Resistente",
                description: "Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano.\n• Aprimorada. Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (-2 em Furtividade, +2 em testes de manobra).\n• Superior. Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (-5 em Furtividade, +5 em testes de manobra)."
            },
            {
                name: "Forma Sorrateira",
                description: "Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, -2 em testes de manobra).\n• Aprimorada. Você recebe Destreza +4. Seu tamanho muda para Minúsculo (+5 em Furtividade, -5 em testes de manobra).\n• Superior. Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, -5 em testes de manobra)."
            },
            {
                name: "Forma Veloz",
                description: "Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m.\n• Aprimorada. Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.\n• Superior. Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m."
            }
        ]
    },
    {
        nome: "Guerreiro",
        variante: {
            nome: "Inovador",
            treinedSkills: ["Acrobacia"],
            treinedSkillsOr: ["Luta", "Pontaria"],
            skills: ["Adestramento", "Atletismo", "Conhecimento ", "Fortitude", "Guerra", "Iniciativa", "Intimidação", "Investigação", "Luta", "Ofício", "Pontaria", "Reflexos"],
        },
        descricao: "O especialista supremo em técnicas de combate com armas.",
        atributo: "Força ou Destreza",
        pv: 20,
        pv_per_level: 5,
        pm: 3,
        treinedSkills: ["Fortitude"],
        treinedSkillsOr: ["Luta", "Pontaria"],
        skills: ["Adestramento", "Atletismo", "Cavalgar ", "Guerra", "Iniciativa", "Intimidação", "Luta", "Ofício", "Percepção", "Pontaria", "Reflexos"],
        extraSkills: 2,
        proficiencies: [
            "Armas marciais",
            "Armaduras pesadas",
            "Escudos"
        ],
        abilities: [
            {
                name: "Ataque Especial",
                description: "Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Ambidestria",
                description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre -2 em todos os testes de ataque até o seu próximo turno. Pré-requisito: Des 2."
            },
            {
                name: "Análise Tática",
                description: "Você recebe +2 em Guerra e pode fazer testes dessa perícia para identificar criatura contra humanoides (veja Misticismo em Tormenta20, p. 121). Pré-requisito: treinado em Guerra."
            },
            {
                name: "Arqueiro",
                description: "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 1."
            },
            {
                name: "Arremesso de Investida",
                description: "Quando faz uma investida, você pode gastar 1 PM para realizar um ataque à distância adicional com uma arma de arremesso contra o alvo da investida."
            },
            {
                name: "Ataque Reflexo",
                description: "Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover voluntariamente para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo (apenas uma vez por alvo a cada rodada). Pré-requisito: Des 1."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Bater e Correr",
                description: "Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa."
            },
            {
                name: "Bloqueio Brutal",
                description: "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 2 PM para fazer uma rolagem de dano corpo a corpo e subtrair o resultado dessa rolagem do dano causado pelo ataque. Pré-requisito: For 5."
            },
            {
                name: "Corte Ágil",
                description: "Uma vez por rodada, quando faz um ataque com uma arma ágil ou leve, você pode gastar 1 PM para se mover até metade do seu deslocamento antes ou depois de fazer o ataque. Esse movimento não ativa reações dos inimigos (como de Ataque Reflexo). Pré-requisito: Des 1."
            },
            {
                name: "Criar Oportunidade",
                description: "Quando você ou um aliado em alcance curto atacar uma criatura sob efeito do seu Xadrez de Batalha, você pode gastar 1 PM para que esse ataque cause +1d10 pontos de dano. Pré-requisito: Xadrez de Batalha."
            },
            {
                name: "Defesa Estratégica",
                description: "Você soma sua Inteligência na Defesa, limitada pelo seu nível. Pré-requisito: Int 1."
            },
            {
                name: "Destruidor",
                description: "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 da rolagem de dano da arma. Pré-requisito: For 1."
            },
            {
                name: "Determinação Inabalável",
                description: "Enquanto estiver com metade dos seus pontos de vida ou menos, você recebe +2 em testes de resistência e o custo de sua habilidade Durão diminui em -1 PM. Pré-requisito: 11º nível de guerreiro."
            },
            {
                name: "Esgrimista",
                description: "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência em rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 1."
            },
            {
                name: "Especialização em Arma",
                description: "Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes."
            },
            {
                name: "Especialização em Armadura",
                description: "Você recebe redução de dano 5 se estiver usando uma armadura pesada. Pré-requisito: 12º nível de guerreiro."
            },
            {
                name: "Estrategista Inspirador",
                description: "Em seu primeiro turno de um combate, você pode gastar uma ação padrão e fazer um teste de Guerra. Se fizer isso, para cada 10 pontos no resultado do teste, você e seus aliados em alcance curto recebem 1 PM temporário. Esses PM temporários desaparecem no fim da cena. Pré-requisito: treinado em Guerra."
            },
            {
                name: "Executor",
                description: "Você recebe +1d6 nas rolagens de dano contra criaturas que estejam com menos da metade dos pontos de vida. A cada quatro níveis além do 1º, esse dano extra aumenta em um passo."
            },
            {
                name: "Fender Defesas",
                description: "Quando você acerta um ataque usando Ataque Especial, a criatura sofre uma penalidade na Defesa igual ao total de PM gastos nessa habilidade por 1 rodada."
            },
            {
                name: "Golpe de Raspão",
                description: "Uma vez por rodada, quando erra um ataque, você pode gastar 2 PM. Se fizer isso, causa metade do dano que causaria (ignorando efeitos que se aplicariam caso o ataque acertasse)."
            },
            {
                name: "Golpe Demolidor",
                description: "Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a redução de dano dele."
            },
            {
                name: "Golpe Pessoal",
                description: "Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma técnica única, com efeitos determinados por você. Você constrói seu Golpe Pessoal escolhendo efeitos da lista a seguir. Cada efeito possui um custo; a soma deles será o custo do Golpe Pessoal (mínimo 1 PM). O Golpe Pessoal só pode ser usado com uma arma específica (por exemplo, apenas espadas longas). Quando sobe de nível, você pode reconstruir seu Golpe Pessoal e alterar a arma que ele usa. Você pode escolher este poder outras vezes para golpes diferentes e não pode gastar mais PM em golpes pessoais em uma mesma rodada do que seu limite de PM. Pré-requisito: 5º nível de guerreiro."
            },
            {
                name: "Ímpeto",
                description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada."
            },
            {
                name: "Inércia do Aço",
                description: "Quando acerta um ataque com uma arma de duas mãos em uma criatura, você pode gastar 3 PM para causar metade do dano desse ataque a cada inimigo adjacente a essa criatura. Pré-requisito: 5º nível de guerreiro."
            },
            {
                name: "Investida Ricochete",
                description: "Uma vez por rodada, quando faz uma investida e acerta o ataque, você pode gastar 2 PM para atacar outra criatura que você consiga alcançar como parte dessa investida. Pré-requisito: Bater e Correr, 5º nível de guerreiro."
            },
            {
                name: "Manobra Dupla",
                description: "Uma vez por rodada, quando faz uma manobra de combate usando uma arma versátil, você pode pagar 1 PM para executar uma manobra diferente extra."
            },
            {
                name: "Mente Disciplinada",
                description: "Sempre que você é afetado por uma habilidade de um aliado que fornece um bônus numérico em testes de perícia, rolagens de dano ou na Defesa, para você esse bônus aumenta em +1. Pré-requisito: 6º nível de guerreiro."
            },
            {
                name: "Mestre em Arma",
                description: "Escolha uma arma. Com esta arma, seu dano aumenta em um passo e quando faz um teste de ataque você pode gastar 2 PM para rolá-lo novamente. Pré-requisitos: Especialização em Arma com a arma escolhida, 12º nível de guerreiro."
            },
            {
                name: "Operações Combinadas",
                description: "Quando usa Ordens de Engajamento, você pode gastar +3 PM. Se fizer isso, pode atacar junto do aliado e, se um de vocês usar habilidades com custo em PM que forneçam bônus a esse ataque ou a seu dano, o outro também é afetado (apenas se isso for aplicável ao ataque). Pré-requisitos: Ordens de Engajamento, 14º nível de guerreiro."
            },
            {
                name: "Ordens de Engajamento",
                description: "Uma vez por rodada, quando acerta um ataque em uma criatura sob efeito do seu Xadrez de Batalha, você pode gastar 2 PM para que um aliado em alcance curto possa fazer um ataque contra essa criatura. Pré-requisitos: Criar Oportunidade, Xadrez de Batalha, 11º nível de guerreiro."
            },
            {
                name: "Planejamento Marcial",
                description: "Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro."
            },
            {
                name: "Recuperar Fôlego",
                description: "Uma vez por cena, se estiver com 0 PM, você pode gastar uma ação de movimento para recuperar 1d8 PM."
            },
            {
                name: "Resiliência Marcial",
                description: "Sempre que sofrer dano letal, você recebe redução de dano 1 cumulativa (limitada pelo seu nível). Esse efeito dura até o fim da cena ou até você recuperar pontos de vida de qualquer forma. Pré-requisito: 4º nível de guerreiro."
            },
            {
                name: "Romper Resistências",
                description: "Quando faz um Ataque Especial, você pode gastar 1 PM adicional para ignorar 10 pontos de redução de dano."
            },
            {
                name: "Soldado de Infantaria",
                description: "Você recebe +3m em seu deslocamento e seu limite de carga aumenta em 6 espaços."
            },
            {
                name: "Solidez",
                description: "Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência."
            },
            {
                name: "Tornado de Dor",
                description: "Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a corpo e compare-o com a Defesa de cada inimigo em seu alcance natural. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro."
            },
            {
                name: "Valentão",
                description: "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos."
            },
            {
                name: "Velho de Guerra",
                description: "Seus olhos já viram muito e você não se abala facilmente. Você recebe +5 em Intimidação e imunidade a medo. Além disso, uma vez por cena pode gastar 5 PM para evitar completamente um efeito qualquer (ataque, magia etc.) usado contra você por outra criatura. Se o efeito for de área ou tiver outros alvos, continua funcionando normalmente contra eles. Pré-requisito: 17º nível de guerreiro."
            },
            {
                name: "Xadrez de Batalha",
                description: "Você pode gastar uma ação de movimento e 1 PM para analisar um oponente em alcance curto. Se fizer isso, você recebe +2 na Defesa e em testes de Reflexos contra essa criatura até o fim da cena. Esse bônus aumenta em +1 para cada outro poder que você possua que tenha Xadrez de Batalha como pré-requisito. Pré-requisito: treinado em Guerra."
            },
            {
                name: "Durão",
                description: "A partir do 3ª nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 3 PM para reduzir esse dano à metade.",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Ataque Extra",
                description: "A partir do 6º nível, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional uma vez por rodada.",
                default: true,
                nivel: 6,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Campeão",
                description: "No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele. Por exemplo, se fizer um Ataque Especial gastando 5 PM para ganhar +20 nas rolagens de dano e acertar o ataque, recupera 2 PM.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Do Bom e do Melhor (Inovador)",
                description: "Você começa o jogo com uma arma, armadura ou escudo superior a sua escolha, de até T$ 500. Entretanto, você é considerado não proficiente em qualquer arma, armadura ou escudo que não seja superior ou mágico.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Sequência Especial (Inovador)",
                description: "Você pode gastar 2 PM para iniciar uma sequência de movimentos inovadores. Quando faz isso, a cada vez que ataca com uma arma que ainda não tenha usado nessa sequência, você recebe um bônus de +1 em testes de ataque e rolagens de dano (cumulativo até +2). A cada 4 níveis, você pode gastar +1 PM para aumentar o limite desses bônus em +2. A sequência termina ao fim da cena ou se você ficar 1 rodada sem trocar pelo menos uma arma.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Bombardeio Sequencial (Inovador)",
                description: "No 2º nível, você pode usar sua Sequência Especial ao usar itens alquímicos ou poções (nesse caso, aplica o bônus de ataque acumulado à CD para resistir ao item).",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Acrobacia Defensiva (Inovador)",
                description: "A partir do 3º nível, quando sofre dano, você pode gastar 2 PM para executar uma pirueta defensiva. Você faz um teste de Acrobacia e subtrai o resultado desse teste do dano sofrido.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Domínio Excêntrico (Inovador)",
                description: "A partir do 4° nível, sempre que passar pelo menos uma semana carregando uma arma exótica ou de fogo superior ou mágica, você recebe proficiência nela.",
                default: true,
                nivel: 4,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Técnica Revolucionária (Inovador)",
                description: "A partir do 7° nível, você pode gastar 2 PM para, até o fim do combate, usar armas que esteja empunhando como se elas tivessem uma das seguintes habilidades de arma, a sua escolha: adaptável, ágil, alongada, dupla (use as estatísticas da arma em ambas as pontas) ou versátil (para uma manobra escolhida ao usar esta habilidade). Esse efeito termina se você ativar sua Técnica Revolucionária novamente.",
                default: true,
                nivel: 7,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Estilo Único (Inovador)",
                description: "No 20º nível, você consolida seu próprio estilo de combate. Escolha dois poderes de guerreiro ou de combate que possua. Para esses poderes, você ignora todos os requisitos e restrições relacionados a armas, incluindo propósito, empunhadura, características e habilidades das armas. Por exemplo, você pode usar Estilo de Duas Mãos com armas leves, Estilo de Arremesso com uma arma de duas mãos ou até Esgrimista com pistolas! O mestre tem a palavra final sobre como os poderes interagem entre si.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Efeitos do Golpe Pessoal",
                description: "• Amplo (+3 PM). Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura.\n• Atordoante (+2 PM). Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).\n• Avanço (+1 PM). Você pode percorrer até o seu deslocamento em linha reta antes de desferir o golpe.\n• Brando (+0 PM). Seu golpe causa dano não letal.\n• Brutal (+1 PM). Fornece um dado extra de dano do mesmo tipo.\n• Carregado (+1 PM). Você pode gastar uma ação padrão para energizar seu ataque. Se você fizer isso e atacar até a próxima rodada, seu ataque causa +2d8 pontos de dano.\n• Conjurador (Custo da Magia + 1 PM). Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental a sua escolha). Considere que a mão da arma está livre para lançar esta magia.\n• Destruidor (+2 PM). Aumenta o multiplicador de crítico em +1.\n• Distante (+1 PM). Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).\n• Elemental (+2 PM). Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez. e\n• Impactante (+1 PM). Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano.\n• Letal (+2 PM). Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.\n• Penetrante (+1 PM). Ignora 10 pontos de RD.\n• Preciso (+1 PM). Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.\n• Qualquer Arma (+1 PM). Você pode usar seu Golpe Pessoal com qualquer tipo de arma.\n• Ricocheteante (+1 PM). A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.\n• Sequencial (+2 PM). Seu golpe causa +1d6 pontos de dano. A cada vez que você acerta o golpe na mesma cena, esse bônus aumenta em um passo.\n• Sifão (+2 PM). Você recebe 1 PM temporário para cada 10 pontos da rolagem de dano. Você pode receber um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena.\n• Teleguiado (+1 PM). Ignora penalidades por camuflagem ou cobertura leves.\n• Golpe de Abertura (-2 PM). Seu golpe só pode ser usado em seu primeiro turno do combate.\n• Lento (-2 PM). Seu ataque exige uma ação completa para ser usado.\n• Perto da Morte (-2 PM). O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.\n• Sacrifício (-2 PM). Sempre que usa seu Golpe Pessoal, você perde 10 PV.\n• Truque Secreto (-2 PM). Seu golpe só pode ser usado uma vez contra cada alvo por cena."
            }
        ]
    },
    {
        nome: "Inventor",
        variante: {
            nome: "Alquimista",
        },
        descricao: "Um ferreiro, alquimista ou engenhoqueiro, especializado em fabricar e usar itens.",
        atributo: "Inteligência",
        pv: 12,
        pv_per_level: 3,
        pm: 4,
        treinedSkills: ["Ofício", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Conhecimento", "Cura", "Diplomacia", "Fortitude", "Iniciativa", "Investigação", "Luta", "Misticismo", "Ofício", "Pilotagem", "Percepção", "Pontaria"],
        extraSkills: 4,
        proficiencies: [],
        abilities: [
            {
                name: "Engenhosidade",
                description: "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Protótipo",
                description: "Você começa o jogo com um item superior, ou com 10 itens alquímicos, com preço total de até T$ 500. Veja o Capítulo 3: Equipamento para a lista de itens.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Fabricar Item Superior",
                description: "No 2º nível, você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com uma melhoria. Veja o Capítulo 3: Equipamento para a lista de melhorias.\n\nNos níveis 5, 8 e 11, você pode substituir esse item por um item superior com duas, três e quatro melhorias, respectivamente, e passa a poder fabricar itens superiores com essa quantidade de melhorias. Considera-se que você estava trabalhando nos itens e você não gasta dinheiro ou tempo neles (mas gasta em itens que fabricar futuramente).",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Agite Antes de Usar",
                description: "Quando usa um preparado alquímico que cause dano, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo. Pré-requisito: treinado em Ofício (alquimista)."
            },
            {
                name: "Ajuste de Mira",
                description: "Você pode gastar uma ação padrão e uma quantidade de PM a sua escolha (limitado pela sua Inteligência) para aprimorar uma arma de ataque à distância. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena. Pré-requisito: Balística."
            },
            {
                name: "Alquimista de Batalha",
                description: "Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano. Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Alquimista Exímio",
                description: "Quando você usa um preparado alquímico ou uma poção, a CD para resistir a ele aumenta em +2 e, se ele causar dano ou recuperar PV ou PM, esse efeito aumenta em +1 por dado. Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Alquimista Iniciado",
                description: "Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Veja as páginas 333 e 341 para as regras de poções. Pré-requisitos: Int 1, Sab 1, treinado em Ofício (alquimista)."
            },
            {
                name: "Alterar Programação",
                description: "Você pode gastar uma ação completa e 3 PM para alterar a programação de um construto não inteligente (Int -4 ou menor) adjacente. Faça um teste de Ofício (artesão) oposto ao teste de Vontade do construto. Se você vencer, ele fica confuso por 1 rodada e vulnerável. Se for um lacaio, em vez disso fica sob seu controle até o fim da aventura (veja Domar Criatura, p. 17). Você só pode controlar um construto dessa forma por vez e cada construto só pode ser alvo deste poder uma vez por cena. Pré-requisito: treinado em Ofício (artesão)."
            },
            {
                name: "Aparato Personalizado",
                description: "O primeiro aparato de cada uma de suas engenhocas não aumenta a CD para ativá-la. Pré-requisito: Engenhoqueiro."
            },
            {
                name: "Armadura Avançada",
                description: "Quando ativa uma engenhoca acoplada, você recebe um bônus no teste de ativação igual ao número de melhorias da armadura. Além disso, você pode gastar 4 PM para ativar uma engenhoca acoplada como ação livre (apenas se sua ativação for ação de movimento, padrão ou completa). Pré-requisitos: Armadura Mecanizada, 7º nível de inventor."
            },
            {
                name: "Armadura Mecanizada",
                description: "Você pode gastar T$ 100 e 1 dia de trabalho para acoplar uma engenhoca em sua armadura. Armaduras leves podem ter uma engenhoca acoplada e armaduras pesadas podem ter até três. Uma engenhoca acoplada não conta em seu limite de itens vestidos e não precisa ser empunhada. Pré-requisito: Engenhoqueiro."
            },
            {
                name: "Armeiro",
                description: "Você recebe proficiência com armas marciais corpo a corpo. Quando empunha uma arma corpo a corpo, pode usar sua Inteligência em vez de Força nos testes de ataque e rolagens de dano. Pré-requisitos: treinado em Luta e Ofício (armeiro)."
            },
            {
                name: "Artesão Criativo",
                description: "Você pode usar Ofício (artesão) no lugar de qualquer outro Ofício para qualquer fim (como pré-requisitos, por exemplo). Pré-requisito: treinado em Ofício (artesão)."
            },
            {
                name: "Ativação Rápida",
                description: "Ao ativar uma engenhoca com ação padrão, você pode pagar 2 PM para ativá-la com uma ação de movimento, em vez disto. Pré-requisitos: Engenhoqueiro, 7º nível de inventor."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Autômato",
                description: "Você fabrica um autômato, um construto que obedece a seus comandos. Ele é um parceiro iniciante de um tipo a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para veterano e, no 15º nível, para mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100. Pré-requisito: Engenhoqueiro."
            },
            {
                name: "Autômato Alquímico",
                description: "Seu autômato pode armazenar itens alquímicos e poções, com uma capacidade de carga igual à sua Inteligência. Além disso, uma vez por rodada, você pode gastar 1 PM para usar um desses itens como uma ação livre. Pré-requisito: Autômato."
            },
            {
                name: "Autômato Engenhocado",
                description: "Você pode gastar T$ 100 e 1 dia de trabalho para acoplar em seu autômato uma engenhoca que simule uma magia de 1º círculo com alvo 1 criatura ou objeto, ou que afete uma área. Uma vez por rodada, se o autômato estiver em alcance curto, você pode gastar +2 PM para ativar essa engenhoca como uma ação de movimento, tendo como origem o autômato. Pré-requisito: Autômato Prototipado."
            },
            {
                name: "Autômato Prototipado",
                description: "Você pode gastar uma ação padrão e 2 PM para ativar uma melhoria experimental em seu autômato. Role 1d6. Em um resultado 2 a 6, você aumenta o nível de parceiro do autômato em um passo (até mestre), ou concede a ele a habilidade iniciante de outro de seus tipos, até o fim da cena. Em um resultado 1, o autômato enguiça como uma engenhoca. Pré-requisito: Autômato."
            },
            {
                name: "Balística",
                description: "Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano). Pré-requisitos: treinado em Pontaria e Ofício (armeiro)."
            },
            {
                name: "Blindagem",
                description: "Você pode usar sua Inteligência na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisitos: Couraceiro, 8º nível de inventor."
            },
            {
                name: "Cano Raiado",
                description: "Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça. Pré-requisitos: Balística, 5º nível de inventor."
            },
            {
                name: "Catalisador Experimental",
                description: "Quando ativa uma engenhoca, você pode usar um catalisador e aplicar seus efeitos a ela. Pré-requisitos: Engenhoqueiro, 5º nível de inventor."
            },
            {
                name: "Catalisador Instável",
                description: "Você pode gastar uma ação completa e 3 PM para fabricar um preparado alquímico ou poção cuja fórmula conheça instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimista), mas ele só dura até o fim da cena. Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Chutes e Palavrões",
                description: "Uma vez por rodada, quando faz um teste de Ofício (engenhoqueiro) para ativar uma engenhoca, você pode gastar 1 PM para rolá-lo novamente. Pré-requisito: Engenhoqueiro."
            },
            {
                name: "Conhecimento de Fórmulas",
                description: "Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes quiser. Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Couraceiro",
                description: "Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode usar sua Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada). Pré-requisito: treinado em Ofício (armeiro)."
            },
            {
                name: "Engenhoqueiro",
                description: "Você pode fabricar engenhocas. Veja as regras para isso na página 70. Pré-requisitos: Int 3, treinado em Ofício (engenhoqueiro)."
            },
            {
                name: "Estilista",
                description: "Se estiver vestindo um item de vestuário feito por você mesmo, o bônus em perícias fornecido por ele aumenta em +1 e se aplica também a testes de Diplomacia e Enganação com criaturas inteligentes (Int -3 ou maior). Pré-requisitos: Car 1, treinado em Ofício (alfaiate)."
            },
            {
                name: "Explicação Científica",
                description: "Você pode gastar uma ação de movimento e uma quantidade de PM limitada pela sua Inteligência para receber resistência a magia igual aos PM gastos até o fim da cena. Pré-requisito: 5º nível de inventor."
            },
            {
                name: "Explorar Fraqueza",
                description: "Quando usa Encontrar Fraqueza em um inimigo, você também ignora 5 pontos da redução de dano dele até o fim da cena. Pré-requisito: Encontrar Fraqueza."
            },
            {
                name: "Farmacêutico",
                description: "Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item cura um dado extra do mesmo tipo. Pré-requisitos: Sab 1, treinado em Ofício (alquimista)."
            },
            {
                name: "Farmácia Mágica",
                description: "Você pode usar Farmacêutico em poções de cura. Pré-requisitos: Alquimista Iniciado, Farmacêutico."
            },
            {
                name: "Ferreiro",
                description: "Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo. Pré-requisitos: Armeiro, 5º nível de inventor."
            },
            {
                name: "Forçar a Calibragem",
                description: "Quando faz um teste para ativar uma engenhoca, você pode sofrer uma penalidade de -5 nesse teste para aumentar a CD para resistir à engenhoca em +2. Pré-requisito: Engenhoqueiro."
            },
            {
                name: "Galvanização",
                description: "Você pode gastar uma ação padrão para adicionar um material especial a um item adequado (isso não conta no limite de melhorias do item e se acumula com outros materiais especiais). O preço do material é reduzido a 5% do normal e você não precisa fazer o teste de Ofício para aplicá-lo, mas ele só dura até o fim da cena. Pré-requisito: treinado em Ofício (artesão)."
            },
            {
                name: "Gênio Inovador",
                description: "Você entende o mundo de forma diferente, e sua capacidade de inovar é quase ilimitada. Você pode usar Inteligência como atributo-chave de até duas perícias a sua escolha (em vez do atributo normal). Além disso, quando fabrica um item superior, você pode adicionar uma melhoria extra gratuita, que não conta no limite (por exemplo, por T$ +6.000, adiciona cinco melhorias, em vez de quatro). Por fim, os itens que você fabrica podem ter dois materiais especiais diferentes (em vez de apenas um). Pré-requisito: 17º nível de inventor."
            },
            {
                name: "Golpe de Gênio",
                description: "Uma vez por aventura (ou uma vez por mês, de acordo com o mestre), você pode usar Engenhosidade duas vezes em um mesmo teste, ou pode fabricar um item superior ou mágico com uma semana de trabalho (em vez de um mês). Pré-requisito: 11º nível de inventor."
            },
            {
                name: "Granadeiro",
                description: "Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar sua Inteligência em vez de Destreza para calcular a CD do teste de resistência desses itens. Pré-requisito: Alquimista de Batalha."
            },
            {
                name: "Homúnculo",
                description: "Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em alcance longo e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho pode fazer. Um homúnculo é um parceiro ajudante iniciante. Você pode perder 1d6 pontos de vida para seu homúnculo assumir uma forma capaz de protegê-lo e se tornar também um parceiro guardião iniciante até o fim da cena. Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Infusão Distante",
                description: "Quando usa um item alquímico ou uma poção que normalmente afetaria apenas um alvo adjacente, você pode gastar 1 PM para afetar um alvo em alcance curto. Se tiver o poder Granadeiro, em vez disso você afeta um alvo em alcance médio. Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Invenção Potente",
                description: "Quando usa um item ou engenhoca fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele."
            },
            {
                name: "Maestria em Perícia",
                description: "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários. Quando faz um teste dessas perícias, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque."
            },
            {
                name: "Manutenção Eficiente",
                description: "A quantidade de engenhocas que você pode manter aumenta em +3. Além disso, cada engenhoca passa a ocupar meio espaço. Pré-requisitos: Engenhoqueiro, 5º nível de inventor."
            },
            {
                name: "Mestre Alquimista",
                description: "Você pode fabricar poções com fórmulas que conheça de qualquer círculo. Pré-requisitos: Int 3, Sab 3, Alquimista Iniciado, 10º nível de inventor."
            },
            {
                name: "Mestre Cuca",
                description: "Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1. Pré-requisito: treinado em Ofício (cozinheiro)."
            },
            {
                name: "Mistura Fervilhante",
                description: "Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele. Pré-requisitos: Alquimista Iniciado, 5º nível de inventor."
            },
            {
                name: "Livro de Fórmulas",
                description: "Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma “fórmula” é uma magia divina ou arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções.\n\nVocê começa com três fórmulas de 1º círculo. A cada nível além do 1º, aprende uma fórmula adicional. A partir do 6º nível, pode aprender fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender fórmulas de um círculo maior.\n\nSe não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro, você pode preparar outro com uma semana de trabalho e o gasto de T$ 100."
            },
            {
                name: "Oficina de Campo",
                description: "Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos aumentam seu bônus na Defesa em +1. Os benefícios duram um dia. Pré-requisito: treinado em Ofício (armeiro)."
            },
            {
                name: "Oficina Esotérica",
                description: "Você pode usar Oficina de Campo em itens esotéricos, poções e pergaminhos. Itens esotéricos aumentam o limite de PM para magias em +1, poções rendem duas doses (a segunda dose deve ser consumida até o fim do dia) e pergaminhos permitem gastar +1 PM em aprimoramentos (mesmo que o usuário não conheça a magia). Pré-requisitos: treinado em Misticismo, Oficina de Campo."
            },
            {
                name: "Pedra de Amolar",
                description: "Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado por sua Inteligência) para aprimorar uma arma corpo a corpo que esteja empunhando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena. Pré-requisito: Armeiro."
            },
            {
                name: "Saraivada Alquímica",
                description: "Quando usa um preparado alquímico ou uma poção de dano, você pode gastar 2 PM e uma dose extra do mesmo item para aumentar o dano causado em 50%. Pré-requisitos: Granadeiro, 7º nível de inventor."
            },
            {
                name: "Síntese Rápida",
                description: "Quando fabrica um item alquímico ou poção, você pode fabricar o dobro de doses no mesmo tempo (pagando o custo de matéria-prima de cada uma). Pré-requisito: Alquimista Iniciado."
            },
            {
                name: "Comerciante",
                description: "No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha).",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Encontrar Fraqueza",
                description: "A partir do 7º nível, você pode gastar uma ação de movimento e 2 PM para analisar um objeto em alcance curto. Se fizer isso, ignora a redução de dano dele. Você também pode usar esta habilidade para encontrar uma fraqueza em um inimigo. Se ele estiver de armadura ou for um construto, você recebe +2 em seus testes de ataque contra ele. Os benefícios desta habilidade duram até o fim da cena.",
                default: true,
                nivel: 7,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Fabricar Item Mágico",
                description: "No 9º nível, você recebe um item mágico menor e passa a poder fabricar itens mágicos menores. Veja o Capítulo 8: Recompensas para as regras de itens mágicos.\n\nNos níveis 13 e 17, você pode substituir esse item por um item mágico médio e maior, respectivamente, e passa a poder fabricar itens mágicos dessas categorias. Considera-se que você estava trabalhando nos itens que recebe e você não gasta dinheiro, tempo ou pontos de mana neles (mas gasta em itens que fabricar futuramente).",
                default: true,
                nivel: 9,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Olho do Dragão",
                description: "A partir do 10º nível, você pode gastar uma ação completa para analisar um item. Você automaticamente descobre se o item é mágico, suas propriedades e como utilizá-las.",
                default: true,
                nivel: 10,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Obra-Prima",
                description: "No 20º nível, você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras futuras. Você é livre para criar as regras do item, mas ele deve ser aprovado pelo mestre. Como linha geral, ele pode ter benefícios equivalentes a de um item com cinco melhorias e quatro encantos. Considera-se que você estava trabalhando no item e você não gasta dinheiro, tempo ou PM nele.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Laboratório Pessoal (Alquimista)",
                description: "Você começa o jogo com instrumentos de alquimista aprimorados e 10 itens alquímicos com preço total de até T$ 300.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Mistura Básica (Alquimista)",
                description: "A partir do 3º nível, você pode usar catalisadores em itens alquímicos como se fossem magias.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Aplicação Rápida (Alquimista)",
                description: "No 5º nível, você pode gastar uma ação completa e 2 PM para usar dois preparados alquímicos ao mesmo tempo. Você precisa ter ambos em suas mãos ou ser capaz de sacá- -los como ação livre.",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Magia Engarrafada (Alquimista)",
                description: "No 7º nível, você pode usar Mistura Básica e Aplicação Rápida em poções.",
                default: true,
                nivel: 7,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Odores Alquímicos (Alquimista)",
                description: "A partir do 8º nível, você pode gastar uma ação completa para detectar a presença de itens alquímicos e poções em alcance médio. No caso de itens alquímicos, você descobre seu tipo (preparado, veneno etc.) e uso geral (curar, fornecer bônus etc.). Para poções, você identifica qual magia ela emula e com quantos pontos de mana foi fabricada.",
                default: true,
                nivel: 8,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Fabricar Emulsão (Alquimista)",
                description: "No 9º nível, você aprende a fabricar emulsões com um encanto (veja o quadro). Nos níveis 13 e 17, você aprende a fabricar emulsões com respectivamente dois e três encantos.",
                default: true,
                nivel: 9,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Bombardeio Eficiente (Alquimista)",
                description: "A partir do 11º nível, quando usa um preparado alquímico ou uma poção que causa dano, você pode gastar 1 PM para que esse item ignore 10 pontos da redução de dano das criaturas atingidas.",
                default: true,
                nivel: 11,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Pedra Filosofal (Alquimista)",
                description: "No 20º nível, você recebe uma pedra filosofal, um material que combina alquimia, magia e sua própria energia vital em uma fórmula única. Enquanto estiver de posse de sua pedra filosofal, você tem Cura Acelerada 10 e, quando faz um teste de Fortitude, rola dois dados e usa o melhor resultado. Além disso, se você ou um aliado em alcance curto for reduzido a 0 PV ou morrer, você pode sacrificar sua pedra filosofal para salvar essa criatura. A pedra se estilhaça em uma explosão de energia positiva que fornece ao alvo o efeito básico da magia Segunda Chance (com o efeito adicional de reconstruir o corpo do alvo, caso tenha sido destruído ou desintegrado). Você só pode ter uma pedra filosofal por vez; se perdê-la, pode fabricar outra com uma semana de trabalho e o gasto de T$ 18.000.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Emulsões (Alquimista)",
                description: "Uma emulsão é um óleo que concede propriedades mágicas a um item. Usá-la é uma ação padrão e fornece um ou mais encantos para um item até o fim da cena. Conceder um encanto através de uma emulsão não tem custo adicional (além do gasto do óleo) e conta no limite de encantos do item.\nExistem emulsões com um, dois e três encantos. Se um encanto contido em uma emulsão tiver outro como pré-requisito, a emulsão deve incluir também esse pré- -requisito. Fabricar uma emulsão segue as mesmas regras para itens alquímicos, mas o custo e a CD dependem da quantidade de encantos contidos no óleo.\n\nEncantos: 1; 2; 3\n\nCusto de Fabricação: T$ 250; T$ 750; T$ 1.500\n\nCD: 25; 30; 35\n\nPor sua volatilidade, que exige do criador manutenção constante, além da necessidade de supervisão em sua aplicação, emulsões não são comercializadas.",
                default: true,
                nivel: 0,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Engenhocas",
                description: "Uma engenhoca é uma invenção que simula o efeito de uma magia. Exemplos incluem um canhão (simula o efeito da magia Bola de Fogo), uma arma de raios (Relâmpago), um casaco blindado (Armadura Arcana), um emplastro curativo (Curar Ferimentos), um guarda-costas mecânico (Conjurar Monstro), um projetor de imagens (Criar Ilusão), um veículo a vapor (Montaria Arcana) etc.\n\nUma engenhoca é um item mundano Minúsculo que ocupa 1 espaço e possui Defesa 15, pontos de vida iguais à metade dos PV de seu fabricante e RD 5. Quando é fabricada, escolha se ela será empunhada (precisa estar na sua mão para ser ativada) ou vestida (precisa estar vestida para ser ativada, conta para seu limite de itens vestidos). Ao ser ativada, uma engenhoca pode assumir outra forma. Por exemplo, uma engenhoca que simula Montaria Arcana pode ser uma caixinha de engrenagens que se desdobra na forma de uma moto de madeira. Suas estatísticas não mudam."
            },
            {
                name: "Fabricação",
                description: "Para fabricar uma engenhoca, escolha uma magia arcana ou divina de 1º círculo. Essa será a magia que a engenhoca irá simular. A partir do 6º nível, você pode criar engenhocas com magias de 2º círculo e, a cada quatro níveis, pode criar engenhocas de um círculo maior.\n\nO custo de fabricação da engenhoca é T$ 100 x o custo em PM da magia que ela simula e a CD do teste é 20 + o custo em PM da magia. Assim, para fabricar uma engenhoca que simula o efeito de uma magia de 2º círculo (3 PM) você precisa gastar T$ 300 e passar em um teste de Ofício (engenhoqueiro) contra CD 23. O tempo de fabricação é uma semana."
            },
            {
                name: "Limite de Engenhocas",
                description: "Engenhocas são itens complexos e delicados, que exigem manutenção constante. O máximo de engenhocas que você pode ter ao mesmo tempo é igual a sua Inteligência."
            },
            {
                name: "Ativação",
                description: "Apenas o fabricante de uma engenhoca pode ativá-la. Ativar uma engenhoca exige uma ação padrão (ou a execução da magia, o que for maior) e um teste de Ofício (engenhoqueiro) contra CD 15 + custo em PM da magia. Se você passar, a engenhoca gera o efeito da magia (atributo-chave Int). Se falhar, ela enguiça e não pode ser utilizada até ser consertada, o que exige uma hora de trabalho. Cada nova ativação da engenhoca no mesmo dia aumenta a CD do teste de Ofício em +5.\n\nQuando ativa uma engenhoca, você pode usar quaisquer aprimoramentos da magia que ela simula, até um custo igual a sua Inteligência. A CD para ativar a engenhoca aumenta em +1 por PM e você paga o custo em PM dos aprimoramentos.\n\nSe a engenhoca simula o efeito de uma magia com custo especial, esse custo deve ser pago a cada ativação. Para outros custos e limitações, o efeito gerado pela engenhoca funciona como uma magia. Por exemplo, para manter um efeito com duração sustentada gerado por uma engenhoca, o inventor deve pagar 1 PM no início de cada um de seus turnos. Da mesma forma, só pode manter um efeito sustentado de engenhoca por vez. Se a magia simulada exigir um teste de Misticismo, use Ofício (engenhoqueiro) em seu lugar."
            },
            {
                name: "Efeito Mundano",
                description: "O efeito de uma engenhoca não é mágico. Isso significa que ele não pode ser dissipado, funciona em áreas de antimagia etc."
            },
            {
                name: "Penalidade de Armadura",
                description: "A ativação de uma engenhoca exige movimentos rápidos e precisos. Por isso, o teste de Ofício (engenhoqueiro) para ativar engenhocas sofre penalidade de armadura. Porém, você pode ativar engenhocas que geram magias arcanas enquanto usa armadura sem precisar fazer testes de Misticismo."
            },
            {
                name: "Efeitos que Impedem Conjuração",
                description: "Um efeito que especificamente impeça um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um inventor de ativar engenhocas."
            }
        ]
    },
    {
        nome: "Ladino",
        variante: {
            nome: "Ventanista",
            skills: ["Acrobacia", "Atletismo", "Atuação", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Furtividade", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Jogatina", "Nobreza", "Ofício", "Percepção", "Pilotagem"],
        },
        descricao: "Aventureiro cheio de truques, confiando mais em agilidade e esperteza que em força bruta.",
        atributo: "Destreza ou Inteligência",
        pv: 12,
        pv_per_level: 4,
        pm: 4,
        treinedSkills: ["Ladinagem", "Reflexos"],
        treinedSkillsOr: [],
        skills: ["Acrobacia", "Atletismo", "Atuação", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Furtividade", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Jogatina", "Luta", "Ofício", "Percepção", "Pilotagem", "Pontaria"],
        extraSkills: 8,
        proficiencies: [],
        abilities: [
            {
                name: "Ataque Furtivo",
                description: "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Especialista",
                description: "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Evasão",
                description: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Ameaça Brutal",
                description: "Se fizer um teste de Intimidação para assustar uma criatura na qual tenha causado dano desde a última rodada, você recebe +5 no teste e ela fica apavorada se você passar por 5 ou mais (em vez de 10 ou mais)."
            },
            {
                name: "Assassinar",
                description: "Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados. Pré-requisito: 5º nível de ladino."
            },
            {
                name: "Assassino em Série",
                description: "Você pode gastar 2 PM para usar Ataque Furtivo uma segunda vez na rodada. Pré-requisito: 11º nível de ladino."
            },
            {
                name: "Ataque Furtivo Letal",
                description: "Quando você faz um ataque furtivo, sempre que rolar o resultado máximo ou um ponto abaixo em um dado da habilidade (por exemplo, um 5 ou 6 ao rolar 1d6), role um dado extra. Pré-requisito: 5º nível de ladino."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Bombardeiro Furtivo",
                description: "Você pode usar Ataque Furtivo ao utilizar preparados alquímicos de dano. Pré-requisito: treinado em Ofício (alquimista)."
            },
            {
                name: "Chefe de Gangue",
                description: "Seus capangas podem usar Ataque Furtivo +1d6 e Evasão, e podem fazer testes de Reflexos usando o seu valor nessa perícia. Pré-requisito: 5º nível de ladino."
            },
            {
                name: "Conhecimento Anatômico",
                description: "Contra humanoides, os dados do seu Ataque Furtivo aumentam em um passo. Pré-requisito: treinado em Cura."
            },
            {
                name: "Contatos no Submundo",
                description: "Quando chega em uma comunidade equivalente a uma vila ou maior, você pode gastar 2 PM para fazer um teste de Carisma (CD 10). Se passar, enquanto estiver nessa comunidade, recebe +5 em testes de Investigação para interrogar, pode comprar itens mundanos, poções e pergaminhos com 20% de desconto (não cumulativo com barganha e outros descontos) e, de acordo com o mestre, tem acesso a itens e serviços proibidos (como armas de pólvora e venenos)."
            },
            {
                name: "Emboscar",
                description: "Na primeira rodada de cada combate, você pode gastar 2 PM para executar uma ação padrão adicional em seu turno. Pré-requisito: treinado em Furtividade."
            },
            {
                name: "Enganar os Olhos",
                description: "Quando você faz um teste de Acrobacia para passar por inimigo, a criatura o considera invisível por 1 rodada (Reflexos CD Des evita)."
            },
            {
                name: "Escapista",
                description: "Você recebe +5 em testes de Acrobacia para escapar, passar por espaço apertado e passar por inimigo e em testes para resistir a efeitos de movimento."
            },
            {
                name: "Finta Acrobática",
                description: "Você soma sua Destreza em testes de Enganação para fintar. Pré-requisitos: treinado em Acrobacia e Enganação."
            },
            {
                name: "Fuga Formidável",
                description: "Você pode gastar uma ação completa e 1 PM para analisar o lugar no qual está (um castelo, um porto, a praça de uma cidade...). Até o fim da cena, recebe +3m em seu deslocamento, +5 em Acrobacia e Atletismo e ignora penalidades em movimento por terreno difícil. Você perde esses benefícios se fizer uma ação que não seja diretamente relacionada a fugir. Por exemplo, você só pode atacar um inimigo se ele estiver bloqueando seu caminho, agarrando-o etc. Você pode fazer ações para ajudar seus aliados, mas apenas se eles estiverem tentando escapar. Pré-requisito: Int 1."
            },
            {
                name: "Gatuno",
                description: "Você recebe +2 em Atletismo. Quando escala, não fica desprevenido e avança seu deslocamento normal, em vez de metade dele."
            },
            {
                name: "Improvisação Arcana",
                description: "Quando passa em um teste de Misticismo para lançar uma magia arcana que não conhece de um pergaminho, para cada 2 pontos pelos quais seu teste superar a CD, você pode gastar 1 PM em aprimoramentos da magia. Pré-requisito: treinado em Misticismo."
            },
            {
                name: "Investida Rasteira",
                description: "Se você acertar um ataque corpo a corpo contra uma criatura que sofreu uma investida desde a última rodada, ela fica desprevenida por 1 rodada e caída (Reflexos CD Des evita)."
            },
            {
                name: "Ladrão Arcano",
                description: "Quando causa dano com um ataque furtivo em uma criatura capaz de lançar magias, você pode “roubar” uma magia que já a tenha visto lançar. Você precisa pagar 1 PM por círculo da magia e pode roubar magias de até 4º círculo. Até o fim da cena, você pode lançar a magia roubada (atributo-chave Inteligência). Pré-requisitos: Roubo de Mana, 13º nível de ladino."
            },
            {
                name: "Mão na Boca",
                description: "Você recebe +2 em testes de agarrar. Quando acerta um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada. Pré-requisito: treinado em Luta."
            },
            {
                name: "Mãos Rápidas",
                description: "Uma vez por rodada, ao fazer um teste de Ladinagem para abrir fechaduras, ocultar item, punga ou sabotar, você pode pagar 1 PM para fazê-lo como uma ação livre. Pré-requisitos: Des 2, treinado em Ladinagem."
            },
            {
                name: "Mente Criminosa",
                description: "Você soma sua Inteligência em Ladinagem e Furtividade. Pré-requisito: Int 1."
            },
            {
                name: "Mestre Assassino",
                description: "Quando usa Assassinar, você pode gastar +2 PM para:\n• Usar esse poder como uma ação livre.\n• Rolar dois dados no teste de ataque contra a criatura analisada e usar o melhor resultado.\n• Ignorar a imunidade a acertos críticos da criatura analisada.\nVocê pode usar quantos desses modificadores quiser (desde que pague por eles!). Assim, se gastar +6 PM, você usa Assassinar como ação livre, rola dois dados no teste de ataque e afeta criaturas imunes. Pré-requisitos: treinado em Cura e Percepção, Assassinar, Ataque Furtivo Letal, 11º nível de ladino."
            },
            {
                name: "Mestre Envenenador",
                description: "Quando afeta uma criatura com um veneno, você pode gastar +2 PM para:\n• Aumentar quaisquer efeitos do veneno em mais um dado do mesmo tipo.\n• Aumentar a CD para resistir ao veneno em +5.\n• Ignorar a imunidade a venenos da criatura.\nVocê pode usar quantos desses modificadores quiser. Pré-requisitos: treinado em Cura, Veneno Persistente, 11º nível de ladino."
            },
            {
                name: "Papo Furado",
                description: "Quando você passa em um teste de Diplomacia contra uma criatura, se passar também em um teste de Enganação contra ela até o fim do seu próximo turno, a atitude da criatura em relação a você melhora em uma categoria. Pré-requisitos: treinado em Diplomacia e Enganação."
            },
            {
                name: "Precisão Furtiva",
                description: "O alcance do seu Ataque Furtivo aumenta em uma categoria (de curto para médio e de médio para longo). Além disso, quando você ataca uma criatura desprevenida ou que você esteja flanqueando, sua margem de ameaça aumenta em +2. Pré-requisitos: treinado em Pontaria, Ataque Furtivo."
            },
            {
                name: "Oportunismo",
                description: "Uma vez por rodada, quando um inimigo adjacente sofre dano de um de seus aliados, você pode gastar 2 PM para fazer um ataque corpo a corpo contra este inimigo. Pré-requisito: 6º nível de ladino."
            },
            {
                name: "Rei do Crime",
                description: "Você é uma lenda dos becos e das tavernas, e todos querem lhe servir para ter uma chance de progredir no submundo. Uma vez por cena, você pode gastar 6 PM para invocar 2d4+2 assassinos capangas em espaços desocupados em alcance curto. Os assassinos possuem deslocamento 9m, Defesa 17, dano 1d6+5 de corte cada e Ataque Furtivo +4d6. Uma vez por rodada, quando você é alvo de um efeito, pode sacrificar um capanga adjacente para ignorar o efeito. Veja “Capangas”, p. 240. Pré-requisitos: Chefe de Gangue, Contatos no Submundo, Mente Criminosa, 17º nível de ladino."
            },
            {
                name: "Rolamento Defensivo",
                description: "Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade. Após usar este poder, você fica caído. Pré-requisito: treinado em Reflexos."
            },
            {
                name: "Roubo de Mana",
                description: "Quando você causa dano com um ataque furtivo, para cada 1d6 de dano de seu ataque furtivo, você recebe 1 PM temporário e a criatura perde 1 ponto de mana (se tiver). Você só pode usar este poder uma vez por cena contra uma mesma criatura. Pré-requisitos: Truque Mágico, 7º nível de ladino."
            },
            {
                name: "Sabotagem Corrosiva",
                description: "Quando faz um teste de Ladinagem para abrir fechaduras ou sabotar, você pode gastar um ácido para receber um bônus de +5 nesse teste. Além disso, pode gastar uma ação de movimento e um ácido para fazer um teste de Ladinagem oposto ao teste de Reflexos de uma criatura em alcance curto. Se você vencer o teste oposto, a criatura fica desprevenida e sofre -5 em testes de ataque por 1 rodada."
            },
            {
                name: "Saqueador de Tumbas",
                description: "Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de resistência contra elas. Além disso, gasta uma ação padrão para desabilitar mecanismos, em vez de 1d4 rodadas (veja a perícia Ladinagem)."
            },
            {
                name: "Senhor do Submundo",
                description: "Você é uma figura sombria e sua mera presença incita medo e respeito. Você recebe +5 em Intimidação e imunidade a medo. Além disso, quando você fica adjacente a outra criatura (independente de quem tenha se movido), você pode deixá-la apavorada e desprevenida por 1 rodada. Uma mesma criatura só pode ser afetada por este poder uma vez por cena. Pré-requisitos: treinado em Intimidação, 17º nível de ladino."
            },
            {
                name: "Sombra",
                description: "Você recebe +2 em Furtividade, não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para -10. Pré-requisito: treinado em Furtividade."
            },
            {
                name: "Truque de Palco",
                description: "Escolha três magias arcanas de 1º círculo que possuam o aprimoramento truque. Você aprende e pode lançar essas magias (atributo-chave Inteligência), mas apenas com esse aprimoramento. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação (veja “Magias Simuladas”, p. 44). Pré-requisito: treinado em Atuação."
            },
            {
                name: "Truque do Chapéu",
                description: "Uma vez por rodada, você pode gastar uma ação de movimento para tirar e arremessar um item que esteja vestindo em uma criatura em alcance curto. Se fizer isso, você pode fazer um ataque com uma arma de arremesso, ou arremessar um preparado alquímico ou poção contra ela como parte dessa ação. Pré-requisito: treinado em Enganação."
            },
            {
                name: "Truque Mágico",
                description: "Você aprende e pode lançar uma magia arcana de 1º círculo a sua escolha, pagando seu custo normal em PM. Seu atributo-chave para esta magia é Inteligência. Você pode escolher este poder quantas vezes quiser. Pré-requisito: Int 1."
            },
            {
                name: "Velocidade Ladina",
                description: "Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno. Pré-requisito: Des 2, treinado em Iniciativa."
            },
            {
                name: "Veneno Persistente",
                description: "Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um). Pré-requisitos: Veneno Potente, 8º nível de ladino."
            },
            {
                name: "Veneno Potente",
                description: "A CD para resistir aos venenos que você usa aumenta em +5. Pré-requisito: treinado em Ofício (alquimista)."
            },
            {
                name: "Vestido Para a Ocasião",
                description: "Se estiver usando um traje da corte ou de viajante, você pode gastar uma ação completa e 1 PM para transformar esse item em outro item de vestuário mundano até o fim da cena. Isso fornece +5 em testes de Enganação para disfarce, além dos benefícios do novo item. Pré-requisito: treinado em Enganação."
            },
            {
                name: "Esquiva Sobrenatural",
                description: "No 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.",
                default: true,
                nivel: 4,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Olhos nas Costas",
                description: "A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado.",
                default: true,
                nivel: 8,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Evasão Aprimorada",
                description: "No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
                default: true,
                nivel: 10,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "A Pessoa Certa para o Trabalho",
                description: "No 20º nível, você se torna um mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma perícia da lista de ladino, você pode gastar 5 PM para receber +10 no teste.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Charme (Ventanista)",
                description: "Você soma seu Carisma em seu total de PM. Quando faz um teste de perícia (exceto testes de ataque), você pode gastar uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Truques do Ofício (Ventanista)",
                description: "Você pode lançar magias arcanas de 1º círculo, mas apenas de encantamento e ilusão. Esta não é uma habilidade mágica e provém da sua capacidade de enganar outras pessoas (veja “Magias Simuladas”, p. 44). À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). \nVocê começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Inteligência.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Disfarce Elaborado (Ventanista)",
                description: "No 3º nível, você aprende a simular habilidades práticas úteis para seus disfarces. Sempre que fizer um teste de Enganação para disfarce (Tormenta20, p. 118), você pode escolher um poder (exceto poderes da Tormenta) cujos pré-requisitos cumpra e que esteja relacionado a esse disfarce. Enquanto estiver disfarçado dessa forma, você sofre uma penalidade de -3 PM e pode usar o poder escolhido. A cada seis níveis, você pode assumir uma penalidade adicional de -3 PM ao se disfarçar para escolher um poder adicional.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Virar a Casaca (Ventanista)",
                description: "No 7º nível, se estiver disfarçado, você pode gastar 1 PM para remover seu disfarce. Quando faz isso, você pode fazer um teste de esconder-se (Tormenta20, p. 119) usando Enganação no lugar de Furtividade, mesmo sem camuflagem ou cobertura disponível.",
                default: true,
                nivel: 7,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Provocação Ousada (Ventanista)",
                description: "A partir do 11º nível, em seu primeiro turno em cada cena, você pode gastar uma ação completa para provocar seus inimigos. Você pode deixar um cartão de visitas visível, declarar seu plano ou fazer outra ação que alerte seus inimigos de sua presença e de suas intenções. Até o fim da cena, seus inimigos recebem +2 em testes de Percepção, Sobrevivência e Vontade contra você. Entretanto, no início de seus turnos você recupera 2 PM. Esta habilidade só tem efeito se houver um risco associado a declarar suas ações (a critério do mestre) e recupera um máximo de PM por cena igual ao seu nível.",
                default: true,
                nivel: 11,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "O Grande Golpe (Ventanista)",
                description: "No 20º nível, no início de cada aventura, você pode escolher uma quantidade de magias, arcanas ou divinas, igual à sua Inteligência (você pode escolher a mesma magia mais de uma vez). Para cada escolha feita, defina um tipo de cena entre ação, exploração e interpretação (Tormenta20, p. 252). Até o fim da aventura, para cada vez que uma magia foi escolhida, se estiver em uma cena do tipo definido para ela, você pode lançá-la sem gastar PM (limite de PM 20, atributo-chave Inteligência). Esta não é uma habilidade mágica e provém da sua capacidade de enganar outras pessoas.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Lutador",
        variante: {
            nome: "Atleta",
            treinedSkills: ["Atletismo", "Luta"],
            skills: ["Acrobacia", "Adestramento", "Cavalgar", "Cura", "Fortitude", "Iniciativa", "Intimidação", "Ofício", "Percepção", "Pilotagem", "Pontaria", "Reflexos"]
        },
        descricao: "Um especialista em combate desarmado rústico e durão.",
        atributo: "Força",
        pv: 20,
        pv_per_level: 5,
        pm: 3,
        treinedSkills: ["Fortitude", "Luta"],
        treinedSkillsOr: [],
        skills: ["Acrobacia", "Adestramento", "Atletismo", "Enganação", "Furtividade", "Iniciativa", "Intimidação", "Ofício", "Percepção", "Pontaria", "Reflexos"],
        extraSkills: 4,
        proficiencies: [],
        abilities: [
            {
                name: "Briga",
                description: "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Golpe Relâmpago",
                description: "Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado adicional.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Aquecimento",
                description: "Em seu primeiro turno de um combate, você pode gastar uma ação completa para aquecer seus músculos. Você soma sua Constituição em seus testes de ataque desarmado (limitada pelo seu nível) e recebe uma quantidade de PV temporários igual a sua Constituição + seu nível. Ambos os bônus duram até o fim da cena."
            },
            {
                name: "Arma Improvisada",
                description: "Para você, atacar com armas improvisadas conta como fazer um ataque desarmado, mas seu dano aumenta em um passo. Você pode gastar uma ação de movimento para procurar uma pedra, cadeira, garrafa ou qualquer coisa que possa usar como arma. Faça um teste de Percepção (CD 20). Se você passar, encontra uma arma improvisada. Armas improvisadas são frágeis; se você errar um ataque e o resultado do d20 for um número ímpar, a arma quebra."
            },
            {
                name: "Até Acertar",
                description: "Se você errar um ataque desarmado, recebe um bônus cumulativo de +2 em testes de ataque e rolagens de dano desarmado contra o mesmo oponente. Os bônus terminam quando você acertar um ataque ou no fim da cena, o que acontecer primeiro."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Braços Calejados",
                description: "Se você não estiver usando armadura, soma sua Força na Defesa, limitado pelo seu nível."
            },
            {
                name: "Cabeçada",
                description: "Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso, o oponente fica desprevenido contra este ataque. Você só pode usar este poder uma vez por cena contra um mesmo alvo."
            },
            {
                name: "Caminhar pelas Paredes",
                description: "Você recebe +10 em testes de Atletismo para saltar e pode se deslocar por paredes e tetos. Contudo, se terminar seu movimento enquanto se desloca em uma parede, você cai (e sofre os efeitos normais de uma queda). Pré-requisito: treinado em Atletismo."
            },
            {
                name: "Caminho Suave",
                description: "Quando faz um teste de manobra com um ataque desarmado, você pode gastar uma quantidade de PM a sua escolha (limitada pela sua Sabedoria). Para cada PM que gastar, você recebe +2 no teste. Pré-requisito: Sab 1."
            },
            {
                name: "Chave",
                description: "Se estiver agarrando uma criatura e fizer um teste de manobra contra ela para causar dano, o dano desarmado aumenta em um passo. Pré-requisitos: Int 1, Lutador de Chão, 4º nível de lutador."
            },
            {
                name: "Combinações Desarmadas",
                description: "Poderes de Combinação representam golpes que se aproveitam dos efeitos de ataques anteriores sobre seu oponente. Eles compartilham as seguintes regras.\n• Combinações só podem ser usadas com ataques desarmados.\n• Cada Combinação só pode ser usada uma vez por rodada, e apenas uma Combinação pode ser usada por ataque.\n• Quando acerta um ataque usando um poder de Combinação, você começa uma contagem (individual por oponente). O próximo ataque de Combinação recebe um bônus de contagem (descrito em cada poder). A contagem zera se você passar uma rodada sem acertar um ataque usando um poder de combinação."
            },
            {
                name: "Combinação: Boca do Estômago",
                description: "Quando faz um ataque, você pode gastar 1 PM para que seu golpe seja debilitante. Se acertar, você recebe um bônus na rolagem de dano igual à sua contagem de combinações e o oponente fica enjoado até o fim do seu próximo turno."
            },
            {
                name: "Combinação: Chute Circular",
                description: "Quando faz um ataque, você pode gastar 2 PM para que seu golpe seja giratório. Se acertar, para cada ponto em sua contagem de combinações você causa +1d6 pontos de dano. Além disso, você pode fazer uma manobra empurrar contra o mesmo oponente como uma ação livre (use o resultado do ataque como o teste de manobra). Pré-requisito: outro poder de Combinação."
            },
            {
                name: "Combinação: Chute no Joelho",
                description: "Quando faz um ataque, você pode gastar 1 PM para que seu golpe seja um chute baixo cruel. Se acertar, até o fim do seu próximo turno o oponente fica lento e sofre uma penalidade em testes de ataque e rolagens de dano igual à sua contagem de combinações."
            },
            {
                name: "Combinação: Esquiva Técnica",
                description: "Uma vez por rodada, quando sofre um ataque corpo a corpo, você pode gastar 2 PM para fazer um teste de Reflexos oposto ao teste de Percepção do atacante. Você recebe um bônus nesse teste igual à sua contagem de combinações. Se vencer o teste oposto, você evita o ataque e recebe +5 em seu próximo teste de ataque desarmado contra o atacante nessa rodada. Pré-requisito: um poder de Combinação."
            },
            {
                name: "Combinação: Quebra-guarda",
                description: "Quando faz um ataque, você pode gastar 1 PM para que seu golpe supere defesas. Se fizer isso, recebe um bônus no teste de ataque igual à sua contagem de combinações. Se acertar, o oponente não pode usar habilidades para reduzir o dano do ataque ou receber RD adicional contra ele. Além disso, o oponente fica vulnerável até o fim do seu próximo turno."
            },
            {
                name: "Combinação: Um-Dois",
                description: "Quando faz um ataque, você pode gastar 1 PM para atacar de vários lados. Se fizer isso, você não precisa de um aliado para flanquear o oponente (faz isso sozinho). Além disso, se acertar, recebe um bônus na Defesa igual à sua contagem de combinações até o fim do seu próximo turno. Pré-requisito: Jogo de Pernas."
            },
            {
                name: "Combinação: Técnica de Sacrifício",
                description: "Quando faz um ataque, você pode gastar 1 PM para que ele seja um movimento de projeção. Para isso, faça uma manobra agarrar com um bônus igual à sua contagem de combinações. Se vencer o teste de manobra, além de agarrar o oponente, você se joga no chão com ele. Ambos ficam caídos, mas ele sofre dano como se você tivesse acertado um ataque desarmado."
            },
            {
                name: "Confiança dos Ringues",
                description: "Quando um inimigo erra um ataque corpo a corpo contra você, você recebe 2 PM temporários (cumulativos). Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena. Pré-requisito: 8º nível de lutador."
            },
            {
                name: "Convencido",
                description: "Acostumado a contar apenas com seus músculos, você adquiriu certo desdém por artes mais sofisticadas. Você recebe resistência a medo e mental +5."
            },
            {
                name: "Corpo Fechado",
                description: "Quando faz um teste de resistência, você pode gastar 1 PM para somar sua Constituição no teste."
            },
            {
                name: "Dança Marcial",
                description: "Você pode gastar uma ação de movimento e 2 PM para receber +2 na Defesa, em Acrobacia e em testes de Enganação para fintar. A partir do 6º nível, e a cada cinco níveis seguintes (11º e 16º), você pode gastar +1 PM para aumentar esses bônus em +1. Os bônus duram até o fim da cena ou até você ficar atordoado ou sob alguma condição de movimento. Pré-requisitos: treinado em Acrobacia e Atuação."
            },
            {
                name: "Gingado Elusivo",
                description: "Se estiver sob efeito de sua Dança Marcial, uma vez por rodada, quando sofre um efeito hostil, você pode gastar 2 PM para receber +5 na Defesa e em testes de Reflexos contra ele. Após a resolução do efeito, você salta para um espaço adjacente desocupado. Pré-requisitos: Dança Marcial, 7º nível de lutador."
            },
            {
                name: "Golpe Baixo",
                description: "Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso e acertar o ataque, o oponente deve fazer um teste de Fortitude (CD For). Se ele falhar, fica atordoado por uma rodada (apenas uma vez por cena)."
            },
            {
                name: "Golpe Imprudente",
                description: "Quando usa Golpe Relâmpago, você pode atacar de forma impulsiva. Se fizer isso, seus ataques desarmados recebem um dado de dano extra do mesmo tipo (por exemplo, se o seu dano é 2d6, você causa 3d6), mas você sofre -5 na Defesa até o início de seu próximo turno."
            },
            {
                name: "Imobilização",
                description: "Se estiver agarrando uma criatura, você pode gastar uma ação completa para imobilizá-la. Faça um teste de manobra contra ela. Se você passar, imobiliza a criatura — ela fica indefesa e não pode realizar nenhuma ação, exceto tentar se soltar (o que exige um teste de manobra). Se a criatura se soltar da imobilização, ainda fica agarrada. Enquanto estiver imobilizando uma criatura, você sofre as penalidades de agarrar. Pré-requisitos: Chave, 8º nível de lutador."
            },
            {
                name: "Invencível",
                description: "Você é um campeão de incontáveis embates, famoso e endurecido por isso. Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para somar a sua Força no teste. Além disso, sempre que é reduzido a 0 ou menos pontos de vida, pode gastar 5 PM para recuperar PV igual à metade dos seus PV máximos. Pré-requisitos: Nome na Arena, 17º nível de lutador."
            },
            {
                name: "Jogo de Pernas",
                description: "Uma vez por rodada, quando faz um ataque corpo a corpo, você pode se mover 1,5m em qualquer direção, antes ou depois do ataque. Esse movimento não ativa reações de seus inimigos (como de Ataque Reflexo). Pré-requisito: Des 1."
            },
            {
                name: "Língua dos Becos",
                description: "Quando faz um teste de perícia baseada em Carisma, você pode pagar 1 PM para usar sua Força no lugar deste atributo. Pré-requisitos: For 1, treinado em Intimidação."
            },
            {
                name: "Lutador de Chão",
                description: "Você recebe +2 em testes de ataque para agarrar e derrubar. Quando agarra uma criatura, pode gastar 1 PM para fazer uma manobra derrubar contra ela como uma ação livre."
            },
            {
                name: "Mestre das Combinações",
                description: "Sua contagem de combinações aumenta em +2 (em vez de +1) para cada ataque de Combinação diferente com o qual você acertar o oponente. Pré-requisitos: dois poderes de Combinação."
            },
            {
                name: "Nome na Arena",
                description: "Você construiu uma reputação no circuito de lutas de Arton. Uma vez por cena, pode gastar uma ação completa para fazer um teste de Luta (CD 10) e impressionar os presentes. Se passar, você recebe +2 em todos os seus testes de perícias originalmente baseadas em Carisma até o fim da cena e a atitude de qualquer pessoa que seja fã de lutas aumenta em uma categoria em relação a você (veja a página 259). Esse bônus aumenta em +2 para cada 10 pontos pelos quais o resultado do teste exceder a CD (+4 para um resultado 20, +6 para 30 e assim por diante). Pré-requisito: 11º nível de lutador."
            },
            {
                name: "Punhos de Adamante",
                description: "Seus ataques desarmados ignoram 10 pontos de redução de dano do alvo, se houver. Pré-requisito: 8º nível de lutador."
            },
            {
                name: "Rasteira",
                description: "Quando faz um ataque desarmado contra uma criatura até uma categoria de tamanho maior que a sua, você pode gastar 2 PM. Se fizer isso e acertar o ataque, a criatura fica caída."
            },
            {
                name: "Rilhar os Dentes",
                description: "Quando sofre dano de um ataque corpo a corpo, você pode gastar 1 PM para receber RD igual a 5 + sua Constituição contra esse dano."
            },
            {
                name: "Rolamento Escapatório",
                description: "Quando falha em um teste para evitar uma condição de movimento (como o teste oposto para evitar ser agarrado), você pode gastar 2 PM para rolá-lo novamente usando Acrobacia. Pré-requisito: treinado em Acrobacia."
            },
            {
                name: "Ruas Furiosas",
                description: "Quando destrói um objeto empunhado por um inimigo com a manobra quebrar, você recebe uma quantidade de PV temporários igual a 1d6 x sua Constituição."
            },
            {
                name: "Sarado",
                description: "Você soma sua Força no seu total de pontos de vida e em Fortitude. Você pode usar Força em vez de Carisma em testes de Diplomacia com pessoas que se atraiam por físicos bem definidos. Pré-requisito: For 3."
            },
            {
                name: "Sequência Defensiva",
                description: "Quando acerta um ataque desarmado em uma criatura, você recebe um bônus cumulativo de +2 na Defesa contra essa criatura até o início do seu próximo turno."
            },
            {
                name: "Sequência Destruidora",
                description: "No início do seu turno, você pode gastar 2 PM para dizer um número (no mínimo 2). Se fizer e acertar uma quantidade de ataques igual ao número dito, o último recebe um bônus cumulativo de +4 na rolagem de dano por ataque feito. Por exemplo, se você falar “três” e fizer e acertar três ataques, o último ataque (o terceiro) receberá +12 na rolagem de dano. Pré-requisitos: Trocação, 12º nível de lutador."
            },
            {
                name: "Trincado",
                description: "Esculpido à exaustão, seu corpo se tornou uma máquina. Você soma sua Constituição nas rolagens de dano desarmado. Pré-requisitos: Con 3, Sarado, 10º nível de lutador."
            },
            {
                name: "Trocação",
                description: "Quando você começa a bater, não para mais. Ao acertar um ataque desarmado, pode fazer outro ataque desarmado contra o mesmo alvo, pagando uma quantidade de PM igual à quantidade de ataques já realizados por você na rodada. Ou seja, pode fazer o primeiro ataque extra gastando 1 PM, um segundo ataque extra gastando mais 2 PM e assim por diante, até errar um ataque ou não ter mais pontos de mana. Pré-requisito: 6º nível de lutador."
            },
            {
                name: "Trocação Tumultuosa",
                description: "Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 2 PM para atingir todas as criaturas adjacentes — incluindo aliados! Você deve usar este poder antes de rolar o ataque e compara o resultado de seu teste contra a Defesa de cada criatura. Pré-requisitos: Trocação, 8º nível de lutador."
            },
            {
                name: "Valentão",
                description: "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos."
            },
            {
                name: "Voadora",
                description: "Quando faz uma investida desarmada, você pode gastar 2 PM. Se fizer isso, recebe +1d6 no dano para cada 3m que se deslocar até chegar ao oponente, limitado pelo seu nível."
            },
            {
                name: "Casca Grossa",
                description: "No 3º nível, você soma sua Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa.",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Golpe Cruel",
                description: "No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Golpe Violento",
                description: "No 9º nível, você bate com muita força. Seu multiplicador de crítico com ataques desarmados aumenta em +1.",
                default: true,
                nivel: 9,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Dono da Rua",
                description: "No 20º nível, seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, quando usa a ação agredir para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para fazer um terceiro).",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Façanha Atlética (Atleta)",
                description: "Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitada pela sua Força). Para cada PM que gastar, recebe +2 no teste.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Arremesso Atlético (Atleta)",
                description: "No 2º nível, o alcance de seus ataques com armas de arremesso aumenta em um passo (de curto para médio e de médio para longo). Além disso, quando ataca com uma dessas armas, você pode usar o dano da habilidade Briga no lugar do dano básico da arma. A partir do 10º nível, seus ataques com armas de arremesso contam como ataques desarmados para efeito de suas habilidades de lutador.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Poderio Muscular (Atleta)",
                description: "No 2º nível, você aprende e pode lançar Primor Atlético, mas apenas em si mesmo. Esta não é uma habilidade mágica e provém de seu extenso treinamento físico (veja “Magias Simuladas”, p. 44).",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Mais Alto e Mais Rápido (Atleta)",
                description: "No 5º nível, seu deslocamento aumenta em +3m. Além disso, você recebe deslocamento de escalada e natação igual à metade de seu deslocamento normal (se já os possui, em vez disso eles aumentam em +3m). Ao contrário do normal, esse deslocamento de natação não fornece a capacidade de respirar debaixo d’água, mas você soma seu nível de atleta no total de rodadas para prender sua respiração (veja Tormenta20, p. 319).",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Disciplina Atlética (Atleta)",
                description: "A partir do 9º nível, quando falha em um teste de resistência, você pode gastar 2 PM para rolar esse teste novamente, usando Atletismo no lugar da perícia original.",
                default: true,
                nivel: 9,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Corpo Ideal (Atleta)",
                description: "No 20º nível, você atinge o ápice físico de um corpo mortal. Você recebe imunidade a cansaço, condições de metabolismo e veneno, redução de dano 10 e seu dano desarmado e com armas de arremesso aumenta para 2d10 (criaturas Médias).",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Nobre",
        variante: {
            nome: "Burguês",
            treinedSkills: ["Diplomacia", "Vontade"],
            treinedSkillsOr: [],
            pv: 12,
            pv_per_level: 3,
            proficiencies: [],
            extraSkills: 6
        },
        descricao: "Um membro da alta sociedade cujas principais armas são as palavras e o orgulho.",
        atributo: "Carisma",
        pv: 16,
        pv_per_level: 4,
        pm: 4,
        treinedSkills: ["Vontade"],
        treinedSkillsOr: ["Diplomacia", "Intimidação"],
        skills: ["Adestramento", "Atuação", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Fortitude", "Guerra", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Jogatina", "Luta", "Nobreza", "Ofício", "Percepção", "Pontaria"],
        extraSkills: 4,
        proficiencies: [
            "Armas marciais",
            "Armaduras pesadas",
            "Escudos"
        ],
        abilities: [
            {
                name: "Autoconfiança",
                description: "Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Espólio",
                description: "Você recebe um item a sua escolha com preço de até T$ 2.000.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Orgulho",
                description: "Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Agente de Elite",
                description: "Você recebe um agente especial, um parceiro veterano que fornece os benefícios de um parceiro a sua escolha (Tormenta20, p. 260) ou um poder de outra classe, cujos pré-requisitos você cumpra (para efeitos de nível na classe desse poder, considere seu nível de nobre −4). No início de cada aventura, você pode trocar seu agente. Pré-requisitos: Título, 11º nível de nobre."
            },
            {
                name: "Armadura Brilhante",
                description: "Você pode usar seu Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisito: 8º nível de nobre."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Autoridade Feudal",
                description: "Você pode gastar uma hora e 2 PM para conclamar o povo a ajudá-lo (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo seu reino). Em termos de jogo, essas pessoas contam como um parceiro iniciante de um tipo a sua escolha (aprovado pelo mestre) que lhe acompanha até o fim da aventura. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre). Pré-requisito: 6º nível de nobre."
            },
            {
                name: "Comandante de Campo",
                description: "Seus capangas recebem +2 nas rolagens de dano e um bônus na Defesa igual ao seu Carisma. Além disso, quando contrata ou recebe capangas por qualquer motivo, você recebe um capanga adicional do mesmo tipo. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Comitiva",
                description: "Seu limite de parceiros aumenta em +1. A partir do 11º nível, esse limite aumenta em +1 adicional. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Discurso de Batalha",
                description: "Em seu primeiro turno de um combate, você pode gastar uma ação completa e fazer um teste de Diplomacia ou Intimidação. Se fizer isso, para cada 10 pontos no resultado do teste, você e seus aliados em alcance curto recebem 2 PM temporários. Esses PM temporários desaparecem no fim da cena."
            },
            {
                name: "Educação Privilegiada",
                description: "Você se torna treinado em duas perícias de nobre a sua escolha."
            },
            {
                name: "Estrategista",
                description: "Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu Carisma). No próximo turno do aliado, ele ganha uma ação de movimento. Pré-requisitos: Int 1, treinado em Guerra, 6º nível de nobre."
            },
            {
                name: "Favor",
                description: "Você pode usar sua influência para pedir favores a pessoas poderosas. Isso gasta 5 PM e uma hora de conversa e bajulação, ou mais, de acordo com o mestre, e funciona como o uso persuasão de Diplomacia (veja a página 118). Porém, você pode pedir favores ainda mais caros, difíceis ou perigosos — um convite para uma festa particular, uma carona de barco até Galrasia ou mesmo acesso aos planos militares do reino. Se você falhar, não pode pedir o mesmo favor por pelo menos uma semana."
            },
            {
                name: "Fofocas da Corte",
                description: "Quando chega em um ambiente social (taverna, acampamento militar, praça de vila, salão de castelo etc.), você pode gastar 1 hora para se inteirar das “novidades”. A critério do mestre, você recebe uma informação útil sobre os habitantes ou acontecimentos locais. Além disso, recebe 4d6 dados de auxílio. Sempre que faz um teste de perícia baseada em Carisma nesse ambiente, você pode gastar um desses dados e adicionar como um bônus no teste. Pré-requisitos: treinado em Intuição e Investigação."
            },
            {
                name: "General",
                description: "Quando você usa o poder Estrategista, aliados direcionados recebem 1d4 PM temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM. Pré-requisitos: Estrategista, 12º nível de nobre."
            },
            {
                name: "Grito Tirânico",
                description: "Você pode usar Palavras Afiadas como uma ação completa, em vez de padrão. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto. Pré-requisito: 8º nível de nobre."
            },
            {
                name: "Guarda Pessoal",
                description: "Você recebe um pelotão de infantaria (p. 241) veterano que atua como seu guarda-costas. No 11º nível, o pelotão se torna um parceiro mestre. Se perder seu pelotão de infantaria, você pode arregimentar outro após uma semana. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Hedonismo Aristocrático",
                description: "Uma vez por dia, você pode gastar 1 hora e um valor a sua escolha entre T$ 100, T$ 500 e T$ 2.000 em luxos como comida, bebida e apresentações artísticas. Se tiver gastado T$ 100, você recebe 4 PM temporários por patamar, que duram até o fim do dia. Se tiver gastado T$ 500, o ganho aumenta para 5 PM por patamar e, se tiver gastado T$ 2.000, para 6 PM por patamar."
            },
            {
                name: "Inspirar Confiança",
                description: "Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode gastar 2 PM para fazer com que ele possa rolar esse teste novamente."
            },
            {
                name: "Inspirar Glória",
                description: "A presença de um nobre motiva as pessoas a realizarem grandes façanhas. Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado. Pré-requisitos: Inspirar Confiança, 8º nível de nobre."
            },
            {
                name: "Instigar Violência",
                description: "Uma vez por rodada por aliado, quando um aliado em alcance curto faz um acerto crítico em um inimigo, você pode gastar 3 PM para que esse aliado faça mais um ataque contra o mesmo inimigo. Pré-requisitos: treinado em Guerra, 11º nível de nobre."
            },
            {
                name: "Insuflar Investida",
                description: "Quando faz uma investida, você pode gastar 1 PM por aliado a sua escolha em alcance curto. Se fizer isso, a próxima investida que cada um desses aliados fizer até o início do seu próximo turno causa +2d8 pontos de dano. Pré-requisito: Estrategista."
            },
            {
                name: "Jogo da Corte",
                description: "Quando faz um teste de Diplomacia, Intuição ou Nobreza, você pode gastar 1 PM para rolá-lo novamente."
            },
            {
                name: "Legado Mágico",
                description: "Você recebe um item mágico menor a sua escolha, como um presente ou uma herança de família. No início de cada aventura, você pode substituir esse item por outro. A partir do 14º nível, quando substitui o item pode escolher um item mágico médio e, a partir do 17º nível, um item mágico maior. Pré-requisito: 11º nível de nobre."
            },
            {
                name: "Liderar pelo Exemplo",
                description: "Você pode gastar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado do seu teste em vez de fazer o seu próprio. Pré-requisito: 6º nível de nobre."
            },
            {
                name: "Líder Enérgico",
                description: "Você soma seu Carisma em Iniciativa. Além disso, se for o primeiro na iniciativa, em seu primeiro turno você pode usar uma habilidade de nobre com execução de ação de movimento ou padrão como ação livre. Pré-requisito: treinado em Iniciativa."
            },
            {
                name: "Líder Impiedoso",
                description: "Sempre que um aliado sob efeito da sua habilidade Gritar Ordens fizer um acerto crítico ou reduzir um inimigo para 0 PV ou menos, você recupera 1 PM. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Língua de Ouro",
                description: "Você pode gastar uma ação padrão e 4 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas. Pré-requisitos: Língua de Prata, 8º nível de nobre."
            },
            {
                name: "Língua de Prata",
                description: "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível."
            },
            {
                name: "Língua Rápida",
                description: "Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de -5, em vez de -10."
            },
            {
                name: "Linhagem Distinta",
                description: "Você descende de uma família ilustre — ou, por suas ações, tornou sua família ilustre. Seja como for, o nome de sua família o inspira a grandes feitos. Quando você usa Orgulho, o custo da habilidade diminui em -1 PM. Além disso, uma vez por cena, quando usa Orgulho, você pode gastar +5 PM. Se fizer isso, o bônus fornecido pela habilidade dobra e, ao fazer o teste de perícia afetado por ela, você rola dois dados e usa o melhor resultado. Pré-requisito: 17º nível de nobre."
            },
            {
                name: "Ordens Agressivas",
                description: "Quando você usa Gritar Ordens, a habilidade também soma seu bônus na primeira rolagem de dano dos aliados até o início do seu próximo turno. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Ordens Encorajadoras",
                description: "Quando você usa Gritar Ordens, a habilidade também fornece 10 PV temporários cumulativos. Esses pontos desaparecem no fim da cena. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Palavras de Efeito",
                description: "Você soma seu Carisma no dano de sua habilidade Palavras Afiadas e a ação necessária para usá-la diminui em um passo (de completa para padrão, de padrão para movimento). Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Palavras Ressonantes",
                description: "Quando você usa Palavras Afiadas, sempre que rolar o resultado máximo ou um ponto abaixo do máximo em um dado da habilidade (por exemplo, um 5 ou 6 ao rolar 1d6), role um dado extra. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Presença Majestosa",
                description: "Sua Presença Aristocrática passa a funcionar contra qualquer criatura com valor de Inteligência (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem Int). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena. Pré-requisitos: 16º nível de nobre."
            },
            {
                name: "Protocolo Impecável",
                description: "Quando chega em um ambiente social (veja Fofocas da Corte), você pode gastar 2 PM e fazer um teste de Nobreza (CD 20). Se passar, porta-se da maneira ideal para a situação, o que melhora a atitude de todas as criaturas em relação a você em uma categoria. Se passar por 10 ou mais, a critério do mestre você pode receber possibilidades de interação que normalmente não teria — por exemplo, ao chegar em um acampamento militar ou castelo, pode ser convidado para falar com o general ou o nobre comandante. Pré-requisitos: treinado em Nobreza, Jogo da Corte."
            },
            {
                name: "Senescal",
                description: "Você recebe +1 por patamar em testes de perícia para resolver ações de base, domínio ou negócio e, uma vez por turno dessas estruturas, pode executar uma ação de estrutura adicional. Pré-requisito: 5º nível de nobre."
            },
            {
                name: "Título",
                description: "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de nobre (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte). Pré-requisito: Autoridade Feudal, 10º nível de nobre, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano."
            },
            {
                name: "Voz Límpida",
                description: "Quando você usa uma habilidade de nobre que afete um ou mais aliados, o custo dessa habilidade diminui em -1 PM (isso não reduz efeitos baseados no custo em PM pago)."
            },
            {
                name: "Voz Poderosa",
                description: "Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio."
            },
            {
                name: "Palavras Afiadas",
                description: "Você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int -3 ou maior) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (veja a tabela da classe). Mental.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Riqueza",
                description: "No 3º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, pode fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro igual ao resultado do teste. Assim, um nobre de 5º nível com Carisma 4 que role 13 no dado recebe 22 TO. O uso desta habilidade é condicionado a sua relação com sua família, patrono ou negócios e a onde você está. Por exemplo, um nobre viajando pelos ermos, isolado da civilização, dificilmente teria como receber dinheiro.",
                default: true,
                nivel: 3,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Gritar Ordens",
                description: "A partir do 4º nível, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou.",
                default: true,
                nivel: 4,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Presença Aristocrática",
                description: "A partir do 5º nível, sempre que uma criatura inteligente tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Realeza",
                description: "No 20º nível, a CD para resistir a sua Presença Aristocrática aumenta em +5 e uma criatura que falhe no teste de Vontade por 10 ou mais se arrepende tanto de ter tentado machucá-lo que passa a lutar ao seu lado (e seguir suas ordens, se puder entendê-lo) pelo resto da cena. Além disso, uma criatura que seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto da cena.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Meios de Produção (Burguês)",
                description: "No início de cada aventura, você recebe T$ 100 em dinheiro, itens mundanos ou poções a sua escolha. Esse valor aumenta para T$ 300 no patamar veterano, T$ 600 no campeão e T$ 1.000 no lenda.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Poder Monetário (Burguês)",
                description: "Quando usa uma habilidade com um custo em PM, você pode consumir uma quantidade de tibares de ouro (limitada pelo seu Carisma). Cada TO consumido dessa forma paga 1 PM do custo da habilidade. Você pode consumir um número de TO por dia igual ao seu nível. No 5º nível, este limite aumenta para o dobro do seu nível.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Desmoralizar (Burguês)",
                description: "No 2º nível, você aprende e pode lançar Perdição, e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Entretanto, pode lançá-la apenas em criaturas inteligentes (Int -3 ou maior). Esta não é uma habilidade mágica e provém da sua capacidade de abalar a autoconfiança de outras pessoas (veja “Magias Simuladas”, p. 44). Mental.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Negociante Nato (Burguês)",
                description: "No 3º nível, quando chega em uma nova comunidade, você pode gastar 1 dia fazendo contatos com o comércio local para fazer um teste de Diplomacia (CD 20). Se passar, pode vender itens nessa comunidade por 60% do seu preço (em vez de 50%). Para cada 10 pontos pelos quais o resultado do teste exceder a CD, você aumenta o preço de venda em +10% (até o máximo de 100%). Esta habilidade não se acumula com barganha, e NPCs ainda estão limitados a comprar somente o que desejam, com o dinheiro que possuem.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Suborno (Burguês)",
                description: "No 4º nível, você aprende e pode lançar Enfeitiçar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de instigar os outros com promessas de enriquecimento (veja “Magias Simuladas”, p. 44). A CD para resistir a essa magia aumenta em +2 se você tiver consumido pelo menos 1 tibar de ouro para pagar seu custo.",
                default: true,
                nivel: 4,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Ostentação (Burguês)",
                description: "A partir do 5º nível, você pode se beneficiar de um item vestido adicional. Além disso, a CD para resistir às suas habilidades de burguês aumenta em +1 se você possuir um item banhado a ouro, cravejado de gemas ou de mitral. Esse aumento é cumulativo; possuir três itens diferentes com as três modificações aumenta a CD em +3.",
                default: true,
                nivel: 5,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Novo Rico (Burguês)",
                description: "No 9º nível, para cada item mágico que você estiver vestindo, você recebe +1 PM por nível de poder do item (somente após 1 dia de uso).",
                default: true,
                nivel: 9,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Magnata (Burguês)",
                description: "No 20º nível, quando você usa Desmoralizar, a penalidade em testes de ataque também se aplica à CD das habilidades das criaturas afetadas. Além disso, sempre que consome um tibar de ouro para pagar o custo em PM de uma habilidade, você recebe 10 PV temporários cumulativos, que duram até o fim da cena.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            }
        ]
    },
    {
        nome: "Paladino",
        variante: {
            nome: "Santo",
            treinedSkills: ["Religião", "Vontade"],
            skills: ["Adestramento", "Atletismo", "Conhecimento", "Cura", "Diplomacia", "Fortitude", "Guerra", "Iniciativa", "Intuição", "Luta", "Ofício", "Percepção"],
            pm: 4,
        },
        descricao: "Um campeão do bem e da ordem, o perfeito soldado dos deuses.",
        atributo: "Força e Carisma",
        pv: 20,
        pv_per_level: 3,
        pm: 3,
        treinedSkills: ["Luta", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Adestramento", "Atletismo", "Cavalgar", "Cura", "Diplomacia", "Fortitude", "Guerra", "Iniciativa", "Intuição", "Nobreza", "Percepção", "Religião"],
        extraSkills: 2,
        proficiencies: [
            "Armas marciais",
            "Armaduras pesadas",
            "Escudos"
        ],
        abilities: [
            {
                name: "Abençoado",
                description: "Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de um deus disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode ser um paladino do bem, lutando em prol da bondade e da justiça como um todo. Não recebe nenhum Poder Concedido, mas não precisa seguir nenhuma Obrigação & Restrição (além do Código do Herói, abaixo). Cultuar o bem conta como sua devoção.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Código do Herói",
                description: "Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: true,
            },
            {
                name: "Golpe Divino",
                description: "Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruidor. Você soma seu Carisma no teste de ataque e +1d8 na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +1d8.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Cura pelas Mãos",
                description: "A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 pontos de vida por luz em um alvo em alcance corpo a corpo (incluindo você). A cada quatro níveis, você pode gastar +1 PM para aumentar os PV curados em +1d8+1. Esta habilidade causa dano de luz a mortos-vivos (CD Car). A partir do 6º nível, você pode gastar +1 PM quando usa Cura pelas Mãos para anular uma condição afetando o alvo, entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Mensagem de Paz",
                description: "Você pode gastar uma ação padrão e 1 PM para diminuir o desejo de violência de uma criatura em alcance curto. Faça um teste de Diplomacia oposto ao teste de Vontade da criatura. Se você vencer, a criatura sofre uma penalidade cumulativa de -1 em testes de ataque e rolagens de dano e, se for um lacaio, fica também pasma por 1 rodada (uma criatura só pode ficar pasma por este efeito uma vez por cena). Para cada 10 pontos pelos quais você vencer o teste oposto, a penalidade aumenta em 1 e, se a criatura estava enfeitiçada, fascinada ou pasma, a penalidade aumenta em 1 para cada uma dessas condições. A cada rodada, a penalidade acumulada da criatura diminui em 1. A cada quatro níveis, você pode gastar +1 PM para receber +5 no teste de Diplomacia. A partir do 5º nível, quando usa esta habilidade, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas à sua escolha em alcance curto. Mental.",
            },
            {
                name: "Arma Juramentada",
                description: "Se você estiver empunhando a arma preferida de sua divindade, ela recebe uma fração do poder divino. Em suas mãos, ela é considerada mágica e recebe os benefícios de uma melhoria (escolhido ao receber este poder, exceto material especial), cujos pré-requisitos ela cumpra. Essa melhoria não conta no limite da arma. Se você descumprir as Obrigações & Restrições da divindade, este efeito deixa de funcionar até você recuperar seus PM. Pré-requisito: devoto de uma divindade."
            },
            {
                name: "Arma Sacramentada",
                description: "A conexão de sua arma com sua divindade se torna mais forte. Em suas mãos, a arma também recebe os benefícios de um encanto (escolhido ao receber este poder) cujos pré-requisitos ela cumpra. Esse encanto não conta no limite da arma e também deixa de funcionar se você descumprir suas Obrigações & Restrições. Pré-requisitos: Arma Juramentada, 11º nível de paladino."
            },
            {
                name: "Arma Sagrada",
                description: "Quando usa Golpe Divino para atacar com a arma preferida de sua divindade, o dado de dano que você rola por Golpe Divino aumenta para d12. Pré-requisito: devoto de uma divindade (exceto Lena e Marah)."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Aura Antimagia",
                description: "Enquanto sua aura estiver ativa, você e os aliados dentro da aura podem rolar novamente qualquer teste de resistência contra magia recém realizado. Pré-requisito: 14° nível de paladino."
            },
            {
                name: "Aura Ardente",
                description: "Enquanto sua aura estiver ativa, no início de cada um de seus turnos, espíritos e mortos-vivos a sua escolha dentro dela sofrem dano de luz igual a 5 + seu Carisma. Pré-requisito: 10° nível de paladino."
            },
            {
                name: "Aura de Cura",
                description: "Enquanto sua aura estiver ativa, no início de seus turnos, você e os aliados a sua escolha dentro dela curam um número de PV igual a 5 + seu Carisma. Pré-requisito: 6° nível de paladino."
            },
            {
                name: "Aura de Invencibilidade",
                description: "Enquanto sua aura estiver ativa, você ignora o primeiro dano que sofrer na cena. O mesmo se aplica a seus aliados dentro da aura. Pré-requisito: 18° nível de paladino."
            },
            {
                name: "Aura Poderosa",
                description: "O raio da sua aura aumenta para 30m. Pré-requisito: 6° nível de paladino."
            },
            {
                name: "Aura Vingadora",
                description: "Enquanto sua aura estiver ativa, você e cada aliado dentro dela recebem +1d6 de luz em uma rolagem de dano corpo a corpo uma vez por rodada. Pré-requisito: 8º nível de paladino."
            },
            {
                name: "Bloqueio Divino",
                description: "Quando sofre um ataque, se estiver empunhando um escudo, você pode gastar 2 PM para receber +5 na Defesa contra esse ataque. Pré-requisito: proficiência com escudos."
            },
            {
                name: "Convicção Heroica",
                description: "Uma vez por cena, quando seus pontos de vida forem reduzidos a 0 ou menos, você pode gastar 5 PM para curar 50 PV. Pré-requisito: 11º nível de paladino."
            },
            {
                name: "Expurgo Sagrado",
                description: "Quando você usa Golpe Divino contra um abissal ou um morto-vivo, seu custo diminui em -1 PM (cumulativo com outras reduções) e o bônus de dano da habilidade aumenta em mais um dado."
            },
            {
                name: "Escudo Fraterno",
                description: "Se você estiver empunhando um escudo, sua Égide Sagrada afeta aliados até 9m (em vez de apenas adjacentes). Pré-requisito: Égide Sagrada."
            },
            {
                name: "Escudo Sagrado",
                description: "Se estiver empunhando um escudo, você pode gastar uma ação de movimento e 1 PM para criar uma barreira sagrada com duração sustentada a partir dele. Você recebe redução de dano igual ao seu Carisma. Pré-requisitos: Bloqueio Divino, 7º nível de paladino."
            },
            {
                name: "Fulgor Ardente",
                description: "Quando usa Golpe Divino, você pode gastar +1 PM. Se fizer isso e acertar o ataque, todos os inimigos a até 6m do alvo do ataque sofrem dano de luz igual ao dano extra causado por essa habilidade. Pré-requisito: Fulgor Divino."
            },
            {
                name: "Fulgor Divino",
                description: "Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno."
            },
            {
                name: "Guardião Celestial",
                description: "Você pode gastar uma ação padrão e 10 PM para convocar um espírito para lutar ao seu lado. O guardião celestial flutua ao seu redor, é incorpóreo e imune a dano e possui 100 pontos de luz. Uma vez por rodada, quando você sofre dano, pode fazer o espírito absorver esse dano. Ele perde pontos de luz igual ao dano que você sofreria, e desaparece se seus pontos de luz forem reduzidos a 0. Além disso, uma vez por rodada, você pode gastar 2 PM para fazer o espírito atacar uma criatura em alcance curto (ataque igual a sua Religião com um bônus adicional de +10, dano 4d8 mais seu Carisma de luz, crítico 18/x3). Pré-requisito: 17º nível de paladino."
            },
            {
                name: "Investida Sagrada",
                description: "Quando faz uma investida montada, você pode pagar 1 PM para receber deslocamento de voo igual ao seu deslocamento base até o fim do seu turno e causar +1d8 pontos de dano. Pré-requisitos: Montaria Sagrada, 10º nível de paladino."
            },
            {
                name: "Julgamentos Divinos",
                description: "Alguns poderes do paladino são Julgamentos Divinos. Esses poderes compartilham as seguintes regras.\n• Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário.\n• Julgamentos que não têm um efeito instantâneo duram até o fim da cena.\n• Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam."
            },
            {
                name: "Julgamento Divino: Arrependimento",
                description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado no próximo turno dele (apenas uma vez por cena)."
            },
            {
                name: "Julgamento Divino: Autoridade",
                description: "Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você vencer, ele obedece a um comando simples, como “pare” ou “largue a arma” (apenas uma vez por cena). Mental."
            },
            {
                name: "Julgamento Divino: Coragem",
                description: "Você pode gastar 2 PM para inspirar coragem em uma criatura em alcance curto, incluindo você mesmo. A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra o inimigo com maior ND na cena."
            },
            {
                name: "Julgamento Divino: Desafio",
                description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Sempre que esse inimigo ataca um de seus aliados, ele recebe uma penalidade cumulativa de -1 em testes de ataque (limitado pelo seu Carisma). Essa penalidade acaba se ele atacar você ou se você terminar seu turno além do alcance corpo a corpo dele."
            },
            {
                name: "Julgamento Divino: Iluminação",
                description: "Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena."
            },
            {
                name: "Julgamento Divino: Justiça",
                description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à metade do dano que causou."
            },
            {
                name: "Julgamento Divino: Libertação",
                description: "Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja afetando uma criatura em alcance curto."
            },
            {
                name: "Julgamento Divino: Proteção",
                description: "Você pode gastar 2 PM para conceder 10 PV temporários e +2 na Defesa para uma criatura em alcance curto."
            },
            {
                name: "Julgamento Divino: Redenção",
                description: "Você é capaz de criar um vínculo espiritual com um aliado. Você pode lançar Escudo da Fé, mas apenas com o aprimoramento que divide o dano entre o alvo e você (mas não precisa cumprir seu requisito de círculo)."
            },
            {
                name: "Julgamento Divino: Retribuição",
                description: "Você pode marcar um inimigo em alcance curto. Na próxima vez em que esse inimigo causar dano em você, você pode gastar 2 PM para fazer um ataque corpo a corpo contra ele (desde que ele esteja em seu alcance)."
            },
            {
                name: "Julgamento Divino: Salvação",
                description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque corpo a corpo nesse inimigo, recupera 5 pontos de vida."
            },
            {
                name: "Julgamento Divino: Vindicação",
                description: "Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre -5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente."
            },
            {
                name: "Julgamento Divino: Zelo",
                description: "Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na direção desse alvo, você se move com o dobro de seu deslocamento."
            },
            {
                name: "Luz Purificadora",
                description: "Quando usa Golpe Divino, você pode gastar +1 PM para converter todo o dano causado para luz e ignorar 10 pontos de redução de dano do alvo."
            },
            {
                name: "Manto de Batalha",
                description: "Você aprende e pode lançar Vestimenta da Fé, e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Pré-requisito: 5º nível de paladino."
            },
            {
                name: "Orar",
                description: "Você aprende e pode lançar uma magia divina de 1º círculo a sua escolha. Seu atributo-chave para esta magia é Sabedoria. Você pode escolher este poder quantas vezes quiser."
            },
            {
                name: "Paladino do Reino",
                description: "Você recebe um poder de cavaleiro cujos pré-requisitos cumpra, usando seu nível como nível de cavaleiro. Pré-requisito: treinado em Nobreza."
            },
            {
                name: "Rajada Divina",
                description: "Quando faz um Golpe Divino com Luz Purificadora, você pode gastar +1 PM para aumentar o alcance desse ataque para curto (ele ainda conta como um ataque corpo a corpo). Pré-requisito: Luz Purificadora."
            },
            {
                name: "Sacrifício",
                description: "Uma vez por rodada, quando faz um ataque corpo a corpo, você pode sacrificar 5 PV por patamar para aumentar o dano desse ataque em +1d10 por patamar. Por exemplo, se você for um personagem de 5º nível, pode perder 10 PV para causar +2d10 pontos de dano."
            },
            {
                name: "Sentença Dobrada",
                description: "Quando profere um julgamento, você pode gastar +1 PM para proferir um segundo julgamento com a mesma ação (pagando o custo de ambos)."
            },
            {
                name: "Virtude Paladinesca: Caridade",
                description: "O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em -1 PM."
            },
            {
                name: "Virtude Paladinesca: Castidade",
                description: "Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes."
            },
            {
                name: "Virtude Paladinesca: Compaixão",
                description: "Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1)."
            },
            {
                name: "Virtude Paladinesca: Humildade",
                description: "Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe uma quantidade de PM temporários igual ao seu Carisma (duram até o fim da cena)."
            },
            {
                name: "Virtude Paladinesca: Paciência",
                description: "Em combate, você pode ficar uma rodada inteira em meditação, sem fazer ações (exceto reações), para receber +2 em testes de perícia e na Defesa até o fim da cena."
            },
            {
                name: "Virtude Paladinesca: Temperança",
                description: "Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item desses rende duas “doses” para você."
            },
            {
                name: "Aura Sagrada",
                description: "No 3º nível, você pode gastar 1 PM para gerar uma aura com 9m de raio a partir de você e duração sustentada. A aura emite uma luz dourada e agradável. Além disso, você e os aliados dentro da aura somam seu Carisma nos testes de resistência.",
                default: true,
                nivel: 3
            },
            {
                name: "Bênção da Justiça",
                description: "No 5º nível, escolha entre égide sagrada e montaria sagrada. Uma vez feita, esta escolha não pode ser mudada.",
                default: true,
                nivel: 5
            },
            {
                name: "Égide Sagrada",
                description: "Você pode gastar uma ação de movimento e 2 PM para recobrir de energia seu escudo ou símbolo sagrado. Até o fim da cena, você e todos os aliados adjacentes somam seu Carisma na Defesa (cumulativo com outros efeitos). A partir do 11º nível, quando faz um teste de resistência contra uma magia lançada contra você, você pode gastar 5 PM para rolá-lo novamente. Se você passar no teste de resistência e a magia tiver você como único alvo, ela é revertida de volta ao conjurador (que se torna o novo alvo da magia; todas as demais características da magia, incluindo CD do teste de resistência, se mantêm)."
            },
            {
                name: "Montaria Sagrada",
                description: "Você pode gastar uma ação de movimento e 2 PM para invocar uma montaria sagrada. Veja o quadro para mais detalhes."
            },
            {
                name: "Vingador Sagrado",
                description: "No 20º nível, você pode gastar uma ação completa e 10 PM para se cobrir de energia divina, assumindo a forma de um vingador sagrado até o fim da cena. Nesta forma, você recebe deslocamento de voo 18m e redução de dano 20. Além disso, seu Golpe Divino tem seu custo é reduzido à metade e causa mais dois dados de dano.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Ladainha de Combate (Santo)",
                description: "Você pode gastar uma ação padrão e 2 PM para gerar uma aura de 9m de raio com duração sustentada. Você e os aliados dentro da aura recebem +1 em testes de ataque, rolagens de dano e na Defesa. A cada quatro níveis, você pode gastar +2 PM para aumentar esses bônus em +1. Sua ladainha conta como Aura Sagrada (veja Tormenta20, p. 84) para pré-requisitos e efeitos de poderes de paladino.\nNo 5º nível, você e os aliados dentro da aura causam +1d8 pontos de dano de luz com ataques contra devotos de deuses que canalizam apenas energia negativa e criaturas malignas (a critério do mestre).\nNo 9º nível, suas armas e as dos aliados dentro da aura recebem o encanto veloz.",
                default: true,
                nivel: 1,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Santo Curandeiro (Santo)",
                description: "A partir do 2º nível, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que você gastar, o aliado em alcance médio com a maior redução em seus PV (por dano ou perda de vida) recupera 2d8 pontos de vida por luz.\nA partir do 6º nível, quando usa Santo Curandeiro, você também pode remover uma condição do alvo entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo.",
                default: true,
                nivel: 2,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Vaso do Espírito (Santo)",
                description: "A partir do 3º nível, quando faz um teste de resistência, você pode gastar 1 PM para somar seu Carisma nesse teste.",
                default: true,
                nivel: 3,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Mártir (Santo)",
                description: "A partir do 6º nível, quando um aliado em alcance médio faz um teste de resistência, você pode gastar 1 PM para conceder a ele um bônus nesse teste igual ao seu próprio Carisma. A partir do 12º nível, uma vez por cena, se ele ainda assim falhar, você pode sofrer o efeito no lugar dele (mas você é afetado mesmo que seja imune ao efeito).",
                default: true,
                nivel: 6,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Pira Santa (Santo)",
                description: "No 8º nível, enquanto estiver sob efeito de Ladainha de Combate, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, o inimigo de maior ND em alcance médio sofre 2d8 pontos de dano de luz e fica ofuscado por 1 rodada (Fort CD Car reduz à metade).",
                default: true,
                nivel: 8,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Vingador Santificado (Santo)",
                description: "No 20º nível, quando usa Ladainha de Combate, você pode gastar +5 PM. Se fizer isso, os bônus numéricos fornecidos por sua Ladainha dobram e você e os aliados dentro da aura recebem imunidade a acertos críticos e RD igual a 5 + seu Carisma.",
                default: true,
                nivel: 20,
                mainclassOnly: false,
                subclassOnly: true,
            },
            {
                name: "Montaria Sagrada Detalhes",
                description: "Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei para Pequenos, mas suplementos futuros trarão outras opções de montarias. Para invocar sua montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica até o fim da cena, quando desaparece de volta para o mundo divino de onde veio. Como opção para campanhas mais realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisa gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar uma montanha). Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é preciso fazer testes de Adestramento). Ela fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. Veja a lista de parceiros na página 260. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia de prece e meditação.",
            },
            {
                name: "Virtudes Paladinescas",
                description: "Este conjunto de poderes representa obediência veemente a um comportamento específico. Você recebe um bônus progressivo em seu total de pontos de mana de acordo com a quantidade de poderes desse tipo que possui: +1 PM para uma Virtude, +3 PM para duas, +6 PM para três, +10 PM para quatro e +15 PM para cinco Virtudes. Virtudes Paladinescas são poderosas, mas possuem uma contrapartida — você deve se comportar de acordo com quaisquer Virtudes que possuir. Um paladino caridoso, por exemplo, deve sempre ajudar os necessitados, enquanto um casto nunca pode cair em tentação. Não seguir uma Virtude Paladinesca que você possua conta como uma violação do Código do Herói. O mestre tem a palavra final sobre o que exatamente constitui uma violação.",
            }
        ]
    },
    {
        nome: "Frade",
        variante: {},
        descricao: "",
        pv: 12,
        pv_per_level: 3,
        pm: 6,
        treinedSkills: ["Religião", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Adestramento", "Atuação", "Conhecimento", "Cura", "Diplomacia", "Fortitude", "Guerra", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Misticismo", "Ofício", "Percepção", "Nobreza"],
        extraSkills: 4,
        proficiencies: [],
        abilities: [
            {
                name: "Devoto Fiel",
                description: "Você se torna devoto de um deus maior. Veja as regras de devotos em Tormenta20, p. 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que frades do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa a sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Erudição",
                description: "Quando faz um teste de perícia (exceto de ataque), você pode gastar uma quantidade de PM a sua escolha (limitada pela sua Inteligência). Para cada PM que gastar, recebe +2 no teste.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Magias",
                description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Você pode lançar essas magias vestindo armaduras leves mas, se estiver usando armadura pesada, precisará fazer um teste de Misticismo como se fosse um conjurador arcano (veja “Armaduras e Magia Arcana”, em Tormenta20, p. 171). Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM. Veja o Capítulo 4 de Tormenta20 para as regras de magia.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Versiculário",
                description: "No 2º nível, você recebe um versiculário, um livro de anotações religiosas pessoais. Uma vez por dia, você pode gastar 1 hora estudando suas anotações no versiculário. Quando faz isso, escolha uma quantidade de magias igual à sua Inteligência (limitada pelo seu nível). Até o próximo dia, quando lança uma dessas magias, você recebe +1 PM para gastar em aprimoramentos. Se perder seu versiculário, você pode escrever outro com 1 semana de trabalho e o gasto de T$ 100.",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Acelerar Sacrário",
                description: "Quando cria um sacrário, você pode gastar +2 PM para criá-lo como uma ação de movimento (em vez de uma ação padrão). Pré-requisito: 5º nível de frade."
            },
            {
                name: "Ampliar Sacrário",
                description: "Você pode criar sacrários em alcance médio e eles passam a ocupar uma esfera de 6m de raio. Pré-requisito: 10º nível de frade."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Autoridade Eclesiástica (Básico)",
                description: "Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder variam de acordo com a igreja e o deus — clérigos de Khalmyr, por exemplo, possuem autoridade como juízes no Reinado — e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia ou Intimidação ao lidar com devotos de sua divindade e paga metade do preço de itens alquímicos, poções e serviços em templos de sua divindade. Pré-requisitos: 5º nível de clérigo, devoto de um deus maior."
            },
            {
                name: "Autoridade Eclesiástica (Deuses)",
                description: "Você possui uma posição formal e reconhecida em uma igreja. Você recebe +5 em testes de Diplomacia e Intimidação ao lidar com devotos de sua divindade, além do benefício específico de sua divindade. Pré-requisitos: 5º nível de clérigo ou frade, devoto de um deus maior."
            },
            {
                name: "Autoridade Eclesiástica (Aharadak)",
                description: "Você aprende e pode lançar Sussurros Insanos (Tormenta20, p. 207) como uma magia divina. Além disso, se estiver em um templo de Aharadak, ou com pelo menos 5 outros devotos do Deus da Tormenta, pode gastar 1 hora para executar um ritual que o aproxima da Anticriação. Se fizer isso, você recebe um embrião rubro, uma larva que se aloja em seu corpo e ocupa 1 espaço. Até o fim da aventura, ou até executar esse ritual novamente, você pode despertar essa larva para receber 1 poder da Tormenta a sua escolha, cujos pré-requisitos cumpra, até o fim da cena. Ao fim da cena, a larva se desaloja e cai no chão como uma pequena poça de visco rubro."
            },
            {
                name: "Autoridade Eclesiástica (Allihanna)",
                description: "Você recebe +5 em Adestramento e Cavalgar, e pode usar essas perícias com animais mesmo sem ser treinado. Além disso, quando descansa em terreno natural, recebe uma bênção dos espíritos locais. Para cada patamar, você recebe 1d4 de auxílio que pode ser adicionado como um bônus em um teste de perícia feito até o fim do dia."
            },
            {
                name: "Autoridade Eclesiástica (Arsenal)",
                description: "Quando visita um templo do Deus da Guerra, você pode orar para que ele abençoe seu… arsenal. Escolha uma arma, armadura ou escudo; o item recebe uma melhoria a sua escolha (exceto material especial) cujos pré-requisitos ele cumpra. Essa melhoria não conta no limite de melhorias do item. Se tiver o poder Conjurar Arma, você pode aplicar esse benefício às armas ou munições conjuradas com ele. Esses efeitos duram até o fim da aventura ou até você orar por outra melhoria."
            },
            {
                name: "Autoridade Eclesiástica (Azgher)",
                description: "Você recebe +5 em Sobrevivência. Além disso, uma vez por aventura, se visitar um templo de Azgher, você pode medir o peso de sua alma. Faça um teste de Religião com CD definida pelo mestre: 15 se você seguiu os preceitos de Azgher à risca durante o último mês; 20 se seguiu-os, mas não perfeitamente; 25 se quebrou suas Obrigações & Restrições. Você recebe 1 TO por patamar para cada ponto do resultado acima da CD."
            },
            {
                name: "Autoridade Eclesiástica (Hyninn)",
                description: "Quando chega a uma comunidade, você pode fazer um teste de Sabedoria (CD 10). Se passar, faz contato com ladrões locais; até partir desse lugar, você recebe +5 em testes de Diplomacia para barganha e de Investigação para interrogar. Além disso, uma vez durante sua estadia pode ganhar a ajuda de um parceiro veterano de um tipo a sua escolha entre ajudante (Enganação, Furtividade e Ladinagem), assassino, fortão, perseguidor ou vigilante, que não conta em seu limite de parceiros."
            },
            {
                name: "Autoridade Eclesiástica (Kallyadranoch)",
                description: "Você recebe +5 em Intimidação. Além disso, se visitar um templo de Kallyadranoch, você recebe uma fração da energia dominante do Deus dos Dragões. Durante uma cena a sua escolha, sempre que aplicar uma condição de medo em um ou mais inimigos, você recupera 1d4 PM."
            },
            {
                name: "Autoridade Eclesiástica (Khalmyr)",
                description: "Você recebe +5 em testes de Diplomacia e Intimidação com agentes da lei (cavaleiros, paladinos, guardas e outros, a critério do mestre). Além disso, uma vez por aventura, se estiver em um templo de Khalmyr, você pode solicitar uma escolta: até dois parceiros iniciantes, cada um de um tipo a sua escolha entre combatente, guardião ou médico. Eles o acompanham até o fim da aventura."
            },
            {
                name: "Autoridade Eclesiástica (Lena)",
                description: "Você recebe o poder Aparência Inofensiva (se já possuí-lo, a CD para resistir a ele aumenta em +2). Além disso, quando passa um dia descansando em um templo da Deusa da Vida, recebe +1 em testes de resistência e +1 PV por nível até o fim da aventura. A seu critério, aliados que façam o mesmo podem receber esses benefícios."
            },
            {
                name: "Autoridade Eclesiástica (Lin-Wu)",
                description: "Você recebe +2 em testes de perícia e na CD de suas habilidades contra criaturas treinadas em ao menos uma perícia desonrada (Enganação, Furtividade e Ladinagem) ou que possuam a habilidade Ataque Furtivo."
            },
            {
                name: "Autoridade Eclesiástica (Marah)",
                description: "Você é um conduíte para a beleza de Marah e recebe +1 em Carisma. Além disso, quando usa uma habilidade que cause uma condição entre enfeitiçado, fascinado ou pasmo, pode gastar 2 PM para fazer com que as criaturas afetadas rolem dois dados para seus testes de resistência e usem o pior resultado."
            },
            {
                name: "Autoridade Eclesiástica (Megalokk)",
                description: "Você tem autoridade até mesmo sobre monstros irracionais. A atitude de qualquer monstro com Int -3 ou menor em relação a você aumenta em uma categoria. Se mesmo assim o monstro atacá-lo, você recebe +1 em testes de ataque e rolagens de dano contra ele."
            },
            {
                name: "Autoridade Eclesiástica (Nimb)",
                description: "Essa conversa de autoridade não tem muito a ver com Nimb. Você está fora! Uma vez por dia, você pode conferir o status de autoridade de Nimb a outra criatura em alcance curto, que não seja devota do Deus do Caos. A vítima faz um teste de Vontade (CD Sab). Se ela passar, você fica confuso. Contudo, se ela falhar, fica sob efeito das Obrigações & Restrições de Nimb. Além disso, devotos do Deus do Caos procuram a vítima instintivamente, pedindo conselhos, infernizando sua vida e criando caos generalizado. Esse efeito dura um dia e, durante esse tempo, você fica livre das Obrigações & Restrições de Nimb. Conveniente, não?"
            },
            {
                name: "Autoridade Eclesiástica (Oceano)",
                description: "Você tem autoridade sobre as águas. Seu deslocamento nadando é dobrado. Além disso, uma vez por dia, se estiver em uma extensão de água natural, como um mar, lago ou rio, pode gastar 1 PM para convocar um animal anfíbio ou aquático, um parceiro iniciante a sua escolha entre combatente, fortão ou guardião, que não conta no seu limite de parceiros. O animal o acompanha até o fim do dia."
            },
            {
                name: "Autoridade Eclesiástica (Sszzaas)",
                description: "Você pode conduzir uma cerimônia especial com devotos do Deus da Traição. Você precisa de no mínimo 3 outros devotos para essa cerimônia, ela dura 1 hora e precisa ser realizada num local totalmente escondido (envolve cânticos profanos e exaltações a Sszzaas). Se fizer isso, para cada outro devoto na cerimônia seu total de PM aumenta em +1 até o fim da aventura e você recebe +1 em Enganação (ambos limitados pelo seu nível). O bônus em Enganação dura indefinidamente, mas diminui em 1 sempre que você fizer um teste dessa perícia."
            },
            {
                name: "Autoridade Eclesiástica (Tanna-Toh)",
                description: "Você recebe +5 em Conhecimento e em testes de perícia para identificar criatura, item e magia (veja Misticismo em Tormenta20, p. 121). Além disso, se visitar um templo da Deusa do Conhecimento, tem acesso a todo o conteúdo de sua biblioteca. Escolha uma perícia em que não seja treinado. Até o fim da aventura, ou até usar esse benefício novamente, você recebe os benefícios de ser treinado na perícia escolhida."
            },
            {
                name: "Autoridade Eclesiástica (Tenebra)",
                description: "Se estiver em um templo de Tenebra à noite, você pode conduzir uma cerimônia especial: Súplica à Deusa das Trevas. Isso é uma Missa (veja Tormenta20, p. 57), mas seus efeitos duram uma semana. Os participantes recebem redução de luz e fogo 5 e seus efeitos de trevas causam um dado extra de dano. À noite, esses benefícios são dobrados."
            },
            {
                name: "Autoridade Eclesiástica (Thwor)",
                description: "Você recebe +5 em qualquer teste de perícias baseadas em Carisma feito para convencer alguém a ajudar a causa duyshidakk (o mestre tem a palavra final sobre as situações em que esse bônus se aplica). Além disso, se visitar um templo de Thwor ou um local qualquer em que haja um diagrama do Akzath como parte da arquitetura, você e quaisquer aliados a sua escolha podem escolher se colocar mais próximos a um lado do Akzath. Escolha entre +10 PV e +1 em testes de perícias, exceto ataques (Vida, Início, Continuidade...) ou +1 em testes de ataque e rolagens de dano (Morte, Fim, Mudança...). Esse benefício dura até o fim da aventura, ou até ser trocado."
            },
            {
                name: "Autoridade Eclesiástica (Thyatis)",
                description: "Você recebe um ícone da fênix, um item esotérico especial que reduz o custo de magias de adivinhação e de fogo em -1 PM (cumulativo com outras reduções) e que conta como um símbolo sagrado de Thyatis. Se perder esse ícone, você pode receber outro visitando um templo do Deus da Ressurreição e da Profecia e fazendo uma doação de T$ 100."
            },
            {
                name: "Autoridade Eclesiástica (Valkaria)",
                description: "Você pode permanecer por uma aventura inteira em um mesmo local, desde que haja um templo de Valkaria a no máximo um dia de distância. Além disso, ao visitar um templo de Valkaria, pode decretar que está em uma “demanda”, uma missão envolvendo viagens com um objetivo definido, como recuperar um tesouro ou capturar um vilão. Em uma demanda, você recebe +1 PV por nível e dormir ao relento conta como uma condição de descanso confortável para você, mas dormir sob um teto conta como condição ruim. Esse efeito dura até que a demanda seja cumprida. Se você abandonar a demanda, fica alquebrado até fazer uma penitência."
            },
            {
                name: "Autoridade Eclesiástica (Wynna)",
                description: "Você paga metade do preço por pergaminhos, poções e serviços em templos de Wynna. Além disso, se passar um dia meditando em um templo da Deusa da Magia, recebe uma fração de seu conhecimento místico. Escolha uma magia que você não conheça, arcana ou divina, de até 2º círculo. Até o fim da aventura, ou até usar esse benefício novamente, você pode lançar essa magia pagando seu custo normal."
            },
            {
                name: "Bênção Fortalecedora",
                description: "Quando você lança Bênção, os aliados abençoados recebem uma quantidade de PV temporários igual a 5 vezes o bônus em testes de ataque fornecido pela magia. Esses PV temporários duram enquanto a magia durar. Pré-requisito: Bênção."
            },
            {
                name: "Canto Monástico",
                description: "Você pode gastar uma ação padrão e 1 PM para entoar um cântico religioso. Faça um teste de Atuação para ajudar (Tormenta20, p. 221). Seus aliados em alcance curto recebem um bônus igual ao bônus de ajuda em um teste de perícia feito até o fim da cena ou na CD para resistir a uma de suas habilidades usada até o fim da cena. Pré-requisito: treinado em Atuação."
            },
            {
                name: "Comunhão Vital",
                description: "Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original."
            },
            {
                name: "Copista",
                description: "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, pode fabricar o dobro de pergaminhos ao mesmo tempo (pagando o custo de matéria-prima de ambos). Pré-requisito: treinado em Ofício (escriba)."
            },
            {
                name: "Conhecimento Mágico",
                description: "Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser."
            },
            {
                name: "Cozinheiro da Abadia",
                description: "Quando prepara um prato especial, você pode combinar os efeitos de dois pratos. Você faz apenas um teste de Ofício, mas paga o custo de ambos. Pré-requisito: treinado em Ofício (cozinheiro)."
            },
            {
                name: "Estudante Diligente",
                description: "No começo do dia você pode escolher uma perícia em que não seja treinado. Se fizer isso, até o fim do dia você sofre uma penalidade de -2 PM, mas pode fazer testes da perícia escolhida como se fosse treinado nela."
            },
            {
                name: "Fé e Razão",
                description: "Quando usa uma habilidade de frade, você pode gastar uma quantidade de PM limitada por sua Inteligência. Se fizer isso, a CD dessa habilidade aumenta em +1 por PM gasto."
            },
            {
                name: "Mago Branco",
                description: "Suas magias de cura de luz custam -1 PM e curam +1 PV por dado de cura. Pré-requisito: 3º nível de frade."
            },
            {
                name: "Memorizar Liturgia",
                description: "Uma vez por dia, você pode gastar 1 hora de estudo e um número de pergaminhos que contenham magias divinas igual ou menor que sua Inteligência. Até o fim do dia, você pode lançar as magias contidas nesses pergaminhos como se as conhecesse ou, se já conhecia a magia, você soma sua Inteligência no limite de PM para lançá-la. Pré-requisitos: Copista, 8º nível de frade."
            },
            {
                name: "Ofício do Mosteiro",
                description: "Você pode fabricar itens de vestuário com Ofício (artesão) e pode usar essa perícia para fabricar itens com uma melhoria. Pré-requisito: treinado em Ofício (artesão)."
            },
            {
                name: "Psicografia",
                description: "Seus textos recebem inspiração divina. Você pode fabricar pergaminhos de qualquer magia divina (mesmo uma que não conheça) de quaisquer círculos a que tenha acesso. A CD para fabricar um desses pergaminhos aumenta em +5. Pré-requisitos: Copista, 5º nível de frade."
            },
            {
                name: "Sacrário da Erudição",
                description: "Quando lançam magias a partir de pergaminhos, você e seus aliados dentro do sacrário recebem +1 PM para gastar em aprimoramentos (mesmo que não conheçam a magia)."
            },
            {
                name: "Sacrário da Misericórdia",
                description: "No início dos seus turnos, cada criatura a sua escolha dentro do sacrário recupera uma quantidade de PV igual a 5 + sua Sabedoria. Este sacrário tem duração sustentada. Pré-requisito: 5º nível de frade."
            },
            {
                name: "Sacrário da Resiliência",
                description: "Você e seus aliados dentro do sacrário recebem +2 em testes de resistência e na Defesa. Quando cria este sacrário, você pode gastar mais PM para fortalecer seu efeito; para cada 2 PM adicionais gastos, o bônus concedido pelo sacrário aumenta em +1 (bônus máximo limitado pelo círculo máximo de magias que você pode lançar). Pré-requisito: 5º nível de frade."
            },
            {
                name: "Sacrário da Solenidade",
                description: "Criaturas dentro da área ficam sob condição terrível para lançar magias e sofrem -2 na Defesa. Quando cria este sacrário você pode gastar mais PM para fortalecer seu efeito; para cada 2 PM adicionais gastos, a penalidade causada pelo sacrário aumenta em 1 (penalidade máxima limitada pelo círculo máximo de magias que você pode lançar)."
            },
            {
                name: "Sacrário da Verdade",
                description: "Sempre que uma criatura na área passa em um teste de Acrobacia, Enganação, Furtividade ou Ladinagem, ou acerta um ataque contra uma criatura sob efeito de uma ou mais condições, ela sofre 2d6 pontos de dano psíquico por círculo de magia a que você tem acesso."
            },
            {
                name: "Sacrário das Sombras",
                description: "A área do sacrário é coberta por sombras; criaturas dentro dela recebem camuflagem leve e, se forem mortos-vivos, também recebem +2 na Defesa e em testes de perícia."
            },
            {
                name: "Sacrário do Compartilhamento",
                description: "Este sacrário tem duração sustentada. Quando lança uma magia de 1º ou 2º círculo que tenha apenas você como alvo, se estiver em alcance curto deste sacrário você pode gastar 2 PM para que um aliado dentro dele receba o efeito básico dessa magia. Pré-requisito: 7º nível de frade."
            },
            {
                name: "Sacrário do Ocaso",
                description: "Este sacrário é criado com 60 pontos de ocaso. No início de seus turnos, o sacrário perde 1d10 pontos de ocaso, e cada criatura dentro dele perde esse valor em PV. A perda de PV aumenta em +1d10 para cada círculo de magia que você possa lançar além do 1º. Quando cria o sacrário, você pode gastar mais PM para fortalecer seu efeito; para cada PM adicional gasto, o sacrário é criado com +20 pontos de ocaso. O sacrário desaparece quando seus pontos de ocaso terminam."
            },
            {
                name: "Sermão da Celeridade",
                description: "Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado. Pré-requisito: 8º nível de frade."
            },
            {
                name: "Sermão da Égide",
                description: "Você pode gastar uma ação padrão e 3 PM para orar por proteção para uma criatura em alcance curto. Até o seu próximo turno, quando essa criatura sofrer dano, ela pode gastar essa proteção para reduzir esse dano à metade."
            },
            {
                name: "Teologia Aplicada",
                description: "Escolha duas perícias. Quando faz um teste de uma dessas perícias (exceto testes de ataque), você pode gastar 1 PM para rolar novamente esse teste, usando Religião. Você pode escolher este poder outras vezes para perícias diferentes."
            },
            {
                name: "Transferir Sacrário",
                description: "Você pode gastar uma ação de movimento e 1 PM para transferir um de seus sacrários no alcance em que você pode criá-lo para outro ponto no mesmo alcance."
            },
            {
                name: "Zelador dos Vinhedos",
                description: "Você pode usar Ofício (cozinheiro) para preparar poções de magias que você conheça e cujo alvo seja 1 criatura. As poções tomam a forma de bebidas e seguem as regras desses itens (Heróis de Arton, Capítulo 3), exceto que ingeri-las é uma ação padrão. A bebida pode ser comum ou especial. No segundo caso, a CD para fabricá-la aumenta em +5 e o custo aumenta conforme a bebida especial, mas consumi-la gera ambos os efeitos (da poção e da bebida especial). Pré-requisito: treinado em Ofício (cozinheiro)."
            },
            {
                name: "Dádiva da Fé",
                description: "No 5º nível, você recebe Proteção Sagrada (se sua divindade canaliza energia positiva) ou Cólera Divina (se canaliza energia negativa).\n• Proteção Sagrada. Você pode gastar uma ação de movimento e até 2 PM por círculo de magia a que tem acesso para energizar seu símbolo sagrado até o fim da cena. Enquanto você estiver empunhando o símbolo, ele projeta uma aura com 9m de raio. Criaturas a sua escolha dentro dessa aura recebem redução de dano igual à metade do total de PM gastos.\n• Cólera Divina. Você pode gastar uma ação de movimento e até 2 PM por círculo de magia a que tem acesso para energizar seu símbolo sagrado até o fim da cena. Enquanto você estiver empunhando o símbolo, ele projeta uma aura com 9m de raio. Criaturas a sua escolha dentro dessa aura recebem um bônus em suas rolagens de dano igual à metade do total de PM gastos.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Solo Santificado",
                description: "No 20º nível, o raio de sua Dádiva da Fé muda para 30m e criaturas afetadas por ela também somam o bônus concedido pela habilidade na CD de suas próprias habilidades.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            }
        ]
    },
    {
        nome: "Treinador",
        variante: {},
        descricao: "",
        pv: 12,
        pv_per_level: 3,
        pm: 4,
        treinedSkills: ["Adestramento", "Vontade"],
        treinedSkillsOr: [],
        skills: ["Atletismo", "Cavalgar", "Diplomacia", "Guerra", "Iniciativa", "Intimidação", "Intuição", "Luta", "Ofício", "Percepção", "Pontaria", "Reflexos", "Religião", "Sobrevivência"],
        extraSkills: 4,
        proficiencies: [],
        abilities: [
            {
                name: "Direcionar",
                description: "Se o seu melhor amigo estiver em alcance curto e fizer um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste dele.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Melhor Amigo",
                description: "Você recebe um melhor amigo, um parceiro especial que o acompanha em suas aventuras. Veja a página 20 para as regras do melhor amigo. Ele começa com dois truques a sua escolha e recebe um novo truque a cada três níveis seguintes. Caso seu melhor amigo morra, você fica atordoado por 1d4 rodadas. Você pode treinar um novo melhor amigo com um mês de trabalho.",
                default: true,
                nivel: 1,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Domar Criatura",
                description: "A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para fazer um teste de Adestramento oposto ao teste de Vontade de uma criatura não inteligente em alcance curto. Se você vencer, causa 2d8 pontos de dano psíquico não letal à criatura. Se perder, causa metade desse dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende. A cada quatro níveis, você pode gastar +1 PM para aumentar o dano em +2d8.\nA partir do 5º nível, quando rende uma criatura com ND igual ou menor que seu nível, você pode gastar uma quantidade de pontos de mana igual ao ND dela. Se fizer isso, ela recupera todos os PV perdidos por esta habilidade e, até o fim da cena, você controla as ações dela (ela age durante o seu turno, mas possui as próprias ações).\nA partir do 8º nível, se o ND da criatura for igual ou menor que seu nível -3, ela fica com você até o fim do dia. Enquanto estiver sendo controlada, a criatura conta em seu limite de parceiros.\nCriaturas que possuam habilidades que não gastam PM e não possuam limite de uso podem usar essas habilidades apenas uma vez por dia. Além disso, algumas criaturas (a critério do mestre) são indomáveis, sendo imunes a este efeito (nesse caso, você recupera os PM gastos ao tentar comandar a criatura).",
                default: true,
                nivel: 2,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Amigo Divino",
                description: "Seu melhor amigo vive em um mundo divino, mas você pode gastar uma ação de movimento e 2 PM para invocá-lo a Arton. Ele surge em um espaço desocupado em alcance curto e permanece até o fim da cena ou até você enviá-lo de volta (uma ação livre). Enquanto estiver no mundo divino e com menos da metade de seus PV, o melhor amigo tem Cura Acelerada 10."
            },
            {
                name: "Asas Aliadas",
                description: "Uma vez por rodada, se você estiver em alcance curto de seu melhor amigo e ele usar deslocamento de voo, você pode pagar 1 PM para ser alçado aos céus. Se fizer isso, você se desloca para um quadrado desocupado no trajeto do amigo. Além disso, seu próximo ataque nesse turno conta como uma investida."
            },
            {
                name: "Aumento de Atributo",
                description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
            },
            {
                name: "Bom Garoto",
                description: "Uma vez por rodada, quando seu melhor amigo faz um acerto crítico em combate ou reduz um inimigo a 0 PV em seu turno, você recebe uma ação padrão que só pode usar consigo mesmo. Pré-requisito: 11º nível de treinador."
            },
            {
                name: "Comando Defensivo",
                description: "Quando seu melhor amigo sofre dano, você pode gastar 2 PM para fazer um teste de Adestramento e reduzir o resultado do teste desse dano. Você pode usar esta habilidade uma vez por rodada para cada melhor amigo."
            },
            {
                name: "Comandos Distantes",
                description: "O alcance de suas habilidades de treinador aumenta em uma categoria (de curto para médio, de médio para longo)."
            },
            {
                name: "Convocar Enxame",
                description: "Você aprende e pode lançar Enxame de Pestes (atributo-chave Carisma) e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Esta não é uma habilidade mágica e provém de sua capacidade de atrair criaturas (veja “Magias Simuladas”, p. 44). Pré-requisito: 5º nível de treinador."
            },
            {
                name: "Coração Grande",
                description: "Seu limite de parceiros aumenta em +1. No 11º nível, esse limite aumenta em +1."
            },
            {
                name: "Direcionamento Marcial",
                description: "Quando usa Direcionar em um teste de ataque, você também soma seu Carisma na rolagem de dano desse ataque."
            },
            {
                name: "Domador Cativante",
                description: "Você soma seu Carisma no dano de Domar Criatura, e os dados de dano dessa habilidade aumentam para d10."
            },
            {
                name: "Domador Lendário",
                description: "Quando usa Domar Criatura, você pode gastar +2 PM para mudar os dados de dano para d12 e atingir todos os alvos dentro do alcance. Pré-requisitos: Domador Cativante, 17º nível de treinador."
            },
            {
                name: "Ensinar Truque",
                description: "Um de seus melhores amigos aprende um truque adicional. Você pode escolher este poder uma vez por patamar por amigo."
            },
            {
                name: "Investida Conjunta",
                description: "Uma vez por rodada, quando um melhor amigo no qual você está montado faz uma investida, você pode gastar 2 PM para fazer um ataque corpo a corpo (que também conta como uma investida). Pré-requisito: melhor amigo montaria."
            },
            {
                name: "Líder da Matilha",
                description: "Quando usa Direcionar, você pode aplicar o bônus ao próximo teste de perícia de outros melhores amigos com a mesma ação ao custo de +1 PM por amigo adicional. O bônus só afeta o teste se ele for feito até o fim do seu turno. Pré-requisito: Conquistar pelos Números."
            },
            {
                name: "Língua das Criaturas",
                description: "Você pode se comunicar com criaturas não inteligentes (Int -4 ou -5) por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com essas criaturas para mudar atitude e persuasão (Tormenta20, p. 118)."
            },
            {
                name: "Mascote",
                description: "Você tem um mascote. Você pode escolher este poder várias vezes para mascotes diferentes."
            },
            {
                name: "Mascotes",
                description: "Um mascote é uma criatura com a qual você desenvolveu uma grande afinidade. Em termos de jogo, é um parceiro especial que não conta em seu limite de parceiros e com o qual você pode se comunicar através de gestos em alcance médio. Ele obedece a seus comandos, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Mascotes fornecem seus benefícios tanto para você quanto para seus melhores amigos. Se perder um de seus mascotes, você pode treinar um novo com uma semana de trabalho e T$ 100.\n• Águia Real. Uma vez por rodada, fornece +1d6 em uma rolagem de dano com arma.\n• Bicho Preguiça. Agarrado às costas (suas ou de seu melhor amigo), este animal ocupa o espaço de um item vestido, mas fornece um ataque natural de garra (dano 1d6, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa garra.\n• Camundongo Espiritual. Aumenta a CD para resistir a habilidades mágicas em +1.\n• Fada-Borboleta. Diminui o custo de habilidades mágicas em -1.\n• Gekko Malhado. Fornece +2 na Defesa e em Reflexos.\n• Mico-Leão Dourado. Permite usar Ladinagem para punga em alcance curto.\n• Minivaca. Fornece +1 em testes de ataque. Esse bônus dobra em investidas.\n• Ossinhos. O esqueleto de um animal reanimado. Fornece redução de corte, frio e perfuração 2."
            },
            {
                name: "Petisco Merecido",
                description: "Você pode gastar 2 PM para conceder +2 em Força e Destreza a um melhor amigo em alcance curto até o fim da cena."
            },
            {
                name: "Proteção Fraterna",
                description: "Quando você e/ou seu melhor amigo sofre um efeito que permite um teste de resistência, se ele estiver em alcance curto, você pode gastar 2 PM para coordenar seus esforços. Os dois fazem o teste de resistência, mas ambos usam o melhor resultado. Se um de vocês tiver uma habilidade que modifica o efeito por passar no teste de resistência (como Evasão), ambos são afetados por ela."
            },
            {
                name: "Trabalho em Equipe",
                description: "Uma vez por rodada, quando você faz uma ação de movimento, seus melhores amigos recebem uma ação de movimento. Pré-requisito: 5º nível de treinador."
            },
            {
                name: "Treinador Eclético",
                description: "Seus melhores amigos usam seu nível de personagem, em vez de seu nível de treinador, para calcular seus PV, modificadores de perícias e Defesa. Pré-requisito: 6º nível de treinador."
            },
            {
                name: "Veterinário de Campo",
                description: "Você pode gastar uma ação completa para fazer um teste de Adestramento em um melhor amigo adjacente. Ele recupera uma quantidade de PV igual ao resultado do teste. Você só pode usar este poder uma vez por dia num mesmo alvo."
            },
            {
                name: "Treino Especializado",
                description: "No 5º nível, escolha entre Conquistar pelos Números e Treino Intensivo.\n• Conquistar pelos Números. Você recebe um segundo melhor amigo. Uma vez por rodada, quando faz uma ação padrão com um de seus melhores amigos, você pode gastar 3 PM para fazer uma ação padrão com o outro.\n• Treino Intensivo. Seu melhor amigo recebe +4 PV por nível, redução de dano 5 e um truque. No 11º nível, a RD aumenta para 10 e ele recebe outro truque. No 17º nível, a RD aumenta para 15.",
                default: true,
                nivel: 5,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Sincronia de Combate",
                description: "A partir do 6º nível, uma vez por rodada, quando seu melhor amigo acerta um ataque usando a ação agredir, você pode gastar 2 PM para fazer um ataque contra o mesmo alvo.",
                default: true,
                nivel: 6,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Sincronia Perfeita",
                description: "No 20º nível, você pode gastar uma ação de movimento e 6 PM para entrar em um estado de sincronia perfeita com um dos seus melhores amigos. Até o fim da cena, o tamanho dele aumenta em uma categoria. Além disso, uma vez por rodada, quando usa uma ação padrão consigo mesmo, você recebe uma ação padrão extra para usar com ele.",
                default: true,
                nivel: 20,
                mainclassOnly: true,
                subclassOnly: false,
            },
            {
                name: "Alado (Truque)",
                description: "Seu melhor amigo ganha deslocamento de voo 15m. Pré-requisitos: Asas, 5º nível de treinador."
            },
            {
                name: "Amigão (Truque)",
                description: "Seu melhor amigo recebe +1 em Força e o tamanho dele muda para Enorme. Isso aumenta o dano de suas armas naturais em um passo e afeta seu modificador de Furtividade e manobras (Tormenta20, p. 107). Pré-requisito: melhor amigo Grande, 7º nível de treinador."
            },
            {
                name: "Amigo Feroz (Truque)",
                description: "Seu melhor amigo recebe +2 em testes de ataque e na margem de ameaça com suas armas naturais, e o dano delas aumenta em um passo."
            },
            {
                name: "Amigo Protetor (Truque)",
                description: "Quando você sofre dano, caso seu melhor amigo esteja em alcance curto, você pode gastar 2 PM para que ele salte em sua defesa. Se fizer isso, você sofre apenas metade do dano e o melhor amigo sofre o restante."
            },
            {
                name: "Amigo Veterano (Truque)",
                description: "Seu amigo vira um parceiro veterano de seu tipo. Pré-requisito: 5º nível de treinador."
            },
            {
                name: "Amigo Mestre (Truque)",
                description: "Seu amigo veterano vira um parceiro mestre de seu tipo. Pré-requisito: Amigo Veterano, 11º nível de treinador."
            },
            {
                name: "Anatomia Humanoide (Truque)",
                description: "Seu melhor amigo tem uma forma humanoide e Int -2 (em vez de -4). Ele não recebe uma arma natural inicial, mas tem proficiência com armas simples e armaduras leves, pode empunhar dois itens e vestir um item adicional, e tem um limite de carga de 10 espaços. Este truque só pode ser escolhido na criação do melhor amigo. Pré-requisito: construto ou morto-vivo."
            },
            {
                name: "Arma Natural Adicional (Truque)",
                description: "Seu melhor amigo recebe uma arma natural adicional. Quando ele faz a ação agredir com outra arma, você pode gastar 1 PM para que ele faça um ataque corpo a corpo extra com essa arma. Pré-requisito: animal ou monstro."
            },
            {
                name: "Asas (Truque)",
                description: "Seu melhor amigo possui asas que podem ser usadas para pairar a 1,5m do chão com deslocamento 12m. Isso permite que ele ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para que ele voe com deslocamento 12m."
            },
            {
                name: "Bote (Truque)",
                description: "Quando faz uma investida, seu melhor amigo pode atacar com todas as suas armas naturais. Todos os ataques recebem o bônus de +2 da investida, mas devem ser feitos contra o mesmo alvo. Pré-requisito: duas armas naturais."
            },
            {
                name: "Condicionamento Especial (Truque)",
                description: "O melhor amigo recebe +2 em um atributo e +1 em outro atributo, exceto Inteligência. Você pode escolher este truque uma vez por patamar."
            },
            {
                name: "Deslocamento Especial (Truque)",
                description: "Seu melhor amigo recebe deslocamento de escalada ou de natação igual a seu deslocamento base. Você pode escolher este truque uma segunda vez para que ele tenha ambos os deslocamentos."
            },
            {
                name: "Magia Inata (Truque)",
                description: "Escolha uma magia de 1º círculo, arcana ou divina. Seu melhor amigo aprende e pode lançar essa magia (atributo-chave Carisma do treinador). Você pode escolher este truque outras vezes para magias diferentes. Pré-requisito: espírito."
            },
            {
                name: "Manobra Ensaiada (Truque)",
                description: "Escolha uma manobra de combate. Seu melhor amigo recebe +2 em testes de ataque para executar essa manobra e, uma vez por rodada, quando ele acerta um ataque com uma arma natural, você pode gastar 1 PM para que ele faça essa manobra contra o alvo do ataque como uma ação livre."
            },
            {
                name: "Reanimação Sombria (Truque)",
                description: "Uma vez por cena, se seu melhor amigo estiver com 0 PV ou menos, você pode gastar 3 PM por patamar para reanimá-lo. Se você fizer isso, ele é reerguido com pontos de vida iguais à metade do seu máximo. Pré-requisito: morto-vivo."
            },
            {
                name: "Redução de Dano (Truque)",
                description: "Seu melhor amigo recebe redução de dano 5. Pré-requisito: 5º nível de treinador."
            },
            {
                name: "Sopro (Truque)",
                description: "Seu melhor amigo recebe um sopro de um tipo a sua escolha entre ácido, fogo, frio ou eletricidade. Você pode gastar uma ação padrão e uma quantidade de PM limitada pelo seu Carisma para que seu melhor amigo sopre um cone de 6m de energia do tipo escolhido. Para cada PM gasto, criaturas na área sofrem 2d8 pontos de dano do tipo escolhido (Reflexos CD Car do treinador reduz à metade). Pré-requisito: construto, espírito ou monstro."
            },
            {
                name: "Táticas de Matilha (Truque)",
                description: "Se seu melhor amigo estiver flanqueando um inimigo, além do bônus normal por flanquear, recebe +2 nos testes de ataque (total +4) e nas rolagens de dano contra ele. Se você estiver flanqueando com ele, recebe os mesmos bônus."
            },
            {
                name: "Treinamento de Companhia (Truque)",
                description: "Seu melhor amigo recebe uma ação de movimento adicional nos turnos dele (apenas para se deslocar). Pré-requisito: animal."
            },
            {
                name: "Treinamento Defensivo (Truque)",
                description: "Seu melhor amigo passa a receber um bônus na Defesa igual ao seu nível (em vez de metade do nível)."
            },
            {
                name: "Treinamento Marcial (Truque)",
                description: "Seu melhor amigo recebe +2 em testes de ataque e rolagens de dano. Para cada patamar acima de iniciante, esse bônus aumenta em +1. Se ele possuir o truque Anatomia Humanoide, também recebe proficiência com armas marciais, armaduras pesadas e escudos."
            },
            {
                name: "Veloz (Truque)",
                description: "Seu melhor amigo recebe +2 na Defesa e +3m em seus deslocamentos e se torna treinado em Atletismo (se já for, recebe +2 nessa perícia)."
            }
        ]
    }
];

export default classes;
