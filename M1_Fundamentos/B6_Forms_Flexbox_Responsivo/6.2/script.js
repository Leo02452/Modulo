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

let dataEscolhida = campoData.value;

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);