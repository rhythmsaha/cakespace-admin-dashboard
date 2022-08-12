import Spinner from "./ui/Spinner";

function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Spinner className="animate-spin h-10 text-emerald-500" />
        </div>
    );
}
export default LoadingScreen;
