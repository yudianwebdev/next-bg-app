import Link from "next/link";

const A = ({
  href = "",
  className = "",
  children,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const newHref = process.env.APP_PREFIX + href;

  return (
    <>
      {href.includes("http") ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <Link {...rest} href={newHref} as={newHref}>
          <a href={newHref} className={className}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};

export default A;
