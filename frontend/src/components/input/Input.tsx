interface IInput {
    placeholder: string,
    classes?: string,
    icon?: string | undefined,
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({placeholder, classes, onChangeHandler, icon  ,...props}: IInput) {
    classes = "input w-full bg-[#ffffff] placeholder:text-[#999999] text-gray-dark border border-[#E4E4EE] rounded focus:outline-none" + " " + classes;
    return (
        <div className="flex font-nunito relative">
            {
                icon &&
                <div className="absolute right-5 top-1/3 w-5">
                    <img src={icon} aria-hidden={true} className='w-full' />
                </div>
            }
            <input type="text" placeholder={placeholder} className={classes} onChange={onChangeHandler} {...props} />
        </div>
    )
}

export default Input;