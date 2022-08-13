import Spinner from "./ui/Spinner";

function LoadingScreen() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Spinner className="h-10 animate-spin text-emerald-500" />
        </div>
    );
}
export default LoadingScreen;
