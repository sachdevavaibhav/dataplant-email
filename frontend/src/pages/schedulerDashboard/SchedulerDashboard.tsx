import { useState, useEffect } from "react";
import Table from "./components/Table";
import TableShimmer from "./components/TableShimmer";
import DashboardWrapper from "./components/DashboardWrapper";
import Input from "../../components/input/Input";
import { useFetchSchedules } from "./hooks/useFetchSchedules";
import { getSchedulesByTitle } from "../../utils/apiMethods";
import { getScheduleString } from "./utils/getScheduleString";
import searchIcon from '../../assets/icons/search.svg';
import addIcon from '../../assets/icons/add.svg';
import Button from "../../components/button/Button";
import FormModal from "./components/FormModal";

function SchedulerDashboard() {
    const [schedules, setSchedules] = useFetchSchedules();
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if (schedules !== null) setIsDataLoaded(true);
    }, [schedules]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDataLoaded(false);
        const res = await getSchedulesByTitle(e.target.value);
        const data = res.data.map((item: any) => {
            const schedule = getScheduleString(item.frequency, item.repeat, item.time);
            return {
                title: item.title,
                desc: item.desc,
                subject: item.subject,
                schedule: schedule,
                id: item._id
            }
        });
        setSchedules(data);
        setIsDataLoaded(true);
    };

    return (
        <>
            <div className="fixed bottom-0 h-[calc(100vh-50px)] w-20 bg-primary"></div>
            <div className="fixed -z-10 right-0 top-[50px] h-10 w-[calc(100vw-5rem)] bg-[#3C1E5A1A] border border-[#D8D2DE]"></div>
            <DashboardWrapper>
                <div className="px-8">
                    <div className="flex justify-between pt-5 mb-8">
                        <Input placeholder="Search" classes="w-96" icon={searchIcon} onChangeHandler={handleChange} />
                        <FormModal type="Add">
                            <Button classes="btn-primary font-semibold text-white border-[#E4E4EE] px-6 py-0"
                                onClick={() => console.log('clicked')}
                            >
                                <div className="flex items-center gap-2 w-full relative">
                                    <img width={22} height={22} src={addIcon} alt="add" />
                                    <span>Add</span>
                                </div>
                            </Button>
                        </FormModal>
                    </div>
                    {!isDataLoaded ? <TableShimmer />:
                        (schedules?.length || 0) <= 0 ? <div>No Schedule found</div> :
                        <Table data={schedules} schedules={schedules} setSchedules={setSchedules} />
                    }
                </div>
            </DashboardWrapper>
        </>
    )
};

export default SchedulerDashboard;