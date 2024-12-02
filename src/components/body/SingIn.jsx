
export const SingIn = () => {
  return (
    <>
      <form  className="form" action="">
         <h2>Sing in</h2>
          <div className="contentForm">
              <label className="label" htmlFor="name">Username</label>
              <input className="input" type="text" placeholder="Name" id="name" name="name"/>

              <label className="label" htmlFor="email">Email</label>
              <input className="input" type="email" name="email" placeholder="Email" id="email" />

              <label className="label" htmlFor="password">password</label>
              <input className="input" type="password" name="password" placeholder="Password" id="password" />

              <button>Crear</button>
          </div>
      </form>
    </>
  )
}
