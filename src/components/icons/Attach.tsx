const Attach = (props:any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2q1.65 0 2.825 1.175T14 6v8h-1.5V6q0-1.05-.725-1.775T10 3.5q-1.05 0-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5q.725 0 1.363-.238T14 19.6v1.8q-.575.275-1.2.438T11.5 22m4.5-1v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-4.5-4.5V18q-1.05 0-1.775-.725T9 15.5V6h1.5v9.5q0 .425.288.713t.712.287m4-5.5V6H17v5z"
      ></path>
    </svg>
  );
};

export default Attach;
