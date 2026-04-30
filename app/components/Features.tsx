import Card from "./Card";

export default function Features() {
  const features = [
    { title: "Fast Setup ⚡", description: "Get started in minutes" },
    { title: "Secure 🔒", description: "Your data is safe" },
    { title: "Scalable 📈", description: "Grows with your business" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Why Choose Us</h2>

      <div style={styles.container}>
        {features.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}


const styles = {
  section: {
    textAlign: "center" as const,
  },

  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
};