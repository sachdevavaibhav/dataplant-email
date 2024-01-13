interface IDayPicker {
    name: string,
    label: string,
    value: string,
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

import './dayPickerStyles.css';

function DayPicker({name, label, value, onChangeHandler, ...props}: IDayPicker) {
    return (
        <div className='custom-radio flex items-center relative'>
            <input type="radio" name={name} value={value} className="radio" onChange={onChangeHandler} {...props} />
            <label className="label absolute ps-[0.3rem] -z-20">{label}</label>
        </div>
    );
}

export default DayPicker;