type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariants;
}

function Button({ label, variant, ...rest }: ButtonProps) {
  return (
    <button
      aria-label={label}
      className={`button button--${variant}`}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
