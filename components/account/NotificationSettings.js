import Button from "../ui/Button";
import Card from "../ui/Card";
import CheckBoxInput from "../ui/CheckBoxInput";
import CardHeading from "./CardHeading";

function NotificationSettings() {
    return (
        <Card>
            <CardHeading
                heading="Notifications Settins"
                desc="Decide which communications you'd like to receive and how."
            />

            <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start px-4">
                <section className="space-y-4">
                    <Heading text="By Email" />
                    <CheckBoxInput label="Orders" description="Get notified when someones place an order." />
                    <CheckBoxInput label="Reviews" description="Get notified when someones post a product review." />
                    <CheckBoxInput label="Low on Stock" description="Get notified when items are low on stock." />
                </section>

                <section className="space-y-4">
                    <Heading text="In App Notification" />
                    <CheckBoxInput label="Orders" description="Get email when someones place an order." />
                    <CheckBoxInput label="Reviews" description="Get email when someones post a product review." />
                    <CheckBoxInput label="Low on Stock" description="Get email when items are low on stock." />
                </section>

                <Button variant="primary" size="lg" width="10rem">
                    Save
                </Button>
            </div>
        </Card>
    );
}
export default NotificationSettings;

function Heading({ text }) {
    return <h2 className="mb-5 lg:text-lg font-semibold text-gray-700">{text}</h2>;
}
