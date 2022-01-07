const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

const listaDeEstados = document.getElementById('estado-input');

for (let i = 0; i < estados.length; i += 1) {
  const opcao = document.createElement('option');
  opcao.innerText = estados[i];
  opcao.value = estados[i];
  listaDeEstados.appendChild(opcao);
}

const campoData = document.getElementById('data-inicio');
campoData.DatePickerX.init({
  mondayFirst: false,
  format: 'dd/mm/yyyy',
  minDate: Date(),
});

const dataEscolhida = document.getElementById('data-inicio').DatePickerX.getValue();
console.log(dataEscolhida);

const validation = new JustValidate('#form');

validation
  .addField('#nome-input', [
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Nome é um campo obrigatório',
    },
  ])
  .addField('#email-input', [
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email é um campo obrigatório',
    },
  ])
  .addField('#cpf-input', [
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'required',
      errorMessage: 'CPF é um campo obrigatório',
    },
  ]);