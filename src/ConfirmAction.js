import React, { Component } from "react";

export default class ConfirmAction extends Component {
  state = {
    confirm: false,
    disabled: false
  };

  setConfirm = () => this.setState({ confirm: true });

  unSetConfirm = () => this.setState({ confirm: false });

  setDisabled = () => this.setState({ disabled: true });

  click = () => {
    if (this.state.confirm) {
      if (this.props.formReady) {
        this.setDisabled();
        this.props.onClick();
      }
    } else {
      {
        this.props.onFirstClick() && this.props.onFirstClick();
      }
      this.setConfirm();
    }
  };

  blur = () => {
    this.unSetConfirm();
  };

  render() {
    const { children } = this.props;
    const { confirm, disabled } = this.state;
    return children({
      onClick: this.click,
      onBlur: this.blur,
      confirm,
      disabled
    });
  }
}
