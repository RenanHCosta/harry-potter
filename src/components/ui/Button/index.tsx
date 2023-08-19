import './Button.style.scss';

type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariants;
}

function Button({ label, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`button button--${variant}`}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
