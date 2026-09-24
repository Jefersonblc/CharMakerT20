// Tabela de distribuição de atributos (custo em pontos e faixas de rolagem)
export const pointbuyTable = [
  { habilidade: -2, custo: -1, rolagem: "7 ou menos", min: null, max: 7 },
  { habilidade: -1, custo: -1, rolagem: "8-9", min: 8, max: 9 },
  { habilidade: 0, custo: 0, rolagem: "10-11", min: 10, max: 11 },
  { habilidade: 1, custo: 1, rolagem: "12-13", min: 12, max: 13 },
  { habilidade: 2, custo: 2, rolagem: "14-15", min: 14, max: 15 },
  { habilidade: 3, custo: 4, rolagem: "16-17", min: 16, max: 17 },
  { habilidade: 4, custo: 7, rolagem: "18", min: 18, max: 18 },
  { habilidade: 5, custo: 10, rolagem: "20 ou mais", min: 20, max: null }
];

// Converte o total rolado (4d6, descartando o menor) em modificador de atributo
export function modificadorDaRolagem(total) {
  const entry = pointbuyTable.find(e => (e.min === null || total >= e.min) && (e.max === null || total <= e.max));
  return entry ? entry.habilidade : 0;
}

// Formata um modificador com sinal (+2, -1, 0...)
export function formatarModificador(mod) {
  return mod > 0 ? `+${mod}` : `${mod}`;
}
