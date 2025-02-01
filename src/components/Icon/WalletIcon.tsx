export const WalletIcon = ({
  className,
//   color = "currentColor",
}: {
  className?: string;
//   color?: string;
}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.9556 5.6H4.06494C3.71963 5.6 3.43994 5.32031 3.43994 4.975C3.43994 4.62969 3.71963 4.35 4.06494 4.35H19.0649C19.4103 4.35 19.6899 4.07031 19.6899 3.725C19.6899 2.68945 18.8505 1.85 17.8149 1.85H3.43994C2.05908 1.85 0.939941 2.96914 0.939941 4.35V16.85C0.939941 18.2309 2.05908 19.35 3.43994 19.35H18.9556C20.0501 19.35 20.9399 18.509 20.9399 17.475V7.475C20.9399 6.44101 20.0501 5.6 18.9556 5.6ZM17.1899 13.725C16.4997 13.725 15.9399 13.1652 15.9399 12.475C15.9399 11.7848 16.4997 11.225 17.1899 11.225C17.8802 11.225 18.4399 11.7848 18.4399 12.475C18.4399 13.1652 17.8802 13.725 17.1899 13.725Z"
        fill="url(#paint0_linear_262_1669)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_262_1669"
          x1="10.9399"
          y1="1.85"
          x2="10.9399"
          y2="19.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD45F" />
          <stop offset="1" stop-color="#977310" />
        </linearGradient>
      </defs>
    </svg>
  );
};
