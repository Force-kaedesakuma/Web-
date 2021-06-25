function checkEmail() {
    const id = document.getElementById("id");
    const pass = document.getElementById("pass");
    const button = document.getElementById("button");
    if((id.value && id.value.length) && (pass.value && pass.value.length)) {
            // 入力欄が空👉disabled解除
            button.disabled = false;
    }else {
        // 入力されている👉disabledを付与
        button.disabled = true;
      }
  }