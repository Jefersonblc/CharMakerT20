export const spells3 = [
  {
    "area": "esfera de 6m de raio",
    "circle": "3",
    "description": "Esta magia cria uma onda de escuridão que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam Enjoadopor 1d4 rodadas (apenas uma vez por cena). Anular a Luz anula Dispersar as Trevas (este efeito tem duração instantânea).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +1."
      },
      {
        "cost": "+4 PM",
        "description": "muda o círculo máximo de magias dissipadas para 4º. Requer 4º Círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o círculo máximo de magias dissipadas para 5º. Requer 5º Círculo."
      }
    ],
    "name": "Anular a Luz",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Divina 3 (Necromancia)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você expulsa uma criatura não nativa de Arton. Um alvo nativo de outro mundo (como muitos espíritos), é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas rompidas, sendo reduzido a 0 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.\nSe você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD  aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso.",
    "duration": "instantânea",
    "effect": "",
    "execution": "1d3+1 rodadas",
    "implements": [
      {
        "cost": "+0 PM",
        "description": "muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada (como por uma magia de convocação) para seu plano de origem."
      }
    ],
    "name": "Banimento",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 criatura",
    "type": "Divina 3 (Abjuração)"
  },
  {
    "area": "cilindro com 3m de raio e 30m de altura",
    "circle": "3",
    "description": "Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano de fogo em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano de luz em +1d6."
      }
    ],
    "name": "Coluna de Chamas",
    "range": "longo",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Divina 3 (Evocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. \nEnquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar 2d4 (mais 2d4 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados.",
    "duration": "1 dia",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o número de dados de auxílio em +2."
      },
      {
        "cost": "+4 PM",
        "description": "muda o tipo dos dados de auxílio para d6."
      },
      {
        "cost": "+8 PM",
        "description": "muda o tipo dos dados de auxílio para d8."
      }
    ],
    "name": "Comunhão com a Natureza",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Divina 3 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios e demônios. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar 1d6 (mais 1d6 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado como bônus no teste. No entanto, sempre que rolar um “6” num desses dados, a entidade “suga” 1 PM de você. A magia termina se você gastar todos os dados, ficar sem PM ou no fim do dia (o que acontecer primeiro).",
    "duration": "1 dia",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de dados de auxílio em +1."
      },
      {
        "cost": "+8 PM",
        "description": "Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade “suga” 2 PM de você. Requer 4º círculo."
      }
    ],
    "name": "Contato Extraplanar",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 3 (Adivinhação)"
  },
  {
    "area": "9 cubos com 1,5m de lado",
    "circle": "3",
    "description": "Você manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na área. Ao lançar a magia, escolha.Amolecer: se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto às criaturas na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.Modelar: pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em uma maça, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).Solidificar: transforma lama ou areia em terra ou pedra. Criaturas com os pés na superfície ficam agarradas. Elas podem se soltar com uma ação padrão e um teste de Acrobacia ou Atletismo.",
    "duration": "",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o número de cubos de 1,5m em +2."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento fundem-se a uma superfície ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomodá-lo. Você pode voltar ao espaço adjacente como uma ação livre, dissipando a magia. Enquanto mesclado, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Pequenos danos não o afetam, mas se o objeto (ou o trecho onde você está imerso) for destruído, a magia é dissipada, você volta a um espaço livre adjacente e sofre 10d6 pontos de dano de impacto."
      }
    ],
    "name": "Controlar Terra",
    "range": "longo",
    "resistance": "Veja texto",
    "target": "",
    "type": "Divina 3 (Transmutação)"
  },
  {
    "area": "esfera com 30m de raio",
    "circle": "3",
    "description": "Você controla os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo.\nCongelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia.\nDerreter: gelo mundano na área vira água e a magia termina. A critério do mestre, isso pode criar terreno difícil.\nEnchente: eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para alvo: uma embarcação. O alvo recebe +3m em seu deslocamento pela duração do efeito.\nEvaporar: toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz à metade).\nPartir: diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual à da magia permite ao piloto livrar a embarcação). Elementais da água na área ficam lentos.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      }
    ],
    "name": "Controlar Água",
    "range": "longo",
    "resistance": "Veja texto",
    "target": "",
    "type": "Divina 3 (Transmutação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5). A magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura).",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, até 1 hora após ter lançado a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do normal, você esconde o baú alvo no Etér Entre Mundos, com até 20 espaços de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente, ou de volta para o Etér, com uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000). Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invocar o baú verdadeiro."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 objeto de até 10 espaços. Um objeto muito grande ou pesado para aparecer em suas mãos surge em um espaço adjacente a sua escolha."
      }
    ],
    "name": "Convocação Instantânea",
    "range": "ilimitado (veja texto)",
    "resistance": "",
    "target": "1 objeto de 2 espaços",
    "type": "Arcana 3 (Convocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Manipulando energias necromânticas, você concentra sua força vital em uma parte específica do seu corpo. Você recebe fortificação 100% e imunidade a sangramento.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a duração para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a cura do aprimoramento abaixo para +10 PV."
      },
      {
        "cost": "+4 PM",
        "description": "adiciona componente material (um coração de pedra no valor de T$ 100). Além do normal, quando seus pontos de vida são reduzidos a 0 ou menos, você cura 30 PV e a magia se encerra. Você só pode ser curado por este aprimoramento uma vez por dia."
      }
    ],
    "name": "Coração Imortal",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 3 (Necromancia)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você desperta a consciência de um animal ou planta. O alvo se torna um parceiro veterano de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, médico, perseguidor ou vigilante. Se usar esta magia em um parceiro que já possua, o nível de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre). Se já for um parceiro mestre, recebe o bônus de outro tipo de parceiro iniciante (entre as escolhas acima). O alvo se torna uma criatura racional, com Inteligência –1, e pode falar",
    "duration": "1 dia",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para permanente e adiciona penalidade de -3 PM."
      }
    ],
    "name": "Despertar Consciência",
    "range": "toque",
    "resistance": "",
    "target": "1 animal ou planta",
    "type": "Divina 3 (Encantamento)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para 1 semana."
      }
    ],
    "name": "Dificultar Detecção",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura ou objeto",
    "type": "Arcana 3 (Abjuração)"
  },
  {
    "area": "Esfera de 6m de raio",
    "circle": "3",
    "description": "Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área recebem +4 em testes de resistência e redução de trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam Cego por 1d4 rodadas (apenas uma vez pela magia). Dispersar as Trevas anula Anular a Luz (este efeito tem duração instantânea).",
    "duration": "veja texto",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus nas resistências em +1."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto, a área para alvo 1 criatura e a duração para cena. O alvo fica imune a efeitos de necromancia e trevas."
      },
      {
        "cost": "+4 PM",
        "description": "muda o círculo máximo de magias dissipadas para 4º. Requer 4º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o círculo máximo de magias dissipadas para 5º. Requer 5º círculo."
      }
    ],
    "name": "Dispersar as Trevas",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Divina 3 (Evocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você conjura um enxame de pequenas criaturas da Tormenta. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de ácido a qualquer criatura em seu espaço (Reflexos reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.",
    "duration": "sustentada",
    "effect": "1 enxame Grande (quadrado de 3m);",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar. Se você mover o enxame, a criatura fica livre."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d12."
      },
      {
        "cost": "+2 PM",
        "description": "muda o dano para trevas."
      },
      {
        "cost": "+3 PM",
        "description": "o enxame vira Enorme (quadrado de 6m de lado)."
      },
      {
        "cost": "+3 PM",
        "description": "o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao invés de um quadrado."
      },
      {
        "cost": "+4 PM",
        "description": "o enxame inclui parasitas inchados que explodem e criam novos enxames. No início de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um já existente à sua escolha. Você pode mover todos os enxames com uma única ação de movimento, mas eles não podem ocupar o mesmo espaço. Requer 4º círculo."
      }
    ],
    "name": "Enxame Rubro de Ichabod",
    "range": "médio",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 3 (Convocação)"
  },
  {
    "area": "quadrado de 6m de lado",
    "circle": "3",
    "description": "Estacas de gelo irrompem do chão. Criaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a área afetada terreno difícil, e concedem cobertura leve para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de frio em +2d6 e o dano de corte em +2d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área (sem teste de resistência). A tempestade fornece camuflagem leve as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4º círculo."
      }
    ],
    "name": "Erupção Glacial",
    "range": "médio",
    "resistance": "Relfexos parcial",
    "target": "",
    "type": "Arcana 3 (Evocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "O sangue do alvo aquece rapidamente até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 4d8 pontos de dano de fogo e fica Enjoado por uma rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade). Essa magia não afeta criaturas sem sangue, como construtos ou mortos-vivos.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d8."
      },
      {
        "cost": "+9 PM",
        "description": "muda alvo para criaturas escolhidas. Requer 5º círculo."
      }
    ],
    "name": "Ferver Sangue",
    "range": "curto",
    "resistance": "Fortitude parcial",
    "target": "1 criatura",
    "type": "Arcana 3 (Necromancia)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não têm efeito dentro dele. No entanto, magias ainda podem ser lançadas de dentro para fora.\nUma magia que dissipa outras magias só dissipa o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado). O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo."
      }
    ],
    "name": "Globo de Invulnerabilidade",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 3 (Abjuração)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe 40 PV temporários e +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o bônus para +6."
      }
    ],
    "name": "Heroísmo",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 3 (Encantamento)"
  },
  {
    "area": "cubo de 9m",
    "circle": "3",
    "description": "Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um teste de Vontade; uma falha significa que a criatura acredita que a ilusão é real e sofre 3d6 pontos de dano psíquico não letal. Sempre que uma criatura iniciar seu turno dentro da área, deve repetir o teste de Vontade. Se falhar, sofre o dano novamente. Somente criaturas que falham veem a ilusão, e racionalizam o efeito sempre que falham no teste (por exemplo, acredita que o mesmo teto pode cair sobre ela várias vezes).",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a área para um cubo de 90m. Requer 4º círculo."
      }
    ],
    "name": "Ilusão Lacerante",
    "range": "médio",
    "resistance": "Vontade anula",
    "target": "",
    "type": "Arcana 3 (Ilusão)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "O alvo fica Paralisado; se passar na resistência, em vez disso fica Lento. A cada rodada, pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, se liberta do efeito.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 espírito."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Requer 4º círculo"
      }
    ],
    "name": "Imobilizar",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 humanóide ou animal",
    "type": "Universal 3 (Encantamento)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas.\nRespingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma ação livre, você pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4º Círculo."
      }
    ],
    "name": "Lança Ígnea de Aleph",
    "range": "médio",
    "resistance": "Reflexos parcial",
    "target": "1 criatura",
    "type": "Arcana 3 (Evocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre:\n\nTodas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.\nTodas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento.\nSe o alvo está sob influência de alguma magia e todas as informações sobre as magias ativas, se houver alguma.\n\n ",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda a execução para 1 dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d’água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização."
      }
    ],
    "name": "Lendas e Histórias",
    "range": "toque",
    "resistance": "",
    "target": "1 craitura, objeto ou local",
    "type": "Universal 3 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você fica coberto por um manto de energia sombria. Nesta forma, torna-se incorpóreo (inclui seu equipamento): só pode ser afetado por armas mágicas,  ou por outras criaturas incorpóreas e pode atravessar objetos sólidos, mas não manipulá-los. Também não pode atacar criaturas normais (mas ainda pode lançar magias nelas). Além disso, se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada.\nVocê pode gastar uma ação de movimento e 1 PM para “entrar” em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura voluntária. Requer 4º círculo."
      }
    ],
    "name": "Manto de Sombras",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 3 (Ilusão)"
  },
  {
    "area": "cubo de até 90m de lado",
    "circle": "3",
    "description": "Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias).",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "além do normal, pode alterar a aparência de criaturas escolhidas na área, como se usando Disfarce Ilusório."
      },
      {
        "cost": "+9 PM",
        "description": "muda a duração para permanente e adiciona componente material (pó de diamante no valor de T$ 1.000). Requer 5º círculo."
      }
    ],
    "name": "Miragem",
    "range": "longo",
    "resistance": "Vontade desacredita",
    "target": "",
    "type": "Arcana 3 (Ilusão)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens.\nA Missão Divina não pode forçar uma criatura a um ato suicida, nem designar uma missão impossível (como matar uma criatura que não existe).",
    "duration": "1 semana ou até ser descarregada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, a\nduração para permanente e adiciona\npenalidade de –1 PM. Em vez do normal,\nvocê inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de ação que ativará a marca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Uma magia que dissipe outras suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta a duração para 1 ano ou até ser descarregada."
      }
    ],
    "name": "Missão Divina",
    "range": "curto",
    "resistance": "Vontade anula (veja texto)",
    "target": "1 criatura",
    "type": "Divina 3 (Encantamento)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Cria uma muralha de um elemento a sua escolha. A muralha pode ser um muro de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. Os efeitos variam conforme o elemento escolhido.\nFogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a até 6m quando você lança a magia e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em  uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano).\nGelo. Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.",
    "duration": "cena",
    "effect": "muralha de energia",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano por atravessar a muralha em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4º círculo."
      }
    ],
    "name": "Muralha Elemental",
    "range": "médio",
    "resistance": "veja texto",
    "target": "",
    "type": "Arcana 3 (Evocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Sua pele ganha aspecto e dureza de rocha. Você recebe redução de dano 5.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para 1 dia."
      },
      {
        "cost": "+4 PM",
        "description": "sua pele ganha aspecto e dureza de aço. Você recebe resistência a dano 10. Requer 4º círculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura, a duração para 1d4 rodadas e adiciona Resistência: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma estátua inerte e sem consciência. A estátua possui os mesmos PV da criatura e resistência a dano 8; se for quebrada, a criatura morrerá. Requer 4º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "como acima, mas com duração permanente. Requer 5º círculo."
      }
    ],
    "name": "Pele de Pedra",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 3 (Transmutação)"
  },
  {
    "area": "nuvem com 6m de raio",
    "circle": "3",
    "description": "Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste não podem recuperar PV por uma rodada.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+4."
      }
    ],
    "name": "Poeira da Podridão",
    "range": "médio",
    "resistance": "Fortitude (veja texto)",
    "target": "",
    "type": "Divina 3 (Necromancia)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo) e recebe Força +4 e RD 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus de Força em +1."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta a resistência a dano em +5."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. A magia falha se você e o alvo não forem devotos da mesma divindade."
      }
    ],
    "name": "Potência Divina",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 3 (Transmutação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o bônus para +10. Requer 4º círculo."
      },
      {
        "cost": "+4 PM",
        "description": "em vez do normal, o alvo fica imune a uma escola de magia a sua escolha. Requer 4º Círculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5º Círculo."
      }
    ],
    "name": "Proteção Contra Magia",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 3 (Abjuração)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, a ação não tem efeito (mas os PM são gastos mesmo assim).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas dentro do alcance. Requer 4º círculo."
      }
    ],
    "name": "Selo de Mana",
    "range": "toque",
    "resistance": "Vontade Parcial",
    "target": "1 criatura",
    "type": "Universal 3 (Encantamento)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser cumprida em até uma hora — desde algo simples como “use suas asas para nos levar até o topo da montanha” até algo complexo como “escolte esses camponeses até o castelo”. A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa.Componente material: um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro.",
    "duration": "Cena ou até ser descarregada",
    "effect": "criatura conjurada",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda a duração para 1 dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal."
      },
      {
        "cost": "+9 PM",
        "description": "muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      }
    ],
    "name": "Servo Divino",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Divina 3 (Convocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Esta magia transforma o cadáver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conservação do corpo). O morto-vivo então obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria.\nUma vez por rodada, quando sofre dano, você pode sacrificar um servo morto-vivo e evitar esse dano. O servo é destruído no processo e não pode ser reanimado.\nComponente material: um ônix negro (T$ 100), inserido na boca ou olho do cadáver.",
    "duration": "instantânea",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carniçal. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fortão ou guardião. O resto segue normal."
      },
      {
        "cost": "+3 PM",
        "description": "muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        "cost": "+7 PM",
        "description": "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma múmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardião ou médico. O restante da magia segue normal. Requer 4º círculo."
      }
    ],
    "name": "Servo Morto-Vivo",
    "range": "toque",
    "resistance": "",
    "target": "1 cadáver",
    "type": "Universal 3 (Necromancia)"
  },
  {
    "area": "cone de 9m",
    "circle": "3",
    "description": "Você enche seus pulmões de luz e energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enfeitiçado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de cura em 1d8+2."
      },
      {
        "cost": "+4 PM",
        "description": "além do normal, se um aliado estiver com PV negativos, seus PV são levados a 0 e então a cura é aplicada."
      },
      {
        "cost": "+4 PM",
        "description": "remove todas as condições listadas, em vez de apenas uma."
      }
    ],
    "name": "Sopro da Salvação",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Divina 3 (Evocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você move objetos ou criaturas se concentrando. Ao lançar a magia, escolha uma das opções a seguir.Força Contínua: você move uma criatura Média ou menor, ou objeto de até 10 espaços, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O alvo pode ser movido em qualquer direção dentro do alcance. Ele cai no chão se sair do alcance ou a magia terminar. Duração: sustentada.Empurrão Violento: nesta versão a energia mágica é expelida de uma única vez e arremessa até 10 objetos (no máximo 10 espaços). Os objetos devem estar a até 3m uns dos outros e podem ser arremessados até o alcance da magia.Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade.Criaturas médias ou menores podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superfície sólida sofre 1d6 pontos de dano de impacto para cada 3m que “voou” no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). Duração: instantânea.",
    "duration": "sustentada ou instantânea (veja texto)",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho máximo da criatura em uma categoria (para Grande, Enorme e Colossal) ou dobra a quantidade de espaços do objeto."
      }
    ],
    "name": "Telecinésia",
    "range": "médio",
    "resistance": "",
    "target": "veja texto;",
    "type": "Arcana 3 (Transmutação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km. Você precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino.\nCD 20. Um lugar familiar, que você visita com frequência.\nCD 30. Um lugar conhecido, que você já visitou pelo menos uma vez.\nCD 40. Um que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá.\nVocê não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a “sala de tesouro do rei” se nunca esteve nela nem falou com alguém que esteve.\nSe passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar). Se falhar por 5 ou mais, você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha (mas você gasta os PM) e fica atordoado por 1d4 rodadas.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +5."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, a magia teletransporta os alvos para seu santuário — um local familiar e previamente preparado. A magia pode ser usada sem limite de distância ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santuário exige um ritual de um dia e o gasto de T$ 1.000. Você só pode ter um santuário por vez."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execução para ação completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do normal, você cria um círculo de 1,5m de diâmetro no chão, que transporta qualquer criatura que pisar nele. O destino é escolhido quando a magia é lançada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo."
      }
    ],
    "name": "Teletransporte",
    "range": "toque",
    "resistance": "",
    "target": "até 5 criaturas voluntárias",
    "type": "Arcana 3 (Convocação)"
  },
  {
    "area": "esfera com 6m de raio",
    "circle": "3",
    "description": "Um círculo de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano.\nAgarrado",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o raio da área em +3m."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano dos tentáculos em +2d6."
      }
    ],
    "name": "Tentáculos de Trevas",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Arcana 3 (Necromancia)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10."
      },
      {
        "cost": "+2 PM",
        "description": "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Além do normal, você recebe resistência a dano 10 e imunidade a atordoamento e efeitos de cansaço, encantamento, metabolismo, trevas e veneno, e não precisa respirar."
      }
    ],
    "name": "Transformação de Guerra",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 3 (Transmutação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Como parte da execução, você entra em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair da mesma árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia termina e você sofre 10d6 pontos de dano de impacto. Enquanto a magia durar você pode gastar uma ação de movimento e 1 PM para entrar em outras árvores.",
    "duration": "cena",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, o alvo para até cinco criaturas e a duração para instantânea. Os alvos entram em uma planta (de tamanho Médio ou maior) e saem em outra planta do mesmo tamanho a até 100km de distância, especificada em direção e distância aproximadas (como “50km ao norte”)."
      }
    ],
    "name": "Viagem Arbórea",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 3 (Convocação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Através de uma superfície reflexiva (bacia de água benta para clérigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) você pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer direção), mesmo que ela se mova. O alvo pode estar a qualquer distância, mas se passar em um teste de Vontade, a magia falha. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela.Não conhece o alvo: +10.Ouviu falar do alvo: +5.O alvo está em outro plano ou mundo: +5.Já encontrou o alvo pessoalmente: +0.Tem uma pintura, escultura ou outra representação do alvo: –2.Conhece bem o alvo: –5.Tem um pertence pessoal ou peça de roupa do alvo: –5.Tem uma parte do corpo do alvo (unhas, cabelos...): –10.",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Vidência",
    "range": "ilimitado (veja texto)",
    "resistance": "Vontade anula",
    "target": "1 criatura",
    "type": "Universal 3 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "Você recebe deslocamento de voo 12m. Voar por meio desta magia é simples como andar — você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de Queda Suave.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para 1 dia. Requer 4º círculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para até 10 criaturas. Requer 4° círculo."
      }
    ],
    "name": "Voo",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 3 (Transmutação)"
  },
  {
    "area": "",
    "circle": "3",
    "description": "O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e a habilidade incorpóreo.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para médio, a área para esfera com 3m de raio e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+2 PM",
        "description": "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resistência a dano 20 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino)."
      },
      {
        "cost": "+4 PM",
        "description": "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e redução de dano 40 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino)."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode ser feito para entrar ou sair da área."
      },
      {
        "cost": "+9 PM",
        "description": "muda o alcance para médio, a área para esfera de 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área."
      }
    ],
    "name": "Âncora Dimensional",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura ou objeto",
    "type": "Arcana 3 (Abjuração)"
  }
];

export default spells3;