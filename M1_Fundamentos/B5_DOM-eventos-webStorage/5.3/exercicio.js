function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysNumbers() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const dezDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDays.length; index += 1) {
    const dias = dezDays[index];
    const diasItensLista = document.createElement('li');
    diasItensLista.innerHTML = dias;
    diasItensLista.className = 'day';

    switch (dezDays[index]) {
      case 24:
      case 25:
      case 31:
        diasItensLista.classList.add('holiday');
    }

    switch (dezDays[index]) {
      case 4:
      case 11:
      case 18:
      case 25:
        diasItensLista.classList.add('friday');
    }
    dezDaysList.appendChild(diasItensLista);
  };
};
createDaysNumbers();

function holiday() {
  const botao = document.createElement('button');
  botao.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(botao);
}

holiday();