import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        setResponseMessage("Error: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}><span className="purple">CONTACT US</span></h2>
          <p style={styles.subheading}>
            To learn more about being featured, get in touch - we'd love to hear
            from you!
          </p>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.button}>
              Send
            </button>
          </form>
          {responseMessage && (
            <p style={styles.responseMessage}>{responseMessage}</p>
          )}
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.infoSection}>
            <h3>Email Me</h3>
          </div>
          <div style={styles.infoSection}>
            <h3>Let's Connect</h3>
            <div style={styles.socialIcons}>
              <span style={styles.icon}>🌐</span>
              <span>     </span>
              <span style={styles.icon}>📷</span>
            </div>
          </div>
          <div style={styles.nutshell}>
            <p style={styles.slogan}>If you keep your eyes and ears open,life will show you everything you need to know!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adding a slight overlay for text readability
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "800px",
    width: "100%",
    color: "#fff",
    backgroundImage: "url('/path/to/background-image.jpg')", // Set your image URL here
    backgroundSize: "cover",
  },
  formContainer: {
    padding: "20px",
    flex: 1,
    backdropFilter: "blur(5px)", // Adds a blur effect behind text
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
  },
  heading: {
    marginBottom: "10px",
  },
  subheading: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#c770f0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  responseMessage: {
    marginTop: "20px",
    color: "#c770f0",
    fontWeight: "bold",
    infoContainer: {
      flex: 1,
      maxWidth: "400px",
      padding: "20px",
      backdropFilter: "blur(5px)", // Adds a blur effect behind text
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
      borderRadius: "10px",
    },
    infoSection: {
      marginBottom: "20px",
    },
    socialIcons: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: "10px",
      fontSize: "24px",
      },
    nutshell: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      borderRadius: "5px",
    },
  
  },

    slogan: {
      color: "#c770f0",
      fontWeight: "bold",
      marginTop: "20px",
    },
};

export default ContactUs;
