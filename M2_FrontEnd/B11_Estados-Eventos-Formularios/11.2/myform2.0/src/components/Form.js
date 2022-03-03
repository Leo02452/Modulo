import React, {Component} from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, type } = target
    let value = type === 'checkbox' ? name : target.value;
    this.setState({
      [name]: value,
    });
  }

  cleanForms = () => {
    this.setState({
      name: '',
      email: '',
      cpf: '',
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.cleanForms();
  }

  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome:
            <input
              name="name"
              value={this.state.name}
              maxLength={40}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              value={this.state.email}
              maxLength={50}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CPF:
            <input
              name="cpf"
              value={this.state.cpf}
              type={'number'}
              maxLength={11}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
          <button onClick={this.cleanForms}>Limpar</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;

// Crie um <fieldset> para os dados pessoais a seguir:
// Nome - Texto
// Limite de 40 caracteres
// Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
// Campo obrigatório
// Email - Texto
// Limite de 50 caracteres
// Campo obrigatório
// CPF - Texto
// Limite de 11 caracteres
// Campo obrigatório
// Endereço - Texto
// Limite de 200 caracteres
// Remover qualquer caracter especial que seja digitado
// Campo obrigatório
// Cidade - Texto
// Limite de 28 caracteres
// Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
// Campo obrigatório.
// Estado - ComboBox
// Todos os estados do Brasil
// Campo obrigatório.
// Tipo - Radio Button
// Casa, Apartamento
// Campo obrigatório.
// Crie outro <fieldset> para dados do seu último emprego:
// Resumo do currículo - TextArea
// Limite de 1000 caracteres
// Campo obrigatório.
// Cargo - TextArea
// Limite de 40 caracteres
// Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
// Campo obrigatório
// Descrição do cargo - Texto
// Limite de 500 caracteres
// Campo obrigatório
// Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
// Por último, vá até o formulário que você criou na aula HTML & CSS - Forms e veja as diferenças no código.
