import clsx from "clsx";

export const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        {icon && (
          <img
            src={icon}
            alt="cta"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group, containerClassName"
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group, containerClassName"
      )}
    >
      <Inner />
    </button>
  );
};
