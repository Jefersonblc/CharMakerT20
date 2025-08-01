export const spells5 = [
  {
    "area": "",
    "circle": "5",
    "description": "Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você pode rolar novamente um teste de resistência com um bônus de +10 ou um inimigo deve rolar novamente um ataque contra você com uma penalidade de –10",
    "duration": "instantânea",
    "effect": "",
    "execution": "reação",
    "implements": [],
    "name": "Alterar Destino",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 5 (Abjuração)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no testede resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000.\nAcorrentamento: o alvo é preso por correntes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio.\nComponente Material: uma fina corrente de mitral.\nContenção Mínima: o alvo diminui para 2 cm de altura e é preso dentro de uma pedra preciosa ou objeto semelhante. Luz passa através da pedra, permitindo que o alvo veja o lado de fora e seja visto, mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro.\nComponente Material: uma pedra preciosa, como um diamante ou rubi.\nPrisão Dimensional: o alvo é transportado para um semiplano protegido contra teletransporte e viagens planares. Pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada e pequena a sua escolha.\nComponente Material: uma representação em miniatura da prisão, feita de jade.\nSepultamento: o alvo é sepultado nas profundezas da terra, em uma esfera mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares.\nComponente Material: um pequeno orbe de adamante.\nSono Eterno: o alvo adormece e não pode ser acordado.\nComponente Material: fruta preparada com ervas soníferas raras.\nQuando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não.\nParalisado\n ",
    "duration": "permanente",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Aprisionamento",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 criatura",
    "type": "Arcana 5 (Abjuração)"
  },
  {
    "area": "esfera com 9m de raio",
    "circle": "5",
    "description": "Você se torna um conduíte da energia de sua divindade, emanando uma aura brilhante. Você e aliados devotos da mesma divindade ficam imunes a encantamento e recebem +10 na Defesa e em testes de resistência. Aliados não devotos da mesma divindade recebem+5 na Defesa e em testes de resistência.\nAlém disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre Esmorecido, Debilitadoou Lento até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os bônus na Defesa e em testes de resistência em +1."
      }
    ],
    "name": "Aura Divina",
    "range": "pessoal",
    "resistance": "Vontade parcial",
    "target": "",
    "type": "Divina 5 (Abjuração)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Criada pelo arquimago Vectorius, esta magia produz quatro esferas, de ácido, eletricidade, fogo e frio, que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano de seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto dife- rente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus testes de resistência::\n• Ácido: Vulnerável até o fim da cena.\n• Elétrica: Atordoado por uma rodada. (apenas uma vez por cena).\n• Fogo: Em Chamas.\n• Frio: Lentoaté o fim da cena.",
    "duration": "instantânea",
    "effect": "4 esferas elementais",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "aumenta o dano de cada esfera em +2d6."
      },
      {
        "cost": "+5 PM",
        "description": "muda o tipo de dano de todas as esferas para essência (mas elas ainda causam os outros efeitos como se seu tipo de dano não mudasse)."
      }
    ],
    "name": "Barragem elemental de Vectorius",
    "range": "longo",
    "resistance": "Reflexos parcial",
    "target": "",
    "type": "Arcana 5 (Evocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência.\nCriaturas e objetos que iniciem seu turno no espaço do buraco negro devem gastar uma ação de movimento e fazer um teste de Fortitude. Se passarem, podem escapar se arrastando (deslocamento de 1,5m) para longe dele. Se falharem, perdem a ação (mas podem gastar outra para tentar novamente). Se terminarem seu turno no espaço do buraco negro, são sugadas, desaparecendo para sempre.\nNão se conhece o destino das coisas sugadas pelo buraco negro. Alguns estudiosos sugerem que são enviadas para outros mundos — provavelmente o reino da deusa das Trevas.",
    "duration": "3 rodadas",
    "effect": "Buraco Negro",
    "execution": "completa",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "muda o efeito para que você não seja afetado."
      }
    ],
    "name": "Buraco Negro",
    "range": "longo",
    "resistance": "Fortitude parcial",
    "target": "",
    "type": "Universal 5 (Abjuração)"
  },
  {
    "area": "quadrado com 18m de lado",
    "circle": "5",
    "description": "Meteoros caem dos céus, devastando a área afetada. Criaturas na área sofrem 15d6 pontos de dano de impacto, 15d6 pontos de dano de fogo e ficam Caído e presas sob os escombros (Agarrado).\nUma criatura que passe no teste de resistência sofre metade do dano total e não fica caída e agarrada. Uma criatura agarrada pode escapar gastando uma ação padrão e passando em um teste de Atletismo (CD da magia). Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil, e imersa numa nuvem de poeira (camuflagem leve). Esta magia só pode ser utilizada a céu aberto.",
    "duration": "instantânea",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de meteoros que atingem a área, o que aumenta o dano em +2d6 de impacto e +2d6 de fogo."
      }
    ],
    "name": "Chuva de Meteoros",
    "range": "longo",
    "resistance": "Reflexos parcial",
    "target": "",
    "type": "Arcana 5 (Convocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir.Congelar o tempo: você gera uma bolha do seu tamanho na qual o tempo passa mais lentamente. Para outras criaturas, a bolha surge e desaparece instantaneamente, mas, para você, ela dura 3 rodadas (o que fornece 2 turnos extras após o atual), durante as quais você pode agir e não é afetado por efeitos contínuos (como chamas). Porém, durante essas 3 rodadas, você e quaisquer efeitos que você gerar não podem sair da área que você ocupava quando lançou esta magia. Efeitos de área com duração maior que a da bolha voltam a agir normalmente quando ela termina. Você não pode congelar o tempo nem preparar ações enquanto está sob esse efeito.Saltar no tempo: você e até 5 criaturas voluntárias são transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Vocês ressurgem no mesmo lugar, com a mesma velocidade e orientação; do seu ponto de vista, nenhum tempo se passou. Se um objeto sólido agora ocupa o espaço de uma criatura, ela ressurge na área vazia mais próxima.Voltar no tempo: você revive os últimos segundos. Todas as ações da rodada anterior são desfeitas (incluindo perda de PV e PM — exceto os gastos nesta magia). Tudo retorna à posição em que estava no início do seu turno na última rodada e você é o único que sabe o que acontecerá. Outros personagens devem repetir as mesmas ações — exceto se você fizer algo a respeito (como avisar seus aliados sobre o que vai acontecer). Você só pode reviver uma mesma rodada uma vez.",
    "duration": "veja texto",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Controlar o Tempo",
    "range": "veja texto",
    "resistance": "",
    "target": "veja texto",
    "type": "Arcana 5 (Transmutação)"
  },
  {
    "area": "esfera de 15m de raio",
    "circle": "5",
    "description": "Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.",
    "duration": "instantânea",
    "effect": "",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 10."
      },
      {
        "cost": "+5 PM",
        "description": "afeta apenas criaturas a sua escolha."
      }
    ],
    "name": "Deflagração de Mana",
    "range": "pessoal",
    "resistance": "Fortitude parcial",
    "target": "",
    "type": "Arcana 5 (Evocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Esta é a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Você pode:\n• Dissipar os efeitos de qualquer magia de 4º círculo ou menor.\n• Transportar até 10 criaturas voluntárias em alcance longo para qualquer outro local, em qualquer plano.\n• Desfazer um acontecimento recente. A magia permite que um teste realizado por uma criatura em alcance longo na última rodada seja realizado novamente. Por exemplo, se um aliado morreu na última rodada devido ao ataque de um inimigo, você pode obrigar o inimigo a refazer esse ataque.\nVocê pode desejar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como:\n• Criar um item mundano de até T$ 30.000.\n• Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.\n• Aumentar um atributo de uma criatura em +1. Cada atributo só pode ser aumentado uma vez com Desejo.\nDesejo pode gerar efeitos ainda mais poderosos, mas cuidado! Desejar a fortuna de um rei pode transportá-lo para a sala de tesouro real, onde você poderá ser preso ou morto; desejar ser imortal pode transformá-lo em morto-vivo, e assim por diante. Qualquer efeito que não se encaixe na lista acima deve ser decidido pelo mestre.",
    "duration": "veja texto",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Desejo",
    "range": "veja texto",
    "resistance": "veja texto",
    "target": "veja texto",
    "type": "Arcana 5 (Transmutação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você cria um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é imune a dano, não pode ser movido e faz uma contramágica automática contra qualquer magia lançada em alcance médio dele (exceto as suas), usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, se estiver ao alcance do disco, você pode gastar PM nele para lançar magias.",
    "duration": "sustentada",
    "effect": "disco de energia com 1,5m de diâmetro",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente."
      },
      {
        "cost": "+4 PM",
        "description": "muda a duração para 1 dia."
      }
    ],
    "name": "Engenho de Mana",
    "range": "médio",
    "resistance": "",
    "target": "",
    "type": "Divina 5 (Abjuração)"
  },
  {
    "area": "cubo de 90m",
    "circle": "5",
    "description": "Você cria uma nuvem de tempestade violenta. Os ventos tornam ataques à distância impossíveis e fazem a área contar como condição terrível para lançar magia. Além disso, inimigos na área têm a visibilidade reduzida (como a magia Névoa). Uma vez por turno, você pode gastar uma ação de movimento para gerar um dos efeitos a seguir.\nNevasca. Inimigos na área sofrem 10d6 pontos de dano de frio (Fortitude reduz à metade). A área fica coberta de neve, virando terreno difícil até o fim da cena ou até você usar siroco.\nRaios. Até 6 inimigos a sua escolha na área sofrem 10d8 pontos de dano de  eletricidade (Reflexos reduz à metade).\nSiroco. Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam Sangrando (Fortitude reduz o dano à metade e evita a condição).\nTrovões. Inimigos sofrem 10d6 pontos de dano de impacto e ficam Desprevenido por uma rodada (Fortitude reduz o dano à metade e evita a condição).",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Fúria do Panteão",
    "range": "longo",
    "resistance": "veja texto",
    "target": "",
    "type": "Divina 5 (Evocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você pede a sua divindade para interceder diretamente. Você pode:\n• Curar todos os PV e condições de até 10 criaturas em alcance longo (este efeito cura mortos-vivos, em vez de causar dano).\n• Dissipar os efeitos de qualquer magia de 4º círculo ou menor. \nVocê pode implorar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como:\n• Criar um item mundano de até T$ 30.000.\n• Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.\n• Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto.\n• Ressuscitar uma criatura em alcance longo que tenha morrido há até uma rodada. A criatura acorda com 1 PV.\n• Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.",
    "duration": "",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Intervenção Divina",
    "range": "veja texto",
    "resistance": "veja texto",
    "target": "veja texto",
    "type": "Divina 5 (Convocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Esta magia cria uma barreira mágica impenetrável que protege você contra efeitos nocivos mentais ou físicos, a sua escolha.Proteção mental: você fica imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de efeitos de encantamento e ilusão.Proteção física: você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de acertos críticos, ataques furtivos e doenças.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura."
      }
    ],
    "name": "Invulnerabilidade",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Universal 5 (Abjuração)"
  },
  {
    "area": "linha de 60m ou duas linhas de 30m",
    "circle": "5",
    "description": "Um golpe vindo dos céus risca o campo de batalha. Se escolher duas linhas, cada uma deve seguir em uma direção diferente, criando um corte em “V”. Criaturas na área sofrem 12d8 pontos de dano de luz (ou 12d12, se forem mortos-vivos) e ficam cegas e surdas até o fim da cena (Reflexos reduz à metade e evita as condições).",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano em +2d8 (ou +2d12 contra mortos-vivos)."
      },
      {
        "cost": "+6 PM",
        "description": "muda a área para uma linha de 120m ou quatro linhas de 30m em direções opostas, formando um  “X”."
      }
    ],
    "name": "Katana Celestial",
    "range": "pessoal",
    "resistance": "Reflexos parcial",
    "target": "",
    "type": "Divina 5 (Evocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam Abalado por 1 rodada enquanto recuperam a consciência.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1."
      }
    ],
    "name": "Legião",
    "range": "médio",
    "resistance": "Vontade parcial",
    "target": "até 10 criaturas na área",
    "type": "Arcana 5 (Encantamento)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a área para esfera de 6m de raio e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+5 PM",
        "description": "muda a execução para 1 dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução. Ao término, faz um teste de Vontade. Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de reverter essa perda. Os clérigos da deusa da Magia dizem que a deusa chora cada vez que este ritual é realizado."
      }
    ],
    "name": "Lágrimas de Wynna",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 criatura",
    "type": "Divina 5 (Abjuração)"
  },
  {
    "area": "cone de 30m",
    "circle": "5",
    "description": "Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área à sua frente, causando 20d12 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos.  Sempre que rola um resultado 12 em um dado de dano, a magia causa +1d12 pontos de dano. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate.",
    "duration": "instantânea",
    "effect": "",
    "execution": "2 Rodadas",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 1d12."
      }
    ],
    "name": "Mata-Dragão",
    "range": "pessoal",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 5 (Evocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você pronuncia uma palavra do idioma primordial da Criação, que causa um dos efeitos abaixo, a sua escolha.Atordoar: a criatura fica atordoada por 1d4+1 rodadas (apenas uma vez por cena). Se passar no teste de resistência, ou se já foi atordoada por esta magia, fica desprevenida por 1d4 rodadas.Cegar: a criatura fica Cego. Se passar no teste de resistência, fica Sangrando.",
    "duration": "instantânea ou veja texto",
    "effect": "",
    "execution": "padrão",
    "implements": [],
    "name": "Palavra Primordial",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 criatura com menos níveis que você",
    "type": "Universal 5 (Encantamento)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você projeta sua consciência no corpo do alvo. Enquanto possuir uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "você ganha acesso às habilidades de raça e classe da criatura."
      },
      {
        "cost": "+5 PM",
        "description": "enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode “saltar” de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência."
      },
      {
        "cost": "+5 PM",
        "description": "muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no começo do dia para retomar seu corpo. Se passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída morrer e houver outra criatura em alcance curto, você pode tentar possuí-la como uma reação. Enquanto houver novos corpos para possuir, você é imortal!"
      }
    ],
    "name": "Possessão",
    "range": "longo",
    "resistance": "Vontade anual",
    "target": "1 criatura",
    "type": "Arcana 5 (Encantamento)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano.\nVocê adquire uma forma fantasmagórica invisível, mas pode se mostrar  sando uma ação de movimento. Pode se mover em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo, é capaz de atravessar objetos sólidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Você pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+10 PM",
        "description": "além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada. Sua forma fantasmagórica funciona como na magia Forma Etérea, sendo afetada por magias de abjuração e essência, mas as magias que ela lança podem afetar criaturas corpóreas."
      }
    ],
    "name": "Projetar Consciência",
    "range": "ilimitado (veja texto)",
    "resistance": "",
    "target": "local ou criatura conhecidos",
    "type": "Divina 5 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos clérigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatura não pode ser reanimada novamente com esta magia.",
    "duration": "cena",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Reanimação Impura",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 5 (Necromancia)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica Abaladopor 1 rodada. Se falhar, seu corpo fica caído, Inconscientee inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível ou ND da criatura e não possuir uma alma presa ou se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de “nível” dentro do mundo de jogo, podem ter noção do poder geral de uma criatura, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Mundos dos Deuses.\nCusto adicional: sacrifício de 1 PM.",
    "duration": "permanente",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "o objeto que abriga a alma detém os mesmos PM totais que o alvo. Se estiver empunhando o objeto, você pode usar esses PM para pagar o custo de PM para lançar magias. O objeto recupera PM por dia como se o personagem estivesse em descanso normal."
      },
      {
        "cost": "+10 PM",
        "description": "como uma reação ao lançar esta magia, você possui o corpo sem alma do alvo, como na magia Possessão (mesmo que não conheça a magia)."
      }
    ],
    "name": "Roubar a Alma",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 criatura",
    "type": "Divina 5 (Necromancia)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia.",
    "duration": "sustentada",
    "effect": "",
    "execution": "completa",
    "implements": [],
    "name": "Réquiem",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "criaturas escolhidas",
    "type": "Arcana 5 (Ilusão)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a cura em +20 PV."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para até 5 criaturas."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la."
      }
    ],
    "name": "Segunda Chance",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 5 (Evocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Você cria uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 10 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por objeto Médio ou menor, 2 PM por objeto Grande, 5 PM por Enorme e 10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia Viagem Planar, pode lançá-la para voltar ao plano material em outro local.\nVocê escolhe a forma e a aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília,  ferramentas etc.) a cada viagem.",
    "duration": "1 dia",
    "effect": "semiplano com 30m de lado",
    "execution": "completa",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "adiciona alvo (1 criatura). Você cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Investigação ou Sobrevivência (CD da magia), com bônus cumulativo de +1 para cada teste já realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensional e\nTeletransporte não ajudam a escapar do\nlabirinto, mas Viagem Planar, sim."
      },
      {
        "cost": "+5 PM",
        "description": "muda a duração para permanente e adiciona componente material (maquete do semiplano feito de materiais preciosos no valor de T$ 5.000). Você pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez."
      }
    ],
    "name": "Semiplano",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 5 (Convocação)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+10 PM",
        "description": "muda o alvo para criaturas escolhidas na área."
      }
    ],
    "name": "Sombra Assassina",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 criatura",
    "type": "Arcana 5 (Ilusão)"
  },
  {
    "area": "",
    "circle": "5",
    "description": "Sua mão exala energias letais. A criatura sofre 10d8+10 pontos de dano de trevas. Se estiver com menos da metade de seus PV, em vez disso deve fazer um teste de Fortitude. Se passar, sofre o dano normal. Se falhar, seus PV são reduzidos a –10.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto. Em vez de tocar no alvo, você dispara um raio púrpura da ponta de seu dedo indicador."
      },
      {
        "cost": "+10 PM",
        "description": "muda o alcance para curto e o alvo para inimigos no alcance. Em vez de tocar no alvo, você dispara raios púrpuras da ponta de seus dedos."
      }
    ],
    "name": "Toque da Morte",
    "range": "toque",
    "resistance": "Veja texto",
    "target": "1 criatura",
    "type": "Universal 5 (Necromancia)"
  }
];

export default spells5;