import { useLoginForm } from "../hooks/useLoginForm";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Myaccount() {

  const {
    email,
    password,
    showPassword,
    setEmail,
    setPassword,
    togglePassword,
    emailValid,
    passwordValid,
    formValid
  } = useLoginForm();

  return (

    <div style={styles.container}>

      <h2 style={styles.title}>Iniciar Sesión</h2>

      {/* EMAIL */}

      <label htmlFor="email" style={styles.label}>Correo electrónico</label>

      <div style={{
        ...styles.inputBox,
        border:
          email.length === 0
            ? "1px solid #333"
            : emailValid
            ? "1px solid #00e5ff"
            : "1px solid #ff4d4d"
      }}>

        <FaEnvelope style={{
          ...styles.icon,
          color: emailValid ? "#00e5ff" : "#ff4d4d"
        }} />

        <input
          type="email"
          placeholder="ejemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

      </div>

      <span style={{
        ...styles.message,
        color: emailValid ? "#00e5ff" : "#ff4d4d"
      }}>
        {email.length === 0
          ? "Ingrese un correo"
          : emailValid
          ? "Correo válido"
          : "Ingrese un correo válido"}
      </span>


      {/* PASSWORD */}

      <label htmlFor="password" style={styles.label}>Contraseña</label>

      <div style={{
        ...styles.inputBox,
        border:
          password.length === 0
            ? "1px solid #333"
            : passwordValid
            ? "1px solid #00e5ff"
            : "1px solid #ff4d4d"
      }}>

        <FaLock style={{
          ...styles.icon,
          color: passwordValid ? "#00e5ff" : "#ff4d4d"
        }} />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <span onClick={togglePassword} style={styles.eye}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>

      </div>

      <span style={{
        ...styles.message,
        color: passwordValid ? "#00e5ff" : "#ff4d4d"
      }}>
        {password.length === 0
          ? "Ingrese una contraseña"
          : passwordValid
          ? "Contraseña válida"
          : "Debe tener al menos 8 caracteres"}
      </span>


      {/* OLVIDASTE CONTRASEÑA */}

      <span style={styles.forgot}>
        ¿Olvidaste tu contraseña?
      </span>


      {/* BOTON */}

      <button
        disabled={!formValid}
        style={{
          ...styles.button,
          opacity: formValid ? 1 : 0.5,
          cursor: formValid ? "pointer" : "not-allowed"
        }}
      >
        Iniciar sesión
      </button>

    </div>
  );
}

const styles = {

  container: {
    maxWidth: "420px",
    margin: "80px auto",
    padding: "35px",
    background: "#141414",
    borderRadius: "12px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 0 25px rgba(0,0,0,0.6)"
  },

  title: {
    textAlign: "center"
  },

  label: {
    fontSize: "13px",
    color: "#bbb"
  },

  inputBox: {
    display: "flex",
    alignItems: "center",
    background: "#1c1c1c",
    padding: "12px",
    borderRadius: "6px",
    gap: "10px",
    transition: "0.3s"
  },

  icon: {
    fontSize: "16px"
  },

  input: {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "white",
  fontSize: "14px",
  WebkitBoxShadow: "0 0 0 1000px #1c1c1c inset",
  WebkitTextFillColor: "white"
  },

  eye: {
    cursor: "pointer",
    color: "#aaa"
  },

  message: {
    fontSize: "12px"
  },

  forgot: {
    fontSize: "12px",
    color: "#00e5ff",
    cursor: "pointer",
    alignSelf: "flex-end"
  },

  button: {
    marginTop: "15px",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "linear-gradient(90deg,#7b2cbf,#9c27b0)",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px"
  }

};