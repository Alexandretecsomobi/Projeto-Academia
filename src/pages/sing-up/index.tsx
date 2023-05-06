import React from "react";
import useStyles from "./styles";
import Form from "../../components/Form";

export default function Register() {
  const { container } = useStyles();

  return (
    <div className={container}>
      <Form type="register"></Form>
    </div>
  );
}
