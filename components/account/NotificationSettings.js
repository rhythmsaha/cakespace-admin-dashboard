import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Button from "../ui/Button";
import Card from "../ui/Card";
import CheckBoxInput from "../ui/CheckBoxInput";
import CardHeading from "./CardHeading";
import axios from "../../utils/axios";

function NotificationSettings() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        user: { notificationSettings, emailSettings },
        update,
    } = useAuth();

    const { register, handleSubmit } = useForm();

    const submitHandler = async ({ appOrders, appReviews, appStock, emailOrders, emailReviews, emailStock }) => {
        if (isLoading) return; // does nothing if isloading is true
        toast.dismiss(); // dismiss any other toasts
        setIsLoading(true); // set the loading state to true

        const body = { appOrders, appReviews, appStock, emailOrders, emailReviews, emailStock };

        try {
            const response = await axios.post("/auth/seller/update_notification_settings", body);
            const data = await response.data;
            update(data?.user);
            toast.success(data.message);
        } catch (error) {
            if (error?.fields) {
                error.fields.forEach(({ field, message }) => {
                    setError(field, { type: field, message: message });
                });

                return;
            }
            console.log(error);
            // console.log(error);
            // toast.error(error.message);
        }

        setIsLoading(false);
    };

    return (
        <Card>
            <CardHeading
                heading="Notifications Settins"
                desc="Decide which communications you'd like to receive and how."
            />

            <form className="mt-8 grid lg:grid-cols-2 gap-8 items-start px-4" onSubmit={handleSubmit(submitHandler)}>
                <section className="space-y-4">
                    <Heading text="In App Notification" />

                    <CheckBoxInput
                        label="Orders"
                        description="Get email when someones place an order."
                        register={register}
                        name={"appOrders"}
                        defaultChecked={notificationSettings?.orders}
                    />

                    <CheckBoxInput
                        label="Reviews"
                        description="Get email when someones post a product review."
                        register={register}
                        name={"appReviews"}
                        defaultChecked={notificationSettings?.review}
                    />

                    <CheckBoxInput
                        label="Low on Stock"
                        description="Get email when items are low on stock."
                        register={register}
                        name={"appStock"}
                        defaultChecked={notificationSettings?.lowStock}
                    />
                </section>

                <section className="space-y-4">
                    <Heading text="By Email" />

                    <CheckBoxInput
                        label="Orders"
                        description="Get notified when someones place an order."
                        register={register}
                        name={"emailOrders"}
                        defaultChecked={emailSettings?.orders}
                    />

                    <CheckBoxInput
                        label="Reviews"
                        description="Get notified when someones post a product review."
                        register={register}
                        name={"emailReviews"}
                        defaultChecked={emailSettings?.review}
                    />

                    <CheckBoxInput
                        label="Low on Stock"
                        description="Get notified when items are low on stock."
                        register={register}
                        name={"emailStock"}
                        defaultChecked={emailSettings?.lowStock}
                    />
                </section>

                <Button variant="primary" size="lg" width="10rem" type="submit" disabled={isLoading}>
                    Save
                </Button>
            </form>
        </Card>
    );
}
export default NotificationSettings;

function Heading({ text }) {
    return <h2 className="mb-5 lg:text-lg font-semibold text-gray-700">{text}</h2>;
}
