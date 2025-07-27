export const classes = [
    {
        nome: "Arcanista",
        descricao: "Um conjurador de magias arcanas, por meio de estudo, um foco ou dom natural.",
        atributo: "Inteligência ou Carisma",
        pv: 8,
        pv_per_level: 2,
        pm: 6,
        pericias: {
            treinadas: ["Misticismo","Vontade"],
            treinadas_opt: [],
            opcoes: ["Conhecimento", "Diplomacia", "Enganação", "Guerra", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Nobreza", "Ofício", "Percepção"],
            quantidade: 2
        }
    },
    {
        nome: "Bárbaro",
        descricao: "Um combatente primitivo, que usa fúria e instintos para destruir seus inimigos.",
        atributo: "Força",
        pv: 24,
        pv_per_level: 6,
        pm: 3,
        pericias: {
            treinadas: ["Fortitude", "Luta"],
            treinadas_opt: [],
            opcoes: ["Adestramento", "Atletismo", "Cavalgar ", "Iniciativa", "Intimidação", "Ofício", "Percepção", "Pontaria", "Sobrevivência", "Vontade"],
            quantidade: 4
        }
    },
    {
        nome: "Bardo",
        descricao: "Um artista errante e faz-tudo versátil, sempre com a solução certa para cada ocasião.",
        atributo: "Carisma",
        pv: 12,
        pv_per_level: 3,
        pm: 4,
        pericias: {
            treinadas: ["Atuação", "Reflexos"],
            treinadas_opt: [],
            opcoes: ["Acrobacia", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Furtividade", "Iniciativa", "Intuição", "Investigação", "Jogatina", "Ladinagem", "Luta", "Misticismo", "Nobreza", "Percepção", "Pontaria", "Vontade"],
            quantidade: 6
        }
    },
    {
        nome: "Bucaneiro",
        descricao: "Um navegador inconsequente e galante, sempre em busca de ouro ou emoção.",
        atributo: "Destreza",
        pv: 16,
        pv_per_level: 4,
        pm: 3,
        pericias: {
            treinadas: ["Reflexos"],
            treinadas_opt: ["Luta", "Pontaria"],
            opcoes: ["Acrobacia", "Atletismo", "Atuação", "Enganação", "Fortitude", "Furtividade", "Iniciativa", "Intimidação", "Jogatina", "Luta", "Ofício", "Percepção", "Pilotagem", "Pontaria"],
            quantidade: 4
        }
    },
    {
        nome: "Caçador",
        descricao: "Um exterminador de monstros e mestre da sobrevivência em áreas selvagens.",
        atributo: "Força ou Destreza",
        pv: 16,
        pv_per_level: 4,
        pm: 4,
        pericias: {
            treinadas: ["Sobrevivência"],
            treinadas_opt: ["Luta", "Pontaria"],
            opcoes: ["Adestramento", "Atletismo", "Cavalgar ", "Cura", "Fortitude", "Furtividade", "Iniciativa", "Investigação", "Luta", "Ofício", "Percepção", "Pontaria", "Reflexos "],
            quantidade: 4
        }
    },
    {
        nome: "Cavaleiro",
        descricao: "Um combatente honrado, especializado em suportar dano e proteger os outros.",
        atributo: "Força",
        pv: 20,
        pv_per_level: 5,
        pm: 3,
        pericias: {
            treinadas: ["Fortitude", "Luta"],
            treinadas_opt: [],
            opcoes: ["Adestramento", "Atletismo", "Cavalgar", "Diplomacia", "Guerra", "Iniciativa", "Intimidação", "Nobreza", "Percepção", "Vontade"],
            quantidade: 2
        }
    },
    {
        nome: "Clérigo",
        descricao: "Servo de um dos deuses de Arton, usa poderes divinos para defender seus ideais.",
        atributo: "Sabedoria",
        pv: 16,
        pv_per_level: 4,
        pm: 5,
        pericias: {
            treinadas: ["Religião", "Vontade"],
            treinadas_opt: [],
            opcoes: ["Conhecimento", "Cura", "Diplomacia", "Fortitude", "Iniciativa", "Intuição", "Luta", "Misticismo", "Nobreza", "Ofício", "Percepção"],
            quantidade: 2
        }
    },
    {
        nome: "Druida",
        descricao: "Guardião do mundo natural e devoto das forças selvagens, naturais ou monstruosas.",
        atributo: "Sabedoria",
        pv: 16,
        pv_per_level: 4,
        pm: 4,
        pericias: {
            treinadas: ["Sobrevivência", "Vontade"],
            treinadas_opt: [],
            opcoes: ["Adestramento", "Atletismo", "Cavalgar", "Conhecimento", "Cura", "Fortitude", "Iniciativa", "Intuição", "Luta", "Misticismo", "Ofício", "Percepção", "Religião"],
            quantidade: 4
        }
    },
    {
        nome: "Guerreiro",
        descricao: "O especialista supremo em técnicas de combate com armas.",
        atributo: "Força ou Destreza",
        pv: 20,
        pv_per_level: 5,
        pm: 3,
        pericias: {
            treinadas: ["Fortitude"],
            treinadas_opt: ["Luta", "Pontaria"],
            opcoes: ["Adestramento", "Atletismo", "Cavalgar ", "Guerra", "Iniciativa", "Intimidação", "Luta", "Ofício", "Percepção", "Pontaria", "Reflexos"],
            quantidade: 2
        }
    },
    {
        nome: "Inventor",
        descricao: "Um ferreiro, alquimista ou engenhoqueiro, especializado em fabricar e usar itens.",
        atributo: "Inteligência",
        pv: 12,
        pv_per_level: 3,
        pm: 4,
        pericias: {
            treinadas: ["Ofício", "Vontade"],
            treinadas_opt: [],
            opcoes: ["Conhecimento", "Cura", "Diplomacia", "Fortitude", "Iniciativa", "Investigação", "Luta", "Misticismo", "Ofício", "Pilotagem", "Percepção", "Pontaria"],
            quantidade: 4
        }
    },
    {
        nome: "Ladino",
        descricao: "Aventureiro cheio de truques, confiando mais em agilidade e esperteza que em força bruta.",
        atributo: "Destreza ou Inteligência",
        pv: 12,
        pv_per_level: 4,
        pm: 4,
        pericias: {
            treinadas: ["Ladinagem", "Reflexos"],
            treinadas_opt: [],
            opcoes: ["Acrobacia", "Atletismo", "Atuação", "Cavalgar ", "Conhecimento", "Diplomacia", "Enganação", "Furtividade", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Jogatina", "Luta", "Ofício", "Percepção", "Pilotagem", "Pontaria"],
            quantidade: 8
        }
    },
    {
        nome: "Lutador",
        descricao: "Um especialista em combate desarmado rústico e durão.",
        atributo: "Força",
        pv: 20,
        pv_per_level: 5,
        pm: 3,
        pericias: {
            treinadas: ["Fortitude", "Luta"],
            treinadas_opt: [],
            opcoes: ["Acrobacia", "Adestramento", "Atletismo", "Enganação", "Furtividade", "Iniciativa", "Intimidação", "Ofício", "Percepção", "Pontaria", "Reflexos"],
            quantidade: 4
        }
    },
    {
        nome: "Nobre",
        descricao: "Um membro da alta sociedade cujas principais armas são as palavras e o orgulho.",
        atributo: "Carisma",
        pv: 16,
        pv_per_level: 4,
        pm: 4,
        pericias: {
            treinadas: ["Vontade"],
            treinadas_opt: ["Diplomacia", "Intimidação"],
            opcoes: ["Adestramento", "Atuação", "Cavalgar", "Conhecimento", "Diplomacia", "Enganação", "Fortitude", "Guerra", "Iniciativa", "Intimidação", "Intuição", "Investigação", "Jogatina", "Luta", "Nobreza", "Ofício", "Percepção", "Pontaria"],
            quantidade: 4
        }
    },
    {
        nome: "Paladino",
        descricao: "Um campeão do bem e da ordem, o perfeito soldado dos deuses.",
        atributo: "Força e Carisma",
        pv: 20,
        pv_per_level: 3,
        pm: 3,
        pericias: {
            treinadas: ["Luta", "Vontade"],
            treinadas_opt: [],
            opcoes: ["Adestramento", "Atletismo", "Cavalgar", "Cura", "Diplomacia", "Fortitude", "Guerra", "Iniciativa", "Intuição", "Nobreza", "Percepção", "Religião"],
            quantidade: 2
        }
    }
];

export default classes;
