import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';

interface ITable {
    data: {
        title: string,
        desc: string,
        subject: string,
        schedule: string,
        id: string
    }[]
}

function Table({data: data=[]}: ITable) {
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
                                    <div role="button">
                                        <img src={editIcon} alt="edit" />
                                    </div>
                                    <div role="button">
                                        <img src={deleteIcon} alt="delete" />
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