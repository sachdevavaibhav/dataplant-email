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
            <table className="table font-inter">
                {/* head */}
                <thead>
                    <tr className="bg-secondary border border-[#EEEEEE] text-gray-dark font-semibold text-sm">
                        <th>Title</th>
                        <th>Description</th>
                        <th>Subject</th>
                        <th>Schedule</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => {
                    return (
                        <tr key={item.id} className='bg-white font-normal text-sm text-gray-dark border-x border-b border-secondary'>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.subject}</td>
                            <td>{item.schedule}</td>
                            <td>edit</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;