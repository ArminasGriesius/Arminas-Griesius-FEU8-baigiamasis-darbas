export default function RegisterPage() {
  return (
    <div className="container">
      <h2>Register Here</h2>
      <p>Welcome to Register Page</p>
      <fieldset>
        <legend>Register</legend>
        <input
          type="email"
          placeholder="Email here"
          onChange={() => {}}
          value=""
        />
        <input
          type="password"
          placeholder="Password here"
          onChange={() => {}}
          value=""
        />
      </fieldset>
    </div>
  );
}
