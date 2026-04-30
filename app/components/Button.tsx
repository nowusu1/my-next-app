import Link from "next/link";

type ButtonProps = {
  text: string;
  color: string;
  href?: string; // optional link
};

function Button({ text, color, href }: ButtonProps) {
  const style = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    display: "inline-block",
  };

  // If href exists → make it a link
  if (href) {
    return (
      <Link href={href} style={style}>
        {text}
      </Link>
    );
  }

  // Otherwise → normal button
  return <button style={style}>{text}</button>;
}

export default Button;