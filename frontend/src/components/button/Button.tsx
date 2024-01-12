interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    classes?: string
}


function Button({ children, classes, ...props }: ButtonProps) {
    classes = "btn border radius" + " " + classes;
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
};

export default Button;