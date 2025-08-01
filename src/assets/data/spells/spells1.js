
export const spells1 = [
  {
    "area": "",
    "circle": "1",
    "description": "Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+1 PM",
        "description": "muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta."
      }
    ],
    "name": "Abençoar Alimentos",
    "range": "curto",
    "resistance": "",
    "target": "alimento para 1 criatura",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal.\nUm alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para médio."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 monstro ou espírito com Inteligência 1 ou 2."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 monstro ou espírito. Requer 3o círculo."
      }
    ],
    "name": "Acalmar Animal",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 animal",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Um açoite de fogo surge em uma de suas mãos com a qual possa empunhar uma arma (essa mão fica ocupada pela duração da magia). Você pode usar uma ação padrão para causar 2d6 pontos de dano de fogo com o açoite em uma criatura em alcance curto e deixá-la em chamas e enredada enquanto estiver em chamas dessa forma. Passar na resistência reduz o dano à metade e evita as chamas.",
    "duration": "sustentada",
    "effect": "açoite de chamas criado em sua mão (veja texto)",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a execução para movimento."
      },
      {
        "cost": "+2 PM",
        "description": "muda o dano para 4d6. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o dano para 6d6. Requer 3º círculo."
      }
    ],
    "name": "Açoite Flamejante",
    "range": "pessoal",
    "resistance": "Reflexos parcial",
    "target": "",
    "type": "Arcana 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica Atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "você lança a magia sem gesticular ou\npronunciar palavras (o que permite lançar essa magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia\ncontra ele."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para 1 dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      }
    ],
    "name": "Adaga Mental",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 criatura",
    "type": "Arcana 1 (Encantamento)"
  },
  {
    "area": "Esfera de 9m de raio",
    "circle": "1",
    "description": "Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.\n ",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal. A área é emanada a partir de você."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo)."
      },
      {
        "cost": "+9 PM",
        "description": "muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso."
      }
    ],
    "name": "Alarme",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica Apavorado por 1 rodada, depois Abalado. Se passar, fica abalado por 1d4 rodadas.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+5 PM",
        "description": "afeta todos os alvos válidos a sua escolha dentro do alcance."
      }
    ],
    "name": "Amedrontar",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 animal ou humanoide",
    "type": "Arcana 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia ofertada por Lin-Wu transfere temporariamente para uma arma as qualdades místicas do jade, um raro material de Tamu-ra. A arma é considerada mágica, pode ser sacada e guardada como ação livre e fornece +1 nos testes de ataque e rolagens de dano (isso conta como um bônus de encanto). Contra espíritos, os bônus fornecidos pela magia são dobrados.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "a arma causa +1d4 de dano de eletricidade."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus de ataque e dano em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de LinWu): muda o bônus de dano do aprimoramento acima para +2d4."
      }
    ],
    "name": "Arma de Jade",
    "range": "toque",
    "resistance": "",
    "target": "1 arma",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você invoca a arma preferida de sua divindade (se tiver uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, a arma o protege. Você recebe +1 na Defesa."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2o círculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o tipo do dano para essência. Requer 2o círculo."
      },
      {
        "cost": "+5 PM",
        "description": "invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3o círculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano causado pela arma em +1d6, limitado pelo círculo máximo de magia que você pode lançar."
      }
    ],
    "name": "Arma Espiritual",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Divina 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica (não cumulativo com bônus de encantos). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam este atributo).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada. Este aprimoramento só pode ser usado uma vez."
      },
      {
        "cost": "+3 PM",
        "description": "muda o bônus de dano do aprimoramento elemental para +2d6."
      }
    ],
    "name": "Arma Mágica",
    "range": "toque",
    "resistance": "",
    "target": "1 arma empunhada",
    "type": "Universal 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a execução para reação.\nEm vez do normal, você cria um escudo\nmágico que fornece +5 na Defesa contra o próximo ataque que sofrer (cumulativo com o bônus fornecido pelo efeito básico desta magia e armaduras)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para 1 dia."
      }
    ],
    "name": "Armadura Arcana",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Escolha um tipo de energia entre ácido, eletricidade, fogo ou frio. Uma aura faiscante dessa energia emana de seu corpo — sempre que uma criatura adjacente acertar um ataque corpo a corpo em você, ela sofre 2d6 pontos de dano do tipo escolhido.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6 (total de dados limitado pelo círculo máximo de magia que você pode lançar). Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a energia para essência. Requer 2º círculo."
      }
    ],
    "name": "Armadura Elemental",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "fornece +1 nos testes de ataque com a arma."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execução para ação de movimento."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o bônus nos testes de ataque em +1."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o dano da arma em mais um passo."
      }
    ],
    "name": "Armamento da Natureza",
    "range": "toque",
    "resistance": "",
    "target": "1 arma (veja texto)",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Outrora chamada Armamento de Allihanna, esta magia recentemente recebeu um novo nome — com implicações curiosas. Utilizada pela primeira vez por Lisandra de Galrasia, diz-se que a verdadeira origem da magia estaria relacionada a seu pai, Arsenal, então mortal.\nVocê invoca uma arma a sua escolha, em uma versão de madeira mágica que fornece +1 nos testes de ataque e rolagens de dano (isso conta como um bônus de encanto) e conta como uma arma primitiva para efeitos como a magia Armamento da Natureza. Se for uma arma de disparo, ela produz sua própria munição (mas você pode usar munição normal, se quiser). Arsenal de Allihanna não cria armas complexas (como bestas ou armas de fogo) e seus efeitos só funcionam em suas mãos.",
    "duration": "cena",
    "effect": "arma criada em sua mão",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "a arma, ou sua munição, é recoberta de espinhos. Ela causa +1d6 pontos de dano e o alvo do ataque fica sangrando."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Devotos de Allihanna ou Dahllan): muda o alvo para uma planta e o alcance para toque. A planta manifesta uma arma corpo a corpo simples de madeira Tollon e uma armadura de couro batido reforçada. Se você tiver o suplemento Ameaças de Arton, ela pode manifestar uma espada espinhenta ou um fruto da espada-mãe (p. 245). Se estiver apto, você empunha/veste os itens como ação livre e eles desaparecem quando a magia acaba. Requer 2º círculo."
      }
    ],
    "name": "Arsenal de Allihanna",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta estranha magia conjura um grupo de criaturas agressivas que imediatamente atacam quem está por perto… Inclusive o conjurador e seus aliados!\nAs criaturas são feitas de energia e representam um encontro, preparado pelo mestre, de ND igual ao nível do conjurador. Elas surgem em alcance curto e agem imediatamente após o turno do conjurador, atacando quem estiver por perto (decida aleatoriamente). As criaturas lutam até a morte ou até 1 minuto, quando então desaparecem, e não deixam corpos nem tesouro.\nA função original da magia é incerta. Estudiosos acreditam ser fruto de um experimento falho, ou uma tentativa de conjurar alguma criatura específica. De qualquer forma, hoje é utilizada para treinar aventureiros ou causar distrações em situações específicas.\nComponente Material: miniaturas em metal de criaturas (T$ 25 por nível do conjurador).",
    "duration": "especial",
    "effect": "grupo de criaturas conjuradas",
    "execution": "padrão",
    "implements": [],
    "name": "Assobio Perigoso",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Arcana 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito.\nEscolha um:\nAlerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção até o fim da próxima cena.\nMensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo.\nLocalização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.",
    "duration": "instantânea",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km e assim por diante)."
      },
      {
        "cost": "+1 PM",
        "description": "se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno."
      },
      {
        "cost": "+2 PM",
        "description": "se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o número de alvos em +1."
      }
    ],
    "name": "Aviso",
    "range": "longo",
    "resistance": "",
    "target": "1 criatura",
    "type": "Universal 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Abençoa seus aliados, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os bônus em +1, limitado pelo círculo máximo de magia que você pode lançar."
      }
    ],
    "name": "Bênção",
    "range": "curto",
    "resistance": "",
    "target": "Aliados",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Uma mão mágica surge diante do alvo e o esbofeteia na face, ou em outra parte vulnerável, desaparecendo em seguida. O golpe não causa dano, mas é bastante humilhante. Se o alvo falhar na resistência, fica desprevenido por 1 rodada e vulnerável; se passar, fica apenas vulnerável por 1 rodada.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "alvos que falhem na resistência ficam vulneráveis pela cena."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, a mão dá leves tapinhas que acalmam os alvos e anulam uma condição entre abalado, alquebrado, apavorado e frustrado. Requer 2° círculo."
      },
      {
        "cost": "+3 PM",
        "description": "alvos que falhem na resistência ficam desprevenidos por 1d4+1 rodadas, em vez de apenas 1."
      },
      {
        "cost": "+5 PM",
        "description": "(Apenas Devotos de Nimb): afeta todos os alvos válidos a sua escolha dentro do alcance."
      }
    ],
    "name": "Bofetada de Nimb",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 humanoide",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar."
      },
      {
        "cost": "+1 PM",
        "description": "além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus de deslocamento em +3m."
      }
    ],
    "name": "Caminhos da Natureza",
    "range": "curto",
    "resistance": "",
    "target": "criaturas escolhidas",
    "type": "Divina 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos.\nFuja: o alvo gasta seu turno se afastando de você (usando todas as suas ações).\nLargue: o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou).\nPare: o alvo fica pasmo (uma vez por cena).\nSenta: com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno.\nVenha: o alvo gasta seu turno se aproximando de você (usando todas as suas ações).",
    "duration": "1 rodada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de alvos em +1"
      }
    ],
    "name": "Comando",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 humanóide",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos.\nVocê também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo."
      }
    ],
    "name": "Compreensão",
    "range": "toque",
    "resistance": "Vontade anula (veja descrição)",
    "target": "1 criatura ou texto",
    "type": "Universal 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um teste de ataque, você rola dois dados e usa o melhor resultado",
    "duration": "1 rodada",
    "effect": "",
    "execution": "livre",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a execução para padrão e a duração para cena. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4º círculo."
      },
      {
        "cost": "+14 PM",
        "description": "muda a execução para padrão e a duração para 1 dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5º círculo."
      }
    ],
    "name": "Concentração de Combate",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "\nVocê conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim uma criatura feita de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez.\n\nO monstro surge em um espaço desocupado a sua escolha dentro do alcance e age no início de cada um de seus turnos, a partir da próxima rodada. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode gastar uma ação padrão para dar uma das seguintes ordens a ele.\n\nMover: o monstro se movimenta o dobro do deslocamento nessa rodada.\n\nAtacar: o monstro causa 2d4+2 pontos de dano de corte, impacto ou perfuração a uma criatura adjacente.\n\nLançar Magia: o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo “cuspir” uma Bola de Fogo! Você gasta PM normalmente para lançar a magia.\n\nOutros usos criativos para monstros conjurados ficam a critério do mestre. O monstro não age sem receber uma ordem.\n\nPara efeitos de jogo, o monstro conjurado tem For 2, Des 3 e todos os outros atributos nulos. Ele tem Defesa igual a sua, 20 pontos de vid e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade.\n",
    "duration": "sustentada",
    "effect": "1 criatura conjurada",
    "execution": "completa",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento terrestre."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o deslocamento do monstro em +3m."
      },
      {
        "cost": "+1 PM",
        "description": "muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o tamanho do monstro para Médio. Ele tem For 4, Des 3, 45 PV, deslocamento 12m e seu ataque causa 2d6+6 pontos de dano."
      },
      {
        "cost": "+2 PM",
        "description": "o monstro ganha redução 5 contra dois tipos de dano (por exemplo, corte e frio)."
      },
      {
        "cost": "+4 PM",
        "description": "o monstro ganha uma nova ordem: Arma de Sopro. Para dar essa ordem você gasta 1 PM, e faz o monstro causar o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade)."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o tamanho do monstro para Grande. Ele tem For 7, Des 2, 75 PV, deslocamento 12m e seu ataque causa 4d6+10 pontos de dano com 3m de alcance. Requer 2º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "o monstro ganha deslocamento de voo igual ao dobro do deslocamento."
      },
      {
        "cost": "+9 PM",
        "description": "o monstro ganha imunidade contra dois tipos de dano."
      },
      {
        "cost": "+9 PM",
        "description": "aumenta o tamanho do monstro para Enorme. Ele tem For 11, Des 1, 110 PV, deslocamento 15m e seu ataque causa 4d8+15 pontos de dano com 4,5m de alcance. Requer 4º círculo."
      },
      {
        "cost": "+14 PM",
        "description": "aumenta o tamanho do monstro para Colossal. Ele tem For 15, Des 0, 180 PV, deslocamento 15m e seu ataque causa 4d12+20 pontos de dano com 9m de alcance. Requer 5º círculo."
      }
    ],
    "name": "Conjurar Monstro",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 1 (Convocação)"
  },
  {
    "area": "esfera com 9m de raio",
    "circle": "1",
    "description": "Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos.\nPor exemplo, Curar Ferimentos cura automaticamente 18 PV. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, mortos-vivos na área sofrem –2 em testes e Defesa."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta as penalidades para mortos-vivos em –1."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo."
      }
    ],
    "name": "Consagrar",
    "range": "longo",
    "resistance": "",
    "target": "",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "quadrado com 9m de lado",
    "circle": "1",
    "description": "Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam Enredado. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador."
      },
      {
        "cost": "+1 PM",
        "description": "muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não oferece camuflagem. Esse efeito dissipa o uso normal de Controlar Plantas."
      },
      {
        "cost": "+1 PM",
        "description": "além do normal, criaturas que falhem na resistência também ficam imóveis."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias."
      }
    ],
    "name": "Controlar Plantas",
    "range": "curto",
    "resistance": "Reflexos anula",
    "target": "",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra.Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo.Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada.Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.Terra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.",
    "duration": "instantânea",
    "effect": "elemento escolhido",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo)."
      },
      {
        "cost": "+1 PM",
        "description": "muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida."
      },
      {
        "cost": "+1 PM",
        "description": "se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
      }
    ],
    "name": "Criar Elementos",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Divina 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.",
    "duration": "cena",
    "effect": "ilusão que se estende a até 4 cubos de 1,5m",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o efeito da ilusão em +1 cubo de 1,5m."
      },
      {
        "cost": "+1 PM",
        "description": "também pode criar ilusões de imagem e sons combinados."
      },
      {
        "cost": "+1 PM",
        "description": "também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance."
      },
      {
        "cost": "+2 PM",
        "description": "também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "também criar sensações táteis, como texturas; criaturas que não saibam que é uma ilusão não conseguem atravessá-la sem passar em um teste de Vontade (objetos ainda a atravessam). A ilusão ainda é incapaz de causar ou sofrer dano. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo."
      }
    ],
    "name": "Criar Ilusão",
    "range": "médio",
    "resistance": "Vontade desacredita",
    "target": "",
    "type": "Arcana 1 (Ilusão)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. Curar Ferimentos anula Infligir Ferimentos.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade)."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a cura em +1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "também remove uma condição de cansaço do alvo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ],
    "name": "Curar Ferimentos",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você dispara um dardo de gelo contra o alvo, que sofre 2d6 pontos de dano de frio e fica lento por 1 rodada. Passar no teste de resistência reduz o dano à metade e evita a condição.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1 (total de alvos limitado pelo círculo máximo de magia que você pode lançar)."
      }
    ],
    "name": "Dardo Gélido",
    "range": "curto",
    "resistance": "Fortitude parcial",
    "target": "1 criatura",
    "type": "Arcana 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você analisa uma criatura em busca de pontos fracos e outras características. Para isso, como parte do efeito da magia, você faz um teste de Misticismo para identificar criatura contra o alvo (independente do tipo dele) com um bônus de +10.",
    "duration": "instantânea",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o bônus no teste em +5."
      },
      {
        "cost": "+1 PM",
        "description": "além do normal, sua próxima rolagem de dano contra a criatura nessa cena ignora 10 pontos da redução de dano dela. Requer 2° círculo."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, você recebe +2 em testes contra a criatura até o fim da cena. Requer 2° círculo."
      }
    ],
    "name": "Descobrir Fraqueza",
    "range": "curto",
    "resistance": "Vontade evita",
    "target": "1 criatura",
    "type": "Arcana 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica Atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano à metade e evita o atordoamento. Despedaçar anula Transmutar Objetos.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d8+2."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para objeto mundano Médio. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para objeto mundano Grande. Requer 3º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o alvo para objeto mundano Enorme. Requer 4º círculo."
      },
      {
        "cost": "+14 PM",
        "description": "muda o alvo para objeto mundano Colossal. Requer 5º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para pessoal e a área para esfera de 6m de raio. Todas as criaturas e objetos na área são afetados."
      }
    ],
    "name": "Despedaçar",
    "range": "curto",
    "resistance": "Fortitude parcial",
    "target": "1 criatura ou objeto mundano pequeno",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "Esfera de 18m de raio",
    "circle": "1",
    "description": "Você recebe uma intuição aguçada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na área do efeito, você faz um teste de Percepção (CD determinada pelo mestre de acordo com a situação). Se passar, sabe a origem (criatura ou armadilha), direção e distância do perigo. Se falhar, sabe apenas que o perigo existe.",
    "duration": "Cena, até ser descarregada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "você descobre também a raça ou espécie e o poder da criatura detectada (determinado pela aura dela). Criaturas de 1º a 6º nível geram aura tênue, criaturas de 7º a 12º nível geram aura moderada e criaturas de 13º ao 20º nível geram aura poderosa.\nCriaturas acima do 20º nível geram aura avassaladora."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, você não fica surpreso e desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resistência contra armadilhas. Requer 2º círculo."
      }
    ],
    "name": "Detectar Ameaças",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Divina 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia torna a aparência do alvo desinteressante, como se ele fosse parte da paisagem, algo perdido na bagunça ou mais um na multidão. O alvo não se torna invisível, ainda é percebido como uma criatura ou objeto; o encantamento apenas desvia a atenção dos observadores para outras pessoas ou elementos ao redor. Testes de Investigação e Percepção contra o alvo sofrem uma penalidade de –10.\nEm combate, enquanto Discrição estiver ativa, todos os inimigos que iniciarem seus turnos a até 9m do alvo devem fazer um teste de Vontade. Se falharem, qualquer ação hostil que realizarem ignora a criatura. Esta magia se dissipa se você causar dano a qualquer criatura.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a penalidade em testes para –15. Requer 2º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "além do normal, o alvo não pode ser detectado por magias de adivinhação. Requer 4° círculo."
      }
    ],
    "name": "Discrição",
    "range": "pessoal ou toque",
    "resistance": "Vontade anula",
    "target": "você ou 1 objeto",
    "type": "Universal 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, outra nascerá no local."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade."
      },
      {
        "cost": "+2 PM",
        "description": "a ilusão inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo."
      }
    ],
    "name": "Disfarce Ilusório",
    "range": "pessoal",
    "resistance": "Vontade desacredita",
    "target": "Você",
    "type": "Arcana 1 (Ilusão)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia busca algo de grande interesse pessoal (uma pessoa, um item, uma lembrança...) na memória do alvo e produz uma breve ilusão disso, visível a todos os presentes. Não é necessário que você conheça o interesse do alvo, a própria magia faz essa revelação. A magia, entretanto, não é capaz de revelar detalhes minuciosos (como o nome de uma pessoa ou item desejado), produzindo uma versão “genérica” do objeto de interesse.\nNão importando a natureza da distração, se falhar em seu teste de Vontade, o alvo fica desprevenido durante 1 rodada.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, se falhar no teste de Vontade o alvo também sofre –5 em testes de Diplomacia e Intimidação até o fim da cena."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "em vez de desprevenido, o alvo fica atordoado (apenas uma vez por cena)."
      },
      {
        "cost": "+2 PM",
        "description": "afeta todos os alvos válidos a sua escolha dentro do alcance. Requer 2º círculo."
      }
    ],
    "name": "Distração Fugaz",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 humanoide",
    "type": "Arcana 1 (Ilusão)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O alvo fica enfeitiçado (veja a página 394). Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 espírito ou monstro. Requer 3º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "afeta todos os alvos dentro do alcance."
      }
    ],
    "name": "Enfeitiçar",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 humanóide",
    "type": "Arcana 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Por um breve instante, você adquire uma agilidade espantosa para se esquivar de algum perigo súbito. Você recebe +5 em um teste de Ladinagem para desarmar armadilhas ou de Reflexos.",
    "duration": "instantânea",
    "effect": "",
    "execution": "reação",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda a execução para padrão e a duração para cena. Em vez do normal, o bônus se aplica a todos os testes destas perícias pela duração. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Devotos de Hyninn): além do normal, o alvo pode usar Evasão (Tormenta20, p. 73)."
      },
      {
        "cost": "+7 PM",
        "description": "(Apenas Devotos de Hyninn): além do normal, o alvo pode usar Evasão Aprimorada (Tormenta20, p. 75). Requer 4° círculo."
      }
    ],
    "name": "Escapatória de Hyninn",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.",
    "duration": "1 turno",
    "effect": "",
    "execution": "reação",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a execução para ação padrão, o alcance para toque e a duração para cena."
      },
      {
        "cost": "+1 PM",
        "description": "também fornece ao alvo camuflagem leve contra ataques à distância."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para 1 dia. Requer 2º círculo."
      }
    ],
    "name": "Escudo da Fé",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a área da escuridão em +1,5m de raio."
      },
      {
        "cost": "+2 PM",
        "description": "muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para 1 dia."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2º círculo."
      }
    ],
    "name": "Escuridão",
    "range": "curto",
    "resistance": "Vontade anula (veja texto)",
    "target": "1 objeto",
    "type": "Universal 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia invoca um pequeno espírito feito de energia com aparência a sua escolha em um espaço desocupado. O espírito é fixo, permanecendo no lugar onde foi invocado. No começo dos seus turnos, o espírito dispara um projétil mágico contra o inimigo mais próximo em alcance médio, causando 1d6+1 pontos de dano de perfuração. O espírito não realiza outras ações e dispara projéteis a cada rodada, até que a magia termine, não existam mais inimigos no alcance ou o espírito seja destruído.\nO espírito tem Defesa igual à sua e 20 pontos de vida. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade e falha automaticamente em testes de Reflexos.",
    "duration": "sustentada",
    "effect": "1 criatura conjurada",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em um dado do mesmo tipo (total de dados limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "muda o número de espíritos para dois. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o número de espíritos para três. Requer 3º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Golem [energia elemental], Qareen ou Kallyanach): muda o dado de dano para d8 e o tipo de dano para o o tipo escolhido para sua habilidade racial elemental."
      }
    ],
    "name": "Espírito Balístico",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Arcana 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia enche o alvo de disposição, apagando o medo (e bom senso) em seu coração e impedindo-o de ser intimidado por desafios árduos.\nO alvo se torna imune a medo e recebe +1 em testes de ataque quando luta em desvantagem (um encontro contra o dobro de inimigos que seu grupo, ou com ND maior que o do grupo).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus em testes de ataque em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execução para reação e a duração para 1 rodada. Em vez do normal, o alvo recebe imunidade a medo e +5 em Vontade. Requer 2° círculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para área de esfera com 3m de raio. Você e todos os aliados na área são afetados pela magia. Requer 2º círculo."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Devotos de Valkaria): muda o alcance para toque e o alvo para 1 criatura."
      }
    ],
    "name": "Euforia de Valkaria",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Se acertar seu próximo ataque no alvo, ele se torna um acerto crítico. Se for um crítico naturalmente, em vez disso seu multiplicador aumenta em +1.",
    "duration": "1 rodada",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "em vez do normal, a magia afeta 1 alvo sob efeito de uma condição mental. Requer 3º círculo."
      },
      {
        "cost": "+7 PM",
        "description": "(Apenas Devotos de Thwor): se o ataque for um acerto crítico naturalmente, em vez do normal ele causa o efeito de um golpe de misericórdia (Tormenta20, p. 235). Requer 5º círculo."
      }
    ],
    "name": "Execução de Thwor",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": " 1 humanoide sob efeito de uma condição de medo",
    "type": "Divina 1 (Necromancia)"
  },
  {
    "area": "Cone de 6m",
    "circle": "1",
    "description": "Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, no Apêndice)."
      }
    ],
    "name": "Explosão de Chamas",
    "range": "pessoal",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Ao lançar esta magia, você descobre se existe algum tesouro em alcance longo. Para este efeito, “tesouro” é qualquer acúmulo de itens valiosos (acima do dinheiro inicial de um personagem do seu nível) que não estejam sendo carregados ou vestidos por uma criatura inteligente.\nVocê sabe se há tesouros na área, mas não recebe nenhuma outra informação a respeito, como a direção ou localização do tesouro, seu valor exato, obstáculos no caminho... nada disso é informado pela magia.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque, o alvo para um item recém-encontrado e a duração para instantânea. Em vez do normal, você recebe +5 em testes de perícia para identificar o item."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, você recebe +5 em testes de perícia para localizar o tesouro."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, quando você rola qualquer dado para definir um tesouro, pode rolar dois dados e escolher qual resultado usar."
      }
    ],
    "name": "Farejar Fortuna",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia lança uma flecha luminosa contra o alvo, que sofre 2d8+2 pontos de dano de luz e fica ofuscado por 1 rodada. Passar no teste de resistência reduz o dano à metade e evita a condição.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para uma criatura que tenha causado dano a você ou a seus aliados na última rodada e os dados de dano da magia para d10."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1 (número de alvos adicionais limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Arcanos): alvos que falhem na resistência ficam cegos por 1 rodada e então ofuscados. Requer 2º círculo."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Arqueiros de Lenórienn): muda o alcance para pessoal, o alvo para seu arco arcano, a duração para sustentada e a resistência para nenhuma. Em vez do normal, o alvo emite luz como uma tocha e causa +2d8+2 pontos de dano de luz. Criaturas que sofram dano do arco ficam ofuscadas (veja Arqueiro de Lenórienn em Heróis de Arton)."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Elfos): muda o alvo para 1 duyshidakk ou 1 devoto de Aharadak, Tauron ou Thwor. Muda os dados de dano para d10."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Divinos): além do normal, para cada alvo que falhar na resistência, o próximo aliado que causar dano a ele recebe uma quantidade de PV temporários igual à metade do dano causado pela magia. Requer 2º círculo."
      }
    ],
    "name": "Flecha de Luz",
    "range": "médio",
    "resistance": "Reflexos parcial",
    "target": "1 criatura",
    "type": "Universal 1 (Evocação)"
  },
  {
    "area": "raio de 9m",
    "circle": "1",
    "description": "Você emana uma aura refrescante, que envolve você e aliados na área. A aura purifica o ar ao redor, eliminando todo tipo de fumaça, poeira, gás nocivo, nuvem ácida ou veneno de inalação, exceto se forem gerados por magias de 2º círculo ou maior.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta em 1 o círculo de magia afetado (limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, a área para alvo (1 criatura) e a duração para 1 dia. Em vez do normal, suprime uma doença do alvo. Requer 2° círculo."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Devotos de Lena): como acima, mas quando faz o teste da doença nesse dia, o alvo recebe um bônus de +5. Requer 3° círculo."
      },
      {
        "cost": "+9 PM",
        "description": "(Apenas Devotos de Lena): muda o alcance para toque, a área para alvo (1 criatura) e adiciona componente material (ervas no valor de T$ 1.000). O alvo recupera 1 ponto de atributo perdido por uma doença. Requer 4° círculo."
      }
    ],
    "name": "Frescor de Lena",
    "range": "pessoal",
    "resistance": "",
    "target": "",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Para aqueles devotados a Lin-Wu, respeito aos ancestrais é algo levado muito a sério — pois no além-vida, eles podem julgar suas ações e trazer fortuna ou desgraça. Esta magia invoca a alma de um antepassado da vítima para acusá-la de erros passados e trazer punição. O alvo sofre 1d6 pontos de dano psíquico e 1d6 pontos de dano de luz e fica pasmo por 1 rodada (apenas na primeira vez que é alvo desta magia na cena). Se passar no teste de resistência, sofre apenas metade do dano e evita a condição.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de alvos em +1. Requer 2° círculo."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o dano psíquico e de luz em +1d6 cada."
      },
      {
        "cost": "+0 PM",
        "description": "(Apenas Devotos de Lin-Wu): muda o alvo para 1 criatura inteligente (Int –3 ou maior)."
      }
    ],
    "name": "Fúria dos Antepassados",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 humanoide",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia permite enxergar todas as possibilidades e consequências de um evento muito recente, ainda a tempo de escolher o melhor caminho. O alvo recebe +2 em um teste cujo dado já rolou, mas cujo resultado o mestre ainda não tenha declarado.",
    "duration": "instantânea",
    "effect": "",
    "execution": "reação",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Thyatis): muda o bônus para 1d4+2."
      }
    ],
    "name": "Futuro Melhor",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resistência. Se a criatura passar, fica imune a este efeito por um dia.",
    "duration": "1d4 Rodadas",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda a duração para 1 rodada. Em vez de fascinado, o alvo fica pasmo. (apenas uma vez por cena)"
      },
      {
        "cost": "+1 PM",
        "description": "como o normal, mas alvos que passarem na resistência não sabem que foram vítimas de uma magia."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para animais ou humanoides escolhidos."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para sustentada."
      },
      {
        "cost": "+2 PM",
        "description": "também afeta espíritos e monstros na área. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo."
      }
    ],
    "name": "Hipnotismo",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 animal ou humanoide",
    "type": "Arcana 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o número de cópias em +1 (e o bônus na Defesa em +2)."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 2º círculo."
      }
    ],
    "name": "Imagem Espelhada",
    "range": "pessoal",
    "resistance": "",
    "target": "Você",
    "type": "Arcana 1 (Ilusão)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, se falhar na resistência, o alvo fica fraco pela cena (passar no teste de resistência evita)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ],
    "name": "Infligir Ferimentos",
    "range": "toque",
    "resistance": "Fortitude reduz à metade",
    "target": "1 criatura",
    "type": "Divina 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta maldição menor reduz a resiliência da vítima, tornando-a mais suscetível a efeitos nocivos. O alvo sofre –2 em testes de sua resistência originalmente mais baixa.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, a vítima perde imunidade a venenos até o fim da próxima rodada. Requer 2° círculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a penalidade em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Devotos de Sszzaas): além do normal, quando o alvo morre, deixa para trás um pequeno cristal com memórias e segredos. Ao resolver uma busca (Tormenta20, p. 278), um personagem pode quebrar um desses cristais para receber +2 em um teste de perícia. Requer 3° círculo."
      }
    ],
    "name": "Infortúnio de Sszzaas",
    "range": "curto",
    "resistance": "Vontade anula",
    "target": "1 criatura",
    "type": "Divina 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Invocando a proteção de Khalmyr, você resiste a agressões potencialmente perigosas. Quando sofre dano não mágico, você recebe RD 10 contra esse dano.",
    "duration": "instantânea",
    "effect": "",
    "execution": "reação",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda a RD para 20. Requer 2° círculo."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, para cada 10 pontos de dano que a magia reduzir em um turno, sua próxima rolagem de dano feita até a próxima rodada causa +1d6 pontos de dano de essência."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Devotos de Khalmyr): muda a execução para padrão e a duração para cena, até ser descarregada. Em vez do normal, quando sofre dano não mágico, você pode receber RD 10 contra esse dano. A magia é descarregada após você usar este efeito pela terceira vez. Requer 3º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Khalmyr): muda o alcance para toque e o alvo para 1 criatura."
      }
    ],
    "name": "Instante Estoico",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "linha de 9m",
    "circle": "1",
    "description": "Você dispara um jato, que causa 2d6 pontos de dano de ácido às criaturas na área. Contra construtos e objetos soltos, a magia causa +1 ponto de dano por dado.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica vulnerável."
      }
    ],
    "name": "Jato Corrosivo",
    "range": "pessoal",
    "resistance": "Reflexos reduz à metade",
    "target": "",
    "type": "Arcana 1 (Evocação)"
  },
  {
    "area": "cone de 4,5m",
    "circle": "1",
    "description": "Um cone de luzes brilhantes surge das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada (apenas uma vez por cena, Vontade anula) e ofuscados pela cena.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "além do normal, as criaturas afetadas ficam vulneráveis pela cena."
      },
      {
        "cost": "+2 PM",
        "description": "também afeta espíritos e monstros na área. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo."
      }
    ],
    "name": "Leque Cromático",
    "range": "pessoal",
    "resistance": "Vontade parcial",
    "target": "",
    "type": "Arcana 1 (Ilusão)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a área iluminada em +3m de raio."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2º círculo."
      },
      {
        "cost": "+0 PM",
        "description": "(Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Arcanos): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Você pode enviar um à frente, outra para trás, outra para cima e manter um perto de você, por exemplo. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "(Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e resistência a trevas 10. Requer 2º círculo."
      }
    ],
    "name": "Luz",
    "range": "curto",
    "resistance": "Vontade anula (veja texto)",
    "target": "1 objeto",
    "type": "Universal 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia surgiu com o objetivo de invocar a força estupenda e estapafúrdia de certo bárbaro lendário, capaz de alcançar dimensões colossais. Infelizmente (ou talvez felizmente) seus efeitos reais são muito mais brandos, pouco se aproximando do poder descomunal e descabido do bruto em questão. Melhor assim.\nAo lançar a magia, você adquire uma fantástica Força +10. Um relevante efeito colateral, contudo, é que sua Inteligência cai para acachapantes –3. Não, não uma penalidade de –3; um valor –3! Penalidades no atributo são aplicadas após isso.\nPela duração de Maaais Klunc, você não pode lançar magias, nem é capaz de interromper esta magia de forma voluntária — nem mesmo soletrar essa palavra. O mestre pode (vai) exigir testes de Inteligência mesmo para as tarefas mentais mais simplórias, como achar a saída de um aposento vazio, diferenciar aliados de inimigos ou determinar qual extremidade da arma vai na direção do adversário.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura voluntária (por que alguém seria voluntário?). Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura involuntária (Vontade evita). Requer 3º círculo. Espera, o quê!?"
      }
    ],
    "name": "Maaais Klunc",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Não é comum descrever uma divindade maior do Panteão como “maluquinha”. Contudo, há ocasiões em que Wynna faz por merecer — como quando oferece estas dádivas caóticas. No início de seu turno, role 1d4. Em um resultado 4, você recebe 1 PM temporário que só pode ser gasto em aprimoramentos de magias. A magia é descarregada quando você recebe um total de 4 PM temporários. Você só pode lançar esta magia uma vez por cena.",
    "duration": "cena, até ser descarregada",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura. Requer 3° círculo."
      },
      {
        "cost": "+0 PM",
        "description": "(Apenas Devotos de Wynna): muda a execução para padrão, o ganho para +2 PM temporários e o limite para descarregar para +8 PM."
      }
    ],
    "name": "Magia Dadivosa",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água.",
    "duration": "cena",
    "effect": "nuvem com 6m de raio e 6m de altura",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "a magia também funciona sob a água, criando uma nuvem de tinta."
      },
      {
        "cost": "+2 PM",
        "description": "você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada."
      },
      {
        "cost": "+2 PM",
        "description": "a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de ácido em +2d4."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano."
      }
    ],
    "name": "Névoa",
    "range": "curto",
    "resistance": "",
    "target": "",
    "type": "Universal 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O suposto desaparecimento do Oceano se mostra particularmente misterioso pelo fato de que seus devotos ainda podem lançar magias. Você cria um globo protetor de água salgada que ocupa 1 quadrado e o acompanha, fornecendo a você camuflagem leve e cobertura leve.",
    "duration": "sustentada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+4 PM",
        "description": "muda a duração para cena. Requer 3º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Oceano): além do normal, você é considerado submerso. Isso exige que você prenda a respiração (a menos que possa respirar debaixo d’água), mas faz com que sofra apenas a metade do dano de armas de corte e impacto que não sejam armas naturais e é considerado submerso para benefícios de suas habilidades que dependam dessa situação."
      }
    ],
    "name": "Orbe do Oceano",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Em seu próximo teste de perícia, o alvo pode rolar dois dados e ficar com o melhor resultado",
    "duration": "1 rodada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a duração para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de perícia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência.\nRequer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda a duração para cena. Escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Sempre que o alvo fizer um teste de perícia, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência. Requer 3º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para criaturas escolhidas. Requer 3º círculo."
      }
    ],
    "name": "Orientação",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia confere resistência extraordinária ao esqueleto, evitando ataques que causam fraturas graves. O alvo recebe redução de impacto 5 e fortificação 25%.\nDevido à rigidez do esqueleto, o corpo do alvo se torna incapaz de mudar de forma (como usar ou encerrar a habilidade Forma Selvagem). Se sofrer um efeito de metamorfose, em vez de mudar de forma o alvo perde 1d6 PV por PM gasto no efeito e fica lento. Essa condição não pode ser removida enquanto Ossos de Adamante estiver em efeito. Esta magia não afeta construtos.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda a redução de impacto para RD 5 e a fortificação para 50%. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura viva."
      }
    ],
    "name": "Ossos de Adamante",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você é cercado por uma aura de magnetismo pessoal que o torna mais interessante e atraente aos olhos dos demais. Você recebe +2 em perícias originalmente baseadas em Carisma (exceto Intimidação).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Devotos de Marah): além do normal, o alvo recebe +1 em Carisma. Esse aumento não oferece PV ou PM adicionais."
      },
      {
        "cost": "+3 PM",
        "description": "(Apenas Devotos de Marah): muda a duração para 1 dia. Requer 2º círculo."
      }
    ],
    "name": "Paixão de Marah",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia faz o conjurador adquirir, por algum tempo, a estranha percepção de tempo dos lefeu — que permite ver alguns momentos no futuro. O alvo recebe +1 em testes de ataque, em Reflexos e na Defesa.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Aharadak): aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      }
    ],
    "name": "Percepção Rubra",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar."
      }
    ],
    "name": "Perdição",
    "range": "curto",
    "resistance": "nenhuma",
    "target": "Criaturas Escolhidas",
    "type": "Divina 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Com a proteção de Tenebra, você emana uma aura de sombras com 6m de raio. As sombras se movem de formas estranhas, com rangidos e gemidos sem explicação, vultos fugidios nas janelas e faces macabras urrando para sumir no instante seguinte. As demais criaturas na área sofrem –5 em testes de Percepção. Medo.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o efeito para aura de 9m."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura ou objeto. O alvo emana a aura."
      },
      {
        "cost": "+5 PM",
        "description": "você pode escolher quais criaturas são afetadas pela aura. Requer 2º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o alcance para curto, o alvo para área (esfera de 6m de raio), a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 5° círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Tenebra): adiciona resistência (Vontade parcial). Além do normal, criaturas que comecem seu turno dentro da área ficam abaladas. Passar no teste de resistência evita a condição e impede que a criatura seja abalada por esta magia até o fim da cena. Requer 2° círculo."
      }
    ],
    "name": "Perturbação Sombria",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Ilusão)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Por um breve momento, você manifesta uma pequena parte da força e majestade das grandes feras dracônicas: a capacidade de criar elementos em sua forma mais pura. Até o fim do seu turno, a CD para resistir às suas habilidades mágicas que causam dano de ácido, eletricidade, fogo ou frio aumenta em +2.",
    "duration": "1 turno",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a CD em +1 (bônus máximo limitado pelo círculo máximo de magias que você pode lançar). Requer 3° círculo."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Devotos de Kallyadranoch): além do normal, criaturas que falhem nos testes de resistência contra suas habilidades mágicas sofrem uma condição baseada no tipo de dano. Ácido: vulnerável até o fim da cena. Eletricidade: atordoado por 1 rodada (apenas uma vez por cena). Fogo: em chamas e vulnerável enquanto estiver em chamas. Frio: lento até o fim da cena. Requer 2° círculo."
      }
    ],
    "name": "Poder de Kallyadranoch",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia cria um vínculo poderoso entre você e seus pertences, dificultando sua perda ou roubo. Você recebe +5 em testes contra as manobras desarmar e quebrar, e de Percepção contra punga (veja Ladinagem) para roubá-lo. Além disso, se tiver o item tirado de você involuntariamente e ele estiver em alcance curto, você pode invocá-lo às suas mãos com uma ação livre.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Arsenal): além do normal, você também pode convocar uma arma à sua mão mesmo se ela tiver sido arremessada voluntariamente."
      }
    ],
    "name": "Posse de Arsenal",
    "range": "pessoal",
    "resistance": "",
    "target": "1 item empunhado",
    "type": "Divina 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30)."
      },
      {
        "cost": "+1 PM",
        "description": "além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala."
      },
      {
        "cost": "+1 PM",
        "description": "muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura neste turno, recebe os benefícios e penalidades de uma investida e sua arma causa um dado extra de dano do mesmo tipo durante este ataque."
      },
      {
        "cost": "+3 PM",
        "description": "além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2º círculo."
      }
    ],
    "name": "Primor Atlético",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "esfera com 9m de raio",
    "circle": "1",
    "description": "Você enche a área com energia negativa. Dano causado por efeitos de trevas é maximizado dentro da área. Isso também afeta PV curados em mortos-vivos por esses efeitos. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os bônus para mortos-vivos em +1."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo."
      }
    ],
    "name": "Profanar",
    "range": "longo",
    "resistance": "",
    "target": "",
    "type": "Divina 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta antiga magia ofertada pelo Deus da Força ainda pode ser lançada mesmo após sua morte, preservada por divindades simpatizantes em honra a seu aspecto como protetor dos fracos. Quando a magia é lançada, luz sagrada envolve o alvo, que se torna um “protegido”; ele recebe +2 na Defesa e, quando se move em sua direção, o deslocamento dele é dobrado. Além disso, você sabe a direção e distância do alvo, e também se ele está ferido ou afetado por qualquer condição, independentemente da distância. Você não pode lançar esta magia enquanto for o “protegido” de outra criatura.",
    "duration": "cena",
    "effect": "",
    "execution": "movimento",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "além do normal, você pode usar habilidades mágicas com alcance de toque no alvo como se elas tivessem alcance curto."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus na Defesa em +2 (bônus máximo limitado ao dobro do círculo máximo de magia que você pode lançar). Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Minotauros): além do normal, uma vez por rodada, quando uma criatura faz uma ação hostil contra o protegido, você pode gastar 1 PM para fazer um ataque corpo a corpo contra ela, desde que ela esteja em seu alcance pessoal."
      }
    ],
    "name": "Proteção de Tauron",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura que não você",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus concedido em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execução para reação, o alcance para curto e a duração para 1 rodada. Em vez do normal, o alvo recebe +5 no próximo teste de resistência que fizer (cumulativo com o efeito básico desta magia)."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para área de esfera com 3m de raio. Todos os aliados dentro da esfera recebem o bônus da magia. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "também torna o alvo imune a efeitos mentais e de medo. Requer 3º círculo."
      }
    ],
    "name": "Proteção Divina",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia transforma uma de suas mãos em mitral, tornando-a prateada como esse metal. A mão continua capaz de realizar movimentos normais e segurar objetos — mas também pode golpear ou esmagar. Se não estiver segurando nada com essa mão, você recebe +1 em testes de ataque e na margem de ameaça com ataques desarmados, e pode causar dano letal ou não letal com eles. Por fim, você pode manipular venenos com essa mão sem chance de se envenenar acidentalmente.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o bônus em testes de ataque e na margem de ameaça para +2."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "além do normal, se você estiver empunhando uma arma ou um item esotérico com essa mão, ele recebe os benefícios do material especial mitral (mesmo que já possua outro material especial). Requer 2° círculo."
      }
    ],
    "name": "Punho de Mitral",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano.\nComo lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas.\nLançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão.\nQueda Suave só funciona em criaturas e objetos em queda livre ou similar; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador.",
    "duration": "até chegar ao solo ou cena, o que vier primeiro",
    "effect": "",
    "execution": "reação",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alvo para objeto Minúsculo. Em vez do normal, você pode gastar uma ação de movimento para levitar o alvo até 4,5m em qualquer direção."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para até 10 criaturas ou objetos."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a categoria de tamanho do alvo em uma"
      }
    ],
    "name": "Queda Suave",
    "range": "curto",
    "resistance": "",
    "target": "1 criatura ou objeto Grande ou menor",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica Fatigado Se passar, fica Vulnerável.\nNote que, como efeitos de magia não acumulam, lançar esta magia duas vezes contra o mesmo alvo não irá deixá-lo exausto.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, sua mão emana um brilho púrpura e, ao tocar o alvo ele fica fatigado."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "como acima, mas muda o alvo para criaturas escolhidas. Requer 3º círculo."
      }
    ],
    "name": "Raio do Enfraquecimento",
    "range": "curto",
    "resistance": "Fortitude parcial",
    "target": "1 criatura",
    "type": "Arcana 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe redução de dano 10 contra o tipo de dano escolhido.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a redução de dano em +5."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para 1 dia. Requer 2º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o efeito para redução de dano contra todos os tipos listados na magia. Requer 3º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o efeito para imunidade a um tipo listado na magia. Requer 4º círculo"
      }
    ],
    "name": "Resistência à Energia",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Universal 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente enquanto a magia durar. Santuário não protege o alvo de efeitos de área. Além disso, o próprio alvo também não pode fazer ações hostis (incluindo forçar outras criaturas a atacá-lo), ou a magia é dissipada — mas pode usar habilidades e magias de cura e suporte, como Curar Ferimentos e Bênção.\n ",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas não inteligentes (Int –4 ou menor) do tipo escolhido."
      },
      {
        "cost": "+9 PM",
        "description": "também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área."
      }
    ],
    "name": "Santuário",
    "range": "toque",
    "resistance": "Vontade anula",
    "target": "1 criatura",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o número de setas/lanças para três."
      },
      {
        "cost": "+4 PM",
        "description": "muda o número de setas/lanças para cinco. Requer 2º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o número de setas/lanças para dez. Requer 4º círculo."
      }
    ],
    "name": "Seta Infalível de Talude",
    "range": "médio",
    "resistance": "",
    "target": "criaturas escolhidas",
    "type": "Arcana 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Ofertada pelo Deus dos Segredos, esta magia é utilizada por todos que buscam preservar a própria privacidade. Pela duração da magia, quaisquer criaturas que fizerem testes de perícia para obter alguma informação a seu respeito sofrem –5 nesses testes. Isso inclui testes de Percepção para notá- -lo, Conhecimento e Investigação para descobrir algo sobre você, Intuição para discernir suas mentiras e disfarces, e assim por diante.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "adiciona resistência (Vontade evita). Além do normal, criaturas que usem habilidades mágicas de detecção, como a magia Vidência, devem fazer um teste de Vontade. Se falharem, a habilidade não funciona e, pela duração da magia, novas tentativas de usar a mesma habilidade feitas pela mesma criatura falham automaticamente. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Sszzaas): muda a penalidade para –10."
      }
    ],
    "name": "Sigilo de Sszzaas",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Invocando a fúria do Deus-Sol, você cria uma breve e focada tempestade de areia, capaz de esfolar a carne dos ossos! Criaturas afetadas sofrem dano de corte conforme seu grau de proteção: 3d6 se estiverem sem armadura, 2d6 se estiverem com armadura leve e 1d6 se estiveren com armadura pesada.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda o tipo de dano para luz."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal e o alvo para área (cone de 9m). Requer 2° círculo."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Devotos de Azgher): além do normal, criaturas que falhem na resistência ficam em chamas e sangrando."
      }
    ],
    "name": "Siroco de Azgher",
    "range": "curto",
    "resistance": "Reflexos reduz à metade",
    "target": "1 criatura",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Um cansaço místico recai sobre o alvo. Se falhar na resistência, ele fica inconsciente e caído ou, se estiver envolvido em combate ou outra situação perigosa, fica Exausto por 1 rodada, depois fatigado. Em ambos os casos, se passar, o alvo fica Fatigado por 1d4 rodadas.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "alvos que falhem na resistência ficam exaustos por 1d4+1 rodadas, em vez de apenas 1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para criatura."
      },
      {
        "cost": "+5 PM",
        "description": "afeta todos os alvos válidos a sua escolha dentro do alcance."
      }
    ],
    "name": "Sono",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 humanoide",
    "type": "Arcana 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Variantes desta magia, com diferentes nomes, são concedidas por Nimb, Hyninn, Sszzaas, Valkaria e até Thyatis. O objetivo, contudo, é sempre o mesmo: trapacear em jogos. Sorriso da Fortuna permite manipular os resultados de um jogo de azar. Quando fizer um teste de Jogatina (ou relacionado a algum jogo, a critério do mestre) você pode rolar dois dados e usar o melhor resultado. A magia é descarregada após você usar esse efeito três vezes.\nEsta magia afeta apenas jogos e itens mundanos, não mágicos. Além disso, embora funcione bem em pequenas tavernas, grandes cassinos empregam vigilantes atentos ao uso desta magia e suas variações.",
    "duration": "1 dia, até ser descarregada",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta em +1 o total de usos antes de a magia ser descarregada."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execução para reação, o alcance para curto e o alvo para 1 criatura. Além disso, você lança a magia usando apenas concentração (Tormenta20, p. 170). Em vez do normal, a magia confunde um dos jogadores presentes, que rola seu teste de Jogatina com dois dados e usa o pior resultado."
      },
      {
        "cost": "+3 PM",
        "description": "além do normal, você pode escolher um “número da sorte”. Se o número da sorte for rolado em qualquer um dos dados, o resultado conta como um 20 natural. Requer 2° círculo."
      },
      {
        "cost": "+1 PM",
        "description": "(Apenas Devotos de Hyninn): muda a execução para reação e a duração para instantânea. Em vez do normal, quando faz seu primeiro teste de uma perícia em uma cena, você pode rolar dois dados e usar o melhor resultado."
      }
    ],
    "name": "Sorriso da Fortuna",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.",
    "duration": "1 dia",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ],
    "name": "Suporte Ambiental",
    "range": "toque",
    "resistance": "",
    "target": "1 criatura",
    "type": "Divina 1 (Abjuração)"
  },
  {
    "area": "cubo com 6m de lado",
    "circle": "1",
    "description": "Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica Enredado. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil.\nA Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "além do normal, criaturas que falhem na resistência também ficam imóveis."
      },
      {
        "cost": "+2 PM",
        "description": "além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a área em +1 cubo de 1,5m."
      }
    ],
    "name": "Teia",
    "range": "curto",
    "resistance": "Reflexos anula",
    "target": "",
    "type": "Arcana 1 (Convocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a resistências para nenhum. Como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área."
      }
    ],
    "name": "Toque Chocante",
    "range": "toque",
    "resistance": "Fortitude reduz à metade",
    "target": "1 criatura",
    "type": "Arcana 1 (Evocação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Criaturas de Allihanna seguem leis naturais. Monstros existem para violar essas leis. Após deformações horrendas, você se transforma em uma criatura do tipo monstro. Nessa forma, você recebe +5 em Intimidação, mas sofre –5 nas demais perícias baseadas em Carisma. Além disso, recebe uma arma natural de um tipo a sua escolha entre chifre, ferrão e mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa arma natural.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "a margem de ameaça de suas armas naturais aumenta em +1."
      },
      {
        "cost": "+2 PM",
        "description": "o dano de suas armas naturais aumenta em um passo. Requer 3° círculo."
      },
      {
        "cost": "+5 PM",
        "description": "(Apenas Devotos de Megalokk): além do normal, você recebe redução de dano 5.Requer 2º círculo."
      }
    ],
    "name": "Toque de Megalokk",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "A magia melhora a precisão da arma, aumentando seu alcance em um passo (de curto para médio e de médio para longo). Se o alcance da arma já é longo, ele é dobrado. Os efeitos desta magia contam como um bônus de encanto.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "a arma ignora camuflagem leve e penalidades por cobertura leve."
      },
      {
        "cost": "+1 PM",
        "description": "além do normal, a arma fornece +1 em testes de ataque e rolagens de dano feitos dentro do seu alcance original."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o bônus do aprimoramento acima em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
      },
      {
        "cost": "+2 PM",
        "description": "a margem de ameaça da arma aumenta em +1. Requer 2° círculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para uma arma de arremesso e a duração para sustentada. Em vez do normal, a arma recebe o benefício do encanto dançarina. Requer 3° círculo."
      }
    ],
    "name": "Toque do Horizonte",
    "range": "toque",
    "resistance": "",
    "target": "1 arma de ataque à distância",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas.Componente material: chave de bronze no valor de T$ 25.",
    "duration": "permanente",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para curto. Em vez do normal, pode abrir ou fechar um objeto de tamanho Médio ou menor, como uma porta ou baú. Não afeta objetos trancados."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e a duração para instantânea. Em vez do normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por Tranca Arcana (o efeito é dissipado) a sua escolha. Ela também afrouxa grilhões e solta correntes."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta a CD para abrir o alvo em +5."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo."
      }
    ],
    "name": "Tranca Arcana",
    "range": "toque",
    "resistance": "",
    "target": "1 objeto Grande ou menor",
    "type": "Arcana 1 (Abjuração)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja a página 259) e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar à atitude que tinha antes (ou pior, de acordo com o mestre).",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o número de alvos em +1."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo."
      }
    ],
    "name": "Tranquilidade",
    "range": "curto",
    "resistance": "Vontade parcial",
    "target": "1 animal ou humanóide",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos ou itens alquímicos, nem objetos com mecanismos complexos, como bestas ou armas de fogo.\nTransmutar Objetos anula Despedaçar.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "Truque",
        "description": "muda o alvo para 1 objeto mundano Mínusculo (ou material em quantidade equivalente) e a duração para instantânea. Em vez do normal, você pode alterar as propriedades físicas do alvo, como colorir, limpar ou sujar itens pequenos (incluindo peças de roupa), aquecer, esfriar e/ou temperar (mas não produzir) ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cerâmica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto só pode ser afetado por este truque uma vez por dia."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Em vez do normal, cura 2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o limite de tamanho do objeto em uma categoria."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o preço máximo do objeto criado em um fator de x10 (+3 PM por T$ 250 de preço, +6 PM por T$ 2.500 de preço, e assim por diante)."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3º círculo."
      },
      {
        "cost": "+9 PM",
        "description": "como o aprimoramento anterior, mas passa a afetar itens mágicos."
      }
    ],
    "name": "Transmutar Objetos",
    "range": "toque",
    "resistance": "",
    "target": "matéria-prima, como madeira, rochas, ossos",
    "type": "Arcana 1 (Transmutação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "recebe visão no escuro."
      },
      {
        "cost": "+2 PM",
        "description": "muda a duração para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas."
      }
    ],
    "name": "Visão Mística",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Universal 1 (Adivinhação)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Você suga energia vital da terra, recebendo 2d10 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.",
    "duration": "instantânea",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os PV temporários recebidos em +1d10. Caso a magia cause dano, em vez disso aumenta o dano causado em +1d10."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d10 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo."
      }
    ],
    "name": "Vitalidade Fantasma",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Arcana 1 (Necromancia)"
  },
  {
    "area": "",
    "circle": "1",
    "description": "Iluminada por Tanna-Toh, sua mente transborda de argumentos e informações. Você recebe +5 em Conhecimento, Diplomacia e Intimidação.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+2 PM",
        "description": "muda o bônus para +10. Requer 2º círculo."
      },
      {
        "cost": "+2 PM",
        "description": "(Apenas Devotos de Tanna-Toh): além do normal, você recebe +5 em Intuição e em testes de Investigação para interrogar."
      }
    ],
    "name": "Voz da Razão",
    "range": "pessoal",
    "resistance": "",
    "target": "você",
    "type": "Divina 1 (Encantamento)"
  },
  {
    "area": "Quadrado de 3m ou 1 objeto",
    "circle": "1",
    "description": "Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10).\nÁrea Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.",
    "duration": "cena",
    "effect": "",
    "execution": "padrão",
    "implements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a área em +1 quadrado de 1,5m."
      },
      {
        "cost": "+2 PM",
        "description": "muda a CD dos testes de Acrobacia para 15."
      },
      {
        "cost": "+5 PM",
        "description": "muda a CD dos testes de Acrobacia para 20."
      }
    ],
    "name": "Área Escorregadia",
    "range": "curto",
    "resistance": "Reflexos (veja texto)",
    "target": "quadrado de 3m ou 1 objeto",
    "type": "Arcana 1 (Convocação)"
  }
];

export default spells1;