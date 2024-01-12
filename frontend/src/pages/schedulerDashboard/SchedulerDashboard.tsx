import Table from "./components/Table";
import DashboardWrapper from "./components/DashboardWrapper";
import Input from "../../components/input/Input";
import { useFetchSchedules } from "./hooks/useFetchSchedules";
import searchIcon from '../../assets/icons/search.svg';

function SchedulerDashboard() {
    const [schedules] = useFetchSchedules();
    return (
        <>
            <div className="fixed bottom-0 h-[calc(100vh-50px)] w-20 bg-primary"></div>
            <div className="fixed right-0 top-[50px] h-10 w-[calc(100vw-5rem)] bg-[#3C1E5A1A] border border-[#D8D2DE]"></div>
            <DashboardWrapper>
                <div className="px-8">
                    <div className="flex justify-between pt-5 mb-8">
                        <Input placeholder="Search" classes="w-96" icon={searchIcon} onChangeHandler={(e) => console.log(e.target.value)} />
                        <div>Add</div>
                    </div>
                    <Table data={schedules} />
                </div>
            </DashboardWrapper>
        </>
    )
};

export default SchedulerDashboard;