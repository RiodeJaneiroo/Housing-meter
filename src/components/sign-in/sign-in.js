import React from 'react';

const SignIn = ({onSignIn}) => {

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    onSignIn(form.password.value);
    form.reset();
  }
  return (
    <div className="col-md-8 mx-auto">
        <div className="d-flex justify-content-center">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Пароль" />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default SignIn;