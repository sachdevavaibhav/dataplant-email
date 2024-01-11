function DashboardWrapper({ children }: { children: React.ReactNode}) {
    return (
        <div className="ml-20 mt-[90px] font-nunito">
            {children}
        </div>
    )
};

export default DashboardWrapper;