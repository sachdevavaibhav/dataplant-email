interface ITextArea {
    placeholder: string,
    classes?: string,
    onChangeHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void

}

function TextArea({placeholder, classes, onChangeHandler, ...props}: ITextArea) {
    classes = "textarea textarea-bordered textarea-sm w-full bg-[#ffffff] placeholder:text-[#999999] text-gray-dark border border-[#E4E4EE] rounded focus:outline-none" + " " + classes;
    return (
        <textarea className={classes} placeholder={placeholder} {...props} onChange={onChangeHandler} />
    )
}

export default TextArea;