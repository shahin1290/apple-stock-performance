interface Props {
  handleClick?: () => void;
  styles?: string;
  title: string;
  selection: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props?.handleClick}
      className={`${
        props.styles
      } px-3 py-2 rounded-lg  font-medium focus:outline-none ${
        props.selection ? "bg-violet-300" : "bg-transparent"
      }`}
      title={props.title}
    >
      {props.title}
    </button>
  );
};

export default Button;
