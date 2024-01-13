import { useState } from "react";
import Input from "../../../components/input/Input";
import TextArea from "../../../components/textArea/TextArea";
import Select from "../../../components/select/Select";
import Button from "../../../components/button/Button";
import { FREQUENCY} from "../utils/selectOptions";
import RenderRepeat from "./RenderRepeat";
import { createSchedule, updateSchedule } from "../../../utils/apiMethods";


function FormModal({ children, type, title, subject, desc, id }: { children: React.ReactNode, type: string, title?: string, subject?: string, desc?: string, id: string }) {

    const [formData, setFormData] = useState({
        title: title ||  '',
        desc: desc || '',
        subject: subject ||'',
        frequency: 'daily',
        repeat: null,
        time: '10:00'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        // frequency === daily set repeat to null
        if (e.target.name === 'frequency' && e.target.value === 'daily') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
                repeat: null
            });
            return;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCancel = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault();
        setFormData({
            title: '',
            desc: '',
            subject: '',
            frequency: 'daily',
            repeat: null,
            time: '10:00'
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validate form - check if all fields are filled
        if (formData.title === '' || formData.desc === '' || formData.subject === '' || formData.frequency === '' || formData.time === '') {
            console.log('fill all fields');
            return;
        }
        //validate form - check if repeat is filled
        if (formData.frequency !== 'daily' && formData.repeat === '') {
            console.log('fill repeat');
            return;
        }

        //add schedule to DB
        console.log(formData);
        // change time to date object and convert ist to utc
        const [hours, minutes] = formData.time.split(':').map(Number);
        const tempDate = new Date();
        //set utc date
        const timeAsUTC = tempDate.setUTCHours(hours-5, minutes-30, 0, 0);
        const timeAsDateUTC = new Date(timeAsUTC);

        const schedule = {
            title: formData.title,
            desc: formData.desc,
            subject: formData.subject,
            frequency: formData.frequency,
            repeat: formData.repeat,
            time: timeAsDateUTC.toISOString()
        };
        let res;
        if (type === 'Edit') {
            res = await updateSchedule(id, schedule);
        }
        else {
            res = await createSchedule(schedule);
        };
        if (res.statusCode === 200) {
            window.location.reload();
        }
        console.log(res);
    };



    return(
        <div className="dropdown dropdown-bottom dropdown-end">
            {children}
            <div className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-96 font-nunito text-gray-dark">
                <h2 className=" text-base font-semibold mb-3">{type} Schedule</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 text-sm">
                        <p>Title</p>
                        <div className=" col-span-2">
                            <Input placeholder="Title" classes="input-sm" name="title" onChangeHandler={handleChange} value={formData?.title} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-sm">
                        <p>Description</p>
                        <div className=" col-span-2">
                            <TextArea placeholder="Description" classes="" name="desc" onChangeHandler={handleChange} value={formData?.desc} />
                            {/* <Input placeholder="Description" classes="input-sm textarea" name="desc" onChangeHandler={handleChange} value={formData?.desc} /> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-sm">
                        <p>Subject</p>
                        <div className=" col-span-2">
                            <Input placeholder="Subject" classes="input-sm" name="subject" onChangeHandler={handleChange} value={formData?.subject} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-sm">
                        <p>Frequency</p>
                        <div className=" col-span-2">
                            <Select placeholder="Frequency" options={FREQUENCY} classes="select-sm" name="frequency" onChangeHandler={handleChange} value={formData?.frequency} />
                        </div>
                    </div>
                    <RenderRepeat frequency={formData?.frequency} name="repeat" onChangeHandler={handleChange} value={formData?.repeat} />
                    <div className="grid grid-cols-3 text-sm">
                        <p>Time</p>
                        <div className=" col-span-2">
                            <Input placeholder="Time" classes="input-sm" type="time" name="time" onChangeHandler={handleChange} value={formData?.time} />
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button classes="btn-secondary text-gray-dark px-6 py-2 btn-sm font-semibold" onClick={handleCancel}>Cancel</Button>
                        <Button classes="btn-primary text-white px-8 py-2 btn-sm font-semibold">{type}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default FormModal;