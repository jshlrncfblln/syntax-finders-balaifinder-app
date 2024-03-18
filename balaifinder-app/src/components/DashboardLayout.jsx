import DashboardSidebar from '../components/DashboardSidebar'

export default function Layout({children}){
    return(
        <div className="flex">
            <div className="flex-1 bg-gray-100">{children}</div>
        </div>
    )
}