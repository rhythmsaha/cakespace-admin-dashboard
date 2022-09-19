export interface NotificationType {
    orders: boolean;
    review: boolean;
    lowStock: boolean;
}

export default interface UserTypes {
    fullName: string;
    email: string;
    avatar: string;
    role: "admin" | "guest";
    notificationSettings: NotificationType;
    emailSettings: NotificationType;
}
