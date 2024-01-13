import Select from "../../../components/select/Select";
import { REPEAT_MONTHLY, REPEAT_WEEKLY } from "../utils/selectOptions";

function RenderRepeat({ frequency, ...props }: { frequency: string }) {
    if (frequency === 'weekly') {
        return (
            <div className="grid grid-cols-3 text-sm">
                <p>Repeat</p>
                <div className="col-span-2">
                    <Select placeholder="Repeat" options={REPEAT_WEEKLY} classes="select-sm" {...props} />
                </div>
            </div>
        )
    } else if (frequency === 'monthly') {
        return (
            <div className="grid grid-cols-3 text-sm">
                <p>Repeat</p>
                <div className="col-span-2">
                    <Select placeholder="Repeat" options={REPEAT_MONTHLY} classes="select-sm" {...props} />
                </div>
            </div>
        )
    }
    return null;
};

export default RenderRepeat;