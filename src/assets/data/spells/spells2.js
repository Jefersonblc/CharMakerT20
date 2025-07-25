export const spells2 = [
  {
    "area": "",
    "circle": "2",
    "description": "Você cria um vínculo mental com um animal prestativo em relação a você. O Aliado Animal obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um parceiro veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor.",
    "duration": "0 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca no melhor de suas capacidades até um local designado por você — em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando."
      },
      {
        "cost": "+7 PM",
        "description": "muda o parceiro para mestre. Requer 3º círculo."
      },
      {
        "cost": "+12 PM",
        "description": "muda o alvo para 2 animais prestativos. Cada animal funciona como um parceiro de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de parceiros de acordo com o seu nível de personagem). Requer 4º círculo."
      }
    ],
    "name": "Aliado Animal",
    "range": "curto",
    "resistance": "",
    "target": "1 animal prestativo",
    "type": "Divina 2 (Encantamento)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Força +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo diminui uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Destreza +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m. Requer 4o círculo."
      }
    ],
    "name": "Alterar Tamanho",
    "range": "curto",
    "resistance": "",
    "target": "1 objeto",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a CD. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todos os laços forem destruídos, a magia é dissipada. Por serem feitos de energia, os laços afetam criaturas incorpóreas.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de laços em um alvo a sua escolha em +1. (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)"
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cada laço é destruído automaticamente com um único ataque bem-sucedido; porém, cada laço destruído libera um choque de energia que causa 1d8+1 pontos de dano de essência na criatura amarrada. Requer 3º círculo."
      }
    ],
    "name": "Amarras Etéreas",
    "range": "médio",
    "resistance": "Reflexos anula",
    "target": "1 criatura",
    "type": "Arcana 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor. Enquanto a magia estiver ativa, seu Carisma torna-se 5 (ou recebe um bônus de +2, caso seja 5 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que “algo está errado” ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 humanoide"
      }
    ],
    "name": "Aparência Perfeita",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 2 (Ilusão)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados); “miséria” (a ação trará maus resultados); “felicidade e miséria” (para ambos) ou “nada” (para ações que não trarão resultados bons ou ruins).\nCom um resultado 1, a magia falha e oferece o resultado “nada”. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.\nPor exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá “felicidade” se a câmara contém um tesouro desprotegido, “miséria” se contém um monstro, “felicidade e miséria” se houver um tesouro e um monstro ou “nada” se a câmara estiver vazia.",
    "duration": "instantânea",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “não sei”. Requer 4º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "o mestre rola 1d12; a magia só falha em um resultado 1."
      },
      {
        "cost": "+12 PM",
        "description": "o mestre rola 1d20; a magia só falha em um resultado 1."
      }
    ],
    "name": "Augúrio",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Divina 2 (Adivinhação)"
  },
  {
    "area": "esfera com 6m de raio",
    "circle": "2",
    "description": "Uma aura de frio necrótico emana a partir do seu corpo, alimentando-se de sua própria força vital. Quando você lança a magia, e no início de cada um dos seus turnos, você perde 1d6 pontos de vida e cada outra criatura na área perde 2d8 pontos de vida.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a perda de vida para outras criaturas em +1d8 (número de dados de perda de vida máximos limitados pelo círculo máximo de magia que você pode lançar). Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "adiciona resistência (Fortitude parcial). Além do normal, outras criaturas que percam pontos de vida pela magia devem fazer um teste de Fortitude. Se falharem, não podem recuperar PV por 1 rodada. Requer 3º círculo."
      }
    ],
    "name": "Aura de Morte",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Necromancia)"
  },
  {
    "area": "esfera com 6m de raio",
    "circle": "2",
    "description": "Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para 1 dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera de 6m com raio."
      }
    ],
    "name": "Bola de Fogo",
    "range": "médio",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia cria uma película protetora sobre você. Você recebe 30 pontos de vida temporários.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe redução 30 contra o próximo dano que sofrer."
      },
      {
        "cost": "+3 PM",
        "description": "muda os PV temporários ou a RD para 50. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto, o alvo para outra criatura ou objeto Enorme ou menor e a duração para sustentada. Em vez do normal, cria uma esfera imóvel e tremeluzente ao redor do alvo. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas e sempre que você se concentrar. Requer 4º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda os PV temporários ou a RD para 70. Requer 4º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "como o aprimoramento acima, mas tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo 9m em uma direção. Requer 4º círculo."
      }
    ],
    "name": "Campo de Força",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem leve.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda a duração para sustentada. A imagem do alvo fica mais distorcida, aumentando a chance de falha da camuflagem leve para 50%."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo."
      }
    ],
    "name": "Camuflagem Ilusória",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Arcana 2 (Ilusão)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Pela duração da magia, você sabe a posição e status (PV atuais, se estão sob efeito de magia...) dos alvos. Depois de lançada, a distância entre você e os alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou for para outro plano.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a duração para 1 dia."
      }
    ],
    "name": "Condição",
    "range": "curto",
    "resistance": "",
    "target": "até 5 criaturas",
    "type": "Divina 2 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia modifica o terreno e/ou a arquitetura de um ponto no alcance, transformando-o em uma armadilha de caçador (Tormenta20, p. 50) a sua escolha. A armadilha criada segue as mesmas regras de armadilhas, mas a CD dos testes para encontrá-la e resistir a ela é a da magia.\nEmbora seja produzida por magia, a armadilha ainda pode ser superada por meios mundanos normais. Depois de ativada, seja bem-sucedida ou não, a armadilha não volta a se reativar: fica inerte e inofensiva, devendo ser conjurada outra vez.",
    "duration": "permanente",
    "effect": "1 armadilha conjurada",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "seus poderes que afetam armadilhas também afetam a armadilha criada pela magia."
      },
      {
        "cost": "+3 PM",
        "description": "quando lança a magia, você pode escolher qualquer número de criaturas no alcance para não serem afetadas pela armadilha. Requer 2° círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda a execução para padrão. A armadilha pode ser conjurada diretamente em uma área ocupada por uma criatura, o que a aciona imediatamente. Requer 3º círculo."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Armadilheiros Mestres e Caçadores): reduz o tempo de execução para movimento."
      },
      {
        "cost": "+4 PM",
        "description": "(Apenas Armadilheiross Mestres): em vez do normal, você pode conjurar uma das suas armadilhas de armadilheiro mestre."
      }
    ],
    "name": "Conjurar Armadilha",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você conjura seis esqueletos capangas de tamanho Médio feitos de energia negativa em espaços desocupados dentro do alcance. Você pode gastar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos têm For 2, Des 2, Defesa 18 e todos os outros atributos nulos; eles têm 1 PV e falham automaticamente em qualquer teste de resistência ou oposto, mas são imunes a atordoamento, cansaço, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desaparecem quando são reduzidos a 0 PV ou no fim da cena. Os mortos- -vivos não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre.\n \nSoterrado: como esqueletos, mas causam dano de frio. Além disso, criaturas atingidas por um soterrado devem passar num teste de Fortitude ou ficam enredadas por 1 rodada.\n \nCarniçal: como esqueletos, mas têm For 3, Des 3, Defesa 27 e causam 1d8+3 pontos de dano de trevas mais perda de 1d8 PV por veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude ou ficam Paralisado por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por um dia.\n \nFúria de Tauron: como esqueletos, mas têm tamanho Pequeno, deslocamento de voo 12m, a habilidade incorpóreo, Des 5, Defesa 18 e causam 1d6 pontos de dano de trevas mais 1d6 pontos de dano de fogo. Além disso, criaturas vivas atingidas ficam desprevenidas por 1 rodada e em chamas (Fort CD igual à da magia evita).\n \nGuerreiro Perpétuo: como esqueletos, mas têm For 5, Des 4, Defesa 33, a habilidade incorpóreo e causam 3d6 pontos de dano de impacto duas vezes por ação.\n \nZumbi Peçonha: como esqueletos, mas têm For 3, Des 1, Defesa 25 e causam 1d8+1 pontos de dano de trevas mais perda de 2d6 PV por veneno. Além disso, criaturas atingidas por um zumbi peçonha ficam atordoadas por 1 rodada (apenas uma vez por cena) e depois fracas (Fort reduz para fracas por 1 rodada).\n \nSombra: como esqueletos, mas têm Des 4, Defesa 35, a habilidade incorpóreo e causam 2d10 pontos de dano de trevas. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol.",
    "duration": "sustentada",
    "effect": "6 mortos-vivos",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de mortos-vivos conjurados em +1."
      },
      {
        "cost": "+2 PM (Apenas Arcanos)",
        "description": "em vez de esqueletos, conjura soterrados. Requer 3° círculo."
      },
      {
        "cost": "+3 PM",
        "description": "em vez de esqueletos, conjura carniçais. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "em vez de esqueletos, conjura fúrias de Tauron. Requer 3º círculo."
      },
      {
        "cost": "+3 PM (Apenas Devotos de Arsenal)",
        "description": "em vez de esqueletos, conjura guerreiros perpétuos. Requer 3º círculo."
      },
      {
        "cost": "+3 PM (Apenas Devotos de Sszzaas)",
        "description": "em vez de esqueletos, conjura zumbis peçonha. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "em vez de esqueletos, conjura sombras. Requer 4º círculo."
      }
    ],
    "name": "Conjurar Mortos-Vivos",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Universal 2 (Necromancia)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos.\nChamejar: o alvo é armas escolhidas. Elas causam +1d6 de dano de fogo. Também afeta armas naturais e ataques desarmados.\nEsquentar: o alvo é 1 objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A critério do mestre, o objeto ou a criatura vestindo-o também podem fica em chamas. Uma criatura pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito da magia.\nExtinguir: o alvo é 1 chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, criaturas têm camuflagem leve.\nModelar: o alvo é 1 chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só pode receber dano dessa maneira uma vez por rodada.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação de movimento para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6 (exceto Chamejar)."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6 pontos de dano."
      }
    ],
    "name": "Controlar Fogo",
    "range": "curto",
    "resistance": "",
    "target": "veja texto",
    "type": "Divina 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você molda, retorce, altera ou repele madeira. Se lançar esta magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Ao lançar a magia, escolha.\nFortalecer: deixa o alvo mais resistente. Armas têm seu dano aumentado em um passo. Escudos têm seu bônus de Defesa aumentado em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). Esses e outros itens de madeira recebem +5 na RD e dobram seus PV.\nModelar: muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar mecanismos complexos (como uma besta) ou itens consumíveis.\nRepelir: o alvo é repelido por você. Se for uma arma, ataques feitos com ela contra você falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja trancado. Um objeto que vá atingi-lo, como uma carroça, tronco ou barril, vai desviar ou parar adjacente a você, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.\nRetorcer: estraga o alvo. Uma porta retorcida emperra (exigindo um teste de Força contra CD 25 para ser aberta). Armas e itens retorcidos impõem –5 em testes de perícia. Escudos retorcidos deixam de oferecer bônus (mas ainda impõem penalidades). Um barco retorcido começa a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é dissipada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para área de quadrado com 9m de lado e a duração para cena. Em vez do normal, qualquer vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem 1d6 pontos de dano de corte para cada 1,5m que avancem."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alvo para Enorme ou menor. Requer 3º círculo."
      },
      {
        "cost": "+12 PM",
        "description": "muda o alvo para Colossal ou menor. Requer 4º círculo."
      }
    ],
    "name": "Controlar Madeira",
    "range": "médio",
    "resistance": "",
    "target": "1objeto de madeira grande ou menor",
    "type": "Divina 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Lisandra de Galrasia foi a primeira a manifestar uma armadura fibrosa, mas hoje outros podem fazer o mesmo. Esta magia transforma o alvo em uma couraça arbórea. Se for uma armadura, seu bônus na Defesa aumenta em +2 e se for um vestuário, passa a fornecer +2 na Defesa (não cumulativo com armadura). Os efeitos desta magia contam como um bônus de encanto e ela só pode ser lançada em terrenos naturais. Dahllan recebem 1 PM para usar em aprimoramentos ao lançá-la.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a Defesa em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, suas magias de evocação e transmutação custam –1 PM."
      },
      {
        "cost": "+2 PM",
        "description": "o alvo é recoberto por folhas e galhos. Você recebe +5 em testes de Furtividade e pode se esconder mesmo sem camuflagem ou cobertura disponível."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, o alvo fornece o mesmo bônus em testes de resistência. Requer 3° círculo."
      },
      {
        "cost": "+3 PM",
        "description": "além do normal, o alvo é recoberto esporos de cogumelo. Quando uma criatura faz um ataque corpo a corpo contra você, ela deve fazer um teste de Fortitude (CD da magia). Se falhar, fica paralisada por 1 rodada (apenas uma vez por cena) e lenta. Se passar, fica lenta por 1 rodada. Requer 3° círculo."
      }
    ],
    "name": "Couraça de Allihanna",
    "range": "toque",
    "resistance": "",
    "target": "1 armadura ou vestuário",
    "type": "Divina 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia cria um crânio envolto em energia negativa. Quando atinge o alvo, causa 4d8+4 pontos de dano de trevas e se desfaz emitindo um som horrendo, deixando abalado o alvo e todos os inimigos num raio de 3m dele (criaturas já abaladas ficam apavoradas por 1d4 rodadas). Passar no teste de resistência diminui o dano à metade e evita a condição (as demais criaturas na área também tem direito ao teste de resistência, para evitar a condição).\nAbalado\nApavorado",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      }
    ],
    "name": "Crânio Voador de Vladislav",
    "range": "médio",
    "resistance": "Fortitude parcial",
    "target": "1 criatura",
    "type": "Arcana 2 (Necromancia)"
  },
  {
    "area": "esfera com 9m de raio;",
    "circle": "2",
    "description": "Também conhecida como Lágrimas do Deus da Trapaça, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir.",
    "duration": "1 dia",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis."
      },
      {
        "cost": "+3 PM",
        "description": "muda a penalidade nas perícias para –10 (se passar na resistência) e –20 (se falhar). Requer 4º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000)."
      }
    ],
    "name": "Círculo da Justiça",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "",
    "type": "Divina 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia cria uma aura de influência de 9m ao redor do alvo. Outras criaturas que iniciarem seus turnos dentro da aura devem fazer um teste de Vontade. Se falharem, quaisquer ações hostis nesse turno devem ser feitas contra o alvo.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura ou objeto. Requer 4° círculo."
      }
    ],
    "name": "Desafio Corajoso",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 criatura voluntária",
    "type": "Arcana 2 (Encantamento)"
  },
  {
    "area": "Cone de 6m",
    "circle": "2",
    "description": "Humanoides na área são acometidos de grande tristeza, adquirindo as condições Fraco e Frustrado. Se passarem na resistência, adquirem essas condições por uma rodada.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "em vez do normal, as condições adquiridas são debilitado e esmorecido."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, afeta qualquer tipo de criatura."
      },
      {
        "cost": "+3 PM",
        "description": "além do normal, criaturas que falhem na resistência ficam aos prantos (em termos de jogo, adquirem a condição pasmo) por 1 rodada (apenas uma vez por cena). Requer 3º círculo."
      }
    ],
    "name": "Desespero Esmagador",
    "range": "pessoal",
    "resistance": "Vontade parcial",
    "target": "",
    "type": "Arcana 2 (Encantamento)"
  },
  {
    "area": "esfera com 3m de raio",
    "circle": "2",
    "description": "Você desfaz os efeitos ativos de engenhocas, como se sua duração tivesse acabado (efeitos instantâneos não podem ser dissipados). Se lançar esta magia em uma criatura ou área, faça um teste de Misticismo; você dissipa os efeitos ativos de engenhocas com CD igual ou menor que o resultado do teste. Lançada diretamente contra uma engenhoca, aumenta a CD para ativá-la em +10 até o fim da cena. Lançada contra um construto, o teste é oposto à Vontade do alvo. Se você vencer, além do normal, o construto fica fraco e vulnerável (mesmo que seja imune a essas condições). A critério do mestre, esta magia pode afetar outras habilidades e itens similares a engenhocas.\nDizem que Desfazer Engenhoca foi ofertada aos mortais pela própria Wynna, ressentida em relação a inventos mundanos que imitam seus milagres mágicos. Por outro lado, alguns isentam a deusa, atribuindo sua criação a algum arcanista extremamente incomodado com esses inventores do diacho!",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "além do normal, você recebe +5 no seu teste de Misticismo para dissipar uma engenhoca para cada vez que a viu ser usada na cena."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, a magia ignora qualquer efeito ativo gerado por engenhocas (por exemplo, um Campo Antimagia)."
      },
      {
        "cost": "+12 PM",
        "description": "muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todos os efeitos de engenhocas na área são automaticamente dissipados e todas as engenhocas na área, exceto aquelas que você estiver carregando, enguiçam por uma cena (o usuário de engenhocas carregadas tem direito a um teste de Vontade para evitar isso; engenhocas soltas são itens mundanos e por isso não têm direito a testes, como normal). Requer 5º círculo."
      }
    ],
    "name": "Desfazer Engenhoca",
    "range": "médio",
    "resistance": "",
    "target": "ou 1 criatura ou engenhoca",
    "type": "Universal 2 (Abjuração)"
  },
  {
    "area": "ou esfera com 3m de raio",
    "circle": "2",
    "description": "Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (Vontade anula).",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+12 PM",
        "description": "muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de resistência para evitar esse efeito). Requer 5º círculo."
      }
    ],
    "name": "Dissipar Magia",
    "range": "médio",
    "resistance": "",
    "target": "1 criatura ou 1 objeto mágico",
    "type": "Universal 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Pela duração de Emular Magia, você pode lançar uma única magia que tenha visto ser lançada em alcance curto desde sua última rodada. A magia deve ser de um tipo (arcana ou divina) e de um círculo a que você tenha acesso.",
    "duration": "cena",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "a magia emulada pode ser de qualquer tipo, arcana ou divina."
      }
    ],
    "name": "Emular Magia",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, ratos, morcegos ou serpentes. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de seus turnos, o enxame causa 2d12 pontos de dano de corte a qualquer criatura em seu espaço (Fortitude reduz à metade). Você pode gastar uma ação de movimento para mover o enxame 12m.",
    "duration": "sustentada",
    "effect": "1 enxame Médio (quadrado de 1,5m)",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d12."
      },
      {
        "cost": "+3 PM",
        "description": "muda a resistência para Reflexos reduz à metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfuração). O resto da magia segue normal."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o número de enxames em +1. Eles não podem ocupar o mesmo espaço. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre ácido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4º círculo."
      }
    ],
    "name": "Enxame de Pestes",
    "range": "médio",
    "resistance": "Fortitude reduz à metade",
    "target": "",
    "type": "Divina 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer uma pessoa ficar com voz de passarinho). Você não pode criar sons que não conhece (não pode fazer uma criatura falar num idioma que não conheça). Uma vez que escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente não poderá lançar magias.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1. Todas as criaturas e objetos devem ser afetadas da mesma forma."
      }
    ],
    "name": "Esculpir Sons",
    "range": "médio",
    "resistance": "Vontade anula",
    "target": "1 criatura ou objeto",
    "type": "Arcana 2 (Ilusão)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo também fica coberto por um muco corrosivo, sofrendo mais 2d6 de dano de ácido no início de seus dois próximos turnos. Se lançada contra um objeto que não esteja em posse de uma criatura a magia causa dano dobrado e ignora a RD do objeto.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus (veja Ofício, na página 121)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a redução na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano inicial e o dano por rodada em +1d6."
      }
    ],
    "name": "Flecha Ácida",
    "range": "médio",
    "resistance": "Reflexos parcial",
    "target": "1 criatura ou objeto",
    "type": "Arcana 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você fortalece o corpo do alvo. Ele recebe +2 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, o alvo recebe +2 nos três atributos físicos. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4º círculo."
      },
      {
        "cost": "+12 PM",
        "description": "em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 5º círculo."
      }
    ],
    "name": "Físico Divino",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que outras pessoas a vejam.",
    "duration": "cena",
    "effect": "1 globo",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "o globo mostra uma cena vista até um mês atrás."
      },
      {
        "cost": "+2 PM",
        "description": "o globo mostra uma cena vista até um ano atrás."
      },
      {
        "cost": "+2 PM",
        "description": "ao lançar a magia, você pode tocar um cadáver. O globo mostra a última cena vista por essa criatura."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para longo e o efeito para 10 globos. Todos mostram a mesma cena."
      }
    ],
    "name": "Globo da Verdade de Gwen",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Divina 2 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "O alvo fica invisível (incluindo seu equipamento). Um personagem invisível recebe camuflagem total, +10 em testes de Furtividade contra ouvir e criaturas que não possam percebê-lo ficam desprevenidas contra seus ataques.\nA magia termina se o alvo faz uma ação hostil contra uma criatura. Ações contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque.\nObjetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível. Uma luz nunca fica invisível (mesmo que sua fonte seja). ",
    "duration": "1 rodada",
    "effect": "",
    "execution": "livre",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou um objeto Grande ou menor."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para cena. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. Não pode ser usado em conjunto com outros aprimoramentos. O alvo e todas as criaturas a até 3m dele se tornam invisíveis, como no efeito normal da magia (ainda ficam visíveis caso façam uma ação hostil). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica visível. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça um ação hostil. Requer 4º círculo."
      }
    ],
    "name": "Invisibilidade",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 2 (Ilusão)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você transforma uma porção de um elemento inerte em uma criatura elemental Pequena do tipo do elemento alvo. Por exemplo, lançar esta magia em um copo de água cria um elemental da água. Você pode criar elementais do ar, da água, do fogo e da terra com esta magia. O elemental obedece a todos os seus comandos e funciona como um familiar comum (veja Familiares, em Tormenta20, p. 38) ou elemental (veja Elementais). O elemental auxilia apenas você e não conta em seu limite de parceiros.",
    "duration": "sustentada",
    "effect": "familiar elemental",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, o elemental fornece redução 10 contra o dano correspondente a seu tipo."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, o elemental recebe a habilidade de dois familiares, um comum e um elemental."
      }
    ],
    "name": "Invocar Fagulha Elemental",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você cria um elo mental entre duas criaturas com Inteligência -3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Em vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos da criatura, se gastar uma ação de movimento. Uma criatura involuntária pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3º círculo."
      }
    ],
    "name": "Ligação Telepática",
    "range": "toque",
    "resistance": "",
    "target": "2 criaturas voluntárias",
    "type": "Arcana 2 (Adivinhação)"
  },
  {
    "area": "esfera com 90m de raio",
    "circle": "2",
    "description": "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (“um elfo”, “algo de metal”) ou específicos (“Gwen, a elfa”, “uma espada longa”). A magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a espada longa encantada do Barão Rulyn”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda a área para alvo você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante)."
      }
    ],
    "name": "Localização",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de 10km de lado. Caso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura e a duração para 1 hora. Em vez do normal, a criatura tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma masmorra (mas não para encontrar a localização de uma criatura ou objeto; a magia funciona apenas em relação a lugares). Caso a criatura demore mais de uma hora para percorrer o caminho, o conhecimento se perde."
      }
    ],
    "name": "Mapear",
    "range": "toque",
    "resistance": "",
    "target": "superfície ou objeto plano, como uma mesa ou pergaminho",
    "type": "Arcana 2 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia energiza a fonte de energia de um golem ou outro construto, sobrecarregando-a temporariamente. O alvo recebe +5 em Atletismo e Luta, mas perde 1d4 pontos de vida no fim de cada turno em que executar uma ação padrão.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "além do normal, os ataques corpo a corpo do alvo causam +1d6 pontos de dano."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, o alvo recebe +2 na Defesa."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +1."
      }
    ],
    "name": "Máquina de Combate",
    "range": "toque",
    "resistance": "",
    "target": "1 construto",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”. A criatura deve seguir essa ordem, gastando todas as ações de seu turno para isso. A ordem não pode ser genérica demais (como “ajude-me”, por exemplo), nem forçar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda a duração para 1 dia. Se não estiver em combate, a criatura só pode fazer o teste de Vontade a cada hora. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano psíquico. Requer 3º círculo."
      }
    ],
    "name": "Marca da Obediência",
    "range": "toque",
    "resistance": "Vontade anula",
    "target": "1 criatura",
    "type": "Universal 2 (Encantamento)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você fortalece a mente do alvo. Ele recebe +2 em Inteligência, Sabedoria ou Carisma, a sua escolha. Esse aumento não oferece PV, PM ou perícias adicionais.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "em vez do normal, o alvo recebe +2 nos três atributos mentais. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+7 PM",
        "description": "em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4º círculo."
      },
      {
        "cost": "+12 PM",
        "description": "em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 5º círculo."
      }
    ],
    "name": "Mente Divina",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 2 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam.\nSe mudar para uma forma humanoide, pode mudar o tipo de dano (entre corte, impacto e perfuração) de suas armas (se usa uma maça e transformá- la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra.\nSe mudar para outras formas, você pode escolher uma Forma Selvagem do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe uma ou mais armas naturais e os bônus da forma selvagem escolhida.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro."
      },
      {
        "cost": "+3 PM",
        "description": "a forma escolhida recebe percepção às cegas. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura e adiciona resistência (Vontade anula)."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras características não mudam. No início de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna à sua forma normal e a magia termina. Requer 3º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "se mudar para formas não humanoides, pode escolher uma Forma Selvagem Aprimorada. Requer 3º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "se mudar para formas não humanoides, pode escolher uma Forma Selvagem Superior. Requer 4º círculo."
      },
      {
        "cost": "+12 PM",
        "description": "além do normal, no início de seus turnos o alvo pode mudar de forma novamente, como uma ação livre, fazendo novas escolhas. Requer 5º círculo."
      }
    ],
    "name": "Metamorfose",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "nuvem com 6m de raio",
    "circle": "2",
    "description": "A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de ácido e ficam Enjoado por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para toque, a área para alvo (1 criatura com 0 PV ou menos), a duração para instantânea e a resistência para Fortitude anula. e adiciona componente material (pó de ônix no valor de T$ 10). Em vez do normal, você canaliza o Miasma contra uma vítima. Se falhar na resistência, ela morre e você recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+3 PM",
        "description": "muda o tipo do dano para trevas."
      }
    ],
    "name": "Miasma Mefítico",
    "range": "médio",
    "resistance": "Fortitude (veja texto)",
    "target": "",
    "type": "Divina 2 (Necromancia)"
  },
  {
    "area": "cubo de 30m",
    "circle": "2",
    "description": "Uma nuvem rubra surge acima do conjurador. Uma vez por turno, você pode gastar uma ação de movimento para fazer a nuvem manifestar um dos fenômenos a seguir.\n \nChuva ácida. Gotas corrosivas causam 6d4 pontos de dano de ácido em todas as criaturas na área.\n \nNeblina venenosa. Uma neblina faz com que todas as criaturas na área percam 2d12 PV por veneno (Fortitude evita).\n \nRaios escarlates. Até 6 inimigos aleatórios na área sofrem 6d8 pontos de dano de eletricidade (Reflexos reduz à metade).\n \nPesadelos reais. Cada criatura na área sofre 4d6 pontos de dano psíquico e perde 1d4 PM (Vontade reduz o dano à metade e evita a perda de PM).\n \nEsta magia só pode ser aprendida e lançada por conjuradores que tenham observado uma área de Tormenta pelo menos uma vez. Sua divulgação é proibida e seu uso é permitido apenas em áreas controladas na Academia Arcana e outros lugares restritos, para estudar o fenômeno da Tormenta. Usar esta magia em qualquer outro ponto do Reinado é um crime enquadrado na décima-primeira infração do Vigintílogo.",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano em +1 dado do mesmo tipo."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, criaturas na área ficam alquebradas enquanto permanecerem na área."
      },
      {
        "cost": "+5 PM (Apenas Devotos de Aharadak)",
        "description": "muda a área para círculo de 1km de raio."
      }
    ],
    "name": "Momento de Tormenta",
    "range": "pessoal",
    "resistance": "veja texto",
    "target": "",
    "type": "Universal 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia convoca um parceiro cavalo (ou pônei) de guerra veterano. Sua aparência é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a Montaria Arcana pode atravessar terreno difícil sem redução em seu deslocamento. Você pode usar Misticismo no lugar de Cavalgar para efeitos desta montaria (incluindo ser considerado treinado).",
    "duration": "1 dia",
    "effect": "criatura conjurada",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para permanente e adiciona penalidade de -3 PM."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho da montaria em uma categoria. Isso também aumenta o número de criaturas que ela pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma única criatura controla a montaria; as outras apenas são deslocadas."
      },
      {
        "cost": "+3 PM",
        "description": "muda o nível do aliado para mestre. Requer 3º círculo."
      }
    ],
    "name": "Montaria Arcana",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você e todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esse efeito é cumulativo com outras magias.\nComponente Material: T$ 25 por PM gastos em incensos ou outras oferendas.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para médio. Requer 3º círculo."
      },
      {
        "cost": "+12 PM",
        "description": "muda a duração para cena. Requer 4º círculo"
      }
    ],
    "name": "Oração",
    "range": "curto",
    "resistance": "",
    "target": "todas as criaturas (veja texto)",
    "type": "Divina 2 (Encantamento)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Pela duração da magia, você fica “piscando” entre o Plano material e o etéreo. Para quem o observa, é como se você ficasse visível e invisível várias vezes por segundo.\nQuaisquer ataques e habilidades (incluindo efeitos benéficos) de outras criaturas têm 50% de chance de não afetá-lo. Você recebe +2 em testes de ataque, pois é difícil ver de onde você está atacando. Contudo, seus próprios ataques e habilidades têm 25% de chance de não afetar outras criaturas, pois você não tem controle total sobre quando está em qual Plano.\nVocê pode interagir com criaturas etéreas, com as mesmas chances de falha.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura voluntária. Requer 3º círculo."
      }
    ],
    "name": "Piscar",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia transforma o conteúdo de uma poção em uma substância volátil e explosiva. Quando é usada, em vez de ter seu efeito normal, a poção causa 2d6 pontos de dano de essência por círculo da magia que ela continha (outras características da magia, como alvos, área e testes de resistência, se mantêm). Se a poção for ingerida, ela causa dano máximo à criatura que a ingeriu, sem direito a teste de resistência.\nSe esta magia for lançada sobre uma poção carregada por uma criatura, a criatura tem direito a um teste de Reflexos para evitar esse efeito. Reconhecer uma poção adulterada dessa forma exige um teste de Misticismo ou Ofício (alquimista) com CD 25.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "você pode determinar uma palavra-chave que, pronunciada por qualquer pessoa em alcance curto, faz a poção explodir. Requer 3° círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para pessoal e o alvo para área (esfera com 9m de raio). A magia afeta mesmo poções na área que estejam sendo carregadas. Requer 4° círculo."
      }
    ],
    "name": "Poção Explosiva",
    "range": "curto",
    "resistance": "",
    "target": "1 poção",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Por meio de um brado poderoso, entoando um dogma de sua religião, você inflige dano a devotos de divindades adversárias.\nEsta magia causa 6d8 pontos de dano de impacto a devotos de deuses que canalizam energia oposta a seu deus. Assim, se sua divindade canaliza energia positiva, a magia afeta devotos de deuses que canalizem energia negativa, e vice-versa. Devotos de deuses que canalizam qualquer energia ou criaturas que não sejam devotas sofrem apenas metade do dano.\nA magia afeta celestiais e abissais como se fossem devotos, respectivamente, de deuses de energia positiva e negativa, enquanto suraggel são afetados conforme sua herança. Nesses casos, a natureza planar se sobrepõe à devoção (um aggelus devoto de Tenebra ainda é considerado de energia positiva).",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 espírito ou morto-vivo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para criaturas escolhidas. Requer 3° círculo."
      }
    ],
    "name": "Punição do Profano",
    "range": "curto",
    "resistance": "Vontade reduz à metade",
    "target": "1 humanoide",
    "type": "Divina 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você purifica a criatura tocada, removendo uma condição dela entre abalado, Apavorado, Alquebrado, Atordoado, Cego, Confuso, Debilitado}, Surdo.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "também cura todos os PV perdidos por veneno."
      },
      {
        "cost": "+2 PM",
        "description": "em vez de uma, remove todas as condições listadas."
      },
      {
        "cost": "+3 PM",
        "description": "também permite que o alvo solte qualquer item amaldiçoado que esteja segurando (mas não remove a maldição do item em si)."
      },
      {
        "cost": "+7 PM",
        "description": "também dissipa magias e efeitos prejudiciais de encantamento, necromancia e transmutação afetando o alvo. Requer 3º círculo."
      }
    ],
    "name": "Purificação",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 2 (Evocação)"
  },
  {
    "area": "linha",
    "circle": "2",
    "description": "Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam Ofuscado por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas.\nCego",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos)."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente."
      },
      {
        "cost": "+3 PM",
        "description": "criaturas que falhem na resistência ficam cegas por 1d4 rodadas."
      }
    ],
    "name": "Raio Solar",
    "range": "médio",
    "resistance": "Reflexos (veja texto)",
    "target": "",
    "type": "Divina 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo. Porém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM.",
    "duration": "1 dia",
    "effect": "domo com 6m de raio",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, os limites do domo são envoltos por uma fumaça escura e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria uma cabana que comporta até 10 criaturas Médias. Descansar nesse espaço concede recuperação confortável (recupera PV e PM igual ao dobro do nível). Para todos os efeitos é uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com bancos e uma lareira). A porta e as janelas têm 15 PV, RD 5 e são protegidas por um efeito idêntico à magia Tranca Arcana. As paredes têm 200 PV e RD 5."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria um espaço extradimensional, similar a uma caverna vazia e escura, que comporta até 10 criaturas Médias. A entrada para o espaço precisa estar desenhada em um objeto fixo como uma grande pedra ou árvore. Qualquer criatura que atravesse a entrada consegue entrar no espaço. Nenhum efeito a partir do mundo real afeta o espaço e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espaço extradimensional surge no mundo real na área vazia mais próxima da entrada quando a duração da magia acaba. Requer 3º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, cria uma mansão extradimensional que comporta até 100 criaturas Médias, com quartos luxuosos, comida e bebida e dez servos fantasmagóricos (como na magia Servos Invisíveis). Descansar na mansão concede recuperação luxuosa (recupera PV e PM igual ao triplo do nível). A mansão tem uma única entrada, uma porta feita de luz. Você pode deixá-la visível ou invisível como uma ação livre e apenas criaturas escolhidas por você podem passar. Requer 4º círculo."
      }
    ],
    "name": "Refúgio",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Abjuração)"
  },
  {
    "area": "linha",
    "circle": "2",
    "description": "Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para médio e a área para alvo (criaturas escolhidas). Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 6d6 pontos de dano de eletricidade. Requer 3º círculo."
      }
    ],
    "name": "Relâmpago",
    "range": "médio",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes.\nDebilidade: o alvo fica Esmorecido e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória.\nDoença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação).\nFraqueza: o alvo fica Debilitadoe Lento.\nIsolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica Cego. Se perder a audição, fica Caído e não pode se levantar.\nVocê também pode inventar sua própria maldição, usando esses exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo."
      }
    ],
    "name": "Rogar Maldição",
    "range": "curto",
    "resistance": "Fortitude anula",
    "target": "1 criatura",
    "type": "Divina 2 (Necromancia)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você escreve uma runa pessoal em uma superfície fixa, como uma parede ou o chão, que protege uma pequena área ao redor. Quando uma criatura entra na área afetada a runa explode, causando 6d6 pontos de dano em todos os alvos a até 6m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas.\nVocê pode determinar que a runa se ative apenas em condições específicas — por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar.\nUm personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem (CD da magia).\nComponente material: pó de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível.",
    "duration": "permanente até ser descarregada",
    "effect": "",
    "execution": "1 hora",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para “você” e o alcance para “pessoal”. Ao invés do normal, escolha uma magia de 1º círculo que você conhece e pode lançar, com tempo de execução de uma ação padrão ou menor. Você escreve a runa em seu corpo e especifica uma condição de ativação como, por exemplo, “quando eu for alvo de um ataque” ou “quando for alvo de uma magia”. Quando a condição for cumprida, você pode ativar a runa e lançar a magia escolhida como uma reação. Você só pode escrever uma runa em seu corpo ao mesmo tempo."
      },
      {
        "cost": "+3 PM",
        "description": "como o aprimoramento anterior, mas você pode escolher magias de 2º  círculo. Requer 3º\ncírculo."
      }
    ],
    "name": "Runa de Proteção",
    "range": "toque",
    "resistance": "varia (veja o texto)",
    "target": "uma área com 6m de raio",
    "type": "Universal 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia transporta você para outro lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para médio."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execução para reação. Em vez do normal, você recebe +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo. Após a resolução do efeito, salta para um espaço adjacente (1,5m)."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para longo."
      }
    ],
    "name": "Salto Dimensional",
    "range": "curto",
    "resistance": "",
    "target": "você",
    "type": "Arcana 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você cria até três servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mansão ou pequena torre ou para preparar um acampamento nos ermos para você e seus aliados (veja a perícia Sobrevivência, na página 123).\nEles também podem ajudá-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma poção, mas isso consome sua energia mágica. Você pode “gastar” um servo para receber um bônus não cumulativo de +2 em um teste de perícia (exceto testes de ataque e resistência). Os servos não são criaturas reais; não podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resistência ou teste oposto — falharão automaticamente no teste e serão destruídos.",
    "duration": "cena",
    "effect": "criaturas conjuradas",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de servos conjurados em 1."
      },
      {
        "cost": "+3 PM",
        "description": "você pode comandar os servos para realizar uma única tarefa no seu lugar. Em termos de jogo, eles passam automaticamente em um teste de perícia com CD máxima igual ao seu nível, +2 para cada servo conjurado. O tempo necessário para realizar a tarefa é o tempo do uso da perícia em questão. Requer 3º círculo"
      }
    ],
    "name": "Servos Invisíveis",
    "range": "longo",
    "resistance": "",
    "target": "",
    "type": "Arcana 2 (Convocação)"
  },
  {
    "area": "esfera com 6m de raio",
    "circle": "2",
    "description": "Um silêncio sepulcral recai sobre a área e nenhum som é produzido nela. Enquanto estiverem na área, todas as criaturas ficam Surdo. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir e lançar magias com palavras mágicas normalmente."
      }
    ],
    "name": "Silêncio",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Divina 2 (Ilusão)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Ninguém sabe se Mestre Arsenal foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando dano de impacto igual a 4d6 + sua Força. A vítima é empurrada 3m na direção oposta à sua. Passar no teste de resistência reduz o dano à metade e evita o empurrão.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o empurrão em +3m."
      },
      {
        "cost": "+5 PM",
        "description": "muda o tipo do dano para essência."
      }
    ],
    "name": "Soco de Arsenal",
    "range": "médio",
    "resistance": "Fortitude parcial",
    "target": "1 criatura",
    "type": "Divina 2 (Convocação)"
  },
  {
    "area": "cone de 9m",
    "circle": "2",
    "description": "Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência ficam caídas e são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre +2d6 pontos de dano de impacto.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano de frio em +2d6."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 3º círculo."
      }
    ],
    "name": "Sopro das Uivantes",
    "range": "pessoal",
    "resistance": "Fortitude parcial",
    "target": "",
    "type": "Arcana 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica Confuso.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+12 PM",
        "description": "muda o alvo para criaturas escolhidas. Requer 5º círculo."
      }
    ],
    "name": "Sussurros Insanos",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 humanoide",
    "type": "Arcana 2 (Encantamento)"
  },
  {
    "area": "cilindro com 15m de raio e 15m de altura",
    "circle": "2",
    "description": "Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a um vendaval — ataques à distância sofrem penalidade de –5, chamas são apagadas e névoas são dissipadas. Você também pode gerar chuva (–5 em testes de Percepção), neve (como chuva, e a área se torna terreno difícil) ou granizo (como chuva, mais 1 ponto de dano de impacto por rodada, no início de seus turnos).",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, uma vez por rodada você pode gastar uma ação padrão para fazer um raio cair sobre um alvo na área, causando 3d8 pontos de dano de eletricidade (Reflexos reduz à metade)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano de raios (veja acima) em +1d8."
      },
      {
        "cost": "+3 PM",
        "description": "se escolheu causar chuva, ela se torna mais grossa, revelando a silhueta de criaturas invisíveis na área. Criaturas Médias ou menores ficam lentas e criaturas voadoras precisam passar num teste de Atletismo (CD da magia) por rodada ou caem ao solo (mas podem fazer testes de Acrobacia para reduzir o dano de queda, como o normal)."
      },
      {
        "cost": "+3 PM",
        "description": "se escolheu causar granizo, muda o dano para 2d6 por rodada."
      },
      {
        "cost": "+3 PM",
        "description": "se escolheu causar neve, criaturas na área sofrem 2d6 pontos de dano de frio no início de seus turnos."
      },
      {
        "cost": "+3 PM",
        "description": "muda a área para cilindro com 90m de raio e 90m de altura."
      }
    ],
    "name": "Tempestade Divina",
    "range": "longo",
    "resistance": "",
    "target": "",
    "type": "Divina 2 (Evocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano).",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal, o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 3º círculo."
      }
    ],
    "name": "Toque Vampírico",
    "range": "toque",
    "resistance": "Fortitude reduz à metade",
    "target": "1 criatura",
    "type": "Arcana 2 (Necromancia)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Provavelmente ofertada por Sszzaas, esta magia amaldiçoa uma arma contra seu usuário. Quando faz um ataque com a arma, o usuário deve passar em um teste de Vontade. Se falhar, a arma se retorce como uma serpente, ou muda sua trajetória em pleno voo; o agressor se torna o alvo do próprio ataque! Após esse ataque, bem- -sucedido ou não, a magia descarrega e a arma volta ao normal.",
    "duration": "cena, até ser descarregada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "em vez do usuário, a arma se volta para outra criatura em alcance curto que você possa perceber, a sua escolha."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 arma e a duração para 1 dia, até ser descarregada. Requer 3° círculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "adiciona componente material (uma dose de veneno). Além do normal, o ataque envenena o usuário com o veneno utilizado como componente (a CD desse veneno é a CD da própria magia)."
      }
    ],
    "name": "Traição da Lâmina",
    "range": "curto",
    "resistance": "Vontade (veja texto)",
    "target": "1 arma em posse de uma criatura",
    "type": "Divina 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia desestabiliza outras magias ativas no alvo, fazendo com que elas causem uma súbita descarga de energia mística. Para cada círculo das magias afetando o alvo, ele sofre 1d8 pontos de dano de essência. Um alvo sob efeito de Velocidade e Voo (2º e 3º círculos) sofre 5d8 pontos de dano.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda o alvo para criaturas escolhidas. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a resistência para nenhuma. Requer 3º círculo."
      }
    ],
    "name": "Traição Mágica",
    "range": "curto",
    "resistance": "Vontade reduz à metade",
    "target": "1 criatura",
    "type": "Universal 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Esta magia teletransporta duas criaturas, incluindo seu equipamento, fazendo com que troquem de lugar imediatamente.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +2. Você determina com quais criaturas cada alvo troca de lugar."
      },
      {
        "cost": "+5 PM",
        "description": "a troca não exige linha de efeito, mas os alvos ainda devem estar dentro do alcance. Requer 3º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 2 criaturas do tipo lacaio e adiciona resistência (Vontade anula). Requer 4º círculo."
      }
    ],
    "name": "Transposição",
    "range": "curto",
    "resistance": "",
    "target": "2 criaturas voluntárias",
    "type": "Arcana 2 (Convocação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "O alvo pode realizar uma ação padrão ou de movimento adicional por turno. Esta ação não pode ser usada para lançar magias e ativar engenhocas.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+0 PM",
        "description": "muda a duração para cena. A ação adicional que você pode fazer é apenas de movimento. Uma criatura só pode receber uma ação adicional por turno como efeito de Velocidade."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alvo para criaturas escolhidas no alcance. Requer 4º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para pessoal e o alvo para você. Você acelera sua mente, além de seu corpo. A ação adicional pode ser usada para lançar magias e ativar engenhocas. Requer 4º círculo."
      }
    ],
    "name": "Velocidade",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura",
    "type": "Arcana 2 (Transmutação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você fortalece um item, aumentando o bônus de Defesa de uma armadura ou escudo em +2. No caso de um vestuário, ele passa a oferecer +2 na Defesa (não cumulativo com armadura). Os efeitos desta magia contam como um bônus de encanto.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "o objeto oferece o mesmo bônus em testes de resistência. Requer 3º círculo."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o bônus em +1."
      },
      {
        "cost": "+7 PM",
        "description": "o objeto também oferece resistência a dano 5. Requer 4º círculo."
      }
    ],
    "name": "Vestimenta da Fé",
    "range": "toque",
    "resistance": "",
    "target": "1 armadura, escudo ou vestimenta",
    "type": "Divina 2 (Abjuração)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Lançar esta magia faz você adormecer e abandonar seu corpo físico. Você se torna um espírito incorpóreo com deslocamento de voo 18m. Você pode ver e ouvir, mas não falar ou emitir qualquer som — nem realizar ataques, lançar magias ou interagir de qualquer forma com criaturas e objetos materiais. Você ainda pode ser visto, em forma translúcida, e pode ser afetado por qualquer efeito que afete criaturas incorpóreas.\nQuando a magia acaba, você retorna imediatamente para seu corpo e desperta. A magia também é cancelada caso seu corpo físico seja perturbado de qualquer forma. Você sofre uma penalidade de –10 em testes de Percepção para notar ruídos próximos de seu corpo adormecido.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "você pode falar em sua forma incorpórea. Requer 3º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "você pode lançar magias em sua forma incorpórea. Requer 4º círculo."
      }
    ],
    "name": "Viagem Onírica",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 2 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "2",
    "description": "Você pode conversar com criaturas de qualquer raça e tipo: animal, construto, espírito, humanoide, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura não for capaz de falar, mas respeitando os limites da Inteligência dela. A atitude dessas criaturas não é alterada, mas você pode usar a perícia Diplomacia para tentar mudar sua atitude.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "você concede um pouco de vida a um cadáver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha sido destruída."
      },
      {
        "cost": "+1 PM",
        "description": "você pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas têm percepção limitada de seus arredores e normalmente fornecem respostas simplórias."
      }
    ],
    "name": "Voz Divina",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 2 (Adivinhação)"
  }
];

export default spells2;