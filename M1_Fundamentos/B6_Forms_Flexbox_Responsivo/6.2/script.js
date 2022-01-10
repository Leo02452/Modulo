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
      errorMessage: 'Maximo de 40 caracteres',

    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#email-input', [
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Maximo de 50 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#cpf-input', [
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Maximo de 11 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#endereco-input', [
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'Maximo de 200 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#cidade-input', [
    {
      rule: 'maxLength',
      value: 28,
      errorMessage: 'Maximo de 28 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#estado-input', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#resumo', [
    {
      rule: 'maxLength',
      value: 1000,
      errorMessage: 'Maximo de 1000 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ]);