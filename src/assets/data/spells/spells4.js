export const spells4 = [
  {
    "area": "",
    "circle": "4",
    "description": "Você invade a mente do alvo e altera ou apaga suas memórias da última hora.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal e o alvo para área cone de 4,5m."
      },
      {
        "cost": "+5 PM",
        "description": "você pode alterar ou apagar as memórias das últimas 24 horas."
      }
    ],
    "name": "Alterar Memória",
    "range": "toque",
    "resistance": "Vontade anula",
    "target": "1 criatura",
    "type": "Arcana 4 (Encantamento)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você concede vida a objetos inanimados. Cada objeto se torna um parceiro sob seu controle. O tipo dele é escolhido da lista de tamanho e ele não conta em seu limite de parceiros. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados são construtos com valores de Força, Destreza e  PV de acordo com seu tamanho. Todos os outros atributos nulos, eles não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Diferente de parceiros comuns, um objeto pode ser alvo de um ataque direto. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.\nEsta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.\n \nEstatísticas de objetos animados\nMinúsculo: For -3, Des 4, 5 PV; Assassino ou Combatente Iniciante.\nPequeno: For -2, Des 2, 10 PV; Combatente ou Guardião Iniciante.\nMédio: For 0, Des 1, 20 PV; Combatente ou Guardião Veterano.\nGrande: For 2, Des 0, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano.\nEnorme: For 4, Des -2, 60 PV; Fortão, Guardião ou Montaria (cavalo) Mestre.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível."
      }
    ],
    "name": "Animar Objetos",
    "range": "médio",
    "resistance": "",
    "target": "Até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
    "type": "Arcana 4 (Transmutação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio.\nQuando você lança a magia, o espectro surge adjacente a você e a vítima faz um teste de Vontade. Se ela passar, percebe que o espectro é uma ilusão e a magia é dissipada. Se falhar, acredita na existência do espectro, que então flutua 18m por rodada em direção à vítima, sempre no fim do seu turno. Ele é incorpóreo e imune a magias (exceto magias que dissipam outras).\nSe o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com –1 PV e sangrando.\nO espectro persegue o alvo implacavelmente. Ele desaparece se o alvo ficar inconsciente ou se afastar além de alcance longo dele, ou se for dissipado.",
    "duration": "cena, até ser descarregada",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Assassino Fantasmagórico",
    "range": "longo",
    "resistance": "Vontade Anula, Fortitude Parcial",
    "target": "1 criatura",
    "type": "Arcana 4 (Necromancia)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você é cercado por uma barreira invisível com 3m de raio que o acompanha. Qualquer habilidade mágica ou item mágico que entre na área da barreira é suprimida enquanto estiver lá.\nCriaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado.\nCriaturas mágicas ou imbuídas com magia durante sua criação não são diretamente afetadas pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele.\nUma magia que dissipa outras não dissipa um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Campo Antimagia",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 4 (Abjuração)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia.",
    "duration": "permanente ou até ser descarregada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda o círculo da magia concedida para 3º e a penalidade de PM para –6."
      }
    ],
    "name": "Conceder Milagre",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 4 (Encantamento)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um parceiro mestre do tipo destruidor (cuja habilidade custa apenas 2 PM para ser usada) e mais um tipo entre os indicados na lista abaixo. O elemental auxilia apenas você e não conta em seu limite de parceiros.\nAr: assassino, perseguidor ou vigilante. Dano de eletricidade.\nÁgua: ajudante, guardião ou médico. Dano de frio.\nFogo: atirador, combatente ou fortão. Dano de fogo.\nTerra: combatente, guardião ou montaria. Dano de impacto.",
    "duration": "sustentada",
    "effect": "parceiro elemental",
    "execution": "completa",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        "cost": "+5 PM",
        "description": "você convoca um elemental de cada tipo. Quando lança a magia, você pode escolher se cada elemental vai auxiliar você ou um aliado no alcance. Requer 5º círculo."
      }
    ],
    "name": "Conjurar Elemental",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Arcana 4 (Convocação)"
  },
  {
    "area": "cubo de 12m de lado",
    "circle": "4",
    "description": "Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode gastar uma ação padrão para mudar o efeito.Aumentar: no início de seus turnos, cada criatura na área deve fazer um teste de Atletismo. Se passar, fica fatigada. Se falhar, fica  Fatigado e Caído;Inverter: inverte a gravidade da área, fazendo com que criaturas e objetos “caiam” para cima, atingindo o topo (12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de “queda”. Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam flutuando no topo da área afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Alguém adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a “queda”. A criatura deve permanecer presa pela duração da magia; caso contrário “cairá”.Reduzir: criaturas ou objetos livres Médios ou menores flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 em testes de Atletismo para escalar e saltar. Uma criatura levitando fica instável, sofrendo –2 em testes de ataque.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Controlar a Gravidade",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Arcana 4 (Transmutação)"
  },
  {
    "area": "esfera com 2km de raio",
    "circle": "4",
    "description": "Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos em jogo do clima.\n ",
    "duration": "4d12 horas",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "(Apenas Druidas): muda o raio da área para 3km e duração para 1d4 dias."
      }
    ],
    "name": "Controlar o Clima",
    "range": "2km",
    "resistance": "",
    "target": "",
    "type": "Divina 4 (Transmutação)"
  },
  {
    "area": "esfera de 3m de raio",
    "circle": "4",
    "description": "Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura pode recuperar no máximo 5 PM por dia com esta magia.",
    "duration": "5 rodadas",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a regeneração de PV em 1d8+1."
      }
    ],
    "name": "Círculo da Restauração",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Divina 4 (Evocação)"
  },
  {
    "area": "esfera com 6m de raio",
    "circle": "4",
    "description": "Você cria um fulgor dourado e intenso. Criaturas na área ficam cegas por 1d4 rodadas e em chamas, e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega nem em chamas e sofre metade do dano.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a área em +6m de raio."
      },
      {
        "cost": "+5 PM",
        "description": "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na área. Requer 5º círculo"
      }
    ],
    "name": "Cólera de Azgher",
    "range": "médio",
    "resistance": "Reflexos Parcial",
    "target": "",
    "type": "Divina 4 (Evocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura (animais, espíritos, monstros...) ou uma raça de humanoides (elfos, goblins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de você (ou seja, que tentem ficar adjacentes a você) devem fazer um teste de Vontade. Se falharem, não conseguem, gastam a ação e só podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas não ataques ou outros efeitos à distância. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é dissipada.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "a cúpula impede criaturas de se aproximarem a menos de 4,5m de você (ou seja, deve haver dois quadrados entre você e as criaturas)."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, criaturas afetadas também precisam fazer o teste de resistência se fizerem um ataque ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula. Requer 5º círculo."
      }
    ],
    "name": "Cúpula de Repulsão",
    "range": "pessoal",
    "resistance": "Vontade Anula",
    "target": "Você",
    "type": "Divina 4 (Abjuração)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano.\nIndependentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "aumenta o dano total em +2d12 e o dano mínimo em +1d12."
      }
    ],
    "name": "Desintegrar",
    "range": "médio",
    "resistance": "Fortitude parcial",
    "target": "1 criatura ou objeto",
    "type": "Arcana 4 (Transmutação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você cria uma cópia ilusória semirreal de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se verá e ouvirá através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala. Qualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, você deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais. A cópia desaparece se sair do alcance.",
    "duration": "cena",
    "effect": "cópia ilusória",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "cria uma cópia adicional."
      }
    ],
    "name": "Duplicata Ilusória",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Arcana 4 (Ilusão)"
  },
  {
    "area": "esfera com 6m de raio",
    "circle": "4",
    "description": "Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do ND dela.\nND 4 ou menor: se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena.\nND entre 5 e 9: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.\nND 10 ou maior: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.\nUma criatura só pode ser atordoada por esta magia uma vez por cena.\nInconsciente\nAtordoado\nEnjoado",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Explosão Caleidoscópica",
    "range": "curto",
    "resistance": "Fortitude parcial",
    "target": "",
    "type": "Arcana 4 (Ilusão)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico). Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (pode alterar entre visível e invisível como ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração e essência afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma ação de movimento, encerrando a magia. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento.",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas podem soltar as mãos. Requer 5º círculo."
      }
    ],
    "name": "Forma Etérea",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 4 (Transmutação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz.Uma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável). A magia é encerrada quando o elemental fica sem pontos de luz.",
    "duration": "Cena ou até ser descarregado",
    "effect": "elemental de luz invocado",
    "execution": "padrão",
    "implements": [],
    "name": "Guardião Divino",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Divina 4 (Convocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "O alvo fica imune a efeitos de movimento e ignora qualquer efeito que impeça ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "além do normal, o alvo pode caminhar sobre a água ou outros líquidos com seu deslocamento normal. Entretanto, isso não protege contra qualquer efeito que o líquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta perícia mesmo sem treinamento."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para até 5 criaturas."
      },
      {
        "cost": "+5 PM",
        "description": "pode dissipar Aprisionamento."
      }
    ],
    "name": "Libertação",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura",
    "type": "Universal 4 (Abjuração)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo desta magia deve fazer um teste de Fortitude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "a magia não termina se o alvo chegar a 0 PV (o que significa que dano causado por essa magia pode matá-lo)."
      }
    ],
    "name": "Ligação Sombria",
    "range": "longo",
    "resistance": "Fortitude anula",
    "target": "1 criatura",
    "type": "Divina 4 (Necromancia)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você invoca o poder de sua divindade na forma de um manto de energia que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada.\nManto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você recebe imunidade a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz.\nManto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 4d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Manto do Cruzado",
    "range": "pessoal",
    "resistance": "",
    "target": "vocẽ",
    "type": "Divina 4 (Evocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, a vítima faz um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece à sua volta, podendo ver, ouvir e até falar com certo esforço (mas não para lançar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz.\nVocê precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlá-la — mas ela estará paralisada até que o conjurador recupere o controle ou a magia termine.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Marionete",
    "range": "médio",
    "resistance": "Fortitude anula",
    "target": "1 criatura",
    "type": "Arcana 4 (Encantamento)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar sempre tocando o solo. Quando a parede surge, criaturas na área ocupada ou adjacentes sofrem 4d8 pontos de dano de corte e precisam fazer um teste de Reflexos para não ficarem presas no emaranhado de ossos. Uma criatura presa dessa maneira fica Agarrado, e pode usar uma ação padrão para fazer um teste de Atletismo (CD da magia) para se soltar. Se passar no teste, sai da muralha para um dos lados adjacentes. Se falhar, sofre 4d8 pontos de dano de corte.\nÉ possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e redução de corte, frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo (CD da magia) e causa 4d8 pontos de dano de corte para cada 3m escalados.",
    "duration": "cena",
    "effect": "muro de ossos",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o comprimento em +15m e altura em +3m."
      },
      {
        "cost": "+5 PM",
        "description": "o muro é feito de uma massa de esqueletos animados. Sempre que uma criatura iniciar seu turno adjacente ou escalando a muralha, deve fazer um teste de Reflexos. Se falhar fica agarrada, sofrendo os feitos normais de estar agarrada pela magia."
      }
    ],
    "name": "Muralha de Ossos",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Universal 4 (Necromancia)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Esta magia cria uma mão flutuante de tamanho Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura leve (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir.\nAgarrar: a mão usa uma manobra agarrar contra o oponente, usando o seu Misticismo com um bônus adicional de +10. A mão mantém o oponente agarrado, mas não causa dano.\nEsmagar: a mão esmaga um oponente agarrado, causando 2d6+10 pontos de dano de impacto.\nEmpurrar: a mão afasta o oponente (manobra empurrar usando o seu Misticismo com um bônus adicional de +10). A mão acompanha o oponente para empurrá-lo o máximo que conseguir, dentro do alcance da magia.",
    "duration": "sustentada",
    "effect": "mão gigante de energia",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de impacto em +1d6+5."
      },
      {
        "cost": "+5 PM",
        "description": "muda o bônus adicional em Misticismo para +20. Requer 5º círculo."
      }
    ],
    "name": "Mão Poderosa de Talude",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Arcana 4 (Convocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta magia só pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um teste de Vontade para negar o efeito."
      },
      {
        "cost": "+10 PM",
        "description": "muda a duração para 1 dia."
      }
    ],
    "name": "Premonição",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 4 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (Paralisado). Se passar no teste de resistência, sofre metade do dano e, em vez de paralisado, fica Lento por uma rodada.\nÉ possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resistência a dano 10 e é vulnerável a fogo. Uma criatura presa pode usar uma ação completa para fazer um teste de Atletismo (com a mesma CD para resistir à magia) e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano em +2d8."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para área de esfera de 6m de raio. Em vez de um raio, você dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na área."
      }
    ],
    "name": "Raio Polar",
    "range": "médio",
    "resistance": "Fortitude parcial",
    "target": "1 criatura",
    "type": "Arcana 4 (Evocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Esta é uma magia poderosa, desenvolvida pelo metódico e impassível arquimago Reynard. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fique em chamas e a outra mão eletrificada. Pela duração da magia, você pode gastar uma ação de movimento para disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com 6m de raio) ou um relâmpago (10d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera com 9m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido.",
    "duration": "sustentada",
    "effect": "bolas de fogo e relâmpagos",
    "execution": "Duas Rodadas",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12."
      }
    ],
    "name": "Relâmpago Flamejante de Reynard",
    "range": "médio",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 4 (Evocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica Indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.",
    "duration": "Veja Texto",
    "effect": "",
    "execution": "10 minutos",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "transforma o sonho do alvo em um pesadelo. A vítima deve fazer um teste de Vontade. Se falhar, não recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. Use os mesmos modificadores da magia Vidência."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você."
      }
    ],
    "name": "Sonho",
    "range": "ilimitado (veja texto)",
    "resistance": "",
    "target": "1 criatura viva",
    "type": "Arcana 4 (Adivinhação)"
  },
  {
    "area": "cone de 9m",
    "circle": "4",
    "description": "Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de ar em alta velocidade. Criaturas na área sofrem 10d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para você, a duração para sustentada e o efeito para uma vez por rodada, como uma ação de movimento, você pode disparar uma lâmina de ar contra um alvo em alcance médio, causando 6d8 pontos de dano de corte (Fortitude reduz à metade)."
      }
    ],
    "name": "Talho Invisível de Edauros",
    "range": "pessoal",
    "resistance": "Fortitude parcial",
    "target": "",
    "type": "Arcana 4 (Evocação)"
  },
  {
    "area": "esfera com 30m de raio",
    "circle": "4",
    "description": "Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo ficam atordoadas. Barreiras físicas não interrompem a área de Terremoto.\nO efeito exato depende do terreno. \nCaverna ou subterrâneo: a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando (Agarrado) todas as criaturas na área. Um teste de Reflexos reduz o dano à metade e evita a condição. \nConstrução: todas as estruturas na área sofrem 200 pontos de dano de impacto, o suficiente para derrubar construções de madeira ou alvenaria simples, mas não de alvenaria reforçada. Criaturas em uma construção que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).\nEspaço aberto: fendas se abrem no chão. Cada criatura na área precisa rolar um dado; em um resultado ímpar, uma fenda se abre sob ela e ela precisa fazer um teste de Reflexos; se falhar, cai na fenda. A criatura pode escapar gastando uma ação completa e passando em um teste de Atletismo (CD igual à da magia). No início do seu próximo turno as fendas se fecham, matando todos que estejam dentro delas.\nPenhascos: o penhasco racha, criando um desmoronamento que percorre uma distância horizontal igual à distância da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma área de 30m de comprimento além da base. Qualquer criatura no caminho sofre 12d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado.\nRio, lago ou pântano: fissuras se abrem sob a água, drenando-a e formando um lamaçal. Criaturas na área precisam fazer um teste de Reflexos para não afundarem na lama e ficarem agarradas. No início do seu próximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram agarradas.\nCriaturas agarradas (efeito possível decaverna, construção, penhasco e rio, lago ou pântano) sofrem 1d6 pontos de dano por rodada até serem libertadas, o que exige uma ação completa e um teste de Atletismo (por parte da própria criatura ou de um aliado adjacente).",
    "duration": "1 rodada",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Terremoto",
    "range": "longo",
    "resistance": "veja texto",
    "target": "",
    "type": "Divina 4 (Evocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Esta magia invoca o poder de um dragão, causando mutações no conjurador que o tornam semelhante a uma criatura dracônica. Você recebe +2 em Força, Constituição, Inteligência e Carisma (esse aumento não oferece PV, PM ou perícias adicionais), +5 na Defesa e redução 30 contra o elemento do sopro do dragão cujo componente material você usou. Uma vez por rodada, você pode gastar uma ação padrão para exalar um sopro que causa 8d6+8 pontos de dano do elemento correspondente em um cone de 9m (Reflexos reduz à metade). \nComponente Material: uma peça de couro de dragão ou uma escama de dragão no valor de T$ 1.000.",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano do sopro em +1d6+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +1."
      },
      {
        "cost": "+6 PM",
        "description": "além do normal, asas de couro brotam de suas costas. Você recebe deslocamento de voo 18m."
      },
      {
        "cost": "+3 PM",
        "description": "você recebe uma arma natural de mordida (1d6, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Se já possuir uma mordida, em vez disso seu dano aumenta em dois passos."
      },
      {
        "cost": "+3 PM",
        "description": "o bônus em atributos se torna +4."
      }
    ],
    "name": "Transformação em Dragão",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 4 (Transmutação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você viaja instantaneamente para outro plano da Criação. Lá, você chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).Componente material: um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de existência você será enviado. Os metais que levam a dimensões específicas podem ser difíceis de encontrar, de acordo com o mestre.",
    "duration": "instantânea",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alvo para até cinco criaturas voluntárias que você esteja tocando."
      }
    ],
    "name": "Viagem Planar",
    "range": "toque",
    "resistance": "",
    "target": "pessoal",
    "type": "Universal 4 (Convocação)"
  },
  {
    "area": "",
    "circle": "4",
    "description": "Você enxerga a forma real das coisas. Você pode ver através de camuflagem e escuridão (normais e mágicas), assim como efeitos de ilusão e transmutação (enxergando a verdade como formas translúcidas ou sobrepostas).",
    "duration": "cena",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "além do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percepção."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intuição."
      },
      {
        "cost": "+4 PM",
        "description": "além do normal, o alvo enxerga através de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem translúcidas)."
      }
    ],
    "name": "Visão da Verdade",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 4 (Adivinhação)"
  }
];

export default spells4;