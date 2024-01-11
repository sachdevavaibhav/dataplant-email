import Table from "./components/Table";
import DashboardWrapper from "./components/DashboardWrapper";
import { useFetchSchedules } from "./hooks/useFetchSchedules";

// const data = [
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id1'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id2'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id3'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id4'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id5'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id6'
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//         subject: 'Subject',
//         schedule: 'Schedule',
//         id: 'id7'
//     },

// ]

function SchedulerDashboard() {
    const [schedules] = useFetchSchedules();
    return (
        <>
            <div className="fixed bottom-0 h-[calc(100vh-50px)] w-20 bg-primary"></div>
            <div className="fixed right-0 top-[50px] h-10 w-[calc(100vw-5rem)] bg-[#3C1E5A1A] border border-[#D8D2DE]"></div>
            <DashboardWrapper>
                <div className="px-8">
                    <Table data={schedules} />
                </div>
            </DashboardWrapper>
        </>
    )
};

export default SchedulerDashboard;