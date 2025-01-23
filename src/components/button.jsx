import clsx from "clsx";

export const Button = ({
  icon,
  children,
  href,
  onClick,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4  rounded-2xl inner-before group-hover:before:opacity-20 overflow-hidden">
        {icon && (
          <img
            src={icon}
            alt="cta"
            className="size-10 mr-4 object-contain z-10"
          />
        )}
        <span className="relative z-2 base-bold text-p1 uppercase mr-2">
          {children}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative, p-0.5 rounded-2xl shadow-500 group"
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "relative, p-0.5 rounded-2xl shadow-500 group border border-p5 bg-s3"
      )}
    >
      <Inner />
    </button>
  );
};
