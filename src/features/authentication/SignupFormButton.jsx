import React from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

import SignupForm from "./SignupForm";

function SignupFormButton() {
  return (
    <Modal>
      <Modal.Open opens="registerForm">
        <Button variation="secondary">Create a new account</Button>
      </Modal.Open>
      <Modal.Window name="registerForm">
        <SignupForm />
      </Modal.Window>
    </Modal>
  );
}

export default SignupFormButton;
