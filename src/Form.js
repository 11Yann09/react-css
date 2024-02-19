import { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 80px;
`;

const Button = styled.button`
  background-color: black;
  color: #ffffff;
  padding: 12px 13px;
`;

class Form extends Component {
  render() {
    // const myClass = this.props.head ? "blue" : "red";
    return (
      <div>
        <Title>Commentaire</Title>
        <button className="btn btn-danger">Valider</button>
        <Button>Valider 2</Button>
      </div>
    );
  }
}
export default Form;
