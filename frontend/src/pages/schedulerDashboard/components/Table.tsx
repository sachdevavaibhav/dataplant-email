import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import DeleteModal from './DeleteModal';
import FormModal from './FormModal';

interface ITable {
    data: {
        title: string,
        desc: string,
        subject: string,
        schedule: string,
        id: string,
    }[] | null,
    setSchedules: React.Dispatch<React.SetStateAction<null>>,
    schedules: {
        title: string,
        desc: string,
        subject: string,
        schedule: string,
        id: string,
    }[] | null
}

function Table({data: data=[], setSchedules, schedules}: ITable) {
    return (
        <div className="overflow-x-auto">
            <table className="table font-nunito">
                {/* head */}
                <thead>
                    <tr className="bg-secondary border border-[#EEEEEE] text-gray-dark font-semibold text-sm">
                        <th>Title</th>
                        <th>Description</th>
                        <th>Subject</th>
                        <th>Schedule</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => {
                    return (
                        <tr key={item.id} className='bg-white font-normal text-sm text-gray-dark border-x border-b border-secondary'>
                            <td>{item.title}</td>
                            <td className="max-w-sm">
                                <div className="line-clamp-2">
                                    {item.desc}
                                </div>
                            </td>
                            <td>{item.subject}</td>
                            <td>{item.schedule}</td>
                            <td>
                                <div className="flex items-center gap-4">
                                    <FormModal type='Edit' title={item.title} desc={item.desc} subject={item.subject} id={item.id}>
                                        <button>
                                            <img src={editIcon} alt="edit" />
                                        </button>
                                    </FormModal>
                                    <div role="button" onClick={() => (document?.getElementById(item.id) as HTMLDialogElement)?.showModal()}>
                                        <img src={deleteIcon} alt="delete" />
                                        <DeleteModal id={item.id} title={item.title} setSchedules={setSchedules} schedules={schedules} />
                                    </div>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;