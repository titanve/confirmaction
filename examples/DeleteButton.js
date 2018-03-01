import React from "react";
import ConfirmAction from "../ConfirmAction/ConfirmAction";

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 10,
  margin: 5,
  width: 70
};

const defaultFunction = function() {};

const DeleteButton = ({
  onFirstClick = defaultFunction,
  onClick,
  formReady
}) => {
  return (
    <ConfirmAction
      onFirstClick={onFirstClick}
      onClick={onClick}
      formReady={formReady}
    >
      {({ confirm, disabled, onClick, onBlur }) => (
        <input
          type="button"
          onClick={onClick}
          onBlur={onBlur}
          className="btn btn-danger"
          value={
            confirm ? (formReady ? "Confirmar" : "Faltan datos!") : "Eliminar"
          }
          disabled={disabled}
        />
      )}
    </ConfirmAction>
  );
};

export default DeleteButton;
