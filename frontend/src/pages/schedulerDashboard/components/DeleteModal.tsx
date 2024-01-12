import Button from "../../../components/button/Button";
import { deleteSchedule } from "../../../utils/apiMethods";

interface DeleteModalProps {
    id: string,
    title: string,
    setSchedules: React.Dispatch<React.SetStateAction<null>>,
    schedules: {
        title: string,
        desc: string,
        subject: string,
        schedule: string,
        id: string,
    }[] | null
}

function DeleteModal({id, title, setSchedules, schedules}: DeleteModalProps) {

    const handleDelete = async (id:string) => {
        const res = await deleteSchedule(id);
        if (res.statusCode === 200) {
            const data = schedules?.filter((item) => item.id !== id);
            console.log(data);
            // @ts-ignore
            setSchedules(data);
        }
    };
    return (
        <dialog id={id} className="modal font-nunito text-gray-dark">
            <div className="modal-box">
                    <h3 className="font-medium text-lg mb-3">Delete {title} schedule</h3>
                    <p className="text-sm font-normal">Are you sure you want to delete {title} schedule?</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Button classes="btn-secondary text-gray-dark mr-3" onClick={() => handleDelete(id)}>Yes</Button>
                        <Button classes="btn-primary text-white">Cancel</Button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};


export default DeleteModal;