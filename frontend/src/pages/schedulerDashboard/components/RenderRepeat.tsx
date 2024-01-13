import Select from "../../../components/select/Select";
import { REPEAT_MONTHLY, REPEAT_WEEKLY } from "../utils/selectOptions";
import DayPicker from "../../../components/dayPicker/DayPicker";

interface RenderRepeatProps {
    frequency: string,
    onChangeHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    value?: string | null,
    name?: string
}

function RenderRepeat({ frequency, ...props }: RenderRepeatProps) {
    if (frequency === 'weekly') {
        return (
            <div className="grid grid-cols-3 text-sm">
                <p>Repeat</p>
                <div className="col-span-2">
                    <div className="flex gap-2">
                        {
                            REPEAT_WEEKLY.map((item, index) => {
                                return (
                                    // @ts-ignore
                                    <DayPicker key={index} name={"repeat"} label={item.label} {...props} value={item.value} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else if (frequency === 'monthly') {
        return (
            <div className="grid grid-cols-3 text-sm">
                <p>Repeat</p>
                <div className="col-span-2">
                    {/* @ts-ignore */}
                    <Select placeholder="Repeat" options={REPEAT_MONTHLY} classes="select-sm" {...props} />
                </div>
            </div>
        )
    }
    return null;
};

export default RenderRepeat;