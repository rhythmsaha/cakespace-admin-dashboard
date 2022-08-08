/* eslint-disable @next/next/no-img-element */
function User() {
    return (
        <section className="mx-auto flex bg-gray-100 py-5 px-5 gap-4 items-center rounded-xl">
            <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />

            <div>
                <h3 className="font-bold text-sm text-gray-600">Minimal UI</h3>
                <p className="text-sm font-medium text-gray-500">admin</p>
            </div>
        </section>
    );
}
export default User;
