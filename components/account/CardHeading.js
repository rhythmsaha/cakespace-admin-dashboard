function CardHeading({ heading, desc }) {
    return (
        <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">{heading}</h3>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
    );
}
export default CardHeading;
