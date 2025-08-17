import Navigation from "../navigation/Navigation"

const BottomNavigation = () => {
    return (
        <div className="flex md:hidden w-full flex-grow-0 md:flex-grow-1 fixed bottom-0 z-90 py-3 bg-[var(--background)] border-t border-t-[var(--border)]">
            <Navigation />
        </div>
    )
}

export default BottomNavigation
