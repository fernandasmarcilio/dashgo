import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  shouldMatchExactHref?: boolean;
  children: ReactElement;
}

export function ActiveLink({
  shouldMatchExactHref = false,
  children,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const pathIsExactHref = asPath === rest.href || asPath === rest.as;
  const pathStartWithHref = asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as));

  const isActive = (shouldMatchExactHref && pathIsExactHref) || (!shouldMatchExactHref && pathStartWithHref);

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
