import * as NextLink from "next/link";

function Link({ children, href, className }) {
    return (
        <NextLink href={href}>
            <a className={className}>{children}</a>
        </NextLink>
    );
}
export default Link;
