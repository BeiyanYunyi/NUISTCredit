import { JSX, ParentComponent, splitProps } from 'solid-js';
import style from './Button.module.css';

const Button: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (prop) => {
  const [children, others] = splitProps(prop, ['children']);
  return (
    <button classList={{ ...others.classList, [style.appButton]: true }} {...others}>
      {children.children}
    </button>
  );
};

export default Button;
