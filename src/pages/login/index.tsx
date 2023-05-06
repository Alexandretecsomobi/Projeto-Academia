import React from "react";
import useStyles from "../sing-up/styles";
import Form from "../../components/Form";

export default function Login() {
  const { container } = useStyles();

  return (
    <div className={container}>
      <Form type="login"></Form>
    </div>
  );
}
