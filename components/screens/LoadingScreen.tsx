import { Spinner } from "../ui";

function LoadingScreen() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Spinner className="h-10 animate-spin text-blue-500" />
        </div>
    );
}
export default LoadingScreen;
