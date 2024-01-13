interface SelectProps {
    placeholder?: string,
    classes?: string,
    onChangeHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    options: Array<{value: string, label: string}>
}

function Select({placeholder, classes, onChangeHandler, options, ...props}: SelectProps) {
    classes = "select select-bordered w-full bg-[#ffffff] text-gray-dark border border-[#E4E4EE] rounded focus:outline-none" + " " + classes;
    return (
        <select className={classes} onChange={onChangeHandler} {...props}>
            {
                options.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))
            }
        </select>
    );
};

export default Select;